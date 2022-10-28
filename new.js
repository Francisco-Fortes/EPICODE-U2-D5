const nodeInput = document.getElementById("input-field");
const nodeInputButton = document.getElementById("input-button");
const nodeUl = document.getElementById("membersList");
const nodeMinusButton = document.getElementById("minus-button");
const nodePlusButton = document.getElementById("plus-button");
const numberOfTeams = document.getElementById("number-teams");
let number = 0;
const nodeTeamLists = document.getElementById("");
//Li created when user clicks on Add button with the input field value
nodeInputButton.addEventListener("click", function () {
  let newLi = document.createElement("li");
  newLi.innerText = nodeInput.value;
  newLi.classList.add("nameList");
  //Input field cannot be empty
  if (nodeInput.value === "") {
    alert("Please type something in the box");
  } else {
    nodeUl.appendChild(newLi);
  }
});

//Adding 1 to the total number of Teams
nodePlusButton.addEventListener("click", function () {
  number += 1;
  numberOfTeams.innerText = number;
});

//Substracting 1 to the total number of Teams
nodeMinusButton.addEventListener("click", function () {
  number -= 1;
  //   if (numberOfTeams.number < 0) {
  //     alert("Numbers of teams cannot be less than 1");
  //   } else {
  numberOfTeams.innerText = number;
  //   }
});

//Number of teams created according to the number on the span
