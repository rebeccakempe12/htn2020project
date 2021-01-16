document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('clicked');
    checkPageButton.addEventListener('click', function() {

      chrome.tabs.getSelected(null, function(tab) {
        alert("Now the code will do a thing");
      });
    }, false);
  }, false);
