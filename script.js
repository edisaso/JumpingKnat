var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
var jumpSound = new Audio("jump.mp3");
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    jumpSound.play();
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
      jump();
    }
  });
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<50 && blockLeft>-50 && characterTop>=92){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);