let image = document.getElementById("image");
let message = document.getElementById("message");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");

function display(story, imageSrc) {
    image.src = imageSrc;
    message.innerHTML = story;
}

function woods() {
   display("Your eyes flutter open. Around you is a green wood with towering trees. As you get to your feet and brush dirt off your knees, you think about where you want to go next.", "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80");
}

woods();