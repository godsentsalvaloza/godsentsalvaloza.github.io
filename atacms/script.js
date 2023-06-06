//EXPERIMENTAL

//ADDITION GAME


//VARIABLES
const startContainer = document.querySelector ("#startContainer");

const defeatContainer = document.querySelector ("#defeatContainer");
const victoryContainer = document.querySelector ("#victoryContainer")

const firstQuestionContainer = document.querySelector ("#firstQuestion");
const firstQuestionFirstOption = document.querySelector ("#firstQuestionFirstOption");
const firstQuestionSecondOption = document.querySelector ("#firstQuestionSecondOption");
const firstQuestionThirdOption = document.querySelector ("#firstQuestionThirdOption");
const firstQuestionFourthOption = document.querySelector ("#firstQuestionFourthOption");

const secondQuestionContainer = document.querySelector ("#secondQuestion");
const secondQestionFirstOption = document.querySelector ("#secondQuestionFirstOption");
const secondQuestionSecondOption = document.querySelector ("#secondQuestionSecondOption");
const secondQuestionThirdOption = document.querySelector ("#secondQuestionThirdOption");
const secondQuestionFourthOption = document.querySelector ("#secondQuestionFourthOption");

const thirdQuestionContainer = document.querySelector ("#thirdQuestion");
const thirdQestionFirstOption = document.querySelector ("#thirdQuestionFirstOption");
const thirdQuestionSecondOption = document.querySelector ("#thirdQuestionSecondOption");
const thirdQuestionThirdOption = document.querySelector ("#thirdQuestionThirdOption");
const thirdQuestionFourthOption = document.querySelector ("#thirdQuestionFourthOption");

const fourthQuestionContainer = document.querySelector ("#fourthQuestion");
const fourthQestionFirstOption = document.querySelector ("#fourthQuestionFirstOption");
const fourthQuestionSecondOption = document.querySelector ("#fourthQuestionSecondOption");
const fourthQuestionThirdOption = document.querySelector ("#fourthQuestionThirdOption");
const fourthQuestionFourthOption = document.querySelector ("#fourthQuestionFourthOption");

const fifthQuestionContainer = document.querySelector ("#fifthQuestion");
const fifthQestionFirstOption = document.querySelector ("#fifthQuestionFirstOption");
const fifthQuestionSecondOption = document.querySelector ("#fifthQuestionSecondOption");
const fifthQuestionThirdOption = document.querySelector ("#fifthQuestionThirdOption");
const fifthQuestionFourthOption = document.querySelector ("#fifthQuestionFourthOption");
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
    secondQuestionContainer.style.display = "block"
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


//SECOND QUESTION
document.querySelector("#secondQuestionFirstOption").onclick = function () {
    secondQuestionContainer.style.display = "none"
    defeatContainer.style.display = "block"
}
document.querySelector("#secondQuestionSecondOption").onclick = function () {
    secondQuestionContainer.style.display = "none"
    defeatContainer.style.display = "block"
}
document.querySelector("#secondQuestionThirdOption").onclick = function () {
    secondQuestionContainer.style.display = "none"
    defeatContainer.style.display = "block"
}
document.querySelector("#secondQuestionFourthOption").onclick = function () {
    secondQuestionContainer.style.display = "none"
    thirdQuestionContainer.style.display = "block"

}
//</>SECOND QUESTION

//THIRD QUESTION
document.querySelector("#thirdQuestionFirstOption").onclick = function () {
    thirdQuestionContainer.style.display = "none"
    defeatContainer.style.display = "block"
}
document.querySelector("#thirdQuestionSecondOption").onclick = function () {
    thirdQuestionContainer.style.display = "none"
    defeatContainer.style.display = "block"
}
document.querySelector("#thirdQuestionThirdOption").onclick = function () {
    thirdQuestionContainer.style.display = "none"
    fourthQuestionContainer.style.display = "block"

}
document.querySelector("#thirdQuestionFourthOption").onclick = function () {
    thirdQuestionContainer.style.display = "none"
    defeatContainer.style.display = "block"

}
//</>THIRD QUESTION

//FOURTH QUESTION
document.querySelector("#fourthQuestionFirstOption").onclick = function () {
    fourthQuestionContainer.style.display = "none"
    fifthQuestionContainer.style.display = "block"
    
}
document.querySelector("#fourthQuestionSecondOption").onclick = function () {
    fourthQuestionContainer.style.display = "none"
    defeatContainer.style.display = "block"
}
document.querySelector("#fourthQuestionThirdOption").onclick = function () {
    fourthQuestionContainer.style.display = "none"
    defeatContainer.style.display = "block"

}
document.querySelector("#fourthQuestionFourthOption").onclick = function () {
    fourthQuestionContainer.style.display = "none"
    defeatContainer.style.display = "block"

}
//</>FOURTH QUESTION

//FIFTH QUESTION
document.querySelector("#fifthQuestionFirstOption").onclick = function () {
    fifthQuestionContainer.style.display = "none"
    defeatContainer.style.display = "block"
    
}
document.querySelector("#fifthQuestionSecondOption").onclick = function () {
    fifthQuestionContainer.style.display = "none"
    victoryContainer.style.display = "block"
    
}
document.querySelector("#fifthQuestionThirdOption").onclick = function () {
    fifthQuestionContainer.style.display = "none"
    defeatContainer.style.display = "block"

}
document.querySelector("#fifthQuestionFourthOption").onclick = function () {
    fifthQuestionContainer.style.display = "none"
    defeatContainer.style.display = "block"

}
//</>FIFTH QUESTION


//</>ADDITION GAME