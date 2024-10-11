// Quiz questions and answers
const quizData = [
    {
        question: "Who directed the movie 'Inception'?",
        answers: ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Martin Scorsese"],
        correct: 0
    },
    {
        question: "What is the main professional networking site used for career building?",
        answers: ["LinkedIn", "Facebook", "Twitter", "Instagram"],
        correct: 0
    },
    {
        question: "Which movie features the character 'Jack Dawson'?",
        answers: ["Titanic", "The Great Gatsby", "Avatar", "Inception"],
        correct: 0
    },
    {
        question: "Which feature on LinkedIn allows you to display your work achievements?",
        answers: ["Featured", "News Feed", "Stories", "Moments"],
        correct: 1
    },
    {
        question: "In which movie does 'The Joker' appear as a primary villain?",
        answers: ["The Dark Knight", "Iron Man", "Spider-Man", "Avengers: Endgame"],
        correct: 0
    },
    {
        question: "Which section on LinkedIn is used to describe your skills and expertise?",
        answers: ["About", "Experience", "Skills & Endorsements", "Recommendations"],
        correct: 2
    },
    {
        question: "Which famous movie features the quote 'May the Force be with you'?",
        answers: ["Star Wars", "Star Trek", "Guardians of the Galaxy", "The Matrix"],
        correct: 0
    },
    {
        question: "What can you use on LinkedIn to connect with people in your industry?",
        answers: ["Connections", "Likes", "Followers", "Shares"],
        correct: 1
    },
    {
        question: "In which movie is the character 'Thanos' trying to collect Infinity Stones?",
        answers: ["Avengers: Infinity War", "Justice League", "X-Men", "The Hobbit"],
        correct: 0
    },
    {
        question: "Which LinkedIn feature helps job seekers apply directly to openings?",
        answers: ["Jobs", "Home Feed", "Connections", "InMail"],
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
