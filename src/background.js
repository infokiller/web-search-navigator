// eslint-disable-next-line no-undef
browser.runtime.onMessage.addListener((request, sender, _) => {
  if (request.type === 'tabsCreate') {
    // eslint-disable-next-line no-undef
    browser.tabs.create({
      url: request.options.url,
      active: request.options.active,
      openerTabId: sender.tab.id,
    });
  }
});
