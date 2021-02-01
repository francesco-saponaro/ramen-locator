let toggle = document.querySelector(".toggle");
let regContainer = document.querySelector(".regional-container");
let closeMenu = document.getElementById("close-menu");
let modalOpen = document.getElementById("modal-open");
let modalClose = document.getElementById("modal-close");
let modal = document.getElementById("modal");

//EVENT LISTENERS
//show menu
toggle.addEventListener("click", function() {
    toggle.classList.add("active");
    regContainer.classList.add("active");
});

//close menu
closeMenu.addEventListener("click", function() {
    toggle.classList.remove("active");
    regContainer.classList.remove("active");

});

//open modal
modalOpen.addEventListener("click", function() {
    modal.classList.add("show-modal");
});

//close modal
modalClose.addEventListener("click", function() {
    modal.classList.remove("show-modal");
    location.reload();
});

//close modal on window click
window.addEventListener("click", function(e) {
    if(e.target === modal) {
        modal.classList.remove("show-modal");
        location.reload();
    } else {
        return false;
    }
});
