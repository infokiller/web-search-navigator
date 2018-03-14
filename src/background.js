chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'tabsCreate') {
    chrome.tabs.create({url: request.options.url, active: request.options.active}, () => {
    });
  }
});
