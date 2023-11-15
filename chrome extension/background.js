chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      id: "saveQuote",
      title: "Save as quote",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "saveQuote") {
      chrome.storage.sync.get({quotes: []}, function(data) {
        var quotes = data.quotes;
        quotes.push(info.selectionText);
        chrome.storage.sync.set({quotes: quotes});
      });
    }
  });
  