class Item {
    constructor(name, value, hasItem) {
        this.name = name;
        this.value = value;
        this.hasItem = false;
    }
}

let items = [new Item("key", 20), new Item("ruby", 100), new Item("taco", 10000)];
let coins = 0;
let army = 0;
let isBuying = true;

// The DOM ------

// Using HTML and JS
let h1Element = document.getElementById("location");
let pElement = document.getElementById("message");
let imageElement = document.getElementById("picture");
let button1Element = document.getElementById("button1");
let button2Element = document.getElementById("button2");
let button3Element = document.getElementById("button3");
let p2Element = document.getElementById("pocket");
let inputElement = document.getElementById("response")
let submitButtonElement = document.getElementById("submit");

play();

//Locations
function goToVillage() {
    continueStory("Village Center", "You come to a bustling village.", "Go to the Market", "Walk around", "Go right, up a hill", goToMarket, goToOutskirts, goToCastle, "https://images.unsplash.com/photo-1508913950751-d1d139a29e68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
}

function goToMarket() {
    continueStory("Market", "Welcome to the market! You can buy and sell items here. Select whether you want to buy or sell first. Then type what you want to trade (either 'key', 'ruby', or 'taco') into the input box and click Trade.", "Buy", "Sell", "Return to Village Center", buy, sell, goToVillage, "https://i.ytimg.com/vi/19dx6AkC_GY/maxresdefault.jpg");
    showInput("Trade");
    submitButtonElement.onclick = () => {
        if (inputElement.value === "key") {
            transact(items[0], isBuying);
        } else if (inputElement.value === "ruby") {
            transact(items[1], isBuying);
        } else if (inputElement.value === "taco") {
            transact(items[2], isBuying);
        } else {
            alert("That's not a valid item to trade.");
        }
    }
    showInventory();
}

function goToOutskirts() {
    continueStory("Village Outskirts", "You arrive at the outskirts of the village. There, several villagers", "Buy", "Sell", "Return to Village Center", goToTavern, goToVillage, goToCastle, "https://images.unsplash.com/photo-1591804860948-cdb450a32b77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80");
    showInput("Calculate");
    submitButtonElement.onclick = () => {
        if (inputElement.value === "key") {

        } else {
            alert("That's not a valid item to trade.");
        }
    }
}

function goToTavern() {
    continueStory("Tavern", "You slip into a warm tavern. You notice several villagers playing dice in the corner.", "Gamble", "Get a drink", "Leave the tavern", gamble, buyDrink, goToVillage, "https://images.unsplash.com/photo-1591804860948-cdb450a32b77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80");
}

function gamble() {
    continueStory("Dice Minigame", "You decide to join the game of dice. Each die has twenty sides (you can roll a number between 1 and 20). If the two numbers on your dice are greater than 25, then each of the three villagers at the table will give you your bet. If you lose, you'll lose the money you betted. How much do you want to bet?", "Get a drink", "Leave the tavern", "Return to Village Center", buyDrink, goToTavern, goToVillage, "https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1265&q=80");
    showInput("Bet and Play");
    submitButtonElement.onclick = () => {
        let bet = inputElement.value;
        if (bet <= coins) {
            let roll1 = Math.floor(Math.random() * 21);
            let roll2 = Math.floor(Math.random() * 21);
            let sum = roll1 + roll2;
            alert("Your first die teeters and rolls on" + roll1 + "!");
            alert("Your second die turns up as a..." + roll2 + "!");
            if ((roll1 + roll2) > 25) {
                alert("You rolled a total of " + sum + " and won! The three villagers give you " + bet + " coins apiece.");
                coins += 3 * bet;
                showInventory();
            } else {
                alert("You rolled a total of " + sum + " and lost. :( You reluctantly hand over your " + bet + "-coin bet.")
                coins -= bet;
                showInventory();
            }
        } else {
            alert("You don't have " + bet + " coins.");
        }
    }
}

function goToCastle() {
    items[1].hasItem = true;
    continueStory("Castle Gate", "Above a hill sits a sprawling castle. You approach the gates in awe, until -- ouch -- you stub your toe. 'Fiddlesticks!' you say. Luckily, you stubbed your toe on a massive ruby, which you proceed to stuff in your pocket.", "Try the door", "Go down the hill to the village", "Die Randomly", tryDoor, goToVillage, die, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fcb04791-9837-40cf-9484-bafcc8c45e72/d7ahq9v-e0609643-3743-4de1-ba49-54b95f0d90d8.jpg/v1/fill/w_1063,h_752,q_70,strp/palace_of_the_corsairs__harad_by_direimpulse_d7ahq9v-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0zNTA4IiwicGF0aCI6IlwvZlwvZmNiMDQ3OTEtOTgzNy00MGNmLTk0ODQtYmFmY2M4YzQ1ZTcyXC9kN2FocTl2LWUwNjA5NjQzLTM3NDMtNGRlMS1iYTQ5LTU0Yjk1ZjBkOTBkOC5qcGciLCJ3aWR0aCI6Ijw9NDk2MSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.8k8Hmp3ze2NcXC_qNyReKFKbmkwdNcJWoepqgJ5C7H0");
}

function goToTreasureRoom() {
    continueStory("Treasure Room", "You found the treasure room! Small problem though: there's a very angry dragon sitting on top of all the gold.", "Run!", "Battle the Dragon!", "Eat Cheese", goToCastle, battle, eatCheese, "https://thumbs-prod.si-cdn.com/dDELtbwEtmDWEfjMw2HaDlU_5uQ=/fit-in/1600x0/filters:focal(949x245:950x246)/https://public-media.si-cdn.com/filer/6a/e6/6ae65dac-2e24-452d-a39e-0a6a7fb280f0/smaug_par_david_demaret.jpg");
}

// Transactions
function buy() {
    isBuying = true;
}

function sell() {
    isBuying = false;
}

function transact(item, isBuying) {
    imageElement.src = "https://images.unsplash.com/photo-1530037768512-3c9a22715452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80";
    if (isBuying) {
        if (coins >= item.value) {
            coins -= item.value;
            item.hasItem = true;
            alert("You bought a " + item.name);
        } else {
            alert("You don't have enough money for a " + item.name + ". A " + item.name + " costs " + item.value + " coins.");
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

function purchase(cost, purchaseResult, needMoreMoney) {
    if (coins >= cost) {
        coins -= cost;
        alert(purchaseResult);
        showInventory();
    } else {
        alert(needMoreMoney);
    }
}

function shareTreasure() {
    purchase(army, "You gave a coin to each member of your army.", "You don't have enough money.");
}

function buyDrink() {
    alert("got to drink");
    purchase(5, "You bought a mug of artisan water. It tasted like normal water.", "You don't have enough money to buy a drink.");
}

function battle() {
    if (army > 30) {
        continueStory("Dragon's Lair", "Your massive army stands behind you. All of them unsheathe their swords and wave them in the air, unintentionally revealing their armpits. The dragon wrinkles its nose at all that body odor. Dragons have a sensitive sense of smell, you know. Anyway, the dragon's gone, so you can take all the treasure now.", "Return to the village", "Share the treasure", "Die randomly", goToVillage, shareTreasure, die, "https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
        coins += 10000;
        showInventory();
    } else {
        badEnding("The dragon burped...", "Unfortunately, the dragon was not in a good mood today. Try making more friends before you go around fighting dragons. Teamwork makes the dream work!", goToTreasureRoom, "https://www.rpnation.com/gallery/dragon-fire-android-wallpapers.26804/full?d=1494007413");
    }
}

// Transportation
function goToRiver() {
    continueStory("River", "You find a rushing river. How will you cross it?", "Swim", "Boat", "Travel Interdimensionally", swim, goToBoat, interdimensionalTravel, "https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
}

function goToBoat() {
    continueStory("Out of the Wilderness!", "You hop in the boat floating by the bank and row over to the other side. You see houses through the trees in front of you. To the left of you is more forest and what looks like a stone tower.", "Go toward the houses", "Go toward the tower", "Swim back through the river", goToVillage, goToCastle, swim, "https://images.unsplash.com/photo-1527287993547-b5d3ad9ca875?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1580&q=80");
}

function tryDoor() {
    if (items[0].hasItem) {
        alert("The door unlocked!");
        goToTreasureRoom();
    } else {
        alert("The door is very locked. Maybe you should look for a key?");
    }
}

// Fatal choices
function eatCheese() {
    badEnding("Dragon's Belly", "You nervously reach in your pocket and start nibbling some cheese. The dragon proceeds to make you into a grilled cheese sandwich. Eating cheese solves many problems, but battling dragons is not one of them.", goToTreasureRoom, "https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1644&q=80");
}

function interdimensionalTravel() {
    badEnding("One-Dimensional Space", "You get stuck in a universe with only one dimension. Not sure how you're supposed to go back to existing...", goToRiver, "https://images.unsplash.com/photo-1529651795107-e5a141e34843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80");
}

function swim() {
    badEnding("Started by Slugs", "You dive into the river, 10-foot tall waves frothing and storming around you! You battle couragenously through the turbulent whorls (conveniently ignoring how there was a literal boat next to you earlier). Finally, you feel the riverbed beneath your toes. You're two feet away from dry land when you step on something squishy. It's a sea slug! And...*gasp*...it's bright orange! You died of surprise. Try again?", goToRiver, "https://images.unsplash.com/photo-1518357019504-81a1bb8cda12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
}

function goToCliff() {
    badEnding("Cliff", "You accidentally walked off a cliff and died. Oops. Keep your eyes on the road while wandering aimlessly in the wilderness :)", play, "https://images.unsplash.com/photo-1570877316396-0477e81e9d8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
}

// Functions to keep the game going
function die() { // not supposed to be part of the game -- just for loose ends I can't tie up quickly
    changeButtons("Restart at the woods", "Restart at the woods", "Restart at the woods", play, play, play);
}

function play() {
    //reset inventory
    coins = 0;
    army = 0;
    for (let i = 0; i < items.length; i++) {
        items[i].hasItem = false;
    }
    //go to woods
    continueStory("Our Journey Begins...", "Welcome, explorer! You're on a grand, perilous, magical quest to buy a delicious taco &#127790;. At the moment, however, you're stuck in some unfamiliar woods. Survive the wilderness and escape the forest first!", "Go Left", "Go Right", "CHEAT: Skip to village", goToRiver, goToCliff, goToVillage, "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
}

function continueStory(location, story, choice1, choice2, choice3, choice1Function, choice2Function, choice3Function, source) {
    showInventory();
    checkWin();
    h1Element.innerText = location;
    inputElement.style.display = "none";
    submitButtonElement.style.display = "none";
    pElement.innerText = story;
    changeButtons(choice1, choice2, choice3, choice1Function, choice2Function, choice3Function);
    imageElement.src = source;
}

function badEnding(location, story, lastLocation, source) {
    continueStory(location, story, "Try from last checkpoint", "Try from last checkpoint", "Restart", lastLocation, lastLocation, play, source);
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
    for (let i = 0; i < items.length; i++) {
        if(items[i].hasItem) {
            p2Element.innerText += ", a " + items[i].name;
        }
    }
    p2Element.innerHTML += "<br> You have " + coins + " coins.";
}

function showInput(buttonText) {
    inputElement.style.display = "inline";
    submitButtonElement.style.display = "block";
    submitButtonElement.innerText = buttonText;
}

function checkWin() {
    if (items[2].hasItem) {
        alert("You finally did it... that's right. You acquired A DELICIOUS TACO!!! Congratulations on finishing your quest!");
    }
}