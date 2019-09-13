/* https://github.com/fregante/webext-dynamic-content-scripts @ v6.0.3 */

(function() {
  'use strict';

  function urlGlobToRegex(matchPattern) {
    return (
      '^' +
      matchPattern
          .replace(/[.]/g, '\\.')
          .replace(/[?]/, '.')
          .replace(/^[*]:/, 'https?')
          .replace(/^(https[?]?:[/][/])[*]/, '$1[^/:]+')
          .replace(/[/][*]/, '/?.+')
          .replace(/[*]/g, '.+')
          .replace(/[/]/g, '\\/')
    );
  }
  async function p(fn, ...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (result) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(result);
        }
      });
    });
  }
  async function isOriginPermitted(url) {
    return p(chrome.permissions.contains, {
      origins: [new URL(url).origin + '/*'],
    });
  }
  async function wasPreviouslyLoaded(tabId, loadCheck) {
    const result = await p(chrome.tabs.executeScript, tabId, {
      code: loadCheck,
      runAt: 'document_start',
    });
    return result && result[0];
  }
  if (!chrome.contentScripts) {
    chrome.contentScripts = {
      async register(contentScriptOptions, callback) {
        const {
          js = [],
          css = [],
          allFrames,
          matchAboutBlank,
          matches,
          runAt,
        } = contentScriptOptions;
        const loadCheck = `document[${JSON.stringify(
            JSON.stringify({js, css})
        )}]`;
        const matchesRegex = new RegExp(
            matches.map(urlGlobToRegex).join('$') + '$'
        );
        const listener = async (tabId, {status}) => {
          if (status !== 'loading') {
            return;
          }
          const {url} = await p(chrome.tabs.get, tabId);
          if (
            !url ||
            !matchesRegex.test(url) ||
            !(await isOriginPermitted(url)) ||
            (await wasPreviouslyLoaded(tabId, loadCheck))
          ) {
            return;
          }
          for (const file of css) {
            chrome.tabs.insertCSS(tabId, {
              ...file,
              matchAboutBlank,
              allFrames,
              runAt: runAt || 'document_start',
            });
          }
          for (const file of js) {
            chrome.tabs.executeScript(tabId, {
              ...file,
              matchAboutBlank,
              allFrames,
              runAt,
            });
          }
          chrome.tabs.executeScript(tabId, {
            code: `${loadCheck} = true`,
            runAt: 'document_start',
            allFrames,
          });
        };
        chrome.tabs.onUpdated.addListener(listener);
        const registeredContentScript = {
          async unregister() {
            return p(
                chrome.tabs.onUpdated.removeListener.bind(chrome.tabs.onUpdated),
                listener
            );
          },
        };
        if (typeof callback === 'function') {
          callback(registeredContentScript);
        }
        return Promise.resolve(registeredContentScript);
      },
    };
  }

  const events = [['request', 'onAdded'], ['remove', 'onRemoved']];
  if (chrome.permissions && !chrome.permissions.onAdded) {
    for (const [action, event] of events) {
      const act = chrome.permissions[action];
      const listeners = new Set();
      chrome.permissions[event] = {
        addListener(callback) {
          listeners.add(callback);
        },
      };
      chrome.permissions[action] = (permissions, callback) => {
        const initial = browser.permissions.contains(permissions);
        const expected = action === 'request';
        act(permissions, async (successful) => {
          if (callback) {
            callback(successful);
          }
          if (!successful) {
            return;
          }
          if ((await initial) !== expected) {
            const fullPermissions = {
              origins: [],
              permissions: [],
              ...permissions,
            };
            chrome.permissions.getAll(() => {
              for (const listener of listeners) {
                setTimeout(listener, 0, fullPermissions);
              }
            });
          }
        });
      };
      browser.permissions[event] = chrome.permissions[event];
      browser.permissions[action] = async (permissions) =>
        new Promise((resolve, reject) => {
          chrome.permissions[action](permissions, (result) => {
            if (chrome.runtime.lastError) {
              reject(chrome.runtime.lastError);
            } else {
              resolve(result);
            }
          });
        });
    }
  }

  async function getManifestPermissions() {
    const manifest = chrome.runtime.getManifest();
    const manifestPermissions = {
      origins: [],
      permissions: [],
    };
    const list = new Set([
      ...(manifest.permissions || []),
      ...(manifest.content_scripts || []).flatMap(
          (config) => config.matches || []
      ),
    ]);
    for (const permission of list) {
      if (permission.includes('://')) {
        manifestPermissions.origins.push(permission);
      } else {
        manifestPermissions.permissions.push(permission);
      }
    }
    return manifestPermissions;
  }
  async function getAdditionalPermissions() {
    const manifestPermissions = await getManifestPermissions();
    return new Promise((resolve) => {
      chrome.permissions.getAll((currentPermissions) => {
        const additionalPermissions = {
          origins: [],
          permissions: [],
        };
        for (const origin of currentPermissions.origins || []) {
          if (!manifestPermissions.origins.includes(origin)) {
            additionalPermissions.origins.push(origin);
          }
        }
        for (const permission of currentPermissions.permissions || []) {
          if (!manifestPermissions.permissions.includes(permission)) {
            additionalPermissions.permissions.push(permission);
          }
        }
        resolve(additionalPermissions);
      });
    });
  }

  const registeredScripts = new Map();
  function convertPath(file) {
    const url = new URL(file, location.origin);
    return {file: url.pathname};
  }
  async function registerOnOrigins({origins: newOrigins}) {
    const manifest = chrome.runtime.getManifest().content_scripts;
    for (const origin of newOrigins || []) {
      for (const config of manifest) {
        const registeredScript = chrome.contentScripts.register({
          js: (config.js || []).map(convertPath),
          css: (config.css || []).map(convertPath),
          allFrames: config.all_frames,
          matches: [origin],
          runAt: config.run_at,
        });
        registeredScripts.set(origin, registeredScript);
      }
    }
  }
  (async () => {
    registerOnOrigins(await getAdditionalPermissions());
  })();
  chrome.permissions.onAdded.addListener((permissions) => {
    if (permissions.origins && permissions.origins.length > 0) {
      registerOnOrigins(permissions);
    }
  });
  chrome.permissions.onRemoved.addListener(async ({origins}) => {
    if (!origins || origins.length === 0) {
      return;
    }
    for (const [origin, script] of registeredScripts) {
      if (origins.includes(origin)) {
        (await script).unregister();
      }
    }
  });
})();
