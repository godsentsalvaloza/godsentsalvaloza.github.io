//EXPERIMENTAL

//ADDITION GAME


//VARIABLES
const startContainer = document.querySelector ("#startContainer");

const defeatContainer = document.querySelector ("#defeatContainer");

const firstQuestionContainer = document.querySelector ("#firstQuestion");
const firstQuestionFirstOption = document.querySelector ("#firstQuestionFirstOption");
const firstQuestionSecondOption = document.querySelector ("#firstQuestionSecondOption");
const firstQuestionThirdOption = document.querySelector ("#firstQuestionThirdOption");
const firstQuestionFourthOption = document.querySelector ("#firstQuestionFourthOption");
//</>VARIABLES



//START BUTTON ON CLICK
 document.querySelector("#getStarted").onclick = function() {
    startContainer.style.display = "none"
    firstQuestionContainer.style.display = "block"
 }
//</>START BUTTON ON CLICK



//FIRST QUESTION 
document.querySelector("#firstQuestionFirstOption").onclick = function() {
    firstQuestionContainer.style.display = "none"
}
document.querySelector("#firstQuestionSecondOption").onclick = function() {
    firstQuestionContainer.style.display = "none"
    defeatContainer.style.display = "block"
}
document.querySelector("#firstQuestionThirdOption").onclick = function() {
    firstQuestionContainer.style.display = "none"
    defeatContainer.style.display = "block"
}
document.querySelector("#firstQuestionFourthOption").onclick = function() {
    firstQuestionContainer.style.display = "none"
    defeatContainer.style.display = "block"
}
//</>FIRST QUESTION 


//</>ADDITION GAME