const btn = document.querySelector(".submit_btn");
var list = document.querySelector(".todolist");
var tasklist = document.querySelector(".tasklist")
var checkBtn = document.createElement("button");
var crossBtn = document.createElement("button");
const txt = document.querySelector(".todo");
var counter =0;
const numtext = document.querySelector(".num")
function addList(str){
    var inpt = document.createElement("div");
    var checkBtn = document.createElement("button");
    var crossBtn = document.createElement("button");
    crossBtn.appendChild(document.createTextNode("x"));
    checkBtn.appendChild(document.createTextNode("✔"));
    inpt.classList.add("inpt_element")
    var element = document.createElement("li");
    inpt.appendChild(document.createTextNode(str));
    inpt.appendChild(checkBtn);
    inpt.appendChild(crossBtn);
    element.appendChild(inpt)
    list.appendChild(element);
    crossBtn.addEventListener("click",()=>{
        list.removeChild(element);
        
    })
    checkBtn.addEventListener("click",()=>{
        list.removeChild(element);
        counter++;
        numtext.innerHTML=counter;
        var taskelement = document.createElement("li");
        taskelement.appendChild(document.createTextNode(str));
        tasklist.appendChild(taskelement)
    })
}

btn.addEventListener("click",(event)=>
{   event.preventDefault();
    addList(txt.value);
    txt.value="";
});


