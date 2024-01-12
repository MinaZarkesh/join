Board_task = [];
let current_Dragged_Element;
let toDoDiv;
let inProgressDiv;
let awaitFeedBackDiv;
let doneDiv;
let filteredTasks = [];
let filteredTasks_Ids = [];

function initBoard() {
  init();
  activeUser(); //set activeUser
  updateUserValues();
  new Div("main-board", "board-head-con"); //the head container
  new Div("board-head-con", "search-con");
  new Divinputimg("search-con", "search", "text", "Find Task", "../assets/img/searchLupe.png", "search-text-input-id","search-con-div"); //+ id + div_id
  docID()
  new docID('search-text-input-id').onclick = keyboardActive();
  new Button("search-con", "", "button", function () {openAddTask();}, "Add Task");
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

function openAddTask() {
  docID('add-card-con').classList.remove('d-none');
  new Img("add-card-div", 'add-card-close', "card-close", "../assets/img/close.png");
  docID('add-card-close').onclick = function () {closeCard("add-card-con", "add-card-div")}
  new AddTaskBox("add-card-div");
}


function keyboardActive() {
  docID('search-text-input-id').addEventListener("keydown", (e) => {
    if(e.key == 'Enter') {
      filterTasks();
    }
  })
}


function renderBoardSegments() {
  // loadTasks();
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
  docID("main-card-div").classList.remove("d-none");
  tasks.forEach((e) => {
    if (e.id == id) {
      new BoardBigCard(e, "main-board-card");
    }
  });
}

function closeCard(parent, child) {
  docID(child).innerHTML = "";
  docID(parent).classList.add("d-none");
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



function filterTasks() {
  word = docID("search-text-input-id").value;
  if (word != '') {
    filteredTasks = [];
    filteredTasks_Ids = [];
    filteredTasks = document.querySelectorAll(".board-card");

    filteredTasks.forEach((e) => {
      e.classList.add("d-none");
    })

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

function deleteCard(idx) {
    tasks.forEach((e, index) => {
      if (idx == e.id) {
        tasks.splice(index, 1);
      }
    });
    closeCard("main-card-div", "main-board-card");
    renderBoardSegments();
}

function editCard(e) {
  docID("main-board-card").innerHTML = "";
  new Img("main-board-card", "card-close","card-close","../assets/img/close.png");
  docID("card-close").onclick = function () {closeCard("main-card-div", "main-board-card")};
  new AddTaskBox("main-board-card", false, "Edit Task");
  docID('task-title').value = e.title;
  docID('desc-input').value = e.description;
  docID('date-input').value = e.date;
  editUrgency(e);
  dropdownMenu('assigned-img', 'assigned', 'assigned');
  checkTheBox(e);
  dropdownMenu('assigned-img', 'assigned', 'assigned');
  dropdownMenu('category-img', 'category', 'category');
  checkTheCategory(e);
  dropdownMenu('category-img', 'category', 'category');
  addEditSubtasks(e);
}

function editUrgency(e) {
  e.priority = "Urgent"? activeUrgency("btn-red"):"";
  e.priority = "Medium"? activeUrgency("btn-orange"):"";
  e.priority = "Low"? activeUrgency("btn-green"):"";
}

function checkTheBox(e) {
  e.associates.forEach((ele) => {
    docID(`check-${ele}`).checked = true;
  })
}

function checkTheCategory(e) {
  categorys.forEach((element) => {
    if (e.category.includes(element.name)) {
      docID(`category-check-${element.idx}`).checked = true;
    }
  })
}

function addEditSubtasks(e) {
  e.subtasks.forEach((ele) => {
    subtask.push(ele);
  })
  subtaskListRender();
}