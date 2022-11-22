let color = "Black";
document.addEventListener("DOMContentLoaded", function(){
  createBoard(16);
  let btn = document.querySelector("#popup");
  btn.addEventListener("click", function(){
   let size = getSize()
   createBoard(size);
  })
                                                                                                   


})
  const createBoard = (size) => {
  let board = document.querySelector(".board");

board.style.gridTemplateColumns = 'repeat(${size}, 1fr)';
board.style.gridTemplateRows = 'repeat(16, 1fr)';

  let numDivs = size * size;

for(let i = 0; i < numDivs; i++) {
  let div = document.createElement("div");
  div.addEventListener("mouseover", colorDiv)
  board.insertAdjacentElement("beforeend", div);

}
}

const getSize = (size) => {
  let input = prompt("plz put size");
  let message = document.querySelector("#message");
  if(input == "") {
   message.innerHTML = "plz send numbers"
  } else if(input < 0 || input > 100 ) {
    message.innerHTML = "plz send correct size"
   } else {       
    message.innerHTML = "Now you can play"
    return input;
   }
 
}
    function colorDiv() {
    if(color == "random") {
      this.style.backgroundColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
        } else {
          this.style.backgroundColor = 'black'
        }

  }
     const setColor = (colorChoice) => {
    color = colorChoice;
  }
   function  resetBoard() {
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor ="white")
  }
