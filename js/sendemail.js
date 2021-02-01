//EMAIL.JS FUNCTION
function sendMail(contactForm) {
    emailjs.send("service_jfwabq8", "ramen-locator", {
        "from_email": contactForm.emailaddress.value
    })
    .then(function(response) {
        console.log("SUCCESS", response);
    }, function(error) {
        console.log("ERROR", error);
    });
    return false;  
}

//CLEAR TEXT ON SUBMISSION
let form = document.getElementById("form");
let modalForm = document.querySelectorAll(".modal-form");
let email = document.getElementById("email");
let modalEmail = document.querySelectorAll(".modal-email");
let modalCnt = document.querySelector(".modal-content");

function clearValue(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    input.value = "";
  }
}

//all pages modal form event listener
modalForm.forEach(function(forms) {
    forms.addEventListener('submit', function(e) {
        e.preventDefault();
        modalEmail.forEach(function(emails) {
            clearValue(emails);
            modalCnt.innerHTML = `
                <h3>Welcome to the Ramen world!</h3>
                <img src="media/images/submission-pic.webp" alt="submission-pic">
            `;
            //<a href='https://www.freepik.com/vectors/food'>Food vector created by catalyststuff - www.freepik.com</a>
        });
    });
});

//main page mailing list event listener
form.addEventListener('submit', function(e) {
  e.preventDefault();
  clearValue(email);
});



