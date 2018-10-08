// let window.browser: Listener<integer>;

// Augments the Window interface from @types/chrome with a "browser" property
// which is the equivalent of chrome for firefox and edge.
declare global {
  interface Window {
    browser: Window['chrome'];
  }
}

export const getBrowser = (): Window['chrome'] => {
  if (typeof window.chrome !== 'undefined' && window.chrome.runtime) {
    return window.chrome;
  }
  return window.browser;
};
