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
let caughtThief = false;
let sortedCattle = false;
let foughtDragon = false;

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
    continueStory("Village Center", "You come to a bustling village full of new sights and sounds.", "Go to the Market", "Go right, up a hill", "Walk to the outskirts", goToMarket, goToCastle, goToOutskirts, "https://images.unsplash.com/photo-1508913950751-d1d139a29e68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
}

function goToMarket() {
    continueStory("Market", "Welcome to the market! You can buy and sell items here. Items for trade:<ul><li>key: 40 coins</li><li>ruby: 100 coins</li><li>taco: 10000 coins</li></ul> Select whether you want to buy or sell first. Then type what you want to trade (either 'key', 'ruby', or 'taco') into the input box and click Trade.", "Buy", "Sell", "Return to Village Center", buy, sell, goToVillage, "https://i.ytimg.com/vi/19dx6AkC_GY/maxresdefault.jpg");
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
    continueStory("Village Outskirts", "The rows of village houses give way to more and more open space. As you being to wander away from the village center, you overhear a group of villagers muttering and gesturing passionately.", "Investigate", "Enter the Tavern", "Return to Village Center", investigate, goToTavern, goToVillage, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f49b7fed-bb8c-4ce3-b207-f7ea09481dc9/d8ze8pd-63453f43-6bad-457b-b6e5-304a8013200e.png/v1/fill/w_1036,h_772,q_70,strp/pirogovo_2_by_vityar83_d8ze8pd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMDE4IiwicGF0aCI6IlwvZlwvZjQ5YjdmZWQtYmI4Yy00Y2UzLWIyMDctZjdlYTA5NDgxZGM5XC9kOHplOHBkLTYzNDUzZjQzLTZiYWQtNDU3Yi1iNmU1LTMwNGE4MDEzMjAwZS5wbmciLCJ3aWR0aCI6Ijw9MTM2NiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.6OqyMRbB291fO2AUZeB6Eek3qL0Xp_N6cQ13QXWqbVc");
}

function goToCastle() {
    items[1].hasItem = true;
    continueStory("Castle Gate", "Above a hill sits a sprawling castle. You approach the gates in awe, until -- ouch -- you stub your toe. 'Fiddlesticks!' you say. Luckily, you stubbed your toe on a massive ruby, which you proceed to stuff in your pocket.", "Go downhill to the village", "Try the door", "Walk around the village", goToVillage, tryDoor, goToOutskirts, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fcb04791-9837-40cf-9484-bafcc8c45e72/d7ahq9v-e0609643-3743-4de1-ba49-54b95f0d90d8.jpg/v1/fill/w_1063,h_752,q_70,strp/palace_of_the_corsairs__harad_by_direimpulse_d7ahq9v-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0zNTA4IiwicGF0aCI6IlwvZlwvZmNiMDQ3OTEtOTgzNy00MGNmLTk0ODQtYmFmY2M4YzQ1ZTcyXC9kN2FocTl2LWUwNjA5NjQzLTM3NDMtNGRlMS1iYTQ5LTU0Yjk1ZjBkOTBkOC5qcGciLCJ3aWR0aCI6Ijw9NDk2MSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.8k8Hmp3ze2NcXC_qNyReKFKbmkwdNcJWoepqgJ5C7H0");
    alert("You now have a ruby!");
}

function goToTreasureRoom() {
    if (foughtDragon) {
        continueStory("Treasure Room", "The treasure room lies empty.", "Go back outside", "Go back outside", "Go back outside", goToCastle, goToCastle, goToCastle, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/59e52d58-8bc8-4cc1-b8ea-7c573c3f0d9d/dbzyhwp-49189f95-cbf2-4694-8712-f085e140b922.jpg/v1/fill/w_1154,h_692,q_70,strp/dizzy_hearts__queen_llend_s_ballroom_by_exitmothership_dbzyhwp-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03MjAiLCJwYXRoIjoiXC9mXC81OWU1MmQ1OC04YmM4LTRjYzEtYjhlYS03YzU3M2MzZjBkOWRcL2Rienlod3AtNDkxODlmOTUtY2JmMi00Njk0LTg3MTItZjA4NWUxNDBiOTIyLmpwZyIsIndpZHRoIjoiPD0xMjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.vEQpd8I8iJfkTGwi8Oyl726p4yXnNdcF0iD2uprEPgA");
        hideButtons();
    } else {
        continueStory("Treasure Room", "You found the treasure room! Small problem though: there's a very angry dragon sitting on top of all the gold.", "Run!", "Battle the Dragon!", "Eat Cheese", goToCastle, battle, eatCheese, "https://thumbs-prod.si-cdn.com/dDELtbwEtmDWEfjMw2HaDlU_5uQ=/fit-in/1600x0/filters:focal(949x245:950x246)/https://public-media.si-cdn.com/filer/6a/e6/6ae65dac-2e24-452d-a39e-0a6a7fb280f0/smaug_par_david_demaret.jpg");
    }
}

// Minigames
function catchThief() {
    continueStory("Thief", "The villagers have just discovered that one of the Abastel siblings has been stealing from the community silos, but since the siblings look quite alike, they can't figure out who it is. The Abastels are named Tarron, Cyrus, Fen, and Myrr. Here's what the villagers have confirmed: <ul><li>Although the siblings started the evening in the tavern, the crime couldn't have occurred there as too many people were watching.</li><li>The siblings left the tavern at different times: one at 9:00pm, one at 9:30pm, one at 10:00pm, and one at 10:30pm.</li><li>The grain had been stolen before 9:20pm.</li><li>The siblings are aged 18, 22, 23, and 25.</li><li>The oldest sibling left the tavern 30 minutes earlier than Cyrus.</li><li>Tarron left the tavern later than Myrr.</li><li>Tarron is 22.</li><li>The youngest sibling left the tavern at 9:00.</li><li>The sibling who left the tavern at 9:30pm is either Cyrus or the 22-year-old.</li></ul> Who is the thief?", "Enter the Tavern", "Return to Village Center", "Give up", goToTavern, goToVillage, goToOutskirts, "https://images.unsplash.com/photo-1501430654243-c934cec2e1c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
    hideButtons();
    showInput("Guess");
    submitButtonElement.onclick = () => {
        let guess = inputElement.value;
        if (guess === "Myrr") {
            caughtThief = true;
            army += 20;
            alert("Myrr, you proclaim. After explaining your flawless logic, Myrr pales and then confesses. 'Thanks for sorting that out!' one of the villagers says. 'We'd have been short on food during the winter without you!'");
            goToOutskirts();
        } else {
            alert("You guess " + guess + ", but you can't back up your accusation with proof, and the confusion continues. Try again?");
        }
    }
}

function sortCattle() {
    continueStory("Sorting Cattle", "It turns out all the cows have wandered into one area and the villagers are trying to figure out how many cows they each have. 'I have twice as many cows as Silva,' says Zahra. 'I have two more cows than Zahra,' says Rishi. There are 42 cows in total. How many cows does Rishi own?", "Enter the Tavern", "Return to Village Center", "Give up", goToTavern, goToVillage, goToOutskirts, "https://images.unsplash.com/photo-1566040924976-f837330d1a5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80");
    hideButtons();
    showInput("Calculate");
    submitButtonElement.onclick = () => {
        let guess = inputElement.value;
        if (guess == 18) {
            sortedCattle = true;
            army += 20;
            alert("You're as cool as a cucumber as you handle the crisis, correctly giving Silva 8 cows, Zahra 16 cows, and Rishi 18 cows. You become very popular with the villagers, who dub you the magistrate.");
            goToOutskirts();
        } else {
            alert("You take a guess, but " + guess + " isn't the right number of cows, and the confusion continues. Try again?");
        }
    }
}

function gamble() {
    continueStory("Dice Minigame", "You decide to join the game of dice. Each die has twenty sides (you can roll a number between 1 and 20). If the two numbers on your dice are greater than 25, then each of the three villagers at the table will give you your bet. If you lose, you'll lose the money you betted. If you win, you might just earn a name for yourself! How much do you want to bet?", "Get a drink", "Leave the Table", "Leave the Table", buyDrink, goToTavern, goToTavern, "https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1265&q=80");
    hideButtons();
    showInput("Bet and Play");
    submitButtonElement.onclick = () => {
        let bet = inputElement.value;
        if (bet <= coins) {
            let roll1 = Math.floor(Math.random() * 21);
            let roll2 = Math.floor(Math.random() * 21);
            let sum = roll1 + roll2;
            alert("Your first die teeters and rolls on " + roll1 + "!");
            alert("Your second die turns up as a..." + roll2 + "!");
            if ((roll1 + roll2) > 25) {
                alert("You rolled a total of " + sum + " and won! The three villagers give you " + bet + " coins apiece. Four villagers tip their hats in respect.");
                coins += 3 * bet;
                army += 4;
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

function goToTavern() {
    continueStory("Tavern", "You slip into a warm tavern. You notice several villagers playing dice in the corner.", "Gamble", "Get a drink", "Leave the tavern", gamble, buyDrink, goToOutskirts, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/59e52d58-8bc8-4cc1-b8ea-7c573c3f0d9d/dc5agah-531475c9-64cf-46f1-9c7e-35e7ea362aa6.jpg/v1/fill/w_800,h_480,q_75,strp/dizzy_hearts__tavern_by_exitmothership_dc5agah-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD00ODAiLCJwYXRoIjoiXC9mXC81OWU1MmQ1OC04YmM4LTRjYzEtYjhlYS03YzU3M2MzZjBkOWRcL2RjNWFnYWgtNTMxNDc1YzktNjRjZi00NmYxLTljN2UtMzVlN2VhMzYyYWE2LmpwZyIsIndpZHRoIjoiPD04MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.qXK79wqJngpyzjlQqdSrtH3SlYqbNpw8qiVBdGlG-88");
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
            alert("You bought a " + item.name + ".");
            if (items[2].hasItem) {
                winGame();
            }
        } else {
            alert("You don't have enough money to buy a " + item.name + ". A " + item.name + " costs " + item.value + " coins.");
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
    purchase(5, "You bought a mug of artisan water. It tasted like normal water.", "You don't have enough money to buy a drink.");
}

function battle() {
    if (army >= 40) {
        continueStory("Legendary Fight", "Your massive army stands behind you. All of them unsheathe their swords and wave them in the air. The dragon wrinkles its nose at all those exposed armpits reeking of BO. Dragons have a sensitive sense of smell, you know. Anyway, the dragon's gone, so you can take all the treasure!", "Return to the village", "Share the treasure", "Melt the Coins", goToVillage, shareTreasure, meltCoins, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fd3a8fb7-5eef-4ae8-857d-977ef347f1e3/ddyvzm7-f52d3612-155d-4ce9-a6fc-e0dfdf39a709.jpg/v1/fill/w_1342,h_596,q_70,strp/_ice_and_fire__by_era7_ddyvzm7-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMTM3IiwicGF0aCI6IlwvZlwvZmQzYThmYjctNWVlZi00YWU4LTg1N2QtOTc3ZWYzNDdmMWUzXC9kZHl2em03LWY1MmQzNjEyLTE1NWQtNGNlOS1hNmZjLWUwZGZkZjM5YTcwOS5qcGciLCJ3aWR0aCI6Ijw9MjU2MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CrTZkXpiqJW47SjFVEGRq4d_oACirbRo2MjmGvtlmlI");
        foughtDragon = true;
        coins += 10000;
        showInventory();
    } else {
        badEnding("The dragon burped...", "...and everything caught on fire. Unfortunately, the dragon was not in a good mood today. Try making more friends before you go around fighting dragons. Teamwork makes the dream work!", goToTreasureRoom, "https://www.rpnation.com/gallery/dragon-fire-android-wallpapers.26804/full?d=1494007413");
    }
}

// Moving Between Locations
function investigate() {
    if (!caughtThief && !sortedCattle) {
        if (Math.random() < 0.5) {
            sortCattle();
        } else {
            catchThief();
        }
    } else if (!caughtThief) {
        catchThief();
    } else if (!sortedCattle) {
        sortCattle();
    } else {
        alert("Seems like they're just making small talk. The villagers disperse after awhile.")
    }
}

function goToRiver() {
    continueStory("River", "You find a rushing river. How will you cross it?", "Swim", "Boat", "Travel Interdimensionally", swim, goToBoat, interdimensionalTravel, "https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
}

function goToBoat() {
    continueStory("Out of the Wilderness!", "You hop in the boat floating by the bank and row over to the other side. You see houses through the trees in front of you. To the left of you is more forest and what looks like a stone tower.", "Go toward the houses", "Go toward the tower", "Swim back through the river", goToVillage, goToCastle, swim, "https://images.unsplash.com/photo-1527287993547-b5d3ad9ca875?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1580&q=80");
}

function tryDoor() {
    if (items[0].hasItem) {
        alert("You unlock the door with your key and the gates swing open!");
        goToTreasureRoom();
    } else {
        alert("The door is very locked. Maybe you should look for a key?");
    }
}

// Fatal choices
function meltCoins() {
    coins -= 10000;
    showInventory();
    badEnding("Melted Coins", "You melt 10000 gold coins, before realizing you'll never be able to buy your taco now. Why would you do that?", battle, "https://images.unsplash.com/photo-1586974710160-55f48f417990?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80");
}

function eatCheese() {
    badEnding("Dragon's Belly", "You nervously reach in your pocket and start nibbling some cheese. The dragon proceeds to make you into a grilled cheese sandwich. Eating cheese solves many problems, but battling dragons is not one of them.", goToTreasureRoom, "https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1644&q=80");
}

function interdimensionalTravel() {
    badEnding("One-Dimensional Space", "You get stuck in a universe with only one dimension. Not sure how you're supposed to go back to existing...", goToRiver, "https://images.unsplash.com/photo-1529651795107-e5a141e34843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80");
}

function swim() {
    badEnding("Startled by Slugs", "You dive into the river, 10-foot tall waves frothing and storming around you! You battle couragenously through the turbulent whorls (conveniently ignoring how there was a literal boat next to you earlier). Finally, you feel the riverbed beneath your toes. You're two feet away from dry land when you step on something squishy. It's a sea slug! And...*gasp*...it's bright orange! You died of surprise. Try again?", goToRiver, "https://images.unsplash.com/photo-1518357019504-81a1bb8cda12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
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

    //reset experience;
    caughtThief = false;
    sorttedCattle = false;
    foughtDragon = false;

    //go to woods
    continueStory("Our Journey Begins...", "Welcome, explorer! You're on a grand, perilous, magical quest to buy a delicious taco &#127790;. At the moment, however, you're stuck in some unfamiliar woods. Survive the wilderness and escape the forest first!", "Go Left", "Go Right", "CHEAT: Skip to village", goToRiver, goToCliff, goToVillage, "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
}

function continueStory(location, story, choice1, choice2, choice3, choice1Function, choice2Function, choice3Function, source) {
    showInventory();
    showButtons();
    h1Element.innerText = location;
    inputElement.style.display = "none";
    submitButtonElement.style.display = "none";
    pElement.innerHTML = story;
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

function hideButtons() {
    button1Element.style.display = "none";
    button2Element.style.display = "none";
}

function showButtons() {
    button1Element.style.display = "inline";
    button2Element.style.display = "inline";
}

function showInventory() {
    p2Element.innerText = "You have in your pocket: some cheese";
    for (let i = 0; i < items.length; i++) {
        if(items[i].hasItem) {
            p2Element.innerText += ", a " + items[i].name;
        }
    }
    p2Element.innerHTML += "<br> You have " + coins + " coins.";
    p2Element.innerHTML += "<br> Your friends (" + army + "):<br>";
    for (let i = 0; i < army; i++) {
        p2Element.innerHTML += '<img src="https://gamepedia.cursecdn.com/minecraft_gamepedia/d/d8/Plains_Villager_Base.png" width="20px">';
    }
}

function showInput(buttonText) {
    inputElement.value = "";
    inputElement.style.display = "inline";
    submitButtonElement.style.display = "block";
    submitButtonElement.innerText = buttonText;
}

function winGame() {
    continueStory("Holy Guacamole!", "You did it! That's right -- you've completed your grand, perilous, magical quest to buy a delicious taco, which you can now munch on with absolute satisfaction. Ahhh, who doesn't love a dose of dragons and adventure before breakfast?", "Keep playing", "Restart", "Restart", goToMarket, play, play, "https://images.unsplash.com/photo-1566740932818-cacfb780ae18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
    item[2].hasItem = false;
}