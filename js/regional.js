let toggle = document.querySelector(".toggle");
let regContainer = document.querySelector(".regional-container");
let closeMenu = document.getElementById("close-menu");
let modalOpen = document.getElementById("modal-open");
let modalClose = document.getElementById("modal-close");
let modal = document.getElementById("modal");

toggle.addEventListener("click", function() {
    toggle.classList.add("active");
    regContainer.classList.add("active");
});

closeMenu.addEventListener("click", function() {
    toggle.classList.remove("active");
    regContainer.classList.remove("active");

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

    /**let header = document.getElementById("header-color");
    let str = header.innerHTML;
    let headerChange = "";
    for(let i = 0; i < str.length; i++) {
        if(str[i] == "a") {
             headerChange += str.charAt(i).fontcolor("red");
        } else {
             headerChange += str[i];
        }
    }
    header.innerHTML = headerChange;**/


