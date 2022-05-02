let numarray = ["A", "2", "3", "4",
    "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let suitArr = ["&#9829;", "&#9830;", "&#9824;", "&#9827;"]


    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }


    /*function randomNumber() {
        let numbers = Math.floor(Math.random() * numarray.length);
        console.log(numarray[numbers]);
        console.log('array length: ' + numarray.length);
        return numarray[numbers];
    } */ 

let number = document.querySelector(".number");
let topSuit = document.querySelector(".top-suit");
let bottomSuit = document.querySelector(".bottom-suit");
number.innerHTML = numarray[getRndInteger(0, numarray.length - 1)];




function randomSuit() {
   let suit = suitArr[getRndInteger(0, suitArr.length - 1)];
    topSuit.innerHTML = suit;
    bottomSuit.innerHTML = suit;
    
    }


    window.onload = function () {
    
        randomSuit();

    }