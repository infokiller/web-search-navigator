/* https://github.com/fregante/webext-dynamic-content-scripts @ v6.0.4 */

(function () {
	'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	const patternValidationRegex = /^(https?|wss?|file|ftp|\*):\/\/(\*|\*\.[^*/]+|[^*/]+)\/.*$|^file:\/\/\/.*$|^resource:\/\/(\*|\*\.[^*/]+|[^*/]+)\/.*$|^about:/;
	function getRawRegex(matchPattern) {
	    if (!patternValidationRegex.test(matchPattern)) {
	        throw new Error(matchPattern + ' is an invalid pattern, it must match ' + String(patternValidationRegex));
	    }
	    let [, protocol, host, pathname] = matchPattern.split(/(^[^:]+:[/][/])([^/]+)?/);
	    protocol = protocol
	        .replace('*', 'https?')
	        .replace(/[/]/g, '[/]');
	    host = (host !== null && host !== void 0 ? host : '')
	        .replace(/[.]/g, '[.]')
	        .replace(/^[*]/, '[^/]+')
	        .replace(/[*]$/g, '[^.]+');
	    pathname = pathname
	        .replace(/[/]/g, '[/]')
	        .replace(/[.]/g, '[.]')
	        .replace(/[*]/g, '.*');
	    return '^' + protocol + host + '(' + pathname + ')?$';
	}
	function patternToRegex(...matchPatterns) {
	    return new RegExp(matchPatterns.map(getRawRegex).join('|'));
	}

	var webextPatterns = /*#__PURE__*/Object.freeze({
		patternValidationRegex: patternValidationRegex,
		patternToRegex: patternToRegex
	});

	var contentScriptsRegisterPolyfill = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	async function p(fn, ...args) {
	    return new Promise((resolve, reject) => {
	        fn(...args, result => {
	            if (chrome.runtime.lastError) {
	                reject(chrome.runtime.lastError);
	            }
	            else {
	                resolve(result);
	            }
	        });
	    });
	}
	async function isOriginPermitted(url) {
	    return p(chrome.permissions.contains, {
	        origins: [new URL(url).origin + '/*']
	    });
	}
	async function wasPreviouslyLoaded(tabId, loadCheck) {
	    const result = await p(chrome.tabs.executeScript, tabId, {
	        code: loadCheck,
	        runAt: 'document_start'
	    });
	    return result === null || result === void 0 ? void 0 : result[0];
	}
	if (typeof chrome === 'object' && !chrome.contentScripts) {
	    chrome.contentScripts = {
	        async register(contentScriptOptions, callback) {
	            const { js = [], css = [], allFrames, matchAboutBlank, matches, runAt } = contentScriptOptions;
	            const loadCheck = `document[${JSON.stringify(JSON.stringify({ js, css }))}]`;
	            const matchesRegex = webextPatterns.patternToRegex(...matches);
	            const listener = async (tabId, { status }) => {
	                if (status !== 'loading') {
	                    return;
	                }
	                const { url } = await p(chrome.tabs.get, tabId);
	                if (!url ||
	                    !matchesRegex.test(url) ||
	                    !await isOriginPermitted(url) ||
	                    await wasPreviouslyLoaded(tabId, loadCheck)
	                ) {
	                    return;
	                }
	                for (const file of css) {
	                    chrome.tabs.insertCSS(tabId, {
	                        ...file,
	                        matchAboutBlank,
	                        allFrames,
	                        runAt: runAt !== null && runAt !== void 0 ? runAt : 'document_start'
	                    });
	                }
	                for (const file of js) {
	                    chrome.tabs.executeScript(tabId, {
	                        ...file,
	                        matchAboutBlank,
	                        allFrames,
	                        runAt
	                    });
	                }
	                chrome.tabs.executeScript(tabId, {
	                    code: `${loadCheck} = true`,
	                    runAt: 'document_start',
	                    allFrames
	                });
	            };
	            chrome.tabs.onUpdated.addListener(listener);
	            const registeredContentScript = {
	                async unregister() {
	                    return p(chrome.tabs.onUpdated.removeListener.bind(chrome.tabs.onUpdated), listener);
	                }
	            };
	            if (typeof callback === 'function') {
	                callback(registeredContentScript);
	            }
	            return Promise.resolve(registeredContentScript);
	        }
	    };
	}
	});
	unwrapExports(contentScriptsRegisterPolyfill);

	const events = [
	    ['request', 'onAdded'],
	    ['remove', 'onRemoved']
	];
	if (chrome.permissions && !chrome.permissions.onAdded) {
	    for (const [action, event] of events) {
	        const act = chrome.permissions[action];
	        const listeners = new Set();
	        chrome.permissions[event] = {
	            addListener(callback) {
	                listeners.add(callback);
	            }
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
	                if (await initial !== expected) {
	                    const fullPermissions = { origins: [], permissions: [], ...permissions };
	                    chrome.permissions.getAll(() => {
	                        for (const listener of listeners) {
	                            setTimeout(listener, 0, fullPermissions);
	                        }
	                    });
	                }
	            });
	        };
	        browser.permissions[event] = chrome.permissions[event];
	        browser.permissions[action] = async (permissions) => new Promise((resolve, reject) => {
	            chrome.permissions[action](permissions, result => {
	                if (chrome.runtime.lastError) {
	                    reject(chrome.runtime.lastError);
	                }
	                else {
	                    resolve(result);
	                }
	            });
	        });
	    }
	}

	function getManifestPermissionsSync() {
	    var _a, _b;
	    const manifest = chrome.runtime.getManifest();
	    const manifestPermissions = {
	        origins: [],
	        permissions: []
	    };
	    const list = new Set([
	        ...((_a = manifest.permissions) !== null && _a !== void 0 ? _a : []),
	        ...((_b = manifest.content_scripts) !== null && _b !== void 0 ? _b : []).flatMap(config => { var _a; return (_a = config.matches) !== null && _a !== void 0 ? _a : []; })
	    ]);
	    for (const permission of list) {
	        if (permission.includes('://')) {
	            manifestPermissions.origins.push(permission);
	        }
	        else {
	            manifestPermissions.permissions.push(permission);
	        }
	    }
	    return manifestPermissions;
	}
	async function getAdditionalPermissions() {
	    const manifestPermissions = getManifestPermissionsSync();
	    return new Promise(resolve => {
	        chrome.permissions.getAll(currentPermissions => {
	            var _a, _b;
	            const additionalPermissions = {
	                origins: [],
	                permissions: []
	            };
	            for (const origin of (_a = currentPermissions.origins) !== null && _a !== void 0 ? _a : []) {
	                if (!manifestPermissions.origins.includes(origin)) {
	                    additionalPermissions.origins.push(origin);
	                }
	            }
	            for (const permission of (_b = currentPermissions.permissions) !== null && _b !== void 0 ? _b : []) {
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
	    return { file: url.pathname };
	}
	async function registerOnOrigins({ origins: newOrigins }) {
	    const manifest = chrome.runtime.getManifest().content_scripts;
	    for (const origin of newOrigins || []) {
	        for (const config of manifest) {
	            const registeredScript = chrome.contentScripts.register({
	                js: (config.js || []).map(convertPath),
	                css: (config.css || []).map(convertPath),
	                allFrames: config.all_frames,
	                matches: [origin],
	                runAt: config.run_at
	            });
	            registeredScripts.set(origin, registeredScript);
	        }
	    }
	}
	(async () => {
	    registerOnOrigins(await getAdditionalPermissions());
	})();
	chrome.permissions.onAdded.addListener(permissions => {
	    if (permissions.origins && permissions.origins.length > 0) {
	        registerOnOrigins(permissions);
	    }
	});
	chrome.permissions.onRemoved.addListener(async ({ origins }) => {
	    if (!origins || origins.length === 0) {
	        return;
	    }
	    for (const [origin, script] of registeredScripts) {
	        if (origins.includes(origin)) {
	            (await script).unregister();
	        }
	    }
	});

}());
