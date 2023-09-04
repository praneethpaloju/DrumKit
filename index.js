for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function (e) {
  makeSound(e.key);
  buttonAnimation(e.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
    case "W":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a" :
    case "A":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
    case "S":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
    case 'D':
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
    case 'J':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
    case "K":
      var kick = new Audio("sounds/crash.mp3");
      kick.play();
      break;
    case "l":
    case "L":
      var crash = new Audio("sounds/kick-bass.mp3");
      crash.play();
      break;

    default:
      console.log(buttonText);
  }
}

function buttonAnimation(key) {
  var pressedKey = document.querySelector("." + key);
  pressedKey.classList.add("pressed");

  setTimeout(function () {
    pressedKey.classList.remove("pressed");
  }, 100);
}
