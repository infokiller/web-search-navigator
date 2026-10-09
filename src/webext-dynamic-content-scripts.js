/* https://github.com/fregante/webext-dynamic-content-scripts @ v8.1.1 */

(function () {
	'use strict';

	function NestedProxy$1(target) {
		return new Proxy(target, {
			get(target, prop) {
				if (typeof target[prop] !== 'function') {
					return new NestedProxy$1(target[prop]);
				}
				return (...arguments_) =>
					new Promise((resolve, reject) => {
						target[prop](...arguments_, result => {
							if (chrome.runtime.lastError) {
								reject(new Error(chrome.runtime.lastError.message));
							} else {
								resolve(result);
							}
						});
					});
			}
		});
	}
	const chromeP$1 = globalThis.chrome && new NestedProxy$1(globalThis.chrome);

	const gotScripting = typeof chrome === 'object' && 'scripting' in chrome;
	function castTarget(target) {
	    return typeof target === 'object' ? target : {
	        tabId: target,
	        frameId: 0,
	    };
	}
	function castArray(possibleArray) {
	    if (Array.isArray(possibleArray)) {
	        return possibleArray;
	    }
	    return [possibleArray];
	}
	async function executeFunction(target, function_, ...args) {
	    const { frameId, tabId } = castTarget(target);
	    if (gotScripting) {
	        const [injection] = await chrome.scripting.executeScript({
	            target: {
	                tabId,
	                frameIds: [frameId],
	            },
	            func: function_,
	            args,
	        });
	        return injection === null || injection === void 0 ? void 0 : injection.result;
	    }
	    const [result] = await chromeP$1.tabs.executeScript(tabId, {
	        code: `(${function_.toString()})(...${JSON.stringify(args)})`,
	        frameId,
	    });
	    return result;
	}
	function arrayOrUndefined(value) {
	    return typeof value === 'undefined' ? undefined : [value];
	}
	function insertCSS({ tabId, frameId, files, allFrames, matchAboutBlank, runAt, }) {
	    for (let content of files) {
	        if (typeof content === 'string') {
	            content = { file: content };
	        }
	        if (gotScripting) {
	            void chrome.scripting.insertCSS({
	                target: {
	                    tabId,
	                    frameIds: arrayOrUndefined(frameId),
	                    allFrames,
	                },
	                files: 'file' in content ? [content.file] : undefined,
	                css: 'code' in content ? content.code : undefined,
	            });
	        }
	        else {
	            void chromeP$1.tabs.insertCSS(tabId, {
	                ...content,
	                matchAboutBlank,
	                allFrames,
	                frameId,
	                runAt: runAt !== null && runAt !== void 0 ? runAt : 'document_start',
	            });
	        }
	    }
	}
	async function executeScript({ tabId, frameId, files, allFrames, matchAboutBlank, runAt, }) {
	    let lastInjection;
	    for (let content of files) {
	        if (typeof content === 'string') {
	            content = { file: content };
	        }
	        if (gotScripting) {
	            if ('code' in content) {
	                throw new Error('chrome.scripting does not support injecting strings of `code`');
	            }
	            void chrome.scripting.executeScript({
	                target: {
	                    tabId,
	                    frameIds: arrayOrUndefined(frameId),
	                    allFrames,
	                },
	                files: [content.file],
	            });
	        }
	        else {
	            if ('code' in content) {
	                await lastInjection;
	            }
	            lastInjection = chromeP$1.tabs.executeScript(tabId, {
	                ...content,
	                matchAboutBlank,
	                allFrames,
	                frameId,
	                runAt,
	            });
	        }
	    }
	}
	async function injectContentScript(target, scripts) {
	    var _a, _b, _c, _d, _e, _f;
	    const { frameId, tabId } = typeof target === 'object' ? target : {
	        tabId: target,
	        frameId: 0,
	    };
	    const injections = [];
	    for (const script of castArray(scripts)) {
	        insertCSS({
	            tabId,
	            frameId,
	            files: (_a = script.css) !== null && _a !== void 0 ? _a : [],
	            matchAboutBlank: (_b = script.matchAboutBlank) !== null && _b !== void 0 ? _b : script.match_about_blank,
	            runAt: (_c = script.runAt) !== null && _c !== void 0 ? _c : script.run_at,
	        });
	        void executeScript({
	            tabId,
	            frameId,
	            files: (_d = script.js) !== null && _d !== void 0 ? _d : [],
	            matchAboutBlank: (_e = script.matchAboutBlank) !== null && _e !== void 0 ? _e : script.match_about_blank,
	            runAt: (_f = script.runAt) !== null && _f !== void 0 ? _f : script.run_at,
	        });
	    }
	    await Promise.all(injections);
	}

	function NestedProxy(target) {
		return new Proxy(target, {
			get(target, prop) {
				if (typeof target[prop] !== 'function') {
					return new NestedProxy(target[prop]);
				}
				return (...arguments_) =>
					new Promise((resolve, reject) => {
						target[prop](...arguments_, result => {
							if (chrome.runtime.lastError) {
								reject(new Error(chrome.runtime.lastError.message));
							} else {
								resolve(result);
							}
						});
					});
			}
		});
	}
	const chromeP = globalThis.chrome && new NestedProxy(globalThis.chrome);

	const patternValidationRegex = /^(https?|wss?|file|ftp|\*):\/\/(\*|\*\.[^*/]+|[^*/]+)\/.*$|^file:\/\/\/.*$|^resource:\/\/(\*|\*\.[^*/]+|[^*/]+)\/.*$|^about:/;
	const isFirefox = typeof navigator === 'object' && navigator.userAgent.includes('Firefox/');
	const allStarsRegex = isFirefox ? /^(https?|wss?):[/][/][^/]+([/].*)?$/ : /^https?:[/][/][^/]+([/].*)?$/;
	const allUrlsRegex = /^(https?|file|ftp):[/]+/;
	function getRawRegex(matchPattern) {
	    if (!patternValidationRegex.test(matchPattern)) {
	        throw new Error(matchPattern + ' is an invalid pattern, it must match ' + String(patternValidationRegex));
	    }
	    let [, protocol, host, pathname] = matchPattern.split(/(^[^:]+:[/][/])([^/]+)?/);
	    protocol = protocol
	        .replace('*', isFirefox ? '(https?|wss?)' : 'https?')
	        .replace(/[/]/g, '[/]');
	    host = (host !== null && host !== void 0 ? host : '')
	        .replace(/^[*][.]/, '([^/]+.)*')
	        .replace(/^[*]$/, '[^/]+')
	        .replace(/[.]/g, '[.]')
	        .replace(/[*]$/g, '[^.]+');
	    pathname = pathname
	        .replace(/[/]/g, '[/]')
	        .replace(/[.]/g, '[.]')
	        .replace(/[*]/g, '.*');
	    return '^' + protocol + host + '(' + pathname + ')?$';
	}
	function patternToRegex(...matchPatterns) {
	    if (matchPatterns.length === 0) {
	        return /$./;
	    }
	    if (matchPatterns.includes('<all_urls>')) {
	        return allUrlsRegex;
	    }
	    if (matchPatterns.includes('*://*/*')) {
	        return allStarsRegex;
	    }
	    return new RegExp(matchPatterns.map(x => getRawRegex(x)).join('|'));
	}

	const gotNavigation = typeof chrome === 'object' && 'webNavigation' in chrome;
	async function isOriginPermitted(url) {
	    return chromeP.permissions.contains({
	        origins: [new URL(url).origin + '/*'],
	    });
	}
	async function wasPreviouslyLoaded(target, assets) {
	    const loadCheck = (key) => {
	        const wasLoaded = document[key];
	        document[key] = true;
	        return wasLoaded;
	    };
	    return executeFunction(target, loadCheck, JSON.stringify(assets));
	}
	async function registerContentScript$1(contentScriptOptions, callback) {
	    const { js = [], css = [], matchAboutBlank, matches, excludeMatches, runAt, } = contentScriptOptions;
	    let { allFrames } = contentScriptOptions;
	    if (gotNavigation) {
	        allFrames = false;
	    }
	    else if (allFrames) {
	        console.warn('`allFrames: true` requires the `webNavigation` permission to work correctly: https://github.com/fregante/content-scripts-register-polyfill#permissions');
	    }
	    const matchesRegex = patternToRegex(...matches);
	    const excludeMatchesRegex = patternToRegex(...excludeMatches !== null && excludeMatches !== void 0 ? excludeMatches : []);
	    const inject = async (url, tabId, frameId = 0) => {
	        if (!matchesRegex.test(url)
	            || excludeMatchesRegex.test(url)
	            || !await isOriginPermitted(url)
	            || await wasPreviouslyLoaded({ tabId, frameId }, { js, css })
	        ) {
	            return;
	        }
	        insertCSS({
	            tabId,
	            frameId,
	            files: css,
	            matchAboutBlank,
	            runAt,
	        });
	        await executeScript({
	            tabId,
	            frameId,
	            files: js,
	            matchAboutBlank,
	            runAt,
	        });
	    };
	    const tabListener = async (tabId, { status }, { url }) => {
	        if (status && url) {
	            void inject(url, tabId);
	        }
	    };
	    const navListener = async ({ tabId, frameId, url, }) => {
	        void inject(url, tabId, frameId);
	    };
	    if (gotNavigation) {
	        chrome.webNavigation.onCommitted.addListener(navListener);
	    }
	    else {
	        chrome.tabs.onUpdated.addListener(tabListener);
	    }
	    const registeredContentScript = {
	        async unregister() {
	            if (gotNavigation) {
	                chrome.webNavigation.onCommitted.removeListener(navListener);
	            }
	            else {
	                chrome.tabs.onUpdated.removeListener(tabListener);
	            }
	        },
	    };
	    if (typeof callback === 'function') {
	        callback(registeredContentScript);
	    }
	    return registeredContentScript;
	}

	function getManifestPermissionsSync() {
	    return _getManifestPermissionsSync(chrome.runtime.getManifest());
	}
	function _getManifestPermissionsSync(manifest) {
	    var _a, _b, _c;
	    const manifestPermissions = {
	        origins: [],
	        permissions: [],
	    };
	    const list = new Set([
	        ...((_a = manifest.permissions) !== null && _a !== void 0 ? _a : []),
	        ...((_b = manifest.content_scripts) !== null && _b !== void 0 ? _b : []).flatMap(config => { var _a; return (_a = config.matches) !== null && _a !== void 0 ? _a : []; }),
	    ]);
	    if (manifest.devtools_page
	        && !((_c = manifest.optional_permissions) === null || _c === void 0 ? void 0 : _c.includes('devtools'))) {
	        list.add('devtools');
	    }
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
	const hostRegex = /:[/][/][*.]*([^/]+)/;
	function parseDomain(origin) {
	    return origin.split(hostRegex)[1];
	}
	async function getAdditionalPermissions(options) {
	    return new Promise(resolve => {
	        chrome.permissions.getAll(currentPermissions => {
	            const manifestPermissions = getManifestPermissionsSync();
	            resolve(_getAdditionalPermissions(manifestPermissions, currentPermissions, options));
	        });
	    });
	}
	function _getAdditionalPermissions(manifestPermissions, currentPermissions, { strictOrigins = true } = {}) {
	    var _a, _b;
	    const additionalPermissions = {
	        origins: [],
	        permissions: [],
	    };
	    for (const origin of (_a = currentPermissions.origins) !== null && _a !== void 0 ? _a : []) {
	        if (manifestPermissions.origins.includes(origin)) {
	            continue;
	        }
	        if (!strictOrigins) {
	            const domain = parseDomain(origin);
	            const isDomainInManifest = manifestPermissions.origins
	                .some(manifestOrigin => parseDomain(manifestOrigin) === domain);
	            if (isDomainInManifest) {
	                continue;
	            }
	        }
	        additionalPermissions.origins.push(origin);
	    }
	    for (const permission of (_b = currentPermissions.permissions) !== null && _b !== void 0 ? _b : []) {
	        if (!manifestPermissions.permissions.includes(permission)) {
	            additionalPermissions.permissions.push(permission);
	        }
	    }
	    return additionalPermissions;
	}

	var _a, _b, _c;
	const registeredScripts = new Map();
	const registerContentScript = (_c = (_b = (_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.browser) === null || _a === void 0 ? void 0 : _a.contentScripts) === null || _b === void 0 ? void 0 : _b.register) !== null && _c !== void 0 ? _c : registerContentScript$1;
	function convertPath(file) {
	    const url = new URL(file, location.origin);
	    return { file: url.pathname };
	}
	function injectOnExistingTabs(origins, scripts) {
	    if (origins.length === 0) {
	        return;
	    }
	    chrome.tabs.query({
	        url: origins,
	    }, tabs => {
	        for (const tab of tabs) {
	            if (tab.id) {
	                void injectContentScript(tab.id, scripts);
	            }
	        }
	    });
	}
	async function registerOnOrigins({ origins: newOrigins, }) {
	    const manifest = chrome.runtime.getManifest().content_scripts;
	    if (!manifest) {
	        throw new Error('webext-dynamic-content-scripts tried to register scripts on th new host permissions, but no content scripts were found in the manifest.');
	    }
	    for (const origin of newOrigins || []) {
	        for (const config of manifest) {
	            const registeredScript = registerContentScript({
	                js: (config.js || []).map(file => convertPath(file)),
	                css: (config.css || []).map(file => convertPath(file)),
	                allFrames: config.all_frames,
	                matches: [origin],
	                excludeMatches: config.matches,
	                runAt: config.run_at,
	            });
	            registeredScripts.set(origin, registeredScript);
	        }
	    }
	    injectOnExistingTabs(newOrigins || [], manifest);
	}
	(async () => {
	    void registerOnOrigins(await getAdditionalPermissions({
	        strictOrigins: false,
	    }));
	})();
	chrome.permissions.onAdded.addListener(permissions => {
	    if (permissions.origins && permissions.origins.length > 0) {
	        void registerOnOrigins(permissions);
	    }
	});
	chrome.permissions.onRemoved.addListener(async ({ origins }) => {
	    if (!origins || origins.length === 0) {
	        return;
	    }
	    for (const [origin, script] of registeredScripts) {
	        if (origins.includes(origin)) {
	            void (await script).unregister();
	        }
	    }
	});

}());
