const cards = document.querySelectorAll(".card");
const back = document.querySelector(".back");
const score = document.querySelector(".score");
const time = document.querySelector(".timer");
const main = document.querySelector("main");
const loser = document.querySelector(".loser");
const h1 = document.querySelector("header");
let counter = 0;
let timer = 45;
let first, second;
let lockBoard = false;
let points = 0;
time.innerHTML="45";
score.innerHTML = points;
let a;

function ready(){
    let overlay = document.querySelector(".overlay-text");
    overlay.addEventListener("click",()=>{
        overlay.classList.remove("visible");
        a=setInterval(countdown,1000);
    })
}
document.addEventListener("DOMContentLoaded",ready());

function countdown(){
    timer--;
    time.innerHTML=timer;
    if(timer == 0){
        
        clearInterval(a);
        gameOver();
    }

}
function gameOver(){
    main.style.display="none";
    h1.style.display="none";
    loser.appendChild(score);
    loser.style.display="block";
}
cards.forEach(card=>{
    console.log(card.childNodes);
    card.childNodes[3].style.backgroundColor =card.dataset.col;
})

function cardFlip(){
    if(lockBoard)return;
    if(this == first) return;
    this.classList.toggle("flip");
    if(!counter){
        counter++;
        first = this;
    }
    else{
        counter = 0;
        second = this;
        if(first.dataset.col === second.dataset.col){
            points++;
            first.removeEventListener("click",cardFlip);
            second.removeEventListener("click",cardFlip);
            resetBoard(points);
        }
        else{
            lockBoard = true;
            setTimeout(()=>{
            first.classList.remove("flip");
            second.classList.remove("flip");
            resetBoard(points);},
            1500);
        }
    }
    
}
function resetBoard(points){
    counter = 0;
    lockBoard = false;
    first=null;
    second = null;
    score.innerHTML = points;
}

(function shuffle(){
    cards.forEach(card=>{
        let randPos = Math.floor(Math.random()*12);
        card.style.order = randPos;
    })
})();



cards.forEach((card)=>{
    card.addEventListener("click",cardFlip)});
