//for responsiveness
let screenSize = 1024; //ab wann wechsel zu Desktop Version
let containerInnerWidth = window.innerWidth;
let containerInnerHeight = window.innerHeight * 0.8;

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

function initBoard() {
  init();
  createSummaryBoxes(); //creates SummaryBoxes beim laden
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

  docID("summaryBox").innerHTML = "";
    SummaryBoxes = [];
    for (let i = 0; i < itemAmount; i++) {
      docID("summaryBox").innerHTML += `<div id="summaryBox${i}"></div>`;

    new SummaryBox(
      "summaryBox",
      i,
      view,
      window.innerWidth,
      window.innerHeight
    );
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
    containerInnerWidth = window.innerWidth;
    containerInnerHeight = window.innerHeight * 0.8;

    console.log(
      "mainsummarywidth: ",
      containerInnerWidth,
      "mainsummaryHeight ",
      containerInnerHeight
    );
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

      createSummaryBoxes(); //löst aus, wenn EventListener getriggert
    }
  },
});
