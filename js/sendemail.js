//EMAIL.JS FUNCTION
function sendMail(contactForm) {
    emailjs.send("service_jfwabq8", "ramen-locator", {
        "from_email": contactForm.emailaddress.value
    })
    .then(function(response) {
        console.log("SUCCESS", response)
    }, function(error) {
        console.log("ERROR", error)
    })
    return false;  
};

//CLEAR TEXT ON SUBMISSION
let form = document.getElementById("form");
let modalForm = document.querySelectorAll(".modal-form");
let email = document.getElementById("email");
let modalEmail = document.querySelectorAll(".modal-email");

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
        });
    });
});

//main page mailing list event listener
form.addEventListener('submit', function(e) {
  e.preventDefault();
  clearValue(email);
});



