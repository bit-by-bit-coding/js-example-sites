let image = document.getElementById("image");
let message = document.getElementById("message");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let pocket = document.getElementById("pocket");

let inventory = [];

// Locations
function castle() {
    inventory.push("ruby");
    display("Ahead is the crumbling ruins of a castle. As you approach the ruins, you stub your toe. Ouch. Good news though: you found a ruby!", "https://images.unsplash.com/photo-1595970470879-7084d497d4aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80");
    changeButtons("Try the door", "Return to the village");
    button1.onclick = castleDoor;
    button2.onclick = village;
}

function village() {
    display("You find a bustling village.", "https://images.unsplash.com/uploads/14123277159177add8d0b/24a675f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80");
    changeButtons("Talk to villagers", "Rob the bank");

    // Unfinished

    button1.onclick = die;
    button2.onclick = die;
}

function river() {
    display("You meander through the seemingly endless woods until you hear the distant sound of running water. The noise crescendos into a roar as you reach a wild river. How do you cross it?", "https://images.unsplash.com/photo-1593318318677-30211f88b7a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80");
    changeButtons("Build a boat", "Swim");
    button1.onclick = boat;
    button2.onclick = swim;
}

// Moving Between Locations
function boat() {
    display("You see a boat moored a ways down the bank. You quickly untie it and start rowing across. On the other bank, you see a bustling village.", "https://images.unsplash.com/photo-1527287993547-b5d3ad9ca875?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1580&q=80");
    changeButtons("Go to the village", "Leave the village");
    button1.onclick = village;
    button2.onclick = castle;
}

function castleDoor() {
    if (inventory.includes("key")) {
        display("You try your key and the lock opens!", "https://images.unsplash.com/photo-1565103759079-94b48cb32f1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80");

        // Unfinished
        changeButtons("Die", "Die");
        button1.onclick = die;
        button2.onclick = die;

    } else {
        display("You rattle the locked gates, but as rusty as they look, they won't open. Darn. Better head back.", "https://images.unsplash.com/photo-1556327070-9661a89d51db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80")
        changeButtons("Go to village", "Run off a cliff");
        button1.onclick = village;
        button2.onclick = cliff;
    }
}

// Fatal choices
function swim() {
    display("You jump in the water but the current overwelms you. You drowned.", "https://images.unsplash.com/photo-1495427513693-3f40da04b3fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80");
    die();
}

function cliff() {
    display("You fell off a cliff and died.", "https://images.unsplash.com/photo-1542317148-8b4bdccb33ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80");
    die();
}

// Basic Game Functions
function startGame() {
    display("Your eyes flutter open. Around you is a green wood with towering trees. As you get to your feet and brush dirt off your knees, you think about where you want to go next.", "https://images.unsplash.com/photo-1440581572325-0bea30075d9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80");
    changeButtons("Go Left", "Go Right");
    button1.onclick = cliff;
    button2.onclick = river;
    button2.style.display = "inline-block";
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
    pocket.innerHTML = "You have in your pocket: some air";
    for (let i = 0; i < inventory.length; i++) {
        pocket.innerHTML += ", " + inventory[i];
    }
}

function changeButtons(choice1, choice2) {
    button1.innerHTML = choice1;
    button2.innerHTML = choice2;
}

startGame();