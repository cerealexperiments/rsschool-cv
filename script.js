const clickerScoreElement = document.querySelector(".clicker__score");
const clickerButton = document.querySelector(".clicker__button");

let score = 0;
let padding = 15;
clickerButton.addEventListener("click", () => {
  handleClick();
});

function handleClick() {
  score++;
  clickerScoreElement.textContent = `Score: ${score}`;
  if (score % 10 === 0) {
    padding += 10;
    clickerButton.style.padding = `10px ${padding}px 10px ${padding}px`;
  }
  if (score === 100) {
    clickerButton.textContent = "You won!";
  }
}
