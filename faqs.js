console.time("start");
let question = document.querySelectorAll(".question");
let answer = document.querySelectorAll(".answer");

for (let i = 0; i < question.length; i++) {
    question[i].addEventListener('click', function(){
        this.classList.toggle("active");
        if(answer[i].style.display === "block"){
            answer[i].style.display = "none";
        }
        else{
            answer[i].style.display = "block";
        }
    });
}

console.timeEnd("start");
