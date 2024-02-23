const playBtn = document.getElementById("play-btn");
const playGround = document.getElementById("playGround");
const homeScreen = document.getElementById("homeScreen");

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    homeScreen.classList.add("hidden");
    playGround.classList.remove("hidden");
  }
});

playBtn.addEventListener("click", () => {
    homeScreen.classList.add("hidden");
    playGround.classList.remove("hidden");
})




const currentRandomAlphabet = document.getElementById("random-alphabet");

function randomAlphabet() {
    const alphabetString = "abcdefghijklmnopqrstuvwxyx";
    const alphabets = alphabetString.split("");

  const random = Math.random() * 25;
  const index = Math.round(random);

    const alphabet = alphabets[index];
    
    currentRandomAlphabet.innerText = alphabet;
}

