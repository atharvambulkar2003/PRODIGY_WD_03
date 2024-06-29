let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-btn");
let winner=document.querySelector(".winner");
let length=0;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let varx=true;
let player=1;
winner.innerText="Player 1 turn";

for(let box of boxes){
    box.addEventListener("click",()=>{
        if(varx){
            box.innerText="X";
            length++;
            winner.innerText="Player 2 turn";
            player=2;
            varx=false;
        }else{
            box.innerText="O";
            length++;
            winner.innerText="Player 1 turn";
            player=1;
            varx=true;
        }
        if(length==9){
            winner.innerText=`Match Draw`;
            length=0;
            setTimeout(resetGame,1000);
        }
        box.disabled=true;
        let winnerPl=checkWinner();
        console.log(winnerPl);
        if(winnerPl){
            winner.innerText="";
            if(player==1){
                player=2;
            }else{
                player=1;
            }
            winner.innerText=`Player ${player} wins`;
            length=0;
            setTimeout(resetGame,1000);
        }
    });
}
function checkWinner(){
    for(winpattern of winPatterns){
        let val1=boxes[winpattern[0]].innerText;
        let val2=boxes[winpattern[1]].innerText;
        let val3=boxes[winpattern[2]].innerText;
        if(val1!=""&&val2!=""&&val3!=""){
            if(val1==val2&&val2==val3){
                return true;
            }
        }
    }
}
resetBtn.addEventListener("click",resetGame);
function resetGame(){
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        player=1;
        winner.innerText="Player 1 turn";
    }
}
