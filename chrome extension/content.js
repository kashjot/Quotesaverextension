// content.js

// Listen for the message from the background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'getSelectedText') {
      // Get the selected text
      let selectedText = window.getSelection().toString().trim();
  
      // Send the selected text to the background script
      sendResponse({ selectedText: selectedText });
    }
  });
  