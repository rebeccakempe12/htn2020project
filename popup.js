document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('clicked');
    checkPageButton.addEventListener('click', function() {

      chrome.tabs.getSelected(null, function(tab) {
        alert("Now the code will do a thing");
      });
    }, false);
  }, false);

  chrome.runtime.onInstalled.addListener(() => {
    console.log('onInstalled...');
    chrome.alarms.create('refresh', { periodInMinutes: 25 });
  });

  chrome.alarms.onAlarm.addListener((alarm) => {
    console.log(alarm.name); // refresh
    timerDone();
  });

  function timerDone() {
    alert("Time's Up!"),
    console.log("Time's Up!!");
  }
