class Item {
    constructor(name, value, hasItem) {
        this.name = name;
        this.value = value;
        this.hasItem = false;
    }
}

let items = [new Item("key", 20), new Item("ruby", 100)];
let coins = 0;

// The DOM ------

// Using HTML and JS
let pElement = document.getElementById("message");
let imageElement = document.getElementById("picture");
let button1Element = document.getElementById("button1");
let button2Element = document.getElementById("button2");
let button3Element = document.getElementById("button3");
let p2Element = document.getElementById("pocket");
let inputElement = document.getElementById("response")
let submitButtonElement = document.getElementById("submit");

play();

function play() {
    //reset inventory
    coins = 0;
    for (let i = 0; i < items.length; i++) {
        items[i].hasItem = false;
    }
    //go to woods
    continueStory("You came to the woods.", "Go Left", "Go Right", "Die", goLeft, goRight, die, "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
}

//Locations
function goToVillage() {
    continueStory("You come to a bustling village.", "Go to the Market", "Go right, up a hill", "Die", goToMarket, goToCastle, die, "https://images.unsplash.com/photo-1508913950751-d1d139a29e68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
}

function goToMarket() {
    continueStory("Welcome to the market! You can buy and sell items here.", "Buy", "Sell", "Return to village", buy, sell, goToVillage, "https://images.unsplash.com/photo-1574586597013-29bd92dc1617?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80");
}

function goToCastle() {
    items[1].hasItem = true;
    continueStory("You trudge up a hill to find a sprawling castle. You approach the gates in awe, until -- ouch -- you stub your toe. 'Fiddlesticks!' you say. Luckily, you stubbed your toe on a massive ruby, which you proceed to stuff in your pocket.", "Try the door", "Go down the hill to the village", "Die Randomly", tryDoor, goToVillage, die, "https://images.unsplash.com/photo-1524397057410-1e775ed476f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
}

function goToTreasureRoom() {
    continueStory("You found the treasure room! Small problem though: there's a very angry dragon sitting on top of all the gold.", "Run!", "Battle the Dragon!", "Eat Cheese", goToCastle, battle, eatCheese, "https://thumbs-prod.si-cdn.com/dDELtbwEtmDWEfjMw2HaDlU_5uQ=/fit-in/1600x0/filters:focal(949x245:950x246)/https://public-media.si-cdn.com/filer/6a/e6/6ae65dac-2e24-452d-a39e-0a6a7fb280f0/smaug_par_david_demaret.jpg");
}

// Transactions
function buy() {
    continueStory("What would you like to buy? Type 'key' into the input box, then click Submit.", "Sell instead", "Go back to the village", "Die randomly", sell, goToVillage, die, "https://images.unsplash.com/photo-1530037768512-3c9a22715452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80");
    inputElement.style.display = "inline";
    submitButtonElement.style.display = "block";
    submitButtonElement.onclick = () => {
        if (inputElement.value === "key") {
            transact(items[0], true);
        } else {
            alert("That's not a valid item to buy.");
        }
    }
    showInventory();
}

function sell() {
    continueStory("What would you like to sell? Type 'ruby' into the input box, then click Submit.", "Buy instead", "Go back to the village", "Die", buy, goToVillage, die, "https://images.unsplash.com/photo-1530037768512-3c9a22715452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80");
    inputElement.style.display = "inline";
    submitButtonElement.style.display = "block";
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
            item.hasItem = true;
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
    showInventory();
}

// Transportation
function goLeft() {
    continueStory("You find a rushing river. How will you cross it?", "Swim", "Boat", "Travel Interdimensionally", swim, goToBoat, interdimensionalTravel, "https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
}

function goToBoat() {
    continueStory("You hop in the boat floating by the bank and row over to the other side. You see houses through the trees in front of you. To the left of you is more forest and what looks like a stone tower.", "Go toward the houses", "Go toward the tower", "Swim back through the river", goToVillage, goToCastle, swim, "https://images.unsplash.com/photo-1527287993547-b5d3ad9ca875?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1580&q=80");
}

function tryDoor() {
    if (items[0].hasItem) {
        alert("The door unlocked!");
        goToTreasureRoom();
    } else {
        alert("You need a key.");
    }
}

// Fatal choices
function eatCheese() {
    badEnding("You nervously reach in your pocket and start nibbling some cheese. The dragon makes you into a grilled cheese sandwich. Did you really think eating cheese was going to solve the problem?", "https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1644&q=80");
}

function interdimensionalTravel() {
    badEnding("You get stuck in a universe with only one dimension. Not sure how you're supposed to go back to existing...", "https://images.unsplash.com/photo-1529651795107-e5a141e34843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80");
}

function swim() {
    badEnding("You bravely start swimming across the river, despite there being 10-foot-tall waves and also a literal boat right next to you. You're 2 feet away from the other bank when you step on something squishy. It's a sea slug! You died of surprise. Click either button to restart in the woods.", "https://images.unsplash.com/photo-1518357019504-81a1bb8cda12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
}

function goRight() {
    badEnding("You accidentally walked off a cliff and died. Oops.", "https://images.unsplash.com/photo-1570877316396-0477e81e9d8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
}

function die() {
    changeButtons("Restart at the woods", "Restart at the woods", "Restart at the woods", play, play, play);
}

function continueStory(story, choice1, choice2, choice3, choice1Function, choice2Function, choice3Function, source) {
    showInventory();
    inputElement.style.display = "none";
    submitButtonElement.style.display = "none";
    pElement.innerText = story;
    changeButtons(choice1, choice2, choice3, choice1Function, choice2Function, choice3Function);
    imageElement.src = source;
}

function badEnding(story, source) {
    imageElement.src = source;
    pElement.innerText = story;
    die();
}

function changeButtons(choice1, choice2, choice3, choice1Function, choice2Function, choice3Function) {
    button1Element.innerText = choice1;
    button2Element.innerText = choice2;
    button3Element.innerText = choice3;
    button1Element.onclick = choice1Function;
    button2Element.onclick = choice2Function;
    button3Element.onclick = choice3Function;
}

function showInventory() {
    p2Element.innerText = "You have in your pocket: some cheese";
    for (let i = 0; i < pocket.length; i++) {
        alert(items[i]);
        if(items[i].hasItem) {
            alert("has an item");
            p2Element.innerText += ", a" + items[i].name;
        }
    }
    p2Element.innerHTML += "<br> You have " + coins + " coins.";
}