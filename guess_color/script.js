const boxlist = document.querySelectorAll(".box");
const color_text = document.querySelector(".rgb_val");
const livesClass= document.querySelector(".lives");
const pointClass = document.querySelector(".score");
const h1 = document.querySelector("header");
const loser = document.querySelector(".loser");
const boxWrapper = document.querySelector("main");
var points = 0;
var lives = 3;
console.log(boxlist);
function randRGB(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    const rgb_box = "rgb("+r+","+g+","+b+")";
    return rgb_box;
}
function setColor(){
boxlist.forEach(box=>{
    box.style.backgroundColor = randRGB();

})
}

function setScore(points,lives){
    pointClass.innerHTML = "Points = "+points.toString();
    livesClass.innerHTML = "Lives = "+lives.toString();
}

function setTarget(){
    const targetRGB = randRGB()
    color_text.innerHTML=targetRGB.toUpperCase();
    var right_box = Math.floor(Math.random()*6);
    boxlist[right_box].style.backgroundColor=targetRGB;
    boxlist[right_box].id="winner";
}
function displayLoss(){

    boxWrapper.style.display="none";
    h1.style.display="none";
    loser.appendChild(pointClass);
    loser.style.display="block";
    
}
    setColor();
    setTarget();
    setScore(points,lives);

    boxlist.forEach(box=>{
        box.addEventListener("click",()=>{
        console.log(box.style.backgroundColor);
        if(box.id=="winner"){
        console.log("winner");
        points++;
        setScore(points,lives);
        setColor();
        setTarget();
        box.removeAttribute("id");}
        else{
            if(lives == 1)
            {
                displayLoss();
            }
            else{
            console.log("loser");
            lives--;
            setScore(points,lives);
            setColor()
            setTarget();
            box.removeAttribute("id");}
        }
    })
    })


