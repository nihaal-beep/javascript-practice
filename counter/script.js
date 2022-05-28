class Counter{
    constructor(num)
    {
        this.num = num;
    }

    chooseOperation(operation){
        switch(operation){
            case "increase":
                this.num+=1;
                break;
            case "decrease":
                this.num-=1;
                break;
            case "reset":
                this.num=0;
        }
    }
    displayNum(){
        result.innerText=this.num;
    }
    
}
const opButtons=document.querySelectorAll(".op");
const clButton = document.querySelector(".cl");
const result = document.querySelector(".num");
let resnum = parseFloat(result.innerText);
const counter = new Counter(resnum);
opButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        counter.chooseOperation(button.innerText,resnum);
        counter.displayNum();
    })
})


