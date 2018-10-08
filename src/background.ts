import * as util from './util';

const browser = util.getBrowser();

browser.runtime.onMessage.addListener((request, {}, {}) => {
  if (request.type === 'tabsCreate') {
    browser.tabs.create({
      url: request.options.url,
      active: request.options.active
    });
  }
});
