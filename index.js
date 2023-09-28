
var noOfButton = document.querySelectorAll(".drum").length;

for(var i=0; i<noOfButton; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        makeSound(this.innerHTML)
        buttonAnimation(this.innerHTML);
    });
}


document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key); 
});


function makeSound(press){
    if(press==="w"){
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    if(press==="a"){
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    if(press==="s"){
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    if(press==="d"){
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
    if(press==="j"){
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
    if(press==="k"){
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    }
    if(press==="l"){
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
}


function buttonAnimation(press){
    var activationButton = document.querySelector("."+press);
    activationButton.classList.add("pressed");
    setTimeout(function(){
        activationButton.classList.remove("pressed");
   }, 200);
}

