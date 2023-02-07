//This will host all story items and all transition functions for the html documents. 
//This will not have any DOM scripts either, just the transition functions. 
//The HTMLObjects will be created through HTML, not JavaScript
//However this will set the text of the main HTMLObject (paragraphs mainly) and will be assigned a function for each for a specific story order. 


//Paragraph tags for storyX.html
var storyText = document.getElementById("storyText");
function startStory(){
    document.location = 'story1.html';
    storyText.innerText = "One Day while walking to a Mc. Donalds on Old Kent Road, Mr. Monopoly saw a man who had a lot of money buy the place with cash he had on him."
    
}

function sourceInformation(){
    document.location = "README.md";
}