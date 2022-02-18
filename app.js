var links = document.getElementsByClassName('main-link');

var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

var mainLinks = [
  [document.getElementById('main-link-1'), 25, 35, 'red'],
  [document.getElementById('main-link-2'), 25, 65, 'green'],
  [document.getElementById('main-link-3'), 75, 35, 'blue'],
  [document.getElementById('main-link-4'), 75, 65, 'yellow'],
];

var colors = ['red','green','blue','yellow'];

for ( var i=0; i < mainLinks.length; i++ ) {

    var thisDiv = mainLinks[i][0];
    console.log(mainLinks[i][0]);

    randomTop = getRandomNumber(-5, 5);
    randomLeft = getRandomNumber(-5, 5);
    console.log(randomTop, randomLeft);

    randomColor = getRandomNumber(0,4);
    thisDiv.style.background = colors[Math.floor(randomColor)];

    endTop = randomTop + mainLinks[i][1];
    endLeft = randomLeft + mainLinks[i][2];
    console.log(endTop, endLeft);

    thisDiv.style.top = endTop +"vh";
    thisDiv.style.left = endLeft +"vw";
    console.log(thisDiv.style.top, thisDiv.style.left);
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
