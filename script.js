const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: ["China", "Japan", "Thailand", "South Korea"],
        correct: 1
    },
    {
        question: "What is the largest desert in the world?",
        answers: ["Sahara", "Arabian", "Gobi", "Kalahari"],
        correct: 0
    },
    {
        question: "Which river is the longest in the world?",
        answers: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correct: 1
    },
    {
        question: "Which continent is the Sahara Desert located on?",
        answers: ["Asia", "Africa", "North America", "Australia"],
        correct: 1
    },
    {
        question: "What is the smallest country in the world?",
        answers: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
        correct: 0
    },
    {
        question: "Which ocean is the largest?",
        answers: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correct: 3
    },
    {
        question: "What is the capital of Australia?",
        answers: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
        correct: 1
    },
    {
        question: "Which country has the most natural lakes?",
        answers: ["Canada", "Russia", "USA", "India"],
        correct: 0
    },
    {
        question: "Which mountain range separates Europe and Asia?",
        answers: ["Andes", "Rockies", "Ural", "Himalayas"],
        correct: 2
    }
];

let score = 0;

function loadQuestions() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = ''; // Clear previous content
    questions.forEach((question, questionIndex) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `<h2>${question.question}</h2>`;
        question.answers.forEach((answer, index) => {
            questionElement.innerHTML += `<label><input type='radio' name='answer${questionIndex}' value='${index}'> ${answer}</label><br>`;
        });
        quizContainer.appendChild(questionElement);
    });
}

function submitAnswers() {
    questions.forEach((question, questionIndex) => {
        const selectedAnswer = document.querySelector(`input[name='answer${questionIndex}']:checked`);
        if (selectedAnswer) {
            const answerIndex = parseInt(selectedAnswer.value);
            if (answerIndex === question.correct) {
                score++;
            }
        }
    });
    showResult();
}

function showResult() {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<h2>Your score: ${score} out of ${questions.length}</h2>`;
    questions.forEach((question, questionIndex) => {
        resultContainer.innerHTML += `<h3>Question ${questionIndex + 1}: ${question.question}</h3>`;
        resultContainer.innerHTML += `<p>Correct Answer: ${question.answers[question.correct]}</p>`;
    });
}

document.getElementById('submit').addEventListener('click', submitAnswers);
loadQuestions();