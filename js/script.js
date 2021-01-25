let toggle = document.querySelector(".toggle");
let container = document.querySelector(".container");
let tabItem = document.querySelectorAll(".tab-item");
let tabContentItem = document.querySelectorAll(".tab-content-item");
let closeMenu = document.getElementById("close-menu");
let modalOpen = document.getElementById("modal-open");
let modalClose = document.getElementById("modal-close");
let modal = document.getElementById("modal");

//EVENT LISTENERS
toggle.addEventListener("click", function() {
    toggle.classList.add("active");
    container.classList.add("active");
});

closeMenu.addEventListener("click", function() {
    toggle.classList.remove("active");
    container.classList.remove("active");
});

modalOpen.addEventListener("click", function() {
    modal.classList.add("show-modal");
})

modalClose.addEventListener("click", function() {
    modal.classList.remove("show-modal");
})

window.addEventListener("click", function(e) {
    if(e.target === modal) {
        modal.classList.remove("show-modal");
    } else {
        return false;
    }
})

tabItem.forEach(function(item) {
     item.addEventListener("click", selectItem);
})

//TAB SELECTOR FUNCTIONS
function selectItem() {
    removeBorder();
    removeTab();
    
    this.classList.add("tab-active");
    let tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add("show-tab");
}

function removeBorder() {
    tabItem.forEach(function(item) {
        item.classList.remove("tab-active");
    })
}

function removeTab() {
    tabContentItem.forEach(function(item) {
        item.classList.remove("show-tab");
    })
}


