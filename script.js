let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")
let newbtn = document.querySelector("#newbtn")
let para = document.querySelector("#msg")

let turnO = true;//player1, player2

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let count = 0;
const resetGame = ()=>{
    turnO = true;
    count =0;
    enableBoxes();
    para.classList.add("hide")


}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O"
            box.style.color= "black"
            turnO = false;
        }
        else{
            box.innerText= "X"
            turnO = true;
        }
        count++;
        box.disabled=true;
        checkWinner();
    })
})
const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showwinner = (winner)=>{
    para.innerHTML = `<b>Congratulations, The Winner is: ${winner}</b>`
    para.classList.remove("hide")
    disableBoxes();
};
const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let position1 = boxes[pattern[0]].innerText
        let position2 = boxes[pattern[1]].innerText
        let position3 = boxes[pattern[2]].innerText
        if(position1 != "" &&position2 != ""&& position3 != ""){
            if(position1 === position2 && position2==position3){
                showwinner(position1);
                return;
            }
        }
    }
    if (count === 9) {
        para.innerHTML = `<b>It's a draw!</b>`;
        para.classList.remove("hide");
    }
}
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame)