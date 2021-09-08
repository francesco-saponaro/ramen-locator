let toggle = document.querySelector(".toggle");
let regContainer = document.querySelector(".regional-container");
let closeMenu = document.getElementById("close-menu");
let modalOpen = document.getElementById("modal-open");
let modalClose = document.getElementById("modal-close");
let modal = document.getElementById("modal");
let windowModalClose = document.getElementById("window-modal-close");
let windowModal = document.getElementById("window-modal");

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

//google maps feature open modal
window.onload = (event) => {
    windowModal.classList.add("show-modal");
};

//google maps feature close modal
windowModalClose.addEventListener("click", function() {
    windowModal.classList.remove("show-modal");
});

//google maps feature close modal on window click
window.addEventListener("click", function(e) {
    if(e.target === windowModal) {
        windowModal.classList.remove("show-modal");
    } else {
        return false;
    }
});
