const quizData = [
    {
        question: 'What is the most used programming language in 2021?',
        a: 'JAVA',
        b: 'Python',
        c: 'C',
        d: 'javaScript',
        correct: 'b'
    },
    {
        question: 'who is president of BD',
        a: 'Jonny Da',
        b: 'Hasina Daniels',
        c: 'Sadia Valentina',
        d: 'Jasmine',
        correct: 'b'
    },
    {
        question: 'what does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Application Programming Interface',
        correct: 'a'
    },
    {
        question: 'What year JavaScript Launched?',
        a: '2020',
        b: '2015',
        c: '1971',
        d: 'None Of above',
        correct: 'd'
    }
]

const questionElm  = document.getElementById('question')
const aTxt = document.getElementById('a-txt') 
const bTxt = document.getElementById('b-txt') 
const cTxt = document.getElementById('c-txt') 
const dTxt = document.getElementById('d-txt') 
const btn = document.getElementById('btn')

let currentQuiz = 0

loadQuiz()

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]

    questionElm.innerHTML = currentQuizData.question


    aTxt.innerHTML = currentQuizData .a
    bTxt.innerHTML = currentQuizData .b
    cTxt.innerHTML = currentQuizData .c
    dTxt.innerHTML = currentQuizData .d

    // currentQuiz ++
}

btn.addEventListener('click', () =>{
    currentQuiz ++
    if (currentQuiz < quizData.length) {
        loadQuiz()    
    }
    else{
        alert('You Finished! Great Job...!!')
    }
})