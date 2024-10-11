// Quiz questions and answers
const quizData = [
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
        correct: 0
    },
    {
        question: "Which is the longest river in the world?",
        answers: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correct: 1
    },
    {
        question: "What is the smallest country in the world?",
        answers: ["Vatican City", "Monaco", "Malta", "Liechtenstein"],
        correct: 0
    },
    {
        question: "Who was the first person to walk on the moon?",
        answers: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
        correct: 0
    },
    {
        question: "Which element is the chemical symbol 'O'?",
        answers: ["Oxygen", "Osmium", "Oganesson", "Oxonium"],
        correct: 0
    },
    {
        question: "In which year did World War II end?",
        answers: ["1945", "1940", "1939", "1941"],
        correct: 0
    },
    {
        question: "Which is the largest desert in the world?",
        answers: ["Sahara", "Antarctica", "Gobi", "Arctic"],
        correct: 1
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: ["Leonardo da Vinci", "Vincent van Gogh", "Michelangelo", "Claude Monet"],
        correct: 0
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: ["Diamond", "Gold", "Iron", "Platinum"],
        correct: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Mars", "Venus", "Jupiter", "Saturn"],
        correct: 0
    }
    
];

let currentQuiz = 0;
let score = 0;
const questionEl = document.querySelector('.question h2');
const answersEl = document.querySelectorAll('.answers p');
const nextButton = document.querySelector('button');


function loadQuiz() {
    resetState();
    const currentQuizData = quizData[currentQuiz];
    questionEl.textContent = currentQuizData.question;
    answersEl.forEach((answerEl, index) => {
        answerEl.textContent = currentQuizData.answers[index];
        answerEl.onclick = () => checkAnswer(index, currentQuizData.correct);
    });
}


function checkAnswer(selected, correct) {
    if (selected === correct) {
        answersEl[selected].style.backgroundColor = '#bbe1bb';
        score++;
    } else {
        answersEl[selected].style.backgroundColor = '#dfbaba';
        answersEl[correct].style.backgroundColor = '#bbe1bb';
    }
    answersEl.forEach(answerEl => answerEl.style.pointerEvents = 'none'); 
    nextButton.style.display = 'block'; 
}


function resetState() {
    answersEl.forEach(answerEl => {
        answerEl.style.backgroundColor = '';
        answerEl.style.pointerEvents = 'auto';
    });
    nextButton.style.display = 'none';
}


nextButton.addEventListener('click', () => {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        displayResults();
    }
});


function displayResults() {
    document.querySelector('.container').innerHTML = `
        <h1>Congratulations!</h1>
        <h2>You scored ${score} out of ${quizData.length}</h2>
        <p>Thank you for completing the quiz.</p>
        <img src="Result.jpg" alt="Congrats">
    `;
}


loadQuiz();
