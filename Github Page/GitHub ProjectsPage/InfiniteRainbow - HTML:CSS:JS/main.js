let isDrawing;
let CurrentId = 2;
const Grid = document.getElementById("BC1");
Grid.addEventListener("click",PlaySound);

function PlaySound() {
  let audio = new Audio("Assets/Beep.mp3");
  audio.play();
}

let CellList = document.getElementsByClassName("GridCell")

for (let i = 0; i < CellList.length; i++){
    CellList[i].addEventListener("click",PaintAndGrow);
}


function PaintAndGrow() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256); 
  
    const NewRGBColor = `rgb(${r}, ${g}, ${b})`; 
  
    this.style.backgroundColor = NewRGBColor;
    this.title = NewRGBColor;

    NewCell = document.createElement("div");
    NewCell.classList.add("GridCell")
    NewCell.setAttribute("id", `GC${CurrentId}`)

    Grid.append(NewCell) 
    
    CurrentId++;

    let CellList = document.getElementsByClassName("GridCell")

    for (let i = 0; i < CellList.length; i++){
        CellList[i].addEventListener("click",PaintAndGrow);
    }
  }