//DOM Elements
var storyText = document.getElementById("storyText");
var nextPage = document.getElementById("nextPage");

//Tot the README.md
function sourceInformation(){
    document.location = "README.md";
}


//Functions relevant to the story and plot
function startStory(){
    document.location = 'story1.html';
    storyText.innerText = "One Day while walking to a Mc. Donalds on Old Kent Road, Mr. Monopoly saw a man who had a lot of money buy the place with cash he had on him."
    nextPage.setAttribute("onclick","goldCar()");
}

function goldCar(){
    storyText.innerText = "He had a very expensive breed of dog and cat. And had an insane pure solid 24k gold race car. He was so rich, when he walked away from his newly acquired property, 500 dollar bills came out of his pockets with every step he took."
    nextPage.onclick = "dialogue()"
}