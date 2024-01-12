//for responsiveness
let screen_size = 1023; //ab wann Wechsel zu Desktop Version

//erstelle die Werte für die Items
let item_amount = 6;
let summaryBox_div_id = "summary-box";
// task_amounts = [1, 2, 3, 40, 5, 6, 7]; //verändern durch Tasks

// let new_task_amounts = [1, 12, 3, 9, 5, 6, 8]; //zum Testen
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

async function initSummary() {
  init();
  activeUser(); //set activeUser
  updateUserValues();
  greetings();

  task_amounts = await updateTaskAmounts();
  createSummaryBoxes(); //creates summary-boxes beim 
  
  setNavBarActive("summary-link");
}

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

function greetings() {
  const currentHour = new Date().getHours();
  let greeting = "";

  if (currentHour >= 6 && currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour >= 12 && currentHour < 21) {
    greeting = "Good Afternoon";
  } else if (currentHour >= 18 && currentHour < 21) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

  // docID("greetings").innerHTML =
  new Div("greetings", "greetings-span","font-t1", greeting);
     active_user.name == "Guest"
       ?
       false :

       docID("greetings-span").innerHTML += ", ";
       new Div("greetings", "greeting-name", "", "Hans-Jürgen Knüppel-Dudas" );
      //  `${greeting}`
    //   : `${greeting}, ${active_user.name}`;


}

function createSummaryBoxes() {
  docID(summaryBox_div_id).innerHTML = "";

  for (let i = 0; i < item_amount; i++) {
    new Div(summaryBox_div_id, `${summaryBox_div_id}-${i}`)
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
      <h6 id="upcoming-deadline"></h6>
      <span>Upcoming Deadline</span>
    </div>
 `;
  checkDate();
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

async function checkDate(){
  await loadTasks();
   let urgent_tasks = tasks.filter(obj=> obj.priority == "Urgent");
  let urgent_date;



urgent_tasks.sort((a, b) =>
    a.date > b.date
      ? 1
      : b.date > a.date
      ? -1
      : 0
  );
 
  urgent_date = urgent_tasks[0].date;
  urgent_date = new Date(urgent_date).toLocaleDateString("en-US",{ month: 'long',day: 'numeric', year: 'numeric'  });
  docID("upcoming-deadline").innerHTML = urgent_date;
}