document.querySelectorAll(button).forEach((btn)=>{
btn.addEventListener("click",function () {
  var btnInnerHtml= this.innerHTML;
  makeSound(btnInnerHtml);
  buttonAnimation(btnInnerHtml);
})
});
document.addEventListener("keypress",function(event){
let key=event.key;
makeSound(key);
buttonAnimation(key);
})

function makeSound(key){
  switch(key){
   case "w":
    var audio=new Audio("./sounds/tom-1.mp3");
    break;
    case "a":
    var audio=new Audio("./sounds/tom-2.mp3");
    break;
    case "s":
    var audio=new Audio("./sounds/tom-3.mp3");
    break;
    case "d":
    var audio=new Audio("./sounds/tom-4.mp3");
    break;
    case "j":
    var audio=new Audio("./sounds/sanre.mp3");
    break;
    case "k":
    var audio=new Audio("./sounds/crash.mp3");
    break;
    case "l":
    var audio=new Audio("./sounds/kick-bass.mp3");
    break;
   
  }
};
function buttonAnimation(activeButton){
  var activeButton=document.querySelector("."+activeButton);
  if(activeButton){
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.removed("pressed");
    },100)
  }

}