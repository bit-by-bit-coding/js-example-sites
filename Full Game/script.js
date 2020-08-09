// Variables Activity ------
let story = "Once upon a time...";
//alert(story);
story = "You woke up in an unfamiliar land.";
//alert(story);

// The DOM ------
//example using HTML and JS
let pElement = document.getElementById("message");
let imageElement = document.getElementById("picture");
let button1Element = document.getElementById("button1");

//example using the pure JS method
let button2Element = document.createElement("button");
document.body.appendChild(button2Element);

//innerText and src
pElement.innerText = story;
imageElement.src = "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

button1Element.innerText = "Choice 1";
button2Element.innerText = "Choice 2";

button1Element.onclick = goToWoods;

//Locations
function goToWoods() {
    imageElement.src = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
    pElement.innerText = "You came to the woods. Click Choice 1 to go left and Choice 2 to go right.";
    button1Element.onclick = goLeft;
    button2Element.onclick = goRight;
}

function goToVillage() {
    imageElement.src = "https://images.unsplash.com/photo-1508913950751-d1d139a29e68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
    pElement.innerText = "You come to a bustling village"
}

function goToCastle() {
    imageElement.src = "https://images.unsplash.com/photo-1524397057410-1e775ed476f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
    pElement.innerText = "You trudge up a hill to find a sprawling castle. You approach the gates in awe, until -- ouch -- you stub your toe. 'Fiddlesticks!' you say. Luckily, you stubbed your toe on a massive ruby."
}

// Transportation
function goLeft() {
    imageElement.src = "https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
    pElement.innerText = "You find a rushing river. How will you cross it? Click Choice 1 to go by boat. Click Choice 2 to start swimming.";
    button1Element.onclick = goToBoat;
    button2Element.onclick = swim;
}

function goToBoat() {
    imageElement.src = "https://images.unsplash.com/photo-1527287993547-b5d3ad9ca875?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
    pElement.innerText = "You hop in the boat floating by the bank and row over to the other side. You see houses through the trees in front of you. To the left of you is more forest and what looks like a stone tower. Click Choice 1 to go toward the houses and Choice 2 to go toward the tower.";
    button1Element.onclick = goToVillage;
    button2Element.onclick = goToCastle;
}

// Fatal choices
function swim() {
    imageElement.src = "https://images.unsplash.com/photo-1518357019504-81a1bb8cda12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
    pElement.innerText = "You bravely start swimming across the river, despite there being 10-foot-tall waves and also a literal boat right next to you. You're 2 feet away from the other bank when you step on something squishy. It's a sea slug! You died of surprise. Click either button to restart in the woods.";
    die();
}

function goRight() {
    imageElement.src = "https://images.unsplash.com/photo-1570877316396-0477e81e9d8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
    pElement.innerText = "You accidentally walked off a cliff and died. Oops. Click either button to restart in the woods.";
    die();
}

function die() {
    button1Element.onclick = goToWoods;
    button2Element.onclick = goToWoods;
}

//why not just change html? bc you can't vary it
// challenge to create an element: buttons

/*
practice document.getElement by creating two buttons (optionally 3 if you're moving fast)
set the innerText of the buttons
CSS
*/