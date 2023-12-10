//for responsiveness
let screenSize = 1024; //ab wann Wechsel zu Desktop Version

//erstelle die Werte für die Items
let itemAmount = 6;

let descriptions = [
  "Tasks urgent",
  "Tasks in Board",
  "Tasks To-do",
  "Tasks in Progress",
  "Awaiting Feedback",
  "Tasks done",
];

let images = [
  "../assets/img/urgent_summary.png",
  "../assets/img/board_summary.png",
  "../assets/img/to_do_summary.png",
  "../assets/img/in_progress_summary.png",
  "../assets/img/await_feedback_summary.png",
  "../assets/img/done_summary.png",
];

let taskAmounts = [1, 2, 3, 40, 5, 6]; //verändern durch Tasks
let newTaskAmounts = [1, 12, 3, 9, 5, 6]; //zum Testen

//empty Array for new SummaryBoxes
let summaryBoxes = [];
let summaryBoxDivID = "summaryBox";

function initBoard() {
  init();
  createSummaryBoxes(); //creates SummaryBoxes beim laden
  updateTaskAmounts();
}

function createSummaryBoxes() {
  let view = "";

  if (window.innerWidth < screenSize) {
    //1024

    view = "mobile";
  } else {
    view = "desktop";
    // create die Div, die er bei SummaryBox anspricht
  }

  docID(summaryBoxDivID).innerHTML = "";

  for (let i = 0; i < itemAmount; i++) {
    docID(
      summaryBoxDivID
    ).innerHTML += `<div id="${summaryBoxDivID}${i}"></div>`;

    summaryBoxes.push(new SummaryBox(summaryBoxDivID, i));
  }
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
