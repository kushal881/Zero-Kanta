let boxes=document.querySelectorAll(".boxes");
let turnX=true;
let turn1=document.querySelector(".turn1");
let turn2=document.querySelector(".turn2");
let msg=document.querySelector(".msg")
let span=document.querySelector("#result")
let reset=document.querySelector("#reset")
let ng=document.querySelector("#ng")
let WinnerCondition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
boxes.forEach(box=>{
    box.addEventListener("click",()=>{
        if(turnX){
        box.innerText="X";
        box.style.color="#7e0101"
        turn2.classList.add("b-s")
        turn1.classList.remove("b-s")
        turnX=false;
    }
    else{
        box.innerText="O";
        box.style.color="#860aeb"
        turn1.classList.add("b-s")
        turn2.classList.remove("b-s")
        turnX=true;
    }
    checkWinnner();
    })
})

function checkWinnner(){
    for(let condition of WinnerCondition){
       let box1= boxes[condition[0]].innerText;
       let box2= boxes[condition[1]].innerText;
       let box3= boxes[condition[2]].innerText;
       if(box1!==""&&box2!==""&&box3!==""){
        if(box1===box2&&box2===box3){
            showResult(box1);
        }
       }
    }
}

function showResult(result){
    boxes.forEach(box=>{
        box.disabled=true;
        box.classList.remove("hover")
    })
    msg.classList.remove("hide")
    span.innerText=result
    if(result==="X"){
        span.style.color="#7e0101"
    }
    else{
        span.style.color="#860aeb"
    }
}

reset.addEventListener("click",()=>{
    boxes.forEach(box=>{
        box.innerText=""
        box.disabled=false;
        box.classList.add("hover")
        msg.classList.add("hide")
    })
})