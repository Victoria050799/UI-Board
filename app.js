const board = document.querySelector('#board');
const SQUARES_NUMBER= 525;
for(let i=0;i<SQUARES_NUMBER;i++){
    const square = document.createElement('div');
    square.classList.add('square');
    board.append(square);
    square.addEventListener('mouseover',()=>{
        setColor(square);
    })
    square.addEventListener('mouseleave',()=>{
        removeColor(square);
    })
}
const colors =[
    "#772222",
    "#772260",
    "#4d2277",
    "#222777",
    "#226277",
    "#22773b",
    "#FF0000",
    "#FF1493",
    "#00FA9A",
    "#00FFFF",
    "#FF4500",
    "#0000FF",
    "#FF00FF",
    "#800000",
    "#00FF00",
]

function getRandomColor(){
    return colors[Math.floor(Math.random()* colors.length)];
}
function setColor(element){
    const color = getRandomColor();
    element.style.backgroundColor= color;
    element.style.boxShadow =`inset 2px 2px 3px #121212, inset -2px -2px 3px #303030 ${color}`;
}
function removeColor(element){
    element.style.backgroundColor="#212121";
    element.style.boxShadow = `inset 2px 2px 3px #121212, inset -2px -2px 3px #303030`;
}