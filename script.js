const cardArray=[
    {
    name:"cheeseburger",
    img:"./images/cheeseburger.png"
    },
    {
    name:"fries",
    img:"./images/fries.png"
    },
    {
    name:"hotdog",
    img:"./images/hotdog.png"
    },
    {
    name:"ice-cream",
    img:"./images/ice-cream.png"
    },
    {
    name:"milkshake",
    img:"./images/milkshake.png"
    },
    {
    name:"pizza",
    img:"./images/pizza.png"
    },
    {
    name:"cheeseburger",
    img:"./images/cheeseburger.png"
    },
    {
    name:"fries",
    img:"./images/fries.png"
    },
    {
    name:"hotdog",
    img:"./images/hotdog.png"
    },
    {
    name:"ice-cream",
    img:"./images/ice-cream.png"
    },
    {
    name:"milkshake",
    img:"./images/milkshake.png"
    },
    {
    name:"pizza",
    img:"./images/pizza.png"
    }
]

const scoreDisplay=document.getElementById("scoreDisplay");
const clickDisplay=document.getElementById("clickDisplay");
const grid=document.getElementById("grid");
let cardsClickedName=[];
let cardsClickedDataId=[];
const cardsWon=[];
let clicked=0;
cardArray.sort(()=>0.5-Math.random());


generateGrid();
function generateGrid(){
    for(let i=0;i<cardArray.length;i++){
        const cards=document.createElement("img");
        cards.setAttribute("src","./images/blank.png");
        cards.setAttribute("data-id",i);
        grid.append(cards);
        cards.addEventListener("click",flipCards);
    }
}

function checkResult(){
    const cardsImgs=document.querySelectorAll("img");
    if(cardsClickedDataId[0]==cardsClickedDataId[1]){
        alert("You can't click the same item!");
        cardsImgs[cardsClickedDataId[0]].setAttribute("src","./images/blank.png");
        
    }else{
        if(cardsClickedName[0]==cardsClickedName[1]){
            cardsImgs[cardsClickedDataId[0]].setAttribute("src","./images/white.png");
            cardsImgs[cardsClickedDataId[1]].setAttribute("src","./images/white.png");
            cardsImgs[cardsClickedDataId[0]].removeEventListener("click",flipCards)
            cardsImgs[cardsClickedDataId[1]].removeEventListener("click",flipCards)
            cardsWon.push(cardsClickedName);
        }else{
            cardsImgs[cardsClickedDataId[0]].setAttribute("src","./images/blank.png");
            cardsImgs[cardsClickedDataId[1]].setAttribute("src","./images/blank.png");
        }
    }
    
    cardsClickedName=[];
    cardsClickedDataId=[];
    scoreDisplay.innerHTML=cardsWon.length*20;
    if(cardsWon.length==(cardArray.length/2)){
        scoreDisplay.innerHTML="Congo you won!!";
    }
}

function flipCards(){
    clicked++;
    clickDisplay.innerHTML=clicked;
    const cardClicked=this.getAttribute("data-id");
    cardsClickedName.push(cardArray[cardClicked].name);
    cardsClickedDataId.push(cardClicked);
    this.setAttribute("src",cardArray[cardClicked].img);
    if(cardsClickedName.length===2){
        setTimeout(checkResult,1000);
    } 
}

