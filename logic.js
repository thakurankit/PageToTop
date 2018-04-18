chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'document.documentElement.scrollTop= 0 '
  });
});
