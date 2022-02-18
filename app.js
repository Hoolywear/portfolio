var mainLinks = document.getElementsByClassName('main-link');

var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

for ( var i=0; i < mainLinks.length; i++ ) {

    var thisDiv = mainLinks[i];

    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);

    thisDiv.style.top = randomTop +"px";
    thisDiv.style.left = randomLeft +"px";

}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
