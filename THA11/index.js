const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById("question-container")

const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')
let shuffledQuestions , currentQuestionIndex

startButton.addEventListener('click' , startGame);
nextButton.addEventListener('click' ,() =>{
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame() {
// console.log("started")

startButton.classList.add('hide')
shuffledQuestions = questions.sort( () => Math.random() - .5)
currentQuestionIndex = 0;
questionContainerElement.classList.remove('hide');
setNextQuestion();

}

function setNextQuestion() {
    resetState()
   showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
 questionElement.innerText = question.question
 question.answers.forEach(answer => {
const button  = document.createElement('button')
button.innerText = answer.text
button.classList.add('btn')
  if(answer.correct) {
      button.dataset.correct = answer.correct;
  }

    button.addEventListener('click' , selectAnswer)
    answerButtonElement.appendChild(button)
 })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}
function selectAnswer(e) {
 const selectedButton = e.target;
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body , correct)
  Array.from(answerButtonElement.children).forEach(button => {
      setStatusClass(button , button.dataset.correct)
  })
   if(shuffledQuestions.length > currentQuestionIndex + 1 ) {
    nextButton.classList.remove('hide');
   } else {
       startButton.innerText = "Restart";
       startButton.classList.remove('hide')
   }
}


function setStatusClass(element , correct) {
  clearStatusClass(element) 
  if(correct) {
      element.classList.add('correct')
  }else {
     element.classList.add('wrong') 
  }
} 

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong')
}
const questions = [
    {
        question: "which one is the best series👀📺?", 
        answers : [
            {text: 'Friends👯‍♀️' ,correct : true},
            {text: 'GOT🎡' ,correct : false},
        ]
    },
    {
        question: "Is devsnest best community?", 
        answers : [
            {text: 'Hell Yes📢' ,correct : true},
            {text: 'yes😒' ,correct : false},
            {text: 'Hell No😣' ,correct : false},
            {text: 'NO😕' ,correct : false},
        ]
    },
    {
        question: "Are you in love with JavaScript", 
        answers : [
            {text: 'ohh..Yes😁💕' ,correct : true},
            {text: 'Not at All🤢' ,correct : false},
            {text: 'Confused!😒' ,correct : false},
            {text: 'I dont want to fall in love🤐' ,correct : false},
        ]
    },
    {
        question: "Are you happy with you life?", 
        answers : [
            {text: 'yes almost with every second💃' ,correct : true},
            {text: 'Nope at all🙅‍♀️' ,correct : false},
            {text: 'I wanted to be🙎‍♀️' ,correct : false},
            {text: 'I am too depressed🤦‍♀️' ,correct : false},
        ]
    }
]