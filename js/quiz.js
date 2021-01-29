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
    if(c === 10) {
        success();
    } else {
        failure();
    }
}

//SUCCESS FUNCTION
function success() {
    quizModal.classList.add("show-result");
    modalCnt.innerHTML = `
        <h3 id="result">Congratulations! You are a true Ramen Sensei!</h3>
        <img id="image-result" src="media/images/success-quiz.jpg" alt="ramen-signup-pic">
    `
}

//FAILURE FUNCTION
function failure() {
    quizModal.classList.add("show-result");
    modalCnt.innerHTML = `
        <h3 id="result">Failed! Your result is ${c}</h3>
        <img id="image-result" src="media/images/failed-quiz.jpg" alt="ramen-signup-pic">
    `
}

//EVENT LISTENERS
//remove modal, reset score and reload page
resultClose.addEventListener("click", function() {
    quizModal.classList.remove("show-result");
    c = 0;
    location.reload();
    window.scrollTo(0, 0);
})

//remove modal, reset score and reload page on window click
window.addEventListener("click", function(e) {
    if(e.target === quizModal) {
        quizModal.classList.remove("show-result");
        c = 0;
        location.reload();
        window.scrollTo(0, 0);
    } else {
        return false;
    }
})

   