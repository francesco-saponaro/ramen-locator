let mailingListform = document.getElementById("mailing-list-form");
let modalForm = document.querySelectorAll(".modal-form");
let email = document.getElementById("email");
let modalEmail = document.querySelectorAll(".modal-email");
let modalCnt = document.querySelector(".modal-content");

//EMAIL.JS FUNCTION
//The "sendMail" function was taken from EmailJS https://www.emailjs.com/docs, through Code Institute
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

//MAIN PAGE MAILING LIST EVENT LISTENER
if(mailingListform){
    mailingListform.addEventListener('submit', function(e) {
    e.preventDefault();
    clearValue(email);
    });
}

//ALL PAGES MODAL EVENT LISTENER
modalForm.forEach(function(forms) {
    forms.addEventListener('submit', function(e) {
        e.preventDefault();
        modalEmail.forEach(function(emails) {
            modalClearValue(emails);
        });
    });
});

//CLEAR TEXT ON SUBMISSION
//The "clearValue" function was taken from Traversy Media, https://www.traversymedia.com
function clearValue(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    input.value = "Welcome to the Ramen world!";
      setTimeout(function() {
          input.value = "";
      }, 1500);
  }
}

function modalClearValue(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    modalCnt.innerHTML = `
                <h3>Welcome to the Ramen world!</h3>
                <img src="media/images/submission-pic.webp" alt="submission-pic">
            `;
            //<a href='https://www.freepik.com/vectors/food'>Food vector created by catalyststuff - www.freepik.com</a>
    } 
}




