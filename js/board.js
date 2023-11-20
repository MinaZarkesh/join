let priority = "Low";
let priorityColor;
let priorityImg;

let isContactchosenArray = [];
let ContactChosenDiv = [];

let subTasksBoard = [];
let CategoryArray = ["User Story", "Technical Task"];

let newTask = [];

let BoardIDs = ["toDo", "inProgress", "awaitFeedback", "done"];
let searchResultTasks;

let subtaskscheckedArray;
let editedTask = [];

/**
 * Initializes the boards.
 * made by Mina Zarkesh
 * @return {Promise<void>} - A promise that resolves when the boards are initialized.
 */

async function initBoards() {
  await init();
  // Rufe die Funktion nach dem Laden der Seite auf, um den Anfangszustand festzulegen
  renderBoard();
  updateNoTasksDisplay();
  createContactChosen();
}

//////////////////////// Add Task //////////////////////////////////////////////

/**
 * Renders the main task section and displays it on the screen.
 * made by Mina Zarkesh
 * @return {Promise<void>} This function does not return anything.
 */
async function showMainTask() {
  renderAddTask();
  const mainSection = document.querySelector(".main_section");
  const overlay = document.getElementById("overlay");
  mainSection.style.display = "flex";
  overlay.style.display = "flex";
  setTimeout(() => {
    mainSection.style.right = "0";
  }, 10);
  renderAssignetTo();
}

/**
 * Closes the main task by hiding the main section and overlay.
 * made by Mina Zarkesh
 *
 * @param {none} None - No parameters needed.
 * @return {none} None - No return value.
 */
function closeMainTask() {
  const mainSection = document.querySelector(".main_section");
  const overlay = document.getElementById("overlay");

  mainSection.style.right = "-100%";
  overlay.style.display = "none";
  setTimeout(() => {
    mainSection.style.display = "none";
  }, 300);
}

/**
 * Changes the priority of an element(button for Priority).
 * made by Mina Zarkesh
 * @param {Object} element - The element whose priority is to be changed.
 * @return {undefined} This function does not return a value.
 */
function changePriority(element) {
  let priorityID = element.id;
  priority = element.name;
  priorityColor = "--" + priorityID;

  let urgent = document.getElementById("urgent");
  let medium = document.getElementById("medium");
  let low = document.getElementById("low");

  if (priorityID === "low") {
    priorityImg = "../assets/img/low.png";
    low.classList.add("active");
    low.style.backgroundColor = `var(${priorityColor})`;
    urgent.style.backgroundColor = `var(--white)`;
    urgent.classList.remove("active");
    medium.style.backgroundColor = `var(--white)`;
    medium.classList.remove("active");
  } else if (priorityID === "medium") {
    priorityImg = "../assets/img/medium.png";
    medium.classList.add("active");
    medium.style.backgroundColor = `var(${priorityColor})`;
    urgent.style.backgroundColor = `var(--white)`;
    urgent.classList.remove("active");
    low.style.backgroundColor = `var(--white)`;
    low.classList.remove("active");
  } else {
    priorityImg = "../assets/img/urgentImg.png";
    urgent.classList.add("active");
    urgent.style.backgroundColor = `var(${priorityColor})`;
    medium.style.backgroundColor = `var(--white)`;
    medium.classList.remove("active");
    low.style.backgroundColor = `var(--white)`;
    low.classList.remove("active");
  }
  content = document.getElementById(priorityColor);
}

/**
 * Renders the "assignetTo" section of editTask.
 * made by Mina Zarkesh
 * @return {undefined}
 */
function renderAssignetTo() {
  let content = document.getElementById("assignetTo");
  const contactsAddTasks = document.querySelectorAll(".assignetToAddTask");
  let profileBadges = document.getElementById("assignetToProfile-badges");
  content.innerHTML = "";
  profileBadges = "";

  for (let i = 0; i < contacts.length; i++) {
    let tempContact = contacts[i];
    content.innerHTML += generateAssignetTo(tempContact, i);
  }

  for (let j = 0; j < isContactchosenArray.length; j++) {
    let isContactchosen = isContactchosenArray[j];
    let contentB = document.getElementById("assignetToAddTask" + j);
    let CheckImg = document.getElementById("checkContactImg" + j);

    if (isContactchosen) {
      CheckImg.src = "../assets/img/box-white.png";
      if (!contentB.classList.contains("chosenOne")) {
        contentB.classList.add("chosenOne");
        if (contentB.classList.contains("heWhoMustNotBeNamed")) {
          contentB.classList.remove("heWhoMustNotBeNamed");
        }
      }
    } else {
      contentB.classList.remove("chosenOne");
      contentB.classList.add("heWhoMustNotBeNamed");
      CheckImg.src = "../assets/img/checket.png";
    }
  }
}

/**
 * Filters the contacts based on the input search value.
 * made by Mina Zarkesh
 * @param {string} search - The search value to filter the contacts.
 * @return {void} No return value.
 */
function filterContacts() {
  renderAssignetTo();

  let contactScroll = document.getElementById("assignetTo");
  let search = document
    .getElementById("assignetToInput")
    .value.replace(" ", "")
    .toLowerCase();
  contactScroll.classList.remove("d-none");
  const contactsAddTasks = document.querySelectorAll(".assignetToAddTask");

  contactsAddTasks.forEach((contactAddTask) => {
    const contactNameElement = contactAddTask.querySelector(".contactName");
    const contactName = contactNameElement.textContent
      .replace(" ", "")
      .toLowerCase();
    if (!search) {
      contactAddTask.style.display = "flex"; // Karte anzeigen, wenn das Suchfeld leer ist
    } else if (contactName.includes(search)) {
      contactAddTask.style.display = "flex"; // Karte anzeigen, wenn der Titel, die Kategorie oder die Beschreibung den Suchbegriff enthält
    } else {
      contactAddTask.style.display = "none"; // Karte ausblenden, wenn der Titel, die Kategorie oder die Beschreibung den Suchbegriff nicht enthält
    }
  });
}

/**
 * Drops down the contacts when the assignetTo element is clicked.
 * made by Mina Zarkesh
 *
 * @param {type} paramName - description of parameter
 * @return {type} description of return value
 */
function dropDownContacts() {
  let content = document.getElementById("assignetTo");
  let imageSrc = document.getElementById("assignetToImg");

  if (imageSrc.src.slice(-8) === "down.png") {
    imageSrc.src = "../assets/img/arrow_up.png";
    content.style.display = "flex";
  } else {
    imageSrc.src = "../assets/img/arrow_drop_down.png";
    content.style.display = "none";
  }
  filterContacts();
}

/**
 * Creates a contact chosen array with the same length as the contacts array,
 * initializing all elements to false.
 * made by Mina Zarkesh
 *
 * @param {Array} contacts - The array of contacts.
 * @return {Array} - The contact chosen array.
 */
function createContactChosen() {
  for (let i = 0; i < contacts.length; i++) {
    isContactchosenArray.push(false);
  }
}

/**
 * Choose a contact based on the given index.
 * made by Mina Zarkesh
 *
 * @param {number} index - The index of the contact to choose.
 * @return {undefined} - This function does not return any value.
 */
function chooseContact(index) {
  let isContactchosen = isContactchosenArray[index];
  let content = document.getElementById("assignetToAddTask" + index);
  let CheckImg = document.getElementById("checkContactImg" + index);

  if (!isContactchosen) {
    CheckImg.src = "../assets/img/box-white.png";

    if (!content.classList.contains("chosenOne")) {
      content.classList.add("chosenOne");
    }
    if (content.classList.contains("heWhoMustNotBeNamed")) {
      content.classList.remove("heWhoMustNotBeNamed");
    }
    isContactchosen = true;
  } else {
    content.classList.remove("chosenOne");
    content.classList.add("heWhoMustNotBeNamed");
    isContactchosen = false;
    CheckImg.src = "../assets/img/checket.png";
  }
  isContactchosenArray[index] = isContactchosen;
  renderAssignetToProfileBadges(index);
}

/**
 * Renders assigned badges to the profile.
 * made by Mina Zarkesh
 * @param {number} index - The index of the assigned badge.
 * @return {undefined} This function does not return a value.
 */
function renderAssignetToProfileBadges(index) {
  
  let isContactchosen = isContactchosenArray[index];
  contact = contacts[index];
  if (isContactchosen) {

    if (!ContactChosenDiv.includes(contact)) {
      ContactChosenDiv.push(contact);
    }
  } else {

    if (ContactChosenDiv.includes(contact)) {
      let chosenIndex = ContactChosenDiv.indexOf(contact);
      ContactChosenDiv.splice(chosenIndex, 1);
    } else {
      console.log(
        "renderAssignetToProfileBadges: Fehler: isContactChosen ist " +
          isContactchosen
      );
    }
  }

  let content = document.getElementById("assignetToProfile-badges");
  content.innerHTML = "";
  for (let i = 0; i < ContactChosenDiv.length; i++) {
    const element = ContactChosenDiv[i];
    content.innerHTML += generateProfileBadge(element.color, element.nameTag);
  }
}

/*********************Subtasks erstellen und speichern *********************/

/**
 * Change the images of subtasks.
 * vom X/haken zu edit/delete
 *
 * made by Mina Zarkesh
 *
 *
 * @return {undefined} This function does not return a value.
 */
function changeSubtasksImgs() {
  let subtaskImgPlus = document.getElementById("Board_subtasksImg-plus");
  let subtaskImgClose = document.getElementById("Board_subtasksImg-close");
  let boardLine = document.getElementById("Board_line");
  let subtaskImgCheck = document.getElementById("Board_subtasksImg-check");

  subtaskImgPlus.classList.add("d-none");
  if (subtaskImgClose.classList.contains("d-none")) {
    subtaskImgClose.classList.remove("d-none");
  }
  if (boardLine.classList.contains("d-none")) {
    boardLine.classList.remove("d-none");
  }
  if (subtaskImgCheck.classList.contains("d-none")) {
    subtaskImgCheck.classList.remove("d-none");
  }
}

/**
 * Clears the input field for subtasks and resets related elements to their default state.
 * made by Mina Zarkesh
 *
 * @param {HTMLElement} subtask - The input field for subtasks.
 * @param {HTMLElement} subtaskImgPlus - The plus icon for adding subtasks.
 * @param {HTMLElement} subtaskImgClose - The close icon for removing subtasks.
 * @param {HTMLElement} boardLine - The line element separating subtasks.
 * @param {HTMLElement} subtaskImgCheck - The check icon for completing subtasks.
 */
function clearSubtasksInput() {
  let subtask = document.getElementById("subtasks_input");
  let subtaskImgPlus = document.getElementById("Board_subtasksImg-plus");
  let subtaskImgClose = document.getElementById("Board_subtasksImg-close");
  let boardLine = document.getElementById("Board_line");
  let subtaskImgCheck = document.getElementById("Board_subtasksImg-check");
  subtaskImgClose.classList.add("d-none");
  boardLine.classList.add("d-none");
  subtaskImgCheck.classList.add("d-none");
  if (subtaskImgPlus.classList.contains("d-none")) {
    subtaskImgPlus.classList.remove("d-none");
  }
  subtask.value = "";
}

/**
 * Generates a function comment for the given function body.
 * made by Mina Zarkesh
 *
 * @param {type} paramName - description of parameter
 * @return {type} description of return value
 */
function renderSubtask() {
  let subtask = document.getElementById("subtasks_input");
  let subtasksDiv = document.getElementById("subtasksDiv");
  subtasksDiv.innerHTML = "";
  if (!(subtask.value === "")) {
    subTasksBoard.push(subtask.value);
    subtask.value = "";
  }
  let ulbegin = "<ul>";
  for (let i = 0; i < subTasksBoard.length; i++) {
    const tempSubTask = subTasksBoard[i];
    ulbegin += generateSubtaskDiv(tempSubTask, i);
  }
  ulbegin += "</ul>";
  subtasksDiv.innerHTML = ulbegin;
}

/********************* Create Task *********************/

/**
 * Creates a new task by extracting data from the HTML input elements and adding it to the tasks array.
 * made by Mina Zarkesh
 * @return {Promise<void>} - A promise that resolves once the task has been added to the backend.
 */
async function createTask() {
  let taskCategory = document.getElementById("category");
  let taskTitle = document.getElementById("taskTitle");
  let taskDescription = document.getElementById("description");
  let taskDate = document.getElementById("date");
  let taskPriority = priority;
  let taskPriorityImg = priorityImg;
  let taskassignedTo = [];
  let taskassignedToNameTag = [];
  let taskassignedToColor = [];
  let taskSubtasks = [];
  let taskSubtaskschecked = [];

  for (let i = 0; i < ContactChosenDiv.length; i++) {
    const element = ContactChosenDiv[i];
    taskassignedTo.push(element.name);
    taskassignedToNameTag.push(element.nameTag);
    taskassignedToColor.push(element.color);
  }

  for (let i = 0; i < subTasksBoard.length; i++) {
    taskSubtasks.push(subTasksBoard[i]);
    taskSubtaskschecked.push("unchecked");
  }

  newTask = {
    container: "toDo",
    category: CategoryArray[taskCategory.value],
    title: taskTitle.value,
    description: taskDescription.value,
    date: taskDate.value,
    priority: taskPriority,
    priorityImg: taskPriorityImg,
    assignedTo: taskassignedTo,
    assignedToNameTag: taskassignedToNameTag,
    assignedToColor: taskassignedToColor,
    subtasks: taskSubtasks,
    subtaskschecked: taskSubtaskschecked,
  };

  tasks.push(newTask);
  await addTasktoBackend();
  renderBoard();
  let animatedImg = document.getElementById("animatedImg");
  animatedImg.style.display = "block"; // Bild einblenden
  animatedImg.style.animation = "none"; // Animation zurücksetzen
  setTimeout(function () {
    animatedImg.style.animation =
      "moveDown 3s ease-in-out 0s 1 normal forwards, hide 1s 2s 1 normal forwards"; // Animation erneut setzen
  }, 100); // Kurze Verzögerung vor dem erneuten Setzen der Animation
  closeMainTask();
}

/**
 * Adds a task to the backend.
 * made by Mina Zarkesh
 * @return {Promise<void>} - A promise that resolves when the task is added.
 */
async function addTasktoBackend() {
  await setItem("tasks", JSON.stringify(tasks));
}
/******************** render Tasks auf Board ****************************/

/**
 * Renders the board by populating the "toDoBoard" element with board columns and task cards.
 * made by Mina Zarkesh
 *
 * @param {type} - None
 * @return {type} - None
 */
function renderBoard() {
  let content = document.getElementById("toDoBoard");
  let names = ["To do", "in Progress", "Await feedback", "Done"];
  content.innerHTML = "";
  for (let i = 0; i < BoardIDs.length; i++) {
    const column = BoardIDs[i];
    const name = names[i];
    content.innerHTML += generateBoardColumn(column, name);
    renderTaskCard(column);
  }
}

/**
 * Renders a task card based on the given ID.
 * made by Mina Zarkesh
 *
 * @param {number} id - The ID of the task.
 * @return {void} This function does not return a value.
 */
function renderTaskCard(id) {
  let content = document.getElementById(`C_${id}`);
  content.innerHTML = "";
  //generiere TaskCard in Spalte
  let keyword = id;
  //search keyword from names array by name
  searchResultTasks = tasks.filter(
    (task) => task.container.indexOf(keyword) > -1
  ); //.toLowerCase()
  let j;

  //searchResult bei keyword "A" => ["Anton Mayer", "Anja Schulz"], bei Keyword "B" ["Benedikt ..."]
  for (let k = 0; k < searchResultTasks.length; k++) {
    let Telement = searchResultTasks[k];
    j = tasks.indexOf(Telement);

    let taskCategory = Telement["category"];
    let taskTitle = Telement["title"];
    let taskDescription = Telement["description"];

    content.innerHTML += generateTaskCard(
      j,
      taskCategory,
      taskTitle,
      taskDescription
    );

    let cardCategory = document.getElementById("cardCategory" + j);

    if (taskCategory === "User Story") {
      cardCategory.style.backgroundColor = `var(--userStory)`;
    } else {
    }

    renderProfileBadges(j);
    renderPriorityImg(j);
    renderProgessBar(j);
    j++;
  }
}

/**
 * Renders profile badges based on the given index.
 * made by Mina Zarkesh
 * @param {number} i - The index of the profile badges to render.
 * @return {undefined} This function does not return a value.
 */
function renderProfileBadges(i) {
  let profileBadges = document.getElementById("profileBadges" + i);

  let taskassignedToNameTag = tasks[i]["assignedToNameTag"];
  let taskassignedToColor = tasks[i]["assignedToColor"];
  let taskPriorityImg = "../assets/img/medium.png";

  profileBadges.innerHTML = "";

  // generiere profileBadges
  for (let j = 0; j < taskassignedToColor.length; j++) {
    const assignedToColor = taskassignedToColor[j];
    const assignedToNameTag = taskassignedToNameTag[j];
    profileBadges.innerHTML += generateProfileBadge(
      assignedToColor,
      assignedToNameTag
    );
  }
}

/**
 * Renders the priority image for a given task.
 * made by Mina Zarkesh
 * @param {number} i - The index of the task.
 * @return {undefined} Does not return a value.
 */
function renderPriorityImg(i) {
  let priorityImg = document.getElementById("priorityImg" + i);
  let taskPriorityImg;
  let priority = tasks[i].priority;
  if (priority === "Urgent") {
    taskPriorityImg = "../assets/img/urgentImg.png";
  } else if (priority === "Medium") {
    taskPriorityImg = "../assets/img/medium.png";
  } else if (priority == "Low") {
    taskPriorityImg = "../assets/img/low.png";
  } else {
    console.log("Fehler");
  }
  priorityImg.innerHTML = "";
  priorityImg.innerHTML = /*html*/ `
   <img src=${taskPriorityImg}  />
  `;
}

/**
 * Renders a progress bar based on the provided index.
 * made by Mina Zarkesh
 * @param {number} i - The index of the progress bar to render.
 * @return {void} This function does not return a value.
 */
function renderProgessBar(i) {
  let subtasks = [];
  subtasks = tasks[i].subtasks;
  subtaskscheckedArray = tasks[i].subtaskschecked;
  let progressBar = document.getElementById("progressBar" + i);
  let subtasksLength = tasks[i].subtasks.length;
  let valueSubTasks = 0;

  for (let j = 0; j < subtaskscheckedArray.length; j++) {
    const element = subtaskscheckedArray[j];

    if (element === "checked") {
      valueSubTasks++;
    }
  }
  progressBar.innerHTML = /*html*/ `
   <progress id="progress${i}" max="${subtasksLength}" value="${valueSubTasks}"></progress>
                  <span>${valueSubTasks}/${subtasksLength} Subtasks</span>
`;
}

///////////////////////////////////////  Drag and Drop  /////////////////////////////////////////

let currentDraggableElement;

/**
 * Sets the current draggable element to the specified element.
 *
 * @param {object} element - The element to set as the current draggable element.
 */
function startDragging(element) {
  currentDraggableElement = element;
}

/**
 * Prevents the default behavior of an event.
 *
 * @param {Event} ev - The event object.
 */
function allowDrop(ev) {
  ev.preventDefault();
}

/**
 * Moves the current draggable element to the specified position.
 *
 * @param {string} position - The ID of the target container where the element will be moved.
 * @return {Promise<void>} - A promise that resolves once the element has been moved.
 */
async function moveTo(position) {
  let element = currentDraggableElement;
  let targetContainer = document.getElementById(position);
  targetContainer.appendChild(element);
  removehiglight(position);
  let cardId = element.id; //übergibt die ID dieser Karte zB. card1
  cardId = cardId.slice(4); //schneidet die ersten 4 Zeichen ab, damit nur eine Zahl übrig bleibt.
  tasks[cardId].container = position; // übergibt die Position als containerName
  await setItem("tasks", JSON.stringify(tasks));
  updateNoTasksDisplay();
}

/**
 * Highlights an element with the given id.
 *
 * @param {string} id - The id of the element to highlight.
 * @return {undefined} - This function does not return anything.
 */
function higlight(id) {
  document.getElementById(id).classList.add("dragAreaHiglight");
}

/**
 * Removes the "dragAreaHiglight" class from the element with the specified ID.
 *
 * @param {string} id - The ID of the element.
 */
function removehiglight(id) {
  document.getElementById(id).classList.remove("dragAreaHiglight");
}

/**
 * Removes the highlight from the "toDo", "inProgress", "awaitFeedback", and "done" elements.
 *
 * @param {string} param - The name of the element to be highlighted.
 */
function removeHiglightDone() {
  removehiglight("toDo");
  removehiglight("inProgress");
  removehiglight("awaitFeedback");
  removehiglight("done");
}

/**
 * Updates the display of the "No Tasks" placeholder based on the presence of child elements in the specified containers.
 *
 * @param {Array} containerIds - A list of IDs of the containers to be checked.
 * @return {void}
 */
function updateNoTasksDisplay() {
  const containerIds = ["toDo", "inProgress", "awaitFeedback", "done"]; // Eine Liste von IDs der Container, die überprüft werden sollen
  containerIds.forEach((id) => {
    // Iteriere über jede Container-ID in der Liste

    const container = document.getElementById(id); // Hole das Container-Element anhand seiner ID
    const placeholder = container.querySelector(".noTasks"); // Hole das Platzhalter-Element innerhalb des Containers (wird null sein, wenn nicht vorhanden)
    const childElements = container.querySelectorAll(".card"); // Überprüfe, ob der Container leer ist, indem du nach Kindelementen mit der Klasse 'card' suchst

    if (childElements.length === 0) {
      // Wenn der Container leer ist (keine Kindelemente), zeige den Platzhalter an
      placeholder.style.display = "block";
    } else {
      placeholder.style.display = "none"; // Wenn der Container nicht leer ist, blende den Platzhalter aus
    }
  });
}

//////////////////// filter Tasks ////////////////////////

/**
 * Filters tasks based on the search query.
 * Title, Description, Category
 *
 * @return {undefined} No return value.
 */
function filterTasks() {
  let search = document.getElementById("searchTask").value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const titleElement = card.querySelector(".cardTitel p");
    const categoryElement = card.querySelector(".cardCategory span");
    const descriptionElement = card.querySelector(".cardDescription");
    const title = titleElement.textContent.toLowerCase();
    const category = categoryElement.textContent.toLowerCase();
    const description = descriptionElement.textContent.toLowerCase();
    if (!search) {
      card.style.display = "flex";
    } else if (
      title.includes(search) ||
      category.includes(search) ||
      description.includes(search)
    ) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

//////////////////// open Task ////////////////////////

/**
 * Opens a task window with the given ID.
 * made by Mina Zarkesh
 *
 * @param {number} id - The ID of the task to open.
 * @return {void} - This function does not return a value.
 */
function openTask(id) {
  let openTaskWindow = document.getElementById("openTask");
  openTaskWindow.style.display = "flex";
  renderOpenTask(id);
}

/**
 * Closes the open task window and clears the chosen contact div array.
 * made by Mina Zarkesh
 *
 * @param {type} paramName - description of parameter
 * @return {type} description of return value
 */
function closeOpenTask() {
  let openTaskWindow = document.getElementById("openTask");
  openTaskWindow.style.display = "none";

  if (ContactChosenDiv.length > 1) {
    ContactChosenDiv = [];
  }
}

/**
 * Renders an open task based on the given index.
 * made by Mina Zarkesh
 * @param {number} index - The index of the task to render.
 * @return {undefined} This function does not return a value.
 */
function renderOpenTask(index) {
  let clickedOpenTask = document.getElementById("openTask");
  clickedOpenTask.innerHTML = "";

  let openCategory = tasks[index]["category"];
  let openTitle = tasks[index]["title"];
  let openDescription = tasks[index]["description"];
  let openDate = tasks[index]["date"];
  let openPriority = tasks[index]["priority"];
  let openPriorityImg = tasks[index]["priorityImg"];
  let openAssignedTo = tasks[index]["assignedTo"];
  let openassignedToNameTag = tasks[index]["assignedToNameTag"];
  let openassignedToColor = tasks[index]["assignedToColor"];
  let openSubtasks = tasks[index]["subtasks"];
  let openSubtaskcheckedArray = tasks[index]["subtaskschecked"];
  clickedOpenTask.innerHTML = generateOpenTask(
    index,
    openCategory,
    openTitle,
    openDescription,
    openDate,
    openPriority,
    openPriorityImg
  );

  let clickedSubtasksDiv = document.getElementById("openSubtasksDiv");
  let clickedAssignetToDiv = document.getElementById("openAssignetTo");

  clickedAssignetToDiv.innerHTML = "";
  clickedSubtasksDiv.innerHTML = "";

  for (let i = 0; i < openAssignedTo.length; i++) {
    const openTaskContactName = openAssignedTo[i];
    const openTaskContactNameTag = openassignedToNameTag[i];
    const openTaskContactColor = openassignedToColor[i];
    clickedAssignetToDiv.innerHTML += generateOpenProfileBadgeWithName(
      openTaskContactName,
      openTaskContactNameTag,
      openTaskContactColor
    );
  }
  subTasksBoard = [];
  subtaskscheckedArray = [];
  for (let i = 0; i < openSubtasks.length; i++) {
    const openSubtask = openSubtasks[i];
    clickedSubtasksDiv.innerHTML += generateOpenSubtaskDiv(
      index,
      openSubtask,
      i
    );
    subTasksBoard.push(openSubtask);
    subtaskscheckedArray.push(openSubtaskcheckedArray[i]);
  }
  for (let j = 0; j < openSubtaskcheckedArray.length; j++) {
    const openSubtaskCheckLabel = openSubtaskcheckedArray[j];
    let openSubtaskCheckbox = document.getElementById("confirm" + j);
    if (openSubtaskCheckLabel === "checked") {
      openSubtaskCheckbox.checked = true;
    }
  }
}

/**
 * Delete a task from the list of tasks (card).
 * made by Mina Zarkesh
 *
 * @param {number} id - The ID of the task to delete.
 * @return {Promise<void>} - A promise that resolves after the task is deleted.
 */
async function deleteTask(id) {
  tasks.splice(id, 1);
  await setItem("tasks", tasks);
  closeOpenTask();
  renderBoard();
}

/**
 * Show the edit task form for a specific task.
 * made by Mina Zarkesh
 *
 * @param {number} index - The index of the task to edit.
 * @return {Promise<void>} A promise that resolves when the edit task form is displayed.
 */
async function showEditTask(index) {
  let clickedOpenTask = document.getElementById("openTask");
  clickedOpenTask.innerHTML = "";
  editedTask = tasks[index];
  let addTask = document.getElementById("AddTask-overlay");
  addTask.innerHTML = "";
  clickedOpenTask.innerHTML = generateEditTask(editedTask, index);

  //mit dieser Funktion stellst du sicher, dass die vergangenen Tage nicht mehr ausgewählt werden können.
  document.getElementById("date").min = new Date().toISOString().split("T")[0];
  ContactChosenDiv = [];

  let priorityID = editedTask.priority.toLowerCase();
  priorityColor = priorityColor = "--" + priorityID;

  if (priorityID === "low") {
    priorityImg = "../assets/img/low.png";
    low.classList.add("active");
    priority = "Low";

    low.style.backgroundColor = `var(${priorityColor})`;
  } else if (priorityID === "medium") {
    priorityImg = "../assets/img/medium.png";
    medium.classList.add("active");
    medium.style.backgroundColor = `var(${priorityColor})`;
    priority = "Medium";
  } else {
    priorityImg = "../assets/img/urgentImg.png";
    urgent.classList.add("active");
    urgent.style.backgroundColor = `var(${priorityColor})`;
    priority = "Urgent";
  }

  let assignedTo = document.getElementById("assignetTo");
  let profileBadges = document.getElementById("assignetToProfile-badges");
  assignedTo.innerHTML = "";
  profileBadges = "";

  tasks[index].assignedTo.forEach((assignedTo) => {
    ContactChosenDiv.push(assignedTo);
  });

  for (let i = 0; i < contacts.length; i++) {
    const contactElement = contacts[i];
    if (ContactChosenDiv.includes(contactElement.name)) {
      isContactchosenArray[i] = true;
      chosenIndex = ContactChosenDiv.indexOf(contactElement.name);

      ContactChosenDiv[chosenIndex] = contactElement;
      renderAssignetToProfileBadges(i);
    }
  }
  renderAssignetTo();

  document.getElementById("category").selectedIndex =
    CategoryArray.indexOf(editedTask.category) + 1;

  let subtasksDiv = document.getElementById("subtasksDiv");

  subtasksDiv.innerHTML = "";
  subTasksBoard = [];

  for (let i = 0; i < editedTask.subtasks.length; i++) {
    subTasksBoard.push(editedTask.subtasks[i]);
  }
  let ulbegin = "<ul>";

  for (let i = 0; i < subTasksBoard.length; i++) {
    const tempSubTask = subTasksBoard[i];
    ulbegin += generateSubtaskDiv(tempSubTask, i);
  }
  ulbegin += "</ul>";

  subtasksDiv.innerHTML = ulbegin;
}

/**
 * Edits a task in the task list.
 * made by Mina Zarkesh
 *
 * @param {number} index - The index of the task to be edited.
 * @return {Promise} A promise that resolves after the task has been edited.
 */
async function editTask(index) {
  let taskCategory = document.getElementById("category");
  let taskTitle = document.getElementById("taskTitle");
  let taskDescription = document.getElementById("description");
  let taskDate = document.getElementById("date");
  let taskPriority = priority;
  let taskPriorityImg = priorityImg;
  let taskassignedTo = [];
  let taskassignedToNameTag = [];
  let taskassignedToColor = [];
  let taskSubtasks = [];
  let taskSubtaskschecked = [];

  for (let i = 0; i < ContactChosenDiv.length; i++) {
    const element = ContactChosenDiv[i];
    taskassignedTo.push(element.name);
    taskassignedToNameTag.push(element.nameTag);
    taskassignedToColor.push(element.color);
  }

  for (let i = 0; i < subTasksBoard.length; i++) {
    taskSubtasks.push(subTasksBoard[i]);
    taskSubtaskschecked.push(subtaskscheckedArray[i]);
  }

  editedTask = {
    container: "toDo",
    category: CategoryArray[taskCategory.value],
    title: taskTitle.value,
    description: taskDescription.value,
    date: taskDate.value,
    priority: taskPriority,
    priorityImg: taskPriorityImg,
    assignedTo: taskassignedTo,
    assignedToNameTag: taskassignedToNameTag,
    assignedToColor: taskassignedToColor,
    subtasks: taskSubtasks,
    subtaskschecked: taskSubtaskschecked,
  };

  tasks[index] = editedTask;
  await addTasktoBackend();
  renderBoard();
  closeOpenTask();
}

/**
 * Deletes a subtask from the subTasksBoard array at the specified index.
 * made by Mina Zarkesh
 * @param {number} i - The index of the subtask to be deleted.
 * @return {undefined} This function does not return any value.
 */
function deleteSubtask(i) {
  subTasksBoard.splice(i, 1);
  let subtask = document.getElementById("subtasks_input");
  subtask.value = "";
  renderSubtask();
}

/**
 * Toggles the checked state of subtasks for a given index.
 * made by Mina Zarkesh
 * @param {number} index - The index of the task in the tasks array.
 * @param {number} i - The index of the subtask in the subtaskscheckedArray.
 * @return {undefined} No return value.
 */
function toggleSubtaskschecked(index, i) {
  let inputfield = document.getElementById("confirm" + i);
  let isChosen = inputfield.checked;
  if (isChosen) {
    subtaskscheckedArray[i] = "checked";
    tasks[index].subtaskschecked[i] = "checked";
  } else {
    subtaskscheckedArray[i] = "unchecked";
    tasks[index].subtaskschecked[i] = "unchecked";
  }
  renderBoard();
}

/**
 * Edits a subtask in the subtasks board.
 * made by Mina Zarkesh
 * @param {number} i - The index of the subtask to be edited.
 * @return {undefined} No return value.
 */
function editSubtask(i) {
  let subtask = document.getElementById("subtasks_input");
  subtask.value = subTasksBoard[i];
  subTasksBoard.splice(i, 1);
}

/**
 * Renders the "AddTask" section of the application.
 * made by Mina Zarkesh
 * @return {undefined} This function does not return a value.
 */
function renderAddTask() {
  let mainSection = document.getElementById("AddTask-overlay");
  mainSection.innerHTML = generateAddTask();
  //mit dieser Funktion stellst du sicher, dass die vergangenen Tage nicht mehr ausgewählt werden können.
  document.getElementById("date").min = new Date().toISOString().split("T")[0];
}
