var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/rug1.png') {
      myImage.setAttribute ('src','images/rug2.png');
    } else {
      myImage.setAttribute ('src','images/rug1.png');
    }
}
