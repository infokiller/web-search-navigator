importScripts('browser-polyfill.js');

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'tabsCreate') {
    browser.tabs
      .create({
        url: request.options.url,
        active: request.options.active,
        openerTabId: sender.tab.id,
      })
      .then((tab) => {
        if (!browser.tabs.group) {
          return;
        }
        return browser.tabs.group({
          tabIds: tab.id,
          groupId: sender.tab.groupId,
        });
      });
    return true;
  }
  return false;
});
