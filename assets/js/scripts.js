const checkBox = document.querySelector(".bottom input");
const proceedButton = document.querySelector(".bottom button");
const questionOff = document.getElementById("questionOff");

const welcome = document.querySelector(".welcome");
const test = document.querySelector("#pagina_test");

const up = document.getElementById("up");
const down = document.getElementById("down");
const proceedConteiner = document.querySelector(".proceed");

const question = document.querySelector("#questions h3");

const results = document.querySelector(".results");

const circle_graph = document.querySelector(".progress-graph");
const correct = document.querySelector(".percent-correct");
const incorrect = document.querySelector(".percent-wrong");

const feedPage = document.querySelector(".feedback");
const rateButton = document.getElementById("rateButton");

const stars = document.querySelectorAll(".star");

const feedPanel = document.querySelector(".feedbackAlert");
const feedEmoji = document.querySelector(".emoji");
const restartQuiz = document.querySelector(".refreshButton");

let timer;
let numberOfQuestions = [1];

// WELCOME PAGE

checkBox.addEventListener("change", () => {
  if (checkBox.checked) {
    proceedButton.removeAttribute("disabled");
    proceedButton.style.backgroundColor = "#00ffff";
    proceedButton.style.boxShadow = "3px 2px 24px #00ffff";
    proceedButton.style.cursor = "pointer";
  } else {
    proceedButton.style.backgroundColor = "grey";
    proceedButton.style.boxShadow = "3px 2px 24px grey";
  }
});

proceedButton.addEventListener("click", () => {
  welcome.setAttribute("hidden", "true");
  test.removeAttribute("hidden");

  document.dispatchEvent(new CustomEvent("testPageVisible"));
});

// QUESTONS PAGE

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// RANDOMIZING QUESTIONS/ANSWERS

let answeredQuestion = [];

let questionPos = [];

const randomQuestions = (array) => {
  let num = Math.floor(Math.random() * array.length);
  answeredQuestion = array[num];
  questionPos = [num];
  return array[num];
};

const allAnswer = (question) => {
  if (!question) return [];
  let allAnswer = [];
  allAnswer.push(question.correct_answer);

  for (let i = 0; i < question.incorrect_answers.length; i++) {
    allAnswer.push(question.incorrect_answers[i]);
  }
  return allAnswer;
};

const randomAnswer = (answer) => {
  answer.sort(() => Math.random() - 0.5);
  return answer;
};

const proceed = document.getElementById("proceedQuest");

const proceedOn = () => {
  proceed.style.backgroundColor = "#00ffff";
  proceed.style.boxShadow = "3px 2px 24px #00ffff";
  proceed.style.cursor = "pointer";
  proceed.removeAttribute("disabled");
};
const proceedOff = () => {
  proceed.style.backgroundColor = "grey";
  proceed.style.boxShadow = "3px 2px 24px grey";
  proceed.setAttribute("disabled", true);
};
let correctAnswer = [];
let wrongtAnswer = [];

const getQuestion = () => {
  if (questions.length === 0) return;
  proceedOff();
  let existButton = document.querySelectorAll(".button");
  existButton.forEach((button) => button.remove());
  const currentQuestion = randomQuestions(questions);
  const currentAnswer = randomAnswer(allAnswer(currentQuestion));
  question.innerText = currentQuestion.question;
  for (let i = 0; i < currentAnswer.length; i++) {
    if (i < 2) {
      const button = document.createElement("div");
      const button_input = document.createElement("input");
      const button_label = document.createElement("label");
      button_label.className = "label";
      button_input.classList.add("answer");
      button_input.type = "radio";
      button_input.name = "radio";
      button_input.classList.add(".button_input");
      button_label.htmlFor = "radio";
      button.classList.add("button");
      button_label.innerText = currentAnswer[i];
      button.appendChild(button_input);
      button.appendChild(button_label);
      up.appendChild(button);
      button.id = `id${i}`;
      button.addEventListener("click", () => {
        let selected = document.querySelector(".button_choice");
        if (selected) {
          selected.classList.remove("button_choice");
        }
        proceedOn();
        button.classList.add("button_choice");
        button_input.checked = true;
      });
    } else {
      const button = document.createElement("div");
      const button_input = document.createElement("input");
      const button_label = document.createElement("label");
      button_label.className = "label";
      button_input.classList.add("answer");
      button_input.type = "radio";
      button_input.name = "radio";
      button_input.classList.add(".button_input");
      button_label.htmlFor = "radio";
      button.classList.add("button");
      button_label.innerText = currentAnswer[i];
      button.appendChild(button_input);
      button.appendChild(button_label);
      button.id = `id${i}`;
      up.appendChild(button);
      button.addEventListener("click", () => {
        let selected = document.querySelector(".button_choice");
        if (selected) {
          selected.classList.remove("button_choice");
        }
        proceedOn();
        button.classList.add("button_choice");

        button_input.checked = true;
      });
    }
  }
};

document.addEventListener("testPageVisible", () => {
  if (!test.hidden) {
    timerActive();
    getQuestion();
  }
});

// const proceedResults = () => {
//   if (questions.length <= 0) {
//     test.setAttribute("hidden", "true");
//     results.removeAttribute("hidden");
//   }
// };

proceed.addEventListener("click", () => {
  if (timer) {
    clearInterval(timer);
  }

  let number = numberOfQuestions.length + 1;
  questionOff.innerText = number.toString();
  let selectedButton = document.querySelector(".button_choice");
  if (selectedButton) {
    let text = selectedButton.querySelector("label").innerText;

    if (text === answeredQuestion.correct_answer) {
      correctAnswer.push(text);
    } else {
      wrongtAnswer.push(text);
    }
  }
  questions.splice(questionPos, 1);
  if (timer) {
    clearInterval(timer);
  }
  numberOfQuestions.push(1);
  if (questions.length < 1) {
    GraphResult();
    resultsText();
    test.setAttribute("hidden", "true");
    results.removeAttribute("hidden");
    clearInterval(timer);
    document.dispatchEvent(new CustomEvent("resultsPage"));
  }
  timerActive();
  getQuestion();
});

// TIMER

const timerActive = () => {
  if (questions.length === 0) {
    clearInterval(timer);
    return;
  }
  let seconds = 60;
  const count = document.getElementsByClassName("number")[0];
  const progress = document.getElementsByClassName("progress")[0];

  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    progress.style.strokeDashoffset = offset;
  }

  timer = setInterval(() => {
    const remaining = seconds--;
    count.innerText = remaining;

    const percent = (seconds / 60) * 100;
    setProgress(percent);

    if (remaining <= 0) {
      questions.splice(questionPos, 1);
      numberOfQuestions.push(1);
      let number = numberOfQuestions.length;
      questionOff.innerText = number.toString();
      clearInterval(timer);
      timerActive();
      let selectedButton = document.querySelector(".button_choice");
      if (!selectedButton) {
        wrongtAnswer.push(0);
      } else if (
        selectedButton.querySelector(".label").innerText ===
        answeredQuestion.correct_answer
      ) {
        correctAnswer.push(selectedButton.querySelector(".label").innerText);
      }
      if (questions.length < 1) {
        GraphResult();
        resultsText();
        test.setAttribute("hidden", "true");
        results.removeAttribute("hidden");
        clearInterval(timer);

        document.dispatchEvent(new CustomEvent("resultsPage"));
      }
      getQuestion();
    }
  }, 1000);
};

//RESULTS PAGE

const percCorrect = document.addEventListener("resultsPage", () => {
  let percent = (correctAnswer.length / 10) * 100;
  correct.innerText = `${percent.toString()}%`;
  let percentW = (wrongtAnswer.length / 10) * 100;
  incorrect.innerText = `${percentW.toString()}%`;
  answers();
});

// GRAPH

const radiusGraph = 40;
const circumference = 2 * Math.PI * radiusGraph;

function setProgressResult(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle_graph.style.strokeDashoffset = offset;
}

function GraphResult() {
  let percent = (correctAnswer.length / 10) * 100 - 15;
  setProgressResult(percent);
}

const answer_correct = document.querySelector(".answer-correct");
const answer_wrong = document.querySelector(".answer-wrong");

const answers = () => {
  answer_correct.innerText = correctAnswer.length.toString();
  answer_wrong.innerText = wrongtAnswer.length.toString();
};

const graph_lettTitle = document.querySelector(".graph-lettTitle");
const PassedOrNo = document.getElementById("PasedOrNo");
const graph_lettp = document.querySelector(".graph-lettp");

const resultsText = () => {
  if (correctAnswer.length < 6) {
    graph_lettTitle.innerHTML = `Great effort! <br/><span id="PasedOrNo" class="red">Keep it up.</span>`;
    graph_lettp.innerText =
      "We have identified the areas you should focus on. Take your time to prepare and retake the exam. We're here to support you on your journey!";
  }
};

// FEEDBACK PAHE

const feedback = rateButton.addEventListener("click", () => {
  results.setAttribute("hidden", "true");
  feedPage.removeAttribute("hidden");

  document.dispatchEvent(new CustomEvent("visibleFeedback"));
});

const feedFunction = document.addEventListener("visibleFeedback", () => {
  const comment = document.getElementById("comment");
  const send = document.getElementById("send");
  send.style.backgroundColor = "grey";
  send.style.boxShadow = "3px 2px 24px grey";
  send.style.cursor = "none";

  comment.addEventListener("input", () => {
    if (comment.value.trim() === "") {
      send.style.backgroundColor = "grey";
      send.style.boxShadow = "3px 2px 24px grey";
    } else {
      send.removeAttribute("disabled");
      send.style.backgroundColor = "#00ffff";
      send.style.boxShadow = "3px 2px 24px #00ffff";
      send.style.cursor = "pointer";
    }
  });
  stars.forEach((star, index) => {
    star.addEventListener("mouseover", () => {
      stars.forEach((singleStar, i) => {
        if (i <= index) {
          singleStar.classList.add("star-1");
        } else {
          singleStar.classList.remove("star-1");
        }
      });
    });
    star.addEventListener("mouseout", () => {
      stars.forEach((s) => {
        s.classList.remove("star-1");
      });
    });
    star.addEventListener("click", () => {
      stars.forEach((singleStar, i) => {
        if (i <= index) {
          singleStar.classList.add("starActive");
        } else {
          singleStar.classList.remove("starActive");
        }
      });
    });
  });

  send.onclick = function () {
    const activeStars = document.querySelectorAll(".starActive").length;

    feedPanel.removeAttribute("hidden");
    if (activeStars <= 6) {
      feedEmoji.src = "./assets/img/0_6.svg";
    } else if (activeStars > 6 && activeStars <= 8) {
      feedEmoji.src = "./assets/img/7_8.svg";
    } else {
      feedEmoji.src = "./assets/img/9_10.svg";
    }
  };

  restartQuiz.onclick = function () {
    feedPanel.setAttribute("hidden", "true");
    welcome.removeAttribute("hidden");
    location.reload();
  };
});
