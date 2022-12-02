var homeEl = document.querySelector('.home');
var startQuizBtn = document.querySelector('.startQuiz');
var startedEl = document.querySelector('.started');
var finishedEl = document.querySelector('.finished');


var countdownEl = document.getElementById('countdown');
var secondsLeft = 45;

var questionEl = document.getElementById('question');
var ansBtn = document.querySelectorAll('.ansBtn');
var ans1Btn = document.getElementById('ans1');
var ans2Btn = document.getElementById('ans2');
var ans3Btn = document.getElementById('ans3');
var ans4Btn = document.getElementById('ans4');
var checkAnsEl = document.getElementById('checkAns');

var scoreEl = document.getElementById('score');


var questionCount = 0;

// Object containing questions and answers
var questions = [
    {
        question: "What was the first feature-length animated movie ever released?",
        answers: ["Fantasia", "Snow White and the Seven Dwarfs", "Steamboat Willie", "Dumbo"],
        correctAnswer: "1"
    },
    {
        question: "What movie musical was set at Rydell High School?",
        answers: ["West Side Story", "Grease", "Singin' in the Rain", "Meet Me in St. Louis"],
        correctAnswer: "1"
    },
    {
        question: "In what 1976 movie does Robert De Niro say the famous line, 'You talkin' to me?'",
        answers: ["Meet the Fockers", "The Godfather", "Taxi Driver", "Goodfellas"],
        correctAnswer: "2"
    },
    {
        question: "For what movie did Steven Spielberg win his first oscar for best director?",
        answers: ["The Post", "E.T.", "Lincoln", "Schindler's List"],
        correctAnswer: "3"
    },
    {
        question: "What song did Tom Cruise lip-sync to in his underwear in Risky Business?",
        answers: ["Old Time Rock and Roll", "Sweet Home Alabama", "Livin' on a Prayer", "All Shook Up"],
        correctAnswer: "0"
    },
]

// Questions hidden until Begin button is pressed
function begunQuiz() {
    homeEl.style.display = "none";
    startedEl.style.display = "block";
    questionCount = 0;

    setCountdown();
    setQuestion(questionCount);
}

// References questions and answers from object to display in buttons
function setQuestion(i) {
    if (i < questions.length) {
        questionEl.textContent = questions[i].question;
        ans1Btn.textContent = questions[i].answers[0];
        ans2Btn.textContent = questions[i].answers[1];
        ans3Btn.textContent = questions[i].answers[2];
        ans4Btn.textContent = questions[i].answers[3];
    }
}

// Timer to decrease every 1000ms until 0 or when questionCount matches array length of questions object
function setCountdown() {
    var countdownInterval = setInterval(function(){
        secondsLeft--;
        countdownEl.textContent = secondsLeft;
        // Either parameter is met, hides started (the quiz), 
        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(countdownInterval);
            startedEl.style.display = "none";
            finishedEl.style.display = "block";
            scoreEl.textContent = secondsLeft;
        }

    },1000);
}

// Check answers
function checkAns(event) {
    event.preventDefault();

    checkAnsEl.style.display = "block";
    var checked = document.createElement("h3");
    checkAnsEl.appendChild(checked);
    
    setTimeout(function() {
        checked.style.display = "none";
    }, 700);

    if (questions[questionCount].correctAnswer === event.target.value) {
        checked.textContent = "Nice!! 👍";
    } else if (questions[questionCount].correctAnswer !== event.target.value) {
        secondsLeft -= 10;
        checked.textContent = "Wrong!! 😓";
    }

    if (questionCount < questions.length) {
        questionCount++;
    }

    setQuestion(questionCount); 
}


// Calls begunQuiz() when Begin button is pressed
startQuizBtn.addEventListener("click", begunQuiz);

ansBtn.forEach(value => {
    value.addEventListener('click', checkAns);
});

