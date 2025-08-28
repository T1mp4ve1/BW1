const checkBox = document.querySelector(".bottom input");
const proceedButton = document.querySelector(".bottom button");

// console.log(checkBox);
// console.log(proceedButton);

checkBox.addEventListener("change", () => {
  if (checkBox.checked) {
    proceedButton.style.backgroundColor = "#00ffff";
    proceedButton.style.boxShadow = "3px 2px 24px #00ffff";
    proceedButton.style.cursor = "pointer";
  } else {
    proceedButton.style.backgroundColor = "grey";
    proceedButton.style.boxShadow = "3px 2px 24px grey";
  }
});

const welcome = document.querySelector(".welcome");
const test = document.querySelector("#pagina_test");

proceedButton.addEventListener("click", () => {
  welcome.setAttribute("hidden", "true");
  test.removeAttribute("hidden");

  document.dispatchEvent(new CustomEvent("testPageVisible"));
});

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
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
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
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
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

const up = document.getElementById("up");
const down = document.getElementById("down");
const proceedConteiner = document.querySelector(".proceed");

const question = document.querySelector("#questions h3");
const button_1 = document.createElement("div");
const button_2 = document.createElement("div");
const button_3 = document.createElement("div");
const button_4 = document.createElement("div");

button_1.classList.add("button");
button_2.classList.add("button");
button_3.classList.add("button");
button_4.classList.add("button");

const randomQuestions = (array) => {
  let num = Math.floor(Math.random() * array.length);
  return array[num];
};

const allAnswer = (question) => {
  let allAnswer = [];
  allAnswer.push(question.correct_answer);
  console.log(question);
  for (let i = 0; i < question.incorrect_answers.length; i++) {
    allAnswer.push(question.incorrect_answers[i]);
  }
  return allAnswer;
};

const randomAnswer = (answer) => {
  answer.sort(() => Math.random() - 0.5);
  return answer;
};
const button = document.createElement("div");
button.classList.add("button");
const getQuestion = () => {
  const currentQuestion = randomQuestions(questions);
  const currentAnswer = randomAnswer(allAnswer(currentQuestion));

  question.innerText = currentQuestion.question;
  for (let i = 0; i < currentAnswer.length; i++) {
    if (i < 2) {
      //button.innerText = currentAnswer[i];
      up.appendChild(button);
    } else {
      //button.innerText = currentAnswer[i];
      down.appendChild(button);
    }
  }
};

button.addEventListener("click", () => {
  button.classList.remove("button");
  button.classList.add("button_choice");
});

console.log(randomAnswer(allAnswer(randomQuestions(questions))));
console.log(proceedConteiner);
const get = document.addEventListener("testPageVisible", () => {
  if (!test.hidden) {
    timerActive();
    getQuestion();
  }

  // let myIndex = 0;
  // const changeQuestion = setInterval(() => {
  //   questions.forEach((e) => {
  //     question.innerText = e.question;
  //   });
  //   changeQuestion();
  // }, 60000);
});

const timerActive = () => {
  let seconds = 60;
  const count = document.getElementsByClassName("number")[0];
  const progress = document.getElementsByClassName("progress")[0];

  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    progress.style.strokeDashoffset = offset;
  }

  const timer = setInterval(() => {
    const remaining = seconds--;
    count.innerText = remaining;

    const percent = (seconds / 60) * 100;
    setProgress(percent);

    if (remaining <= 0) {
      clearInterval(timer);
      timerActive();
    }
  }, 1000);
};
