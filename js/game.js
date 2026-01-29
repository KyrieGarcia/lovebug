let score = 0;
const heart = document.getElementById("heart");
const scoreText = document.getElementById("score");

heart.addEventListener("click", () => {
  score++;
  scoreText.textContent = score;

  // move heart randomly
  heart.style.left = Math.random() * 220 + "px";
  heart.style.top = Math.random() * 220 + "px";

  if (score === 3) {
    setTimeout(() => {
      window.location.href = "win.html";
    }, 500);
  }
});
