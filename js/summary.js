//for responsiveness
let screenSize = 1024; //ab wann Wechsel zu Desktop Version

//erstelle die Werte für die Items
let itemAmount = 5;

let descriptions = [
  "Tasks urgent",
  "Tasks in Board",
  "Tasks To-do",
  "Tasks in Progress",
  "Awaiting Feedback",
  "Tasks done",
  "Tasks done",
];

let images = [
  "../assets/img/urgent_summary.png",
  "../assets/img/board_summary.png",
  "../assets/img/to_do_summary.png",
  "../assets/img/in_progress_summary.png",
  "../assets/img/await_feedback_summary.png",
  "../assets/img/done_summary.png",
  "../assets/img/done_summary.png",
];

let taskAmounts = [1, 2, 3, 40, 5, 6, 7]; //verändern durch Tasks
let newTaskAmounts = [1, 12, 3, 9, 5, 6, 8]; //zum Testen

//empty Array for new SummaryBoxes
let summaryBoxes = [];
let summaryBoxDivID = "summaryBox";

function initSummary() {
  init();
  createSummaryBoxes(); //creates SummaryBoxes beim laden
  // updateTaskAmounts();
}

function createSummaryBoxes() {

  docID(summaryBoxDivID).innerHTML = "";

  for (let i = 0; i < itemAmount; i++) {
    docID(
      summaryBoxDivID
    ).innerHTML += `<div id="${summaryBoxDivID}${i}"></div>`;

    summaryBoxes.push(new SummaryBox(summaryBoxDivID, i));
  }
  createfirstBox();
}

function createfirstBox() {
  //leert die Box und fügt beide Elemente in einer neuen Div hinzu,
  // um diese wiederum position relative zu machen(in css)
  docID(`item${summaryBoxDivID}0`).innerHTML = /*html*/ `
    <div  id="item${summaryBoxDivID}01" class="col">  
      <div class="row">
        <img src=${images[0]}>
        <h1 id="taskAmounts${summaryBoxDivID}0">${taskAmounts[0]}</h1>
      </div>
      <h6>${descriptions[0]}</h6>
    </div>
    <div onclick="navToBoard()"id="firstBox">
      <h6 id="upcomingDeadline">October 16, 2022</h6>
      <span>Upcoming Deadline</span>
    </div>
 `;
}

function updateTaskAmounts() {
  for (let index = 0; index < newTaskAmounts.length; index++) {
    const newNumber = newTaskAmounts[index];
    if (newNumber != taskAmounts[index]) {
      taskAmounts[index] = newNumber;
      summaryBoxes[index].updateTaskAmount(newNumber, index);
      //TODO: update Server;
    }
  }
}

function navToBoard() {
  console.log("Nav to Board");
  window.location = "../html/board.html";
}
/***************** Event-Listener wenn window resize *****************/
window.addEventListener("resize", function () {
  //triggert wenn, Bildschirmgröße verändert wird.
  changeScreenView();
});

function changeScreenView() {
  // console.log(screenWidth);
  for (let index = 0; index < summaryBoxes.length; index++) {
    const element = summaryBoxes[index];
    element.checkScreenView(index);
    element.renderPosition(index);
  }
}