/* Function Plays A Sound When A Cell Is Clicked By User */
document.getElementById("BoxContainer").addEventListener("click", PlaySound);

function PlaySound() {
    let audio = new Audio("GridBoxAssets/ClickSound.mp3");
    audio.play();
}

/* Function Changes The Cell The User Has Clicked On To A Random RGB Created Color */
let SmallBoxList = document.getElementsByClassName("SmallBox");

for (let i = 0; i < SmallBoxList.length; i++) {
    SmallBoxList[i].addEventListener("click", RandomColorSmallBoxCell);
  }

function RandomColorSmallBoxCell() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256); 
  
    const NewRGBColor = `rgb(${r}, ${g}, ${b})`; 
  
    this.style.backgroundColor = NewRGBColor;
    this.title = NewRGBColor
  }