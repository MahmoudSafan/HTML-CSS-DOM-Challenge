quizData = [{
        quistion: `float x = 100; int y = 0.1;
        cout<<x/y<<endl;`,
        a: "10",
        b: "100",
        c: "1000",
        d: "infinity",
        answer: "d",
    },
    {
        quistion: `unsigned int a = -1;
        cout<<a<<endl;`,
        a: '-1',
        b: '(2^31)-1',
        c: '(2^32)-1',
        d: 'Error',
        answer: 'c',
    },
    {
        quistion: "A function’s single most important role is to",
        a: 'give a name to a  of code.',
        b: 'reduce program size.',
        c: 'accept arguments and provide a return value.',
        d: 'help organize a program into conceptual units.',
        answer: 'b',
    },
    {
        quistion: "Overloaded functions",
        a: 'are a group of functions with the same name.',
        b: 'all have the same number and types of arguments.',
        c: 'make life simpler for programmers.',
        d: 'may fail unexpectedly due to stress',
        answer: 'a',
    },
];

let nextQuistion = 0,
    score = 0;

const qizContainer = document.getElementById("bigContainer");
const answerEls = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const answerA = document.getElementById('answer_a');
const answerB = document.getElementById('answer_b');
const answerC = document.getElementById('answer_c');
const answerD = document.getElementById('answer_d');
const submitBt = document.getElementById('submit');

loadingQuiz();

function loadingQuiz() {
    deSlectAnswers();

    const currentQuistion = quizData[nextQuistion];
    question.innerText = currentQuistion.quistion;
    answerA.innerText = currentQuistion.a;
    answerB.innerText = currentQuistion.b;
    answerC.innerText = currentQuistion.c;
    answerD.innerText = currentQuistion.d;
}

function getSelected() {
    let ans = undefined;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            ans = answerEl.id;
        }
    });
    return ans;
}

function deSlectAnswers() {
    answerEls.forEach(element => {
        element.checked = false;
    });
}

submitBt.addEventListener("click", () => {
    let anss = getSelected();

    if (anss === quizData[nextQuistion].answer) {
        score++;
    }

    nextQuistion++;
    if (nextQuistion < quizData.length) {
        loadingQuiz();
    } else {
        if (score === quizData.length) {
            bigContainer.innerHTML = `
            <h2> You answerd correctly at ${score}/${quizData.length} question <span>&#128079;</span></h2>
            <button onclick="location.reload()">Reload</button>
            `;
        } else {
            bigContainer.innerHTML = `
            <h2> You answerd correctly at ${score}/${quizData.length} question <span>&#128540</span></h2>
            <button onclick="location.reload()">Reload</button>
            `;
        }

    }
});