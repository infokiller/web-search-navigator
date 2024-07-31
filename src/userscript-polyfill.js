globalThis.IS_USERSCRIPT = true;

const USE_GM = true;
const PREFIX = 'userscript-polyfill';

globalThis._localStorage_browser_polyfill = {
  get: async (...args) => {
    console.log('[localStorage] Get: ', ...args);
    const out = {};
    for (const k of key) {
      out[k] = USE_GM ? GM_getValue(k) : localStorage[`${PREFIX}_${k}`];
    }
    return out;
  },
  set: async (...args) => {
    console.log('[localStorage] Set: ', ...args);
  },
  clear: async () => {
    console.log('[localStorage] Clear');
  },
};

globalThis._browser_userscript_polyfill = {
  runtime: {
    sendMessage: (msg) => {
      if (msg.type === 'tabsCreate') {
        window.open(msg.options.url, '_blank');
      }
    },
    id: '093889f3-43be-45e3-bc5a-e257e75b466d',
  },
  storage: {sync: globalThis._localStorage_browser_polyfill, local: globalThis._localStorage_browser_polyfill},
  permissions: {
    remove: () => {},
    add: () => {},
    request: () => {},
    getAll: () => ({}),
  },
};
console.log(globalThis.browser, _browser_userscript_polyfill);
Object.assign(globalThis, {browser: globalThis._browser_userscript_polyfill, chrome: globalThis._browser_userscript_polyfill});
