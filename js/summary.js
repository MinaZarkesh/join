//for responsiveness
let screen_size = 1023; //ab wann Wechsel zu Desktop Version

//erstelle die Werte für die Items
let item_amount = 6;
let summaryBox_div_id = "summary-box";

//empty Array for new summary_boxes
let summary_boxes = [];
let new_number;

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
let sum;

/**
 * Initializes the summary.
 *
 * @return {Promise} A promise that resolves when the summary has been initialized.
 */
async function initSummary() {
  await loadUsers();
  activeUser(); //set activeUser
  init();
  // updateUserValues();
  greetings();
  task_amounts = await updateTaskAmounts();
  createSummaryBoxes(); //creates summary-boxes beim
  setNavBarActive("summary-link");
}

/**
 * Updates the task amounts.
 *
 * @return {Array} The updated task amounts.
 */
async function updateTaskAmounts() {
  await loadTasks();
  let amounts = [];
  sum = 0;
  amounts = getTasksAmounts();
  amounts.forEach((item) => {
    sum += item;
  });
  sum = sum - amounts[amounts.length - 1];
  amounts.splice(0, 0, tasks.filter((obj) => obj.priority == "Urgent").length); //wieviele Tasks sind urgent
  amounts.splice(1, 0, sum);
  task_amounts = amounts;
  return amounts;
}

/**
 * Generates a greeting message based on the current hour and displays it on the webpage.
 *
 * @param {number} currentHour - The current hour of the day.
 * @return {void} This function does not return anything.
 */
function greetings() {
  const currentHour = new Date().getHours();
  let greeting = "";
  greeting = getGreeting(currentHour);
  new Div("greetings", "greetings-span", "font-t1", greeting);
  new Div("greetings", "greeting-name", "", active_user.name);
  if (active_user.name == "Guest") {
    docID("greeting-name").textContent = "";
  } else {
    docID("greetings-span").innerHTML += ", ";
    docID("greeting-name").textContent = active_user.name;
  }
}

/**
 * Generate a greeting based on the current hour.
 *
 * @param {number} currentHour - The current hour of the day.
 * @return {string} The appropriate greeting based on the current hour.
 */
function getGreeting(currentHour) {
  if (currentHour >= 6 && currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good Afternoon";
  } else if (currentHour >= 18 && currentHour < 21) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }
  return greeting
}

/**
 * Creates summary boxes.
 *
 * @param {type} summaryBox_div_id - the id of the summary box div
 * @return {type} undefined
 */
function createSummaryBoxes() {
  docID(summaryBox_div_id).innerHTML = "";

  for (let i = 0; i < item_amount; i++) {
    new Div(summaryBox_div_id, `${summaryBox_div_id}-${i}`);
    summary_boxes.push(new SummaryBox(summaryBox_div_id, i));
  }
  createFirstBox();
}

/**
 * Create the first box by clearing the existing box and adding elements in a new div to make it position relative in CSS.
 *
 * @return {undefined} This function does not return a value.
 */
function createFirstBox() {
  docID(`item-${summaryBox_div_id}-0`).innerHTML = /*html*/ `
    <div  id="item-${summaryBox_div_id}-0-1" class="col">  
      <div class="row">
        <img src=${images[0]}>
        <h1 id="task-amounts-${summaryBox_div_id}-0">${task_amounts[0]}</h1>
      </div>
      <h6>${descriptions[0]}</h6>
    </div>
    <div onclick="navToBoard()"id="first-box">
      <h6 id="upcoming-deadline"></h6>
      <span>Upcoming Deadline</span>
    </div>
 `;
  checkDate();
}

/**
 * Navigates to the board.html page.
 *
 * @return {undefined} No return value.
 */
function navToBoard() {
  window.location = "../html/board.html";
}
window.addEventListener("resize", function () {
  changeScreenView();
});

/**
 * Change the screen view by checking and rendering the position of each summary box.
 *
 * @param {Array} summary_boxes - An array of summary boxes.
 * @return {undefined} This function does not return a value.
 */
function changeScreenView() {
  for (let index = 0; index < summary_boxes.length; index++) {
    const element = summary_boxes[index];
    element.checkScreenView(index);
    element.renderPosition(index);
  }
}

/**
 * Retrieves the urgent tasks, sorts them by date, and displays the upcoming deadline.
 *
 * @return {void} - This function does not return a value.
 */
async function checkDate() {
  await loadTasks();
  let urgent_tasks = tasks.filter((obj) => obj.priority == "Urgent");
  let urgent_date;
  urgent_tasks.sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0));
  urgent_date = urgent_tasks[0].date;
  urgent_date = new Date(urgent_date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  docID("upcoming-deadline").innerHTML = urgent_date;
}
