//Skapa kopplingar till HTMl Documentet

//Få kontakt med knappen Generera nummer
const startGame = document.getElementById("generateNumberBtn");

//Få kontakt med knappen Kolla ditt nummer
let guessInput = document.getElementById("inputNumber");

//Få kontakt med knappen Spela igen
const reStartGame = document.getElementById("regenerateNumberBtn");

//Få paragrafen att visa din senaste gissning
const lastGuess = document.getElementById("lastGuess");

//Få paragrafen att ge tips
const hint = document.getElementById("hints");

//Variabel som är kopplad till paragrafen att visa hur många gissningar som är kvar
let remainingGuesses = document.getElementById("guessesLeft");

//Variabel för antal gissningar i början
let startingGuesses = 5;

//Skapa en variabel som håller koll på antalet gissningar du har kvar
//Variable to Check the collected number
const checkNumber = document.getElementById("checkNumberBtn");

let feedback = "Tjena";

//Funktioner
//Skapa en funktion som startar spelet (The Answer)
startGame.addEventListener("click", function () {
  theAnswer = Math.floor(Math.random() * 101);
  console.log(theAnswer);
  //Metod setAtribute
  startGame.setAttribute("disabled", true);
});

//Skapa en funktion som tar in värdet från checkNumber Knappen
checkNumber.addEventListener("click", function () {
  //  console.log("Knappen funkar");
  console.log(guessInput.value);

  if (guessInput.value > theAnswer) {
    //create new li element
    let guessElement = document.createElement("li");
    guessElement.textContent = ` ${guessInput.value}`;
    lastGuess.appendChild(guessElement);
    hints();
    guessLeft();
  } else if (guessInput.value < theAnswer) {
    //create new li element
    let guessElement = document.createElement("li");
    guessElement.textContent = ` ${guessInput.value}`;
    lastGuess.appendChild(guessElement);
    //feedback.textContent = "Ditt senaste försök var för lågt";
    guessLeft();
    hints();
  } else if (guessInput.value == theAnswer) {
    //create new li element
    let guessElement = document.createElement("li");
    guessElement.textContent = `Grattis!! Du gissade rätt!`;
    lastGuess.appendChild(guessElement);
    atVictory();
    //Metod setAtribute
    checkNumber.setAttribute("disabled", true);
  }
});

// Add the content to the HHTML page
function guessLeft() {
  //Get the starting guesses and subtract by 1
  startingGuesses--;
  //Present the result in remainingGuesses
  remainingGuesses.textContent = ` ${startingGuesses} försök kvar!`;
  if (startingGuesses == 0) {
    remainingGuesses.textContent = "Game Over";
    hint.textContent = " ";
    //Metod setAtribute
    checkNumber.setAttribute("disabled", true);
  }
}

//Skapa en function som kollar om numret i input ruten är högre eller lägre
function hints() {
  if (guessInput.value < theAnswer) {
    hint.textContent = "Ditt senaste försök var för lågt";
  } else {
    hint.textContent = "Ditt senaste försök var för högt";
  }
}

//Vad ska hända vid seger / förlust?
function atVictory() {
  if ((guessInput.value = theAnswer)) {
    remainingGuesses.textContent = `Rätt svar var ${guessInput.value}`;
    hint.textContent = " ";
  }
}

//The Answer to the game
let theAnswer;

//Startar om spelet genom att ladda om sidan
reStartGame.addEventListener("click", function () {
  location.reload();
});

//Om man gissar rätt på 5e försöket ska det inte stå "game over"

//Spelet ska inte fungera vid game over eller vinst - typ starta spelet och kolla ditt nummer ska sluta fungera/döljas. Man ska inte kunna generera -1 -2 osv...

//Hade varit coolt att skapa en modal popup vid vinst eller liknande

//ladda upp i GitHub och länka in i CV sidan
//Visa min CV, varför jag inte får in slogan. (Handledningstid)

//Skapat idag
//Om man gissar rätt ska det inte stå "ditt nummer är för högt/lågt"
