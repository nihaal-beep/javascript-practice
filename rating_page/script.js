const numbers = document.querySelectorAll(".num");
const rating = document.querySelector(".rating");
const rating_box = document.querySelector(".rating-box");
const ty_box = document.querySelector(".ty-box");
const submit_btn = document.querySelector("button");
var selected_num;

numbers.forEach(num =>{
    num.addEventListener("click",()=>{
        if(selected_num!=null){
        selected_num.style.backgroundColor="hsl(213, 19%, 15%)";
        selected_num.style.color="hsl(217, 12%, 63%)";}
        rating.innerHTML = num.innerHTML;
        num.style.backgroundColor="hsl(25, 97%, 53%)";
        num.style.color="white";
        selected_num=num;
    });

});

submit_btn.addEventListener("click",()=>{
    rating_box.classList.remove("visible");
    ty_box.classList.add("visible");
});


