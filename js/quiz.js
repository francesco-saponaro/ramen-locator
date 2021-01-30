let quizModal = document.getElementById("quiz-modal");
let resultClose = document.getElementById("result-close");
let modalCnt = document.querySelector(".modal-content");
let c = 0;

//CHECK RESULT ON SUBMISSION
function testResult() {
    let a1 = document.quiz.answer1.value;
    let a2 = document.quiz.answer2.value;
    let a3 = document.quiz.answer3.value;
    let a4 = document.quiz.answer4.value;
    let a5 = document.quiz.answer5.value;
    let a6 = document.quiz.answer6.value;
    let a7 = document.quiz.answer7.value;
    let a8 = document.quiz.answer8.value;
    let a9 = document.quiz.answer9.value;
    let a10 = document.quiz.answer10.value;
    if(a1 == "correct") {c++;};
    if(a2 == "correct") {c++;};
    if(a3 == "correct") {c++;};
    if(a4 == "correct") {c++;};
    if(a5 == "correct") {c++;};
    if(a6 == "correct") {c++;};
    if(a7 == "correct") {c++;};
    if(a8 == "correct") {c++;};
    if(a9 == "correct") {c++;};
    if(a10 == "correct") {c++;};
    if(missedAnswersCheck() === true){
        missedAnswers();
    } else if(c < 10) {
        failure();
    } else {
        success();
    }
}

//MISSED ANSWERS CHECK FUNCTION
function missedAnswersCheck() {
    let selectedOption1 = document.querySelector("input[name=answer1]:checked");
    let selectedOption2 = document.querySelector("input[name=answer2]:checked");
    let selectedOption3 = document.querySelector("input[name=answer3]:checked");
    let selectedOption4 = document.querySelector("input[name=answer4]:checked");
    let selectedOption5 = document.querySelector("input[name=answer5]:checked");
    let selectedOption6 = document.querySelector("input[name=answer6]:checked");
    let selectedOption7 = document.querySelector("input[name=answer7]:checked");
    let selectedOption8 = document.querySelector("input[name=answer8]:checked");
    let selectedOption9 = document.querySelector("input[name=answer9]:checked");
    let selectedOption10 = document.querySelector("input[name=answer10]:checked");
    if(!selectedOption1 || !selectedOption2 || !selectedOption3 || !selectedOption4 || !selectedOption5 || !selectedOption6 || !selectedOption7 || !selectedOption8 || !selectedOption9 || !selectedOption10) {
       return true;
    }
}

//MISSED ANSWERS FUNCTION
function missedAnswers() {
    quizModal.classList.add("show-result");
    modalCnt.innerHTML = `
        <h3 id="result">You must answer all questions. Keep going!</h3>
        <img id="image-result" src="media/images/missed-quiz.jpg" alt="missed-quiz-pic">
    `
    //<a href='https://www.freepik.com/vectors/cartoon'>Cartoon vector created by catalyststuff - www.freepik.com</a>
}

//FAILURE FUNCTION
function failure() {
    quizModal.classList.add("show-result");
    modalCnt.innerHTML = `
        <h3 id="result">Failed! Your result is ${c}</h3>
        <img id="image-result" src="media/images/failed-quiz.jpg" alt="failed-quiz-pic">
    `
    //<a href='https://www.freepik.com/vectors/cartoon'>Cartoon vector created by catalyststuff - www.freepik.com</a>
}

//SUCCESS FUNCTION
function success() {
    quizModal.classList.add("show-result");
    modalCnt.innerHTML = `
        <h3 id="result">Congratulations! You are a true Ramen Sensei!</h3>
        <img id="image-result" src="media/images/success-quiz.jpg" alt="success-quiz-pic">
    `
    //<a href='https://www.freepik.com/vectors/food'>Food vector created by catalyststuff - www.freepik.com</a>
}

//EVENT LISTENERS
//remove modal, reset score and reload page
resultClose.addEventListener("click", function() {
    quizModal.classList.remove("show-result");
    c = 0;
    if(missedAnswersCheck() === true){
        return;
    } else {
        location.reload();
        window.scrollTo(0, 0);
    }
})

//remove modal, reset score and reload page on window click
window.addEventListener("click", function(e) {
    if(e.target === quizModal) {
        quizModal.classList.remove("show-result");
        c = 0;
        if(missedAnswersCheck() === true){
            return;
        } else {
            location.reload();
            window.scrollTo(0, 0);
        }
    } else {
        return false;
    }
})

   