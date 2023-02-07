//DOM Elements 
//ID's to the Images
    var duckCalc = document.getElementById("duckCalc");
    var thimbleCalc = document.getElementById("thimbleCalc");
    var depositCalc = document.getElementById("depositCalc");
    var tableCalc = document.getElementById("tablecalc");

//Getting the Button ID's 
    var duckButton = document.getElementById("duckButton");
    var thimbleButton = document.getElementById("thimbleButton");
    var depositButton = document.getElementById("depositButton");
    var tableButton = document.getElementById("tableButton");

function duckGraph(){
    duckCalc.style.display = "block";
    duckButton.style.display = "none";
}

function thimbleGraph(){
    thimbleCalc.style.display = "block";
    thimbleButton.style.display = "none";
}

function depositGraph(){
    depositCalc.style.display = "block";
    depositButton.style.display = "none";
}