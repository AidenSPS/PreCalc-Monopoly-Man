//DOM Elements
var storyText = document.getElementById("storyText");
var progressCounter = 1;
var graphButton = document.createElement("button");
graphButton.id = "graphs";
graphButton.innerText = "Graphs and Characteristics"
graphButton.setAttribute("onclick","toGraph()");
document.body.appendChild(graphButton);
var imageChanger = document.getElementById("imageChanger");
var dog = document.getElementById("dogImage");


//Global Variables
    //Arrays
    var storyStrings = [
    "He had a very expensive breed of dog and cat. And had an insane pure solid 24k gold race car. He was so rich, when he walked away from his newly acquired property, 500 dollar bills came out of his pockets with every step he took.",
    "Then before the billionaire could leave, he asked him “Good sir, how did you get all this money ?”",
    "“I simply started my own businesses and then waited for the money from the company to trickle in. I invented the steam engine and so my value for the company skyrocketed.”",
    "This moment inspired Mr. Monopoly by wealth and owning properties.",
    "Mr. Monopoly first had to start out with something and he chose to produce Rubber Ducks.",
    "He first initially decided he needed to look the part of a billionaire, so he had purchased his famous top hat. Costing 60 dollars",
    "He then had to supply the materials for the rubber ducks. costing another 100 dollars",
    "He initially finds success until he realizes that he isn’t making enough money to be as successful as the billionare who bought Mc.Donalds.",
    "So he has to start producing a new invention the world has never seen before.",
    "THE THIMBLE.",
    "This is a way to prevent an infection on your fingers when you deal with sewing.",
    "This was revolutionary and was an immediate success.",
    "Then he finally decides, I should put my money into the bank and inspire others to go down the path I once did.",
    "He then starts to deposit his remaining money into his newly acquired bank account and after 10 turns around, he finally puts all of his money into his bank account (excluding the 2000 he made, that's pocket money because he has so much money he doesn’t care).",
    "He then uses that money to buy the fastest Racecar, a rare breed of dog called the “Scottie Dog'', a Cat and a Penguin to keep himself and his house on Old Kent Road company.",
    "Thats all folks, how to make money the monopoly way from Mr. Monopoly. The End",
    "Please click the Button called, Graphs and Characteristics to see my work and characteristics"
];

//Functions relevant to the story and plot
function tellStory(){
    progressChecker();
    changeImage();
    storyText.innerText = storyStrings[progressCounter];
}

function progressChecker(){
    if(progressCounter > storyStrings.length){
        storyText.innerText = storyStrings[17];
    }
    else{
        progressCounter++
    }
}

function changeImage(progressCounter){
    switch(progressCounter){
        case 1: //Starting out at Mc.Donalds
            imageChanger.setAttribute("src","mcDonalds.jfif");
        case 4: //Starting to build company
            imageChanger.setAttribute("src","rubberDuckies.jpg");
        case 5: //Top Hat
            imageChanger.setAttribute("src","topHat.png");
        case 9: //THE THIMBLE
            imageChanger.setAttribute("src","thimble.jpg");
        case 12: //Deposit at the bank
            imageChanger.setAttribute("src","bank.jpg");
            dog.setAttribute("src","storyMonopoly.jpg");
        case 14:
            imageChanger.setAttribute("src","goldCar.png");
            dog.setAttribute("src","scottieDog.png");

    }
}


function toGraph(){
    document.location = 'graph.html';
}