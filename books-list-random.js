var winWidth = window.innerWidth;

var booksListItems = document.getElementsByClassName('books-list-item');

for ( var i=0; i < booksListItems.length; i++ ) {

    var thisDiv = booksListItems[i];
    console.log(booksListItems[i]);

    randomLeft = getRandomNumber(5, 10);
    console.log(randomLeft);
    endLeft = randomLeft;
    console.log(endLeft);

    thisDiv.style.marginLeft = endLeft +"vw";
    console.log(thisDiv.style.marginLeft);
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
