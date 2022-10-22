const correctAnswer = ["C", "A"];

const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswer = [form.q1.value, form.q2.value];

  userAnswer.forEach((answer, index) => {
    if (answer === correctAnswer[index]) {
      score += 50;
    }
  });
  scrollTo(0, 0);
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}/100%`;
    if (output === score) {
      document.getElementById("ok").innerHTML = "https://github.com/wasim-dorboz"
        ;
      clearInterval(timer);
    } else {
      output++;
    }
  }, 20);
  setTimeout(() => {
    result.classList.remove("d-none");
  }, 300);
});
