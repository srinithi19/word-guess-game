

var startEl = document.querySelector(".start");
var wordEl = document.querySelector("#text");
var timeLeft = document.querySelector("#timer");

const wordList = ["javascript" , "variable" , "array" , "element" , "boolean"];
var secondsLeft = 60;
var wins = 0;
var loss = 0;

function setTimer() {
    
    var time = setInterval(function() {
        timeLeft.textContent = secondsLeft;
        secondsLeft--;
        if (secondsLeft == 0) {
            endGame();
            clearInterval(time);
        }
        
    },1000)

}

function endGame() {
    console.log("end");
}
var words = [];
function startGame() {
    // event.preventDefault();
    // event.stopPropagation();
    setTimer();
    var word = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word);
    var i = 0;
    while (i < word.length) {
        //wordEl.textContent += "_ ";
        words.push("_");
        
        i++;
    }
    wordEl.textContent = words.join(" ");
    document.addEventListener("keydown",function(e){
        console.log(e);
        var letter = e.key.toLowerCase();
        var letterInWord = false;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      letterInWord = true;
    }
  }
  if (letterInWord) {
    for (var j = 0; j < word.length; j++) {
      if (word[j] === letter) {
        words[j] = letter;
      }
    }
    wordEl.textContent = words.join(" ");
        
            
    
}
    
    })

}



startEl.addEventListener("click",startGame());
