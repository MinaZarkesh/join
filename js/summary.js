//for responsiveness
let screen_size = 1023; //ab wann Wechsel zu Desktop Version

//erstelle die Werte für die Items
let item_amount = 6;
let summaryBox_div_id = "summary-box";
let task_amounts = [1, 2, 3, 40, 5, 6, 7]; //verändern durch Tasks

let new_task_amounts = [1, 12, 3, 9, 5, 6, 8]; //zum Testen
//empty Array for new summary_boxes
let summary_boxes = [];

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

function initSummary() {
  init();
  createSummaryBoxes(); //creates summary-boxes beim laden
  // updateTaskAmounts();
}

function createSummaryBoxes() {

  docID(summaryBox_div_id).innerHTML = "";

  for (let i = 0; i < item_amount; i++) {
    docID(summaryBox_div_id).innerHTML += /*html*/`
    <div id="${summaryBox_div_id}-${i}"></div>
    `;
    summary_boxes.push(new SummaryBox(summaryBox_div_id, i));
  }
  createFirstBox();
}

function createFirstBox() {
  //leert die Box und fügt beide Elemente in einer neuen Div hinzu,
  // um diese wiederum position relative zu machen(in css)
  docID(`item-${summaryBox_div_id}-0`).innerHTML = /*html*/ `
    <div  id="item-${summaryBox_div_id}-0-1" class="col">  
      <div class="row">
        <img src=${images[0]}>
        <h1 id="task-amounts-${summaryBox_div_id}-0">${task_amounts[0]}</h1>
      </div>
      <h6>${descriptions[0]}</h6>
    </div>
    <div onclick="navToBoard()"id="first-box">
      <h6 id="upcoming-deadline">October 16, 2022</h6>
      <span>Upcoming Deadline</span>
    </div>
 `;
}

function updateTaskAmounts() {
  for (let index = 0; index < new_task_amounts.length; index++) {
    const new_number = new_task_amounts[index];
    if (new_number != task_amounts[index]) {
      task_amounts[index] = new_number;
      summary_boxes[index].updateTaskAmount(new_number, index);
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
  for (let index = 0; index < summary_boxes.length; index++) {
    const element = summary_boxes[index];
    element.checkScreenView(index);
    element.renderPosition(index);
  }
}