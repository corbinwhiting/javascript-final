const answersArray = [
  "Yes",
  "Reply hazy, try again",
  "Don't count on it",
  "It is certain",
  "It is decidedly so",
  "Ask again later",
  "My reply is no",
  "Without a doubt",
  "Better not tell you now",
  "My sources say no",
  "Yes, definitely",
  "Cannot predict now",
  "Outlook not so good",
  "You may rely on it",
  "Concentrate and ask again",
  "Very doubtful",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Signs point to yes",
];
const eightBall = document.getElementById("eightBall");

function randomAnswer() {
  let answer = answersArray[Math.floor(Math.random() * answersArray.length)];
  document.getElementById("answer").innerText = answer;
  document.getElementById("answer").style.fontSize = "18px";
}

document.getElementById("shake-btn").addEventListener("click", () => {
  randomAnswer();
  eightBall.classList.add("isShaking");
  setTimeout(() => {
    eightBall.classList.remove("isShaking");
  }, 500);
});
