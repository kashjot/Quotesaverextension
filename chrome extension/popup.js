document.addEventListener('DOMContentLoaded', function () {
  chrome.storage.sync.get({quotes: []}, function(data) {
    var quotesList = document.createElement('ol');
    for (var i = 0; i < data.quotes.length; i++) {
      var li = document.createElement('li');
      li.textContent = data.quotes[i];
      quotesList.appendChild(li);
    }
    document.body.appendChild(quotesList);
  });

  document.getElementById('clear').addEventListener('click', function() {
    chrome.storage.sync.set({quotes: []}, function() {
      var quotesList = document.querySelector('ol');
      while (quotesList.firstChild) {
        quotesList.removeChild(quotesList.firstChild);
      }
    });
  });
});
