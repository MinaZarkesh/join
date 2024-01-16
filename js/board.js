Board_task = [];
let current_Dragged_Element;
let toDoDiv;
let inProgressDiv;
let awaitFeedBackDiv;
let doneDiv;
let filteredTasks = [];
let filteredTasks_Ids = [];

/**
 * Initializes the board by performing the following actions:
 * - Calls the `init` function
 * - Sets the active user
 * - Updates user values
 * - Loads tasks
 * - Loads contacts
 * - Loads categories
 * - Creates the head container
 * - Creates the search input field with image
 * - Adds event listener to activate the keyboard
 * - Creates the "Add Task" button
 * - Creates the close button image
 * - Creates the content container
 * - Creates the "To do" board segment
 * - Creates the "In progress" board segment
 * - Creates the "Await feedback" board segment
 * - Creates the "Done" board segment
 * - Creates the board cards
 * - Creates the main board card container
 * - Sets the navigation bar active
 *
 * @return {void} This function does not return any value
 */
async function initBoard() {
  init();
  activeUser(); //set activeUser
  updateUserValues();
  await loadTasks();
  await loadContacts();
  await loadCategorys();
  new Div("main-board", "board-head-con"); //the head container
  new Div("board-head-con", "search-con");
  new Divinputimg("search-con", "search", "text", "Find Task", "../assets/img/searchLupe.png", "search-text-input-id","search-con-div"); //+ id + div_id
  new docID('search-text-input-id').onclick = keyboardActive();
  new Button("search-con", "add-task-Task", "button", function () {openAddTask("to-do-con");}, "Add Task");
  new Img("board-head-con", "", "", "../assets/img/cross white.png");
  new Div("main-board", "board-content-con", ""); //the content container
  new BoardSegment("board-content-con", "to-do", "To do");
  new BoardSegment("board-content-con", "in-progress", "In progress");
  new BoardSegment("board-content-con", "await-feedback", "Await feedback");
  new BoardSegment("board-content-con", "done", "Done");
  createBoardCards();
  new Div("main-card-div", "main-board-card");
  setNavBarActive("board-link");
  checkMobile();
}

let segments;
let toDoPos;
let inProgessPos;
let awaitFeedbackPos;
let donePos;
let touchTasks;
let toDoTouchDiv;
let doneTouchDiv;
function checkMobile() {
  if (window.matchMedia("(max-width: 1023px)").matches) {
    //Größe vom TouchGerät auch Laptop möglich
    segments = document.querySelectorAll(".board-segments");
    console.log(segments);
    let toDoTouchDiv = document.querySelector(".toDo");
    let doneTouchDiv = document.querySelector(".done");
    toDoPos = segments[0].getBoundingClientRect();
    inProgessPos = segments[1].getBoundingClientRect();
    awaitFeedbackPos = segments[2].getBoundingClientRect();
    donePos = segments[3].getBoundingClientRect();
    console.log(toDoPos, inProgessPos, awaitFeedbackPos, donePos);
    touchTasks = document.querySelectorAll(".board-card");
    console.log(touchTasks);
    touchTasks.forEach(addStart);
  }
}

function addStart(elem, index) {
  elem.addEventListener("touchstart", (e) => {
    let startX = e.changedTouches[0].clientX;
    let startY = e.changedTouches[0].clientY;
    let elemBottom = elem.getBoundingClientRect().bottom;
    let elemTop = elem.getBoundingClientRect().top;
    // console.log("touchstart", startX, startY);
    let parentID = elem.parentElement.id;
    console.log("touchstart", " bottom: ", elemBottom, " top: ",elemTop, "style: ", elem.style.bottom);
    elem.addEventListener("touchend", (eve) => {
      // elem.style.backgroundColor = "red";
      console.log("touchend");
       elem.style.zIndex = 0;
      // touchDivName = elem.id.split("-");
      // touchDivID = elem.id.split("-");
      // touchDivID = touchDivID[touchDivID.length-1]
      // touchDivID = touchTasks.indexOf(elem);
      // console.log(touchTasks);
      // console.log("elemente move end:", " left: ", elem.style.left, " top: ",elem.style.top);

      if (elem.getBoundingClientRect().top < awaitFeedbackPos.top) {
        console.log("toDoPos", elem.getBoundingClientRect().top , awaitFeedbackPos.top);

          // if (!doneTouchDiv.contains(elem)) {
          //   doneTouchDiv.appendChild(elem);
          // }
      }
      else if (elem.getBoundingClientRect().left > toDoPos.right && elem.getBoundingClientRect().left > inProgessPos.left) {
        console.log("inProgess");
          // if (!toDoTouchDiv.contains(elem)) {
          //   toDoTouchDiv.appendChild(elem);
          // }
      }

     setTimeout(()=>{
      elem.style.left = 0 + "px";
      elem.style.top = 0 + "px";
     }, 2000);
    });

    elem.addEventListener("touchmove", (eve) => {
      eve.preventDefault();
    
      let nextX = eve.changedTouches[0].clientX;
      let nextY = eve.changedTouches[0].clientY;
      elem.style.left = nextX - startX + "px";
      elem.style.top = nextY - startY + "px";
      elem.style.zIndex = 99999;
      console.log("touchmove", elem.style.zIndex);

      // console.log("elemente move:", elem.style.left,elem.style.top );
    });
  });
}

// function  moveCardmobile(id, bool){
//   // docID("main-board-card").style.zIndex = 0;
// // let img_id = ``;
//   //  docID(id).style.backgroundColor = "red";
//    console.log(id, bool);
// }

/**
 * Opens the add task functionality in the specified container.
 *
 * @param {string} container - The ID of the container element where the add task functionality will be opened.
 * @return {undefined} This function does not return a value.
 */
function openAddTask(container) {
  docID("add-card-con").classList.remove("d-none");
  new Img(
    "add-card-div",
    "add-card-close",
    "card-close",
    "../assets/img/close.png"
  );
  docID("add-card-close").onclick = function () {
    closeCard("add-card-con", "add-card-div");
  };
  new AddTaskBox("add-card-div");
  new Div("addtaskCon", "button-con", "button-con"); //Div für die Add/Clear Button
  new Button(
    "button-con",
    "add-task-btn",
    "button",
    function () {
      boardAddTask(container);
    },
    "Create Task"
  );
}

/**
 * Adds a task to the board container.
 *
 * @param {type} container - The container to add the task to.
 * @return {type} The close function of the added task.
 */
function boardAddTask(container) {
  let close = addTask(container);
  close ? closeCard("add-card-con", "add-card-div") : "";
}

/**
 * Adds an event listener to the search text input element and calls the filterTasks function when the 'Enter' key is pressed.
 *
 * @param {Event} e - The keydown event object.
 * @return {void} This function does not return a value.
 */
function keyboardActive() {
  docID("search-text-input-id").addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      filterTasks();
    }
  });
}

/**
 * Renders the board segments.
 *
 * @return {undefined} No return value.
 */
function renderBoardSegments() {
  resetSegments();
  Board_task = [];
  createBoardCards();
  renderNoTasks();
}

/**
 * Resets the segments of the HTML document.
 *
 * @param {void} None - This function takes no parameters.
 * @return {void} This function does not return a value.
 */
function resetSegments() {
  docID("to-do-div").innerHTML = "";
  docID("in-progress-div").innerHTML = "";
  docID("await-feedback-div").innerHTML = "";
  docID("done-div").innerHTML = "";
}

/**
 * Creates board cards based on the tasks array.
 *
 * @param {Array} tasks - The array of tasks.
 * @return {undefined} This function does not return a value.
 */
function createBoardCards() {
  tasks.forEach((e, index) => {
    Board_task.push(new BoardCard(e));
  });
}

/**
 * Renders the appropriate HTML elements when there are no tasks.
 *
 * @return {undefined} This function does not return a value.
 */
function renderNoTasks() {
  task_amounts = getTasksAmounts();
  for (let i = 0; i < task_amounts.length; i++) {
    task_amounts[i] == 0
      ? new Div(
          segements_array[i].con.replace("-con", "-div"),
          "noTask-div-id",
          "noTask-div",
          `No Task ${segements_array[i].headline}`
        )
      : "";
  }
}

/**
 * Opens a big card with the given ID.
 *
 * @param {number} id - The ID of the card.
 * @return {undefined} This function does not return a value.
 */
function openBigCard(id) {
  docID("main-card-div").classList.remove("d-none");
  tasks.forEach((e) => {
    if (e.id == id) {
      new BoardBigCard(e, "main-board-card");
    }
  });
}

/**
 * Closes a card and performs additional actions if an event object is provided.
 *
 * @param {string} parent - The ID of the parent element.
 * @param {string} child - The ID of the child element.
 * @param {object} e - An optional event object.
 */
function closeCard(parent, child, e) {
  if (e) {
    amount = e.subtasks.length;
    e.subtaskschecked = [];
    for (let i = 0; i < amount; i++) {
      if (docID(`main-bord-card-subtasks${i}-checkbox`).checked) {
        e.subtaskschecked.push("checked");
      } else {
        e.subtaskschecked.push("unchecked");
      }
    }
  }
  docID(child).innerHTML = "";
  docID(parent).classList.add("d-none");
  renderBoardSegments();
  subtasks = [];
}

/**
 * Sets the current dragged element to the given event.
 *
 * @param {Event} e - The event object representing the drag start event.
 */
function startDragging(e) {
  current_Dragged_Element = e;
}

/**
 * A description of the entire function.
 *
 * @param {type} ev - The event object.
 * @return {undefined} This function does not return a value.
 */
function allowDrop(ev) {
  ev.preventDefault();
}

/**
 * Moves the task to the specified category.
 *
 * @param {string} category - The category to move the task to.
 * @return {undefined} This function does not return a value.
 */
function moveTo(category) {
  let id = getTasksIdx();
  tasks[id].container = `${category}-con`;
  setItem("tasks", tasks);
  renderBoardSegments();
}

/**
 * Drag over function.
 *
 * @param {string} category - The category being dragged over.
 * @return {undefined} There is no return value.
 */
function dragOver(category) {
  allowDrop(event);
}

/**
 * Retrieves the index of a task from the tasks array based on the value of the current_Dragged_Element.
 *
 * @return {number} The index of the task in the tasks array.
 */
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

/**
 * Filters tasks based on a search word.
 *
 * @param {string} word - The search word to filter tasks.
 * @return {void} This function does not return a value.
 */
function filterTasks() {
  word = docID("search-text-input-id").value;
  if (word != "") {
    filteredTasks = [];
    filteredTasks_Ids = [];
    filteredTasks = document.querySelectorAll(".board-card");

    filteredTasks.forEach((e) => {
      e.classList.add("d-none");
    });

    tasks.forEach((e) => {
      if (isMatch(e, word)) {
        let id = e.container.replace("-con", "") + `-card-${e.id}`;
        filteredTasks_Ids.push(id);
      }
    });

    filteredTasks_Ids.forEach((e) => {
      docID(e).classList.remove("d-none");
    });
  } else {
    renderBoardSegments();
  }
}

/**
 * Checks if the given object has a match for the specified word in its title, description, or nameArray.
 *
 * @param {Object} obj - The object to check for a match.
 * @param {string} word - The word to search for.
 * @return {boolean} - True if a match is found, false otherwise.
 */
function isMatch(obj, word) {
  let title = obj.title.toLowerCase().includes(word.toLowerCase());
  let description = obj.description.toLowerCase().includes(word.toLowerCase());
  let yourNameArray = nameArray(obj, word);
  return title || description || yourNameArray;
}

/**
 * Checks if the given word is included in the array of subtasks in the given object.
 *
 * @param {Object} obj - The object containing the array of subtasks.
 * @param {string} word - The word to search for in the array of subtasks.
 * @return {boolean} Returns true if the word is found in the array of subtasks, otherwise returns false.
 */
function nameArray(obj, word) {
  output = false;
  obj.subtasks.forEach((e) => {
    if (e.toLowerCase().includes(word.toLowerCase())) {
      output = true;
    }
  });
  return output;
}

/**
 * Deletes a card from the tasks array based on the provided index.
 *
 * @param {number} idx - The index of the card to be deleted.
 * @return {Promise<void>} - A promise that resolves once the card has been deleted.
 */
async function deleteCard(idx) {
  tasks.forEach((e, index) => {
    if (idx == e.id) {
      tasks.splice(index, 1);
    }
  });
  closeCard("main-card-div", "main-board-card");
  await setItem("tasks", tasks);
  renderBoardSegments();
}

/**
 * Edits a card.
 *
 * @param {Event} e - the event triggering the function
 * @return {undefined} nothing is returned
 */
function editCard(e) {
  docID("main-board-card").innerHTML = "";
  new Img(
    "main-board-card",
    "card-close",
    "card-close",
    "../assets/img/close.png"
  );
  docID("card-close").onclick = function () {
    closeCard("main-card-div", "main-board-card");
  };
  new AddTaskBox("main-board-card", false, "Edit Task");
  docID("task-title").value = e.title;
  docID("desc-input").value = e.description;
  docID("date-input").value = e.date;
  editUrgency(e);
  dropdownMenu("assigned-img", "assigned", "assigned");
  checkTheBox(e);
  dropdownMenu("assigned-img", "assigned", "assigned");
  dropdownMenu("category-img", "category", "category");
  checkTheCategory(e);
  dropdownMenu("category-img", "category", "category");
  addEditSubtasks(e);

  new Div("addtaskCon", "button-con", "button-con"); //Div für die Add/Clear Button
  new Button(
    "button-con",
    "add-task-btn",
    "button",
    function () {
      updateTasks(e);
    },
    "Ok"
  );
}

/**
 * Edits the urgency of a given element.
 *
 * @param {Event} e - The event object containing the element and its priority.
 * @return {void} This function does not return a value.
 */
function editUrgency(e) {
  e.priority == "Urgent" ? activeUrgency("btn-red") : "";
  e.priority == "Medium" ? activeUrgency("btn-orange") : "";
  e.priority == "Low" ? activeUrgency("btn-green") : "";
}

/**
 * Checks the corresponding checkboxes for each associate.
 *
 * @param {object} e - The event object.
 */
function checkTheBox(e) {
  e.associates.forEach((ele) => {
    docID(`check-${ele}`).checked = true;
  });
}

/**
 * Checks the category of an event and updates the corresponding category checkboxes.
 *
 * @param {Object} e - The event object.
 */
function checkTheCategory(e) {
  categorys.forEach((element) => {
    if (e.category.includes(element.name)) {
      docID(`category-check-${element.idx}`).checked = true;
    }
  });
}

/**
 * Adds or edits subtasks based on the given event.
 *
 * @param {object} e - The event object containing subtasks.
 * @return {undefined} No return value.
 */
function addEditSubtasks(e) {
  subtask = [];
  e.subtasks.forEach((ele) => {
    subtask.push(ele);
  });
  subtaskListRender();
}

/**
 * Updates the tasks with the provided information.
 *
 * @param {Event} e - The event object.
 * @return {void}
 */
function updateTasks(e) {
  let urgency = theUrgency();
  theSelectors(".tasks-contacts");
  theSelectors(".tasks-category");
  e.title = docID("task-title").value;
  e.category = departments;
  e.description = docID("desc-input").value;
  e.date = docID("date-input").value;
  e.priority = urgency[0];
  e.priorityImg = urgency[1];
  e.assignedTo = task_assigned_to;
  e.assignedToNameTag = task_assigned_to_nametag;
  e.assignedToColor = task_assigned_to_color;
  e.subtasks = subtask;
  e.subtaskschecked = editSubtaskchecked(e);

  closeCard("main-card-div", "main-board-card");
  subtask = [];
  setItem("tasks", tasks);
  renderBoardSegments();
}

/**
 * Edits the checked status of subtasks.
 *
 * @param {object} e - The event object containing the subtaskschecked array.
 * @return {array} The updated array of checked subtasks.
 */
function editSubtaskchecked(e) {
  checked = e.subtaskschecked;
  if (subtask.length > checked.length) {
    for (let i = checked.length; i < subtask.length; i++) {
      checked.push("unchecked");
    }
  }
  return checked;
}
