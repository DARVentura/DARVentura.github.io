const Boxes = document.getElementsByClassName("Box")

for (let i = 0; i < Boxes.length; i++) {
   Boxes[i].addEventListener("click", ChangeGridHeightAndWidth);
}

function ChangeGridHeightAndWidth (){
   const Grids = document.getElementsByClassName("Box");

   for (let i =0; Grids.length; i++){
      Grid = Grids[i]

   const Height = Math.floor(Math.random() * 51)
   const Width  = Math.floor(Math.random() * 51)
   
   Grid.style.height = Height + "vh";
   Grid.style.width = Width + "vw";

   const audio = new Audio("Assets/Beep.mp3");
   audio.play();
   } 
}

