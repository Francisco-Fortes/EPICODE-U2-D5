const nodeInput = document.getElementById("input-field");
const nodeInputButton = document.getElementById("input-button");
const nodeUl = document.getElementById("membersList");
const nodeMinusButton = document.getElementById("minus-button");
const nodePlusButton = document.getElementById("plus-button");
const numberOfTeams = document.getElementById("number-teams");
let number = 0;
const nodeTeamLists = document.getElementById("team-lists");
const nodeAssignButton = document.getElementById("assign-button");
const nodeResetButton = document.getElementById("reset-button");
const names = document.getElementsByClassName("nameList");
const nodeTeamList = document.getElementsByClassName("team-list");
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
  let newUl = document.createElement("ul");
  if (number >= 1) {
    for (let i = 0; i < number; i++) {
      newUl.innerText = "Team " + number;
      nodeTeamLists.append(newUl);
      newUl.classList.add("team-list");
    }
  }
});

//Substracting 1 to the total number of Teams
nodeMinusButton.addEventListener("click", function () {
  number -= 1;
  if (number <= 0) {
    number += 1;
  } else if (number <= 1) {
    alert("Minimum number of Teams is 1.");
  }
  numberOfTeams.innerText = number;
  for (let i = 0; i < number; i++) {
    nodeTeamLists.removeChild(nodeTeamLists.children[number]);
  }
  if (number < 1) {
    alert("Minimum number of Teams is 1.");
  }
});

nodeAssignButton.addEventListener("click", function () {
  if (number === 0) {
    alert("Please select a number of teams");
  } else if (names.length <= 0) {
    alert("Please add members to the list and press this button again");
  } else {
    for (let i = 0; i < names.length; i++) {
      nodeTeamList[i].appendChild(names[i]);
      //How can I set up the actual min-Height according to the numbers on <li> that are created
      nodeUl.style.minHeight = "300px";
      nodeUl.removeChild(names);
    }
  }
});
