browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'tabsCreate') {
    browser.tabs.create({
      url: request.options.url,
      active: request.options.active,
      openerTabId: sender.tab.id,
    });
  }
});
