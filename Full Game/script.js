// Variables Activity ------
let message = "Once upon a time...";
//alert(message);
message = "You woke up in an unfamiliar land.";
//alert(message);
let coins = 0;

class Item {
    constructor(name, value, hasItem) {
        this.name = name;
        this.value = value;
        this.hasItem = false;
    }
}

let items = [new Item("key", 20), new Item("ruby", 100)];

// The DOM ------

// Using HTML and JS
let pElement = document.getElementById("message");
let imageElement = document.getElementById("picture");
let button1Element = document.getElementById("button1");
let button2Element = document.getElementById("button2");
let p2Element = document.getElementById("pocket");
let inputElement = document.getElementById("response")
let submitButtonElement = document.getElementById("submit");

goToWoods();

//Locations
function goToWoods() {
    continueStory("You came to the woods.", "Go Left", "Go Right", goLeft, goRight, "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
}

function goToVillage() {
    continueStory("You come to a bustling village.", "Go to the Market", "Die", goToMarket, die, "https://images.unsplash.com/photo-1508913950751-d1d139a29e68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
}

function goToMarket() {
    continueStory("Welcome to the market! You can buy and sell items here.", "Buy", "Sell", buy, sell, "https://images.unsplash.com/photo-1574586597013-29bd92dc1617?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80");
}

function goToCastle() {
    items[1].hasItem = true;
    continueStory("You trudge up a hill to find a sprawling castle. You approach the gates in awe, until -- ouch -- you stub your toe. 'Fiddlesticks!' you say. Luckily, you stubbed your toe on a massive ruby, which you proceed to stuff in your pocket.", "Try the door", "Go down the hill to the village", tryDoor, goToVillage, "https://images.unsplash.com/photo-1524397057410-1e775ed476f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
}

// Transactions
function buy() {
    continueStory("What would you like to buy? Type 'key' into the input box, then click Submit.", "Sell instead", "Go back to the village", sell, goToVillage, "https://images.unsplash.com/photo-1530037768512-3c9a22715452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80");
    submitButtonElement.onclick = () => {
        if (inputElement.value === "key") {
            transact(items[0], true);
        } else {
            alert("That's not a valid item to buy.");
        }
    }
}

function sell() {
    continueStory("What would you like to sell? Type 'ruby' into the input box, then click Submit.", "Buy instead", "Go back to the village", buy, goToVillage, "https://images.unsplash.com/photo-1530037768512-3c9a22715452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80");
    submitButtonElement.onclick = () => {
        if (inputElement.value === "ruby") {
            transact(items[1], false);
        } else {
            alert("That's not a valid item to sell.");
        }
    }
}

function transact(item, isBuying) {
    if (isBuying) {
        if (coins >= item.value) {
            coins -= item.value;
            item.has = true;
            alert("You bought a " + item.name);
        } else {
            alert("You don't have enough money for a " + item.name);
        }
    } else {
        if (item.hasItem) {
            item.hasItem = false;
            coins += item.value;
            alert("You sold a " + item.name);
        } else {
            alert("You don't have a " + item.name);
        }
    }
}

// Transportation
function goLeft() {
    imageElement.src = "https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
    pElement.innerText = "You find a rushing river. How will you cross it? Click Choice 1 to go by boat. Click Choice 2 to start swimming.";
    button1Element.onclick = goToBoat;
    button2Element.onclick = swim;
}

function goToBoat() {
    continueStory("You hop in the boat floating by the bank and row over to the other side. You see houses through the trees in front of you. To the left of you is more forest and what looks like a stone tower. ", "Go toward the houses", "Go toward the tower", goToVillage, goToCastle, "https://images.unsplash.com/photo-1527287993547-b5d3ad9ca875?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1580&q=80");
}

function tryDoor() {
    if (items[0].hasItem) {

    } else {

    }
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
    changeButtons("Restart at the woods", "Restart at the woods", goToWoods, goToWoods);
}

function continueStory(story, choice1, choice2, choice1Function, choice2Function, source) {
    p2Element.innerText = "You have in your pocket: some air";
    for (let i = 0; i < pocket.length; i++) {
        p2Element.innerText += ", " + pocket[i].name;
    }
    p2Element.innerHTML = "<br> You have " + coins + " coins.";
    pElement.innerText = story;
    changeButtons(choice1, choice2, choice1Function, choice2Function);
    imageElement.src = source;
}

function changeButtons(choice1, choice2, choice1Function, choice2Function) {
    button1Element.innerText = choice1;
    button2Element.innerText = choice2;
    button1Element.onclick = choice1Function;
    button2Element.onclick = choice2Function;
}

//why not just change html? bc you can't vary it
// challenge to create an element: buttons

/*
practice document.getElement by creating two buttons (optionally 3 if you're moving fast)
set the innerText of the buttons
CSS
*/