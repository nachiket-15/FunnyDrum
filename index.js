// alert("Hello Adv DOM");

//Done on my own
// document.querySelector(".w").addEventListener("click",function(){
//     var audio = new Audio("./sounds/tom-1.mp3");
//     audio.play();
// });


// document.querySelector(".a").addEventListener("click",function(){
//     var audio = new Audio("./sounds/tom-2.mp3");
//     audio.play();
// });


// document.querySelector(".s").addEventListener("click",function(){
//     var audio = new Audio("./sounds/tom-3.mp3");
//     audio.play();
// });


// document.querySelector(".d").addEventListener("click",function(){
//     var audio = new Audio("./sounds/tom-4.mp3");
//     audio.play();
// });


// document.querySelector(".j").addEventListener("click",function(){
//     var audio = new Audio("./sounds/snare.mp3");
//     audio.play();
// });


// document.querySelector(".k").addEventListener("click",function(){
//     var audio = new Audio("./sounds/crash.mp3");
//     audio.play();
// });


// document.querySelector(".l").addEventListener("click",function(){
//     var audio = new Audio("./sounds/kick-bass.mp3");
//     audio.play();
// });

// Angela solution 
var numOfDrumButtons=document.querySelectorAll(".drum").length;


//CLICK EVENT LISTENER


// The loop you have in your code is iterating over a set of drum buttons and adding a click event listener to each of them. This loop is necessary to ensure that the click event listener is attached to each drum button, so when any button is clicked, the corresponding sound is played.

for(var i=0;i<numOfDrumButtons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        //We will use currently selected buttons html so choose which sound to play
        var btnInnerHTML=this.innerHTML;
        buttonAnimation(btnInnerHTML);
        switch(btnInnerHTML){
            case "w":
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
            break;


            case "a":
                var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
            break;

            case "s":
                var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
            break;

            case "d":
                var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
            break;

            case "j":
                var snare=new Audio("sounds/snare.mp3");
                snare.play();
            break;

            case "k":
                var crash=new Audio("sounds/crash.mp3");
                crash.play();
            break;

            case "l":
                var kick=new Audio("sounds/kick-bass.mp3");
                kick.play();
            break;

        }

    });


    
}

//For below:
// In this specific case, a loop is not necessary because you are not dynamically attaching event listeners to multiple elements. The keydown event is attached to the entire document, and the switch statement handles the logic based on the specific key pressed.

//The purpose of a loop in the previous example was to iterate over a collection of drum buttons and attach a click event listener to each one individually. In contrast, for the keyboard event listener, you are only interested in a single event attached to the document itself.

//KEYBOARD EVENT LISTENERS
document.addEventListener("keydown",function(event){

    var pressed_key=event.key;
    buttonAnimation(pressed_key);

    switch(pressed_key){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;


        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

    }

});



function buttonAnimation(currentKey)
{
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){activeButton.classList.remove("pressed")},100);
}




