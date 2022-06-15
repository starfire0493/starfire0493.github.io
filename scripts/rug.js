var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/rug1.png') {
      myImage.setAttribute ('src','images/rug2.png');
    } else {
      myImage.setAttribute ('src','images/rug1.png');
    }
  
}
var counterVal = 0;

function incrementClick() {
    updateDisplay(++counterVal);
}



function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}
