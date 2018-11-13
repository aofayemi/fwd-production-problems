'use strict'
function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();

  document.getElementByID("doorbell")innerHTML = "<button id='newPlayButton'>Play doorbell</button>";

//};

//Return if no javascript
(function(){
  if(typeof document.querySelector === 'undefined'){
    return;
  }
});

document.addEventListener('DOMContent', function(){
console.log("DOM has loaded");
doorbell.addEventListener('click', function(){
  console.log('click');
  ringDoorbell();  });
  });

//part three
//event listenener
button.addEventListener("click", function() {
   ringDoorbell();
});
