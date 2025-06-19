// Quiz Logic
const quizData = [
  {
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Syntax", "Colorful Style Sheet"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which tag is used to include JavaScript in HTML?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    answer: "<script>"
  }
];

let currentQuestion = 0;

function loadQuiz() {
  const quiz = quizData[currentQuestion];
  document.getElementById("question").textContent = quiz.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = '';
  quiz.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  alert(selected === correct ? "Correct!" : `Wrong! Answer: ${correct}`);
}

function nextQuestion() {
  currentQuestion = (currentQuestion + 1) % quizData.length;
  loadQuiz();
}

window.onload = loadQuiz;

// Carousel Logic
const carouselImages = [
  "https://via.placeholder.com/600x300?text=Image+1",
  "https://via.placeholder.com/600x300?text=Image+2",
  "https://via.placeholder.com/600x300?text=Image+3"
];
let carouselIndex = 0;

setInterval(() => {
  carouselIndex = (carouselIndex + 1) % carouselImages.length;
  document.getElementById("carousel-image").src = carouselImages[carouselIndex];
}, 3000);

// API Fetch (Joke)
function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke").textContent = `${data.setup} — ${data.punchline}`;
    })
    .catch(error => {
      document.getElementById("joke").textContent = "Failed to fetch joke!";
    });
}
