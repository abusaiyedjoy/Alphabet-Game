
// Playground and homescreen handle

const playBtn = document.getElementById("play-btn");
const playGround = document.getElementById("playGround");
const homeScreen = document.getElementById("homeScreen");

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    homeScreen.classList.add("hidden");
      playGround.classList.remove("hidden");
      
      keyboardPressed(event)
  }
});

playBtn.addEventListener("click", (event) => {
    homeScreen.classList.add("hidden");
    playGround.classList.remove("hidden");

    keyboardPressed(event)
})




// Random alphabet generate and bg color

function getRandomAlphabets() {
    const alphabetString = "abcdefghijklmnopqrstuvwxyx";
    const alphabets = alphabetString.split("");

    const randomNumber = Math.round(Math.random() * 25);

    const alphabet = alphabets[randomNumber];


    return alphabet;
}




// Keyboard button pressed


function keyboardPressed(event) {

    const alphabet =    getRandomAlphabets(); 

    const youPress = event.key;
    console.log("you Press", youPress)
    
    const RandomAlphabet = document.getElementById("random-alphabet");
    const currentAlphabet = (RandomAlphabet.textContent).toLowerCase();
    console.log("currentAlphabet", currentAlphabet)
    
    const element = document.getElementById(alphabet);
    element.classList.add("bg-orange-400");
    
    if (currentAlphabet == youPress) {
      console.log("true");
      const elementRemove = document.getElementById(alphabet);
      elementRemove.classList.remove("bg-orange-400");
    } else {
        console.log("Sorry!!!");
    }
        

    
    const currentRandomAlphabet = document.getElementById("random-alphabet");
    currentRandomAlphabet.textContent = alphabet;
           
        
    }
    
    document.addEventListener("keypress", keyboardPressed);
    
    
    
    
    
