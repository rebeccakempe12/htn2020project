chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#FFFCC8'}, function() {
      console.log("light yellow!!");
    });
  });