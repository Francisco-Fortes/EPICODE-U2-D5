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
  numberOfTeams.innerText = number;
  for (let i = 0; i < number; i++) {
    nodeTeamLists.removeChild(nodeTeamLists.children[number]);
  }
  if (number < 1) {
    alert("Minimum number of Teams is 1.");
  }
});

nodeAssignButton.addEventListener("click", function () {
  for (let i = 0; i < names.length; i++) {
    nodeTeamList[i].appendChild(names[i]);
    console.log(names[i]);
  }
});
// nodeAssignButton.addEventListener("click", function () {
//   let newUl = document.createElement("ul");
//   for (let i = 0; i < number; i++) {
//     newUl.innerHTML = "Team" + i;
//     nodeTeamLists.append(newUl);
//     newUl.classList.add("team-list");
//   }
//   //This console.log shows an array with all the lis
//   console.log(names);
// });

//I WAS NOT CREATING THE TEAMS THATS WHY IT WAS NOT WORKING
// const teamBoard = document.getElementsByClassName("team-list");

// nodeAssignButton.addEventListener("click", function () {
//   for (let i = 0; i < names.length; i++) {
//     teamBoard.appendChild(names[i]);
//     // console.log(nodeUl);
//     console.log(names[i]);
//   }
// });
