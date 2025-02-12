document.addEventListener("DOMContentLoaded", () => {
  const StartBtn = document.getElementById("start-quiz");
  const NextBtn = document.getElementById("next-quiz");
  const QuestionBox = document.getElementById("question-container");
  const ResultBox = document.getElementById("result-container");
  const Question = document.getElementById("question");
  const QuestionList = document.getElementById("question-list");
  const RestartBtn = document.getElementById("restart-btn");

  const questions = [
    {
      question: "What is my name",
      choices: ["soham", "anil", "kaif", "sai"],
      answer: "soham",
    },
    {
      question: "What is my name",
      choices: ["so", "anil", "kaif", "sai"],
      answer: "soham",
    },
    {
      question: "What is my name",
      choices: ["s", "anil", "kaif", "sai"],
      answer: "soham",
    },
  ];

  let currentindex = 0;
  let score = 0;

  NextBtn.addEventListener("click", nextQuiz);

  function nextQuiz() {
    currentindex++;
    if (currentindex < questions.length) {
      NextBtn.classList.add("hidden");
      QuestionList.innerHTML = "";
      startQuiz();
    } else {
      QuestionBox.classList.add("hidden");
      NextBtn.classList.add("hidden");
      result();
    }
  }
  function result() {
    ResultBox.classList.remove("hidden");

    const h2 = document.createElement("h2");
    h2.classList.add("design");
    h2.textContent = `${score} out of ${questions.length}`;
    ResultBox.appendChild(h2);
    RestartBtn.classList.remove("hidden");
  }

  RestartBtn.addEventListener("click", Restart);

  function Restart() {
    currentindex = 0;
    score = 0;
    Question.textContent = "";
    QuestionList.innerHTML = "";

    // Hide ResultBox and RestartBtn
    ResultBox.classList.add("hidden");
    RestartBtn.classList.add("hidden");
    ResultBox.classList.add("hidden");
    StartBtn.classList.remove("hidden");
    RestartBtn.classList.add("hidden");
  }

  StartBtn.addEventListener("click", startQuiz);

  function startQuiz() {
    Question.textContent = questions[currentindex].question;
    QuestionBox.classList.remove("hidden");
    StartBtn.classList.add("hidden");

    questions[currentindex].choices.forEach((item) => {
      let li = document.createElement("li");
      li.classList.add("listyle");
      li.innerHTML = item;
      li.addEventListener("click", () => selectanswer(item));
      QuestionList.appendChild(li);
      QuestionList.classList.remove("hidden");
    });

    function selectanswer(choice) {
      if (choice === questions[currentindex].answer) {
        score++;
      }
      NextBtn.classList.remove("hidden");
    }
  }
});
