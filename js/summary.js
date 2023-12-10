//for responsiveness
let screenSize = 1024; //ab wann wechsel zu Desktop Version
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
let summaryBoxDivID = "summaryBox";
//empty Array for new SummaryBoxes
let summaryBoxes = [];

function initBoard() {
  init();
  createSummaryBoxes(); //creates SummaryBoxes beim laden
  changeTaskAmount();
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

function changeTaskAmount() {
  let idx = 3; //index of SummaryBoxes
  let newNumber = 9;
  if (summaryBoxes.length > idx) {
    // test = `taskAmounts${summaryBoxDivID}${idx}`;
    // docID(test).innerHTML = newNumber;
    // taskAmounts[idx] = newNumber;

    summaryBoxes[idx].updateTaskAmount(newNumber, summaryBoxDivID, idx);
    //TODO: update Server;
  }
}

/***************** Event-Listener wenn window resize *****************/
/*TODO: überarebiten, da es nicht ganz funktioniert */
let screenData = { internalWidth: "" };
let screenWidth = "desktop";

window.addEventListener("resize", function () {
  checkScreenWidth();
});

function checkScreenWidth() {
  if (window.innerWidth > screenSize) {
    screenWidth = "desktop";
  } else {
    screenWidth = "mobile";
  }

  console.log(screenWidth); //zum Nachvollziehen erstmal dringelassen
}

Object.defineProperty(screenData, "screenWidth", {
  get() {
    return this.internalWidth;
  },
  set(newVal) {
    if (newVal != this.internalWidth) {
      //vergleicht ob newVal != "desktop"
      this.internalWidth = newVal;
      console.log("Triggered", this.internalWidth);
      // createSummaryBoxes(); //löst aus, wenn EventListener getriggert
    }
  },
});
