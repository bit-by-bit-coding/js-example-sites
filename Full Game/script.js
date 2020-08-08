let image = document.getElementById("image");
let message = document.getElementById("message");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");

function startGame() {
   display("Your eyes flutter open. Around you is a green wood with towering trees. As you get to your feet and brush dirt off your knees, you think about where you want to go next.", "https://images.unsplash.com/photo-1440581572325-0bea30075d9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80");
   button1.onclick = cliff;
   button2.onclick = die;
}

function cliff() {
    display("You fell off a cliff and died.", "https://images.unsplash.com/photo-1542317148-8b4bdccb33ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80");
    die();
}

function die() {
    button1.innerHTML = "Play Again?"
    button1.onclick = startGame;
    button2.style.display = none;
}

function display(story, source) {
    image.src = source;
    message.innerHTML = story;
}

startGame();