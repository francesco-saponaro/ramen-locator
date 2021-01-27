let answers = document.querySelectorAll(".answer");
let labels = document.getElementsByTagName('LABEL');

answers.forEach(function(answer) {
    answer.addEventListener("click", function(e) {
        if(answer.classList.contains("correct")) {
           console.log("correct");
            for (var i = 0; i < labels.length; i++) {
                if (labels[i].htmlFor != '') {
                    var elem = document.getElementById(labels[i].htmlFor);
                    if (elem)
                        elem.label = labels[i];         
                }
            }
                if(!this.label.innerText.includes("CORRECT!")) {
                    this.label.innerHTML += `<span class="green-color"> - CORRECT!</span>`;
                } else {
                    return false;
                }
        } else if (answer.classList.contains("wrong")) {
            console.log("wrong");
            for (var i = 0; i < labels.length; i++) {
                if (labels[i].htmlFor != '') {
                    var elem = document.getElementById(labels[i].htmlFor);
                    if (elem)
                        elem.label = labels[i];         
                }
            }
                if(!this.label.innerText.includes("WRONG!")) {
                    this.label.innerHTML += `<span class="red-color"> - WRONG!</span>`; 
                } else {
                    return false;
                }
            }
        })
    })
