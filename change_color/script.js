const colors=["red","blue","green","yellow","white"];
const button = document.querySelector("h1");
const body = document.querySelector("body");
body.style.backgroundColor = "violet";
button.addEventListener("click",changebg);
function changebg(){
    console.log(Math.floor(Math.random()*5));
    body.style.backgroundColor=colors[Math.floor(Math.random()*5)];
    console.log(colors[Math.floor(Math.random()*5)])
}
