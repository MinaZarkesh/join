Board_task = [];
let current_Dragged_Element;
let toDoDiv;
let inProgressDiv;
let awaitFeedBackDiv;
let doneDiv;

function initBoard() {
  init();
  new Div("main-board", "board-head-con"); //the head container
  new Div("board-head-con", "search-con");
  new Divinputimg("search-con", "search", "text", "Find Task", "../assets/img/searchLupe.png", "search-text-input-id","search-con-div"); //+ id + div_id
  new docID('search-text-input-id').onclick = keyboardActive();
  new Button("search-con", "", "button", function () {filterTasks();}, "Add Task");
  new Img("board-head-con", "", "", "../assets/img/cross white.png");
  new Div("main-board", "board-content-con", ""); //the content container
  new BoardSegment("board-content-con", "to-do", "To do");
  // new BoardCard('to-do-con', 0);
  new BoardSegment("board-content-con", "in-progress", "In progress");
  new BoardSegment("board-content-con", "await-feedback", "Await feedback");
  new BoardSegment("board-content-con", "done", "Done");
  createBoardCards();
  new Div("main-card-div", "main-board-card");
  setNavBarActive("board-link");
}


function keyboardActive() {
  docID('search-text-input-id').addEventListener("keydown", (e) => {
    if(e.key == 'Enter') {
      filterTasks();
    }
  })
}


function renderBoardSegments() {
  loadTasks();
  // resetSegments();
  neu();
  Board_task = [];
  createBoardCards();
}

function neu() {
  docID("to-do-div").innerHTML = "";
  docID("in-progress-div").innerHTML = "";
  docID("await-feedback-div").innerHTML = "";
  docID("done-div").innerHTML = "";
}

function resetSegments() {
  //TODO: eine Zwischen Div bauen, die man leeren kann macht mehr Sinn.
  toDoDiv = `<div id="to-do-headline-con" class="segment-class"><span id="undefined" class="">To do</span><button id="to-do-btn" class="segments-btn"><img id="" class="" src="../assets/img/+.png"></button></div>`;
  docID("to-do-con").innerHTML = toDoDiv;
  inProgressDiv = `<div id="in-progress-headline-con" class="segment-class"><span id="undefined" class="">In Progress</span><button id="in-progress-btn" class="segments-btn"><img id="" class="" src="../assets/img/+.png"></button></div>`;
  docID("in-progress-con").innerHTML = inProgressDiv;
  awaitFeedBackDiv = `<div id="await-feedback-headline-con" class="segment-class"><span id="undefined" class="">Await Feedback</span><button id="await-feedback-btn" class="segments-btn"><img id="" class="" src="../assets/img/+.png"></button></div>`;
  docID("await-feedback-con").innerHTML = awaitFeedBackDiv;
  doneDiv = `<div id="done-headline-con" class="segment-class"><span id="undefined" class="">Done</span><button id="done-btn" class="segments-btn"><img id="" class="" src="../assets/img/+.png"></button></div>`;
  docID("done-con").innerHTML = doneDiv;
}

function createBoardCards() {
  tasks.forEach((e, index) => {
    Board_task.push(new BoardCard(e));
  });
}

function renderNoTasks() {
  task_amounts = getTasksAmounts();
  for (let i = 0; i < task_amounts.length; i++) {
    task_amounts[i] == 0 ? new Div(segements_array[i].con.replace("-con", "-div"), "noTask-div-id", "noTask-div", `No Task ${segements_array[i].headline}`) : "";
  }  
}

function openBigCard(id) {
  console.log("angekommen");
  docID("main-card-div").classList.remove("d-none");
  tasks.forEach((e) => {
    if (e.id == id) {
      new BoardBigCard(e, "main-board-card");
    }
  });
}

function closeCard() {
  docID("main-board-card").innerHTML = "";
  docID("main-card-div").classList.add("d-none");
}

function editBigCard(id) {
  console.log("editBigCard");
  docID("main-card-div").classList.remove("d-none");
  tasks.forEach((e) => {
    if (e.id == id) {
      new editBoardBigCard(e, "main-board-card");
    }
  });
}

function startDragging(e) {
  current_Dragged_Element = e;

}

function allowDrop(ev) {
  ev.preventDefault();
}

function moveTo(category) {
  let id = getTasksIdx();
  tasks[id].container = `${category}-con`;
  setItem("tasks", tasks);
  loadTasks();
  renderBoardSegments();
  renderNoTasks();
}

function dragOver(category) {
  allowDrop(event);
}

function getTasksIdx() {
  let task_idx;

  for (let i = 0; i < tasks.length; i++) {
    const element_idx = tasks[i].id;

    if (current_Dragged_Element == element_idx) {
      task_idx = i;
    }
  }
  return task_idx;
}

let filteredTasks = [];
let filteredTasks_Ids = [];

function filterTasks() {
  word = docID("search-text-input-id").value;
  if (word != '') {
    filteredTasks = [];
    filteredTasks_Ids = [];
    filteredTasks = document.querySelectorAll(".board-card");

    filteredTasks.forEach((e) => {
      e.classList.add("d-none");
    })

    // word = "Weihnacht";
    tasks.forEach((e) => {
      if (isMatch(e, word)) {
        let id = e.container.replace("-con", "") + `-card-${e.id}`;
        filteredTasks_Ids.push(id);
      }
    })

    filteredTasks_Ids.forEach((e) => {
      docID(e).classList.remove("d-none");
    });
  }
  else {
    renderBoardSegments();
  }
}

function isMatch(obj, word) {
  let title = obj.title.toLowerCase().includes(word.toLowerCase());
  let description = obj.description.toLowerCase().includes(word.toLowerCase());
  let yourNameArray = nameArray(obj, word);
  return title || description || yourNameArray;
}

function nameArray(obj, word) {
  output = false;
  obj.subtasks.forEach((e) => {
    if (e.toLowerCase().includes(word.toLowerCase())) {
      output = true;
    }
  })
  return output;
}


/**
 * Filters the contacts based on the input search value.
 * made by Mina Zarkesh
 * @param {string} search - The search value to filter the contacts.
 * @return {void} No return value.
 */
// function filterContacts() {
//     renderAssignetTo();

//     let contactScroll = docID("assignetTo");
//     let search = docID("assignetToInput").value.replace(" ", "").toLowerCase();
//     contactScroll.classList.remove("d-none");
//     const contactsAddTasks = document.querySelectorAll(".assignetToAddTask");

//     contactsAddTasks.forEach((contactAddTask) => {
//       const contactNameElement = contactAddTask.querySelector(".contactName");
//       const contactName = contactNameElement.textContent.replace(" ", "").toLowerCase();
//       if (!search || contactName.includes(search)) {
//         contactAddTask.style.display = "flex"; // Karte anzeigen, wenn das Suchfeld leer ist oder wenn der Titel, die Kategorie oder die Beschreibung den Suchbegriff enthält
//       } else {
//         contactAddTask.style.display = "none"; // Karte ausblenden, wenn der Titel, die Kategorie oder die Beschreibung den Suchbegriff nicht enthält
//       }
//     });
//   }
