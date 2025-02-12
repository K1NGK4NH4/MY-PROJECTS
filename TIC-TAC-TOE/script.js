console.log("Welcome to Tic tac toe")
let music = new Audio("music.mp3")
let audioturn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn="X"
let isgameover=false

//Function to change the turn
const changeTurn=()=>{
    return turn==="X" ? "0" : "X"
}

//Function to win the game
const checkwin=()=>{
    let boxtext=document.getElementsByClassName('boxText')
     let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,17,0],
        [6,7,8,5,28,0],
        [0,3,6,-7,17,90],
        [1,4,7,5,17,90],
        [2,5,8,16,17,90],
        [0,4,8,5,17,45],
        [2,4,6,4,17,135],
    ]
  wins.forEach(e=>{
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=='')){
        document.querySelector(".info").innerText=boxtext[e[0]].innerText + " Won";
        isgameover=true
        document.getElementsByTagName('img')[0].style.width="180px"
        document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        document.querySelector(".line").style.width="25vw"
        gameover.play()
    }
  })  
}

//Main logic
music.play()

let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector(".boxText")
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn = changeTurn();
            audioturn.play();
            checkwin();
        if(!isgameover){
            document.querySelector(".info").innerText = "Turn for " +turn;        }             
        }
    })
})

//Reset button

let button=document.querySelector(".reset")
button.addEventListener('click',()=>{
    Array.from(document.getElementsByClassName('boxText')).forEach((e)=>e.innerText='')
    document.querySelector(".info").innerText="Turn for X";
    document.getElementsByTagName('img')[0].style.width=0;
    document.querySelector('.line').style.width=0;
})

