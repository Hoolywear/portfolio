var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

var mainLinks = [
  [document.getElementById('main-link-1'), 25, 35],
  [document.getElementById('main-link-2'), 25, 65],
  [document.getElementById('main-link-3'), 75, 35],
  [document.getElementById('main-link-4'), 75, 65],
];

var colors = [['#E54B4B','white'],['#48483A','white'],['#247BA0','white'],['#FAC748','black']];
var colors2 = [['#003b01','white'],['white','#003b01']];

for ( var i=0; i < mainLinks.length; i++ ) {

    var thisDiv = mainLinks[i][0];
    console.log(mainLinks[i][0]);

    randomTop = getRandomNumber(-5, 5);
    randomLeft = getRandomNumber(-5, 5);
    console.log(randomTop, randomLeft);

    randomColor = getRandomNumber(0,2);
    //thisDiv.style.background = colors2[Math.floor(randomColor)][0];
    //thisDiv.style.color = colors2[Math.floor(randomColor)][1];

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
