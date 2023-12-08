//erstelle die Werte für die Elemente

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
  if (window.innerWidth > 1023) {
    createSummaryBoxes(); //creates SummaryBoxes beim laden
  }
}

/***************** Event-Listener wenn window resize *****************/
window.addEventListener("resize", function () {
  checkScreenWidh();
});

let screenData = { internalWidth: "" };
let screenWidth = "desktop";

function checkScreenWidh() {
  if (window.innerWidth > 1023) {
    screenData.screenWidth = "desktop";
  } else {
    screenData.screenWidth = "mobile";
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

function createSummaryBoxes() {
  if (window.innerWidth < 1023) {
    docID("summaryBox").innerHTML = ""; // Überschreibt die Div summaryBox
    console.log("Test");
  } else {
    // create die Div, die er bei SummaryBox anspricht
    docID("summaryBox").innerHTML = `
    <div class="row">
    <span id="greetings">Guten Abend, Mina Zarkesh</span>
  </div>
  <div class="row-cols-4">
    <div id="summaryBox0"></div>
    <div id="summaryBox1"></div>
    <div id="summaryBox2"></div>
    <div id="summaryBox3"></div>
    <div id="summaryBox4"></div>
    <div id="summaryBox5"></div>
  </div>
    `;

    new SummaryBox("summaryBox", 0);
    new SummaryBox("summaryBox", 1);
    new SummaryBox("summaryBox", 2);
    new SummaryBox("summaryBox", 3);
    new SummaryBox("summaryBox", 4);
    new SummaryBox("summaryBox", 5);
  }
}
