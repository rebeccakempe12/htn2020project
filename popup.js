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
    chrome.alarms.clearAll(() => {
chrome.alarms.create('study', { when: Date.now() + 15000});
chrome.alarms.getAll((alarms) => {
for (const alarm of alarms) {
  console.log(alarm.name);
}
})
})

  });
  chrome.alarms.onAlarm.addListener((alarm) => {
    // console.log(alarm.study); // refresh

    if (alarm.name== "study"){
// console.log("study alarm");
      timerDone1();
    } else if (alarm.name == "break"){
// console.log("break alarm");
      timerDone2();
    }
    // playNoise();
  });
  // chrome.alarms.onAlarm.addListener((alarm) => {
  //   console.log(alarm.break); // refresh
  //   timerDone2();
  //   // playNoise();
  // });

  function timerDone1() {
    alert("Time's Up! Take a break and relax."),
    console.log("Study is done");
    chrome.alarms.clear("study",()=> {
      chrome.alarms.create('break', { when: Date.now() + 5000 });
      chrome.alarms.getAll((alarms) => {
      for (const alarm of alarms) {
        console.log(alarm.name);
      }
    })
    })
  }
  function timerDone2() {
    alert("Time's Up! Let's get back to work!"),
    console.log("Break is done");
//     chrome.alarms.clear('break', wasCleared => {
//   if (wasCleared) {
//     console.log("it worked!");
//   } else {
//     console.log("it did not work");
//   }
// })
    chrome.alarms.clear("break",()=> {
      chrome.alarms.create('study', { when: Date.now() + 15000});
      chrome.alarms.getAll((alarms) => {
      for (const alarm of alarms) {
        console.log(alarm.name);
      }
    })
    })
  }

  // function playNoise() {
  //   let src = "noise.mp3";
  //   let audio = new Audio(src);
  //   audio.play();
  // }
