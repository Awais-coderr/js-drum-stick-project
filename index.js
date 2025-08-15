// document.querySelector("button").addEventListener("click",handleClick);
// document.querySelector("button").addEventListener("click",()=>{
//   alert('function call')
// });
// document.querySelectorAll("button").forEach((btn)=>{
//    btn.addEventListener("click",()=>{
//     alert("button clicked")
//    })
// });
// document.querySelectorAll("button").forEach((btn)=>{
//   btn.addEventListener("click",function(){
//    var btn=this.innerHTML;
//    var audio=new Audio("./sounds/tom-1.mp3");
//    audio.play();
//   })
// });

document.querySelectorAll("button").forEach((btn)=>{
  btn.addEventListener("click",function(){
   var btnInnerHtml=this.innerHTML;
   makeSound(btnInnerHtml)
   buttonAnimation(btnInnerHtml)
  })
});
document.addEventListener("keypress",(event)=>{
  let key=event.key;
  makeSound(key)
  buttonAnimation(key)
})

function makeSound(key){
  switch(key){
  
case "w":
  var audio =new Audio("./sounds/tom-1.mp3");
  audio.play()
  break;
  case "a":
    var audio =new Audio("./sounds/tom-2.mp3");
    audio.play()
    break;
    case "s":
    var audio =new Audio("./sounds/tom-3.mp3");
  audio.play()
  break;
  case "d":
    var audio =new Audio("./sounds/tom-4.mp3");
  audio.play()
  break;
  case "j":
    var audio =new Audio("./sounds/snare.mp3");
  audio.play()
  break;
  case "k":
    var audio =new Audio("./sounds/crash.mp3");
  audio.play()
  break;
  case "l":
    var audio =new Audio("./sounds/kick-bass.mp3");
  audio.play()
  break;
}
}

function buttonAnimation(currentKay){
  var activeButton =document.querySelector("."+ currentKay);
  if(activeButton){
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");

    },100)
  }
}