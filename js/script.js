let toggle = document.querySelector(".toggle");
let container = document.querySelector(".container");
let tabItem = document.querySelectorAll(".tab-item");
let tabContentItem = document.querySelectorAll(".tab-content-item");
let closeMenu = document.getElementById("close-menu");
let modalOpen = document.getElementById("modal-open");
let modalClose = document.getElementById("modal-close");
let modal = document.getElementById("modal");

//EVENT LISTENERS
//show menu
toggle.addEventListener("click", function() {
    toggle.classList.add("active");
    container.classList.add("active");
});

//close menu
closeMenu.addEventListener("click", function() {
    toggle.classList.remove("active");
    container.classList.remove("active");
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

//main-menu tab selector
tabItem.forEach(function(item) {
     item.addEventListener("click", selectItem);
});

//TAB SELECTOR FUNCTIONS
//The "selectItem" function in the script.js file was taken from Traversy Media, https://www.traversymedia.com
function selectItem() {
    removeTabActive();
    removeTabContent();
    
    this.classList.add("tab-active");
    let tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add("show-tab");
}

//remove active tab
function removeTabActive() {
    tabItem.forEach(function(item) {
        item.classList.remove("tab-active");
    });
}

//remove active tab content
function removeTabContent() {
    tabContentItem.forEach(function(item) {
        item.classList.remove("show-tab");
    });
}


