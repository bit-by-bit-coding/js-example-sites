let image = document.getElementById("image");
let message = document.getElementById("message");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");

function startGame() {
    display("Your eyes flutter open. Around you is a green wood with towering trees. As you get to your feet and brush dirt off your knees, you think about where you want to go next.", "https://images.unsplash.com/photo-1440581572325-0bea30075d9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80");
    changeButtons("Go Left", "Go Right");
    button1.onclick = cliff;
    button2.onclick = river;
    button2.style.display = "inline-block";
 }

function river() {
    display("You meander through the seemingly endless woods until you hear the distant sound of running water. The noise crescendos into a roar as you reach a wild river. How do you cross it?", "https://images.unsplash.com/photo-1593318318677-30211f88b7a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80");
    changeButtons("Build a boat", "Run across the water");
    button1.onclick = null;
    button2.onclick = null;
}

function cliff() {
    display("You fell off a cliff and died.", "https://images.unsplash.com/photo-1542317148-8b4bdccb33ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80");
    die();
}

function die() {
    changeButtons("Play Again!");
    button2.style.display = "none";
    button1.onclick = startGame;
    button2.onclick = null;
}

function display(story, source) {
    image.src = source;
    message.innerHTML = story;
}

function changeButtons(choice1, choice2) {
    button1.innerHTML = choice1;
    button2.innerHTML = choice2;
}

startGame();