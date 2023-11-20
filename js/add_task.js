/**
 * This is where all my variables and arrays are stored
 */
let urgentButtonState = false;
let mediumButtonState = false;
let lowButtonState = false;
let priorityButton;
let warningCreated = false;
let showedOptions = false;
let subTasknumber = 0;
let subTasks = [];
let subTaskStatus = [];
let category;
let warningTitle = false;
let warningDescription = false;
let warningDueDate = false;
let addedWarningForTitle = 0;
let addedWarningForDescription = 0;
let addedWarningForDueDate = 0;
let requirement1 = false;
let requirement2 = false;
let requirement3 = false;
let taskPriorityImg;
let taskassignedToNameTag = [];
let taskassignedToColor = [];
let addedContacts = [];
let AllTasks = [];
let showedContacts = false;
let clickedButtons = false;
const containerStates = {};
const containerStatesForButtons = {};
let subTaskNumberArray = [];
let y = 0;
let number = 0;

/**
 * just pushes false into the array
 */
function pushFalseToBadgeArray(){
   for (let i = 0; i < contacts.length; i++) {
    badgesStatus.push(false);
   }
   console.log(badgesStatus);
 }

/**
 * This function is used to create a new task
 */
async function createTask() {
  if (
    (requirement1 == true) &
    (requirement2 == true) &
    (requirement3 == true)
  ) {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let date = document.getElementById("dueDate").value;

    let newTask = {
      container: "toDo",
      title: title,
      description: description,
      date: date,
      priority: priorityButton,
      priorityImg: taskPriorityImg,
      assignedTo: addedContacts,
      assignedToNameTag: taskassignedToNameTag,
      assignedToColor: taskassignedToColor,
      category: category,
      subtasks: subTasks,
      subtaskschecked: subTaskStatus,
    };
    tasks.push(newTask);
    await setItem("tasks", tasks);
    let animatedImgtask = document.getElementById("animatedImgAddTask");
    animatedImgtask.style.display = "block";
    animatedImgtask.style.animation = "none";
    setTimeout(function () {
      animatedImgtask.style.animation =
        "moveDown 3s ease-in-out 0s 1 normal forwards, hide 1s 2s 1 normal forwards";

      setTimeout(function () {
        window.location.href = "board.html";
      }, 2000);
    }, 100);
  }
}

function saveAsString(element) {
  let string = JSON.stringify(element);
  return string;
}

function saveInLocalStorage(key, string) {
  localStorage.setItem(key, string);
}

/**
 * I use these functions to switch between the buttons
 */
function urgent() {
  mediumButtonState = false;
  lowButtonState = false;
  switchButtons("urgent_div");

  let img = document.getElementById("urgent_img");
  let urgent = document.getElementById("urgent_div");
  let medium = document.getElementById("medium_div");
  let low = document.getElementById("low_div");

  if (!urgentButtonState) {
    urgent.style.backgroundColor = "rgb(255,73,16)";
    urgent.style.color = "white";
    img.classList.add("image");

    urgent.classList.add("noHover");
    medium.classList.remove("noHover");
    low.classList.remove("noHover");

    urgentButtonState = true;
  } else {
    urgent.style.backgroundColor = "";
    urgent.style.color = "";
    img.classList.remove("image");
    urgent.classList.remove("noHover");
    urgentButtonState = false;
  }

  priorityButton = "Urgent";
  taskPriorityImg = "../assets/img/urgentImg.png";

  urgent.style.removeProperty("border-bottom");
}

function medium() {
  urgentButtonState = false;
  lowButtonState = false;

  switchButtons("medium_div");
  let img = document.getElementById("medium_img");
  let medium = document.getElementById("medium_div");
  let urgent = document.getElementById("urgent_div");
  let low = document.getElementById("low_div");

  if (!mediumButtonState) {
    medium.style.backgroundColor = "rgb(255,168,0)";
    medium.style.color = "white";
    img.classList.add("image");
    medium.classList.add("noHover");
    urgent.classList.remove("noHover");
    low.classList.remove("noHover");
    mediumButtonState = true;
  } else {
    medium.style.backgroundColor = "";
    medium.style.color = "";
    img.classList.remove("image");
    medium.classList.remove("noHover");
    mediumButtonState = false;
  }

  priorityButton = "Medium";
  taskPriorityImg = "../assets/img/medium.png";
}

function low() {
  urgentButtonState = false;
  mediumButtonState = false;

  switchButtons("low_div");
  let img = document.getElementById("low_img");
  let medium = document.getElementById("medium_div");
  let urgent = document.getElementById("urgent_div");
  let low = document.getElementById("low_div");

  if (!lowButtonState) {
    low.style.backgroundColor = "rgb(122,226,41)";
    low.style.color = "white";
    img.classList.add("image");
    low.classList.add("noHover");
    urgent.classList.remove("noHover");
    medium.classList.remove("noHover");
    lowButtonState = true;
  } else {
    low.style.backgroundColor = "";
    low.style.color = "";
    img.classList.remove("image");
    low.classList.remove("noHover");
    lowButtonState = false;
  }

  priorityButton = "Low";
  taskPriorityImg = "../assets/img/low.png";
}

function switchButtons(button) {
  let priorityButton = button;

  if (priorityButton == "urgent_div") {
    //medium container
    let medium = document.getElementById("medium_div");
    let imgMedium = document.getElementById("medium_img");

    medium.style.backgroundColor = "";
    medium.style.color = "";
    imgMedium.classList.remove("image");

    //low container
    let low = document.getElementById("low_div");
    let imgLow = document.getElementById("low_img");

    low.style.backgroundColor = "";
    low.style.color = "";
    imgLow.classList.remove("image");
  }

  if (priorityButton == "medium_div") {
    //urgent container
    let urgent = document.getElementById("urgent_div");
    let imgUrgent = document.getElementById("urgent_img");

    urgent.style.backgroundColor = "";
    urgent.style.color = "";
    imgUrgent.classList.remove("image");

    //low container
    let low = document.getElementById("low_div");
    let imgLow = document.getElementById("low_img");

    low.style.backgroundColor = "";
    low.style.color = "";
    imgLow.classList.remove("image");
  }

  if (priorityButton == "low_div") {
    //urgent container
    let urgent = document.getElementById("urgent_div");
    let imgUrgent = document.getElementById("urgent_img");

    urgent.style.backgroundColor = "";
    urgent.style.color = "";
    imgUrgent.classList.remove("image");

    //medium container
    let medium = document.getElementById("medium_div");
    let imgMedium = document.getElementById("medium_img");

    medium.style.backgroundColor = "";
    medium.style.color = "";
    imgMedium.classList.remove("image");
  }
}

/**
 * With this function you ensure that the past days can no longer be selected in the calendar.
 */
document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("dueDate").min = new Date()
    .toISOString()
    .split("T")[0];
});

/**
 * if no text has been entered into an input field, a div with a warning will be displayed
 */
function showWarning() {
  //Enter a title
  let titleInput = document.getElementById("title");
  let titleDiv = document.getElementById("title_div");

  if (titleInput.value == "" && addedWarningForTitle === 0) {
    addedWarningForTitle = 1;
    titleInput.classList.add("input_field_warning");
    titleDiv.innerHTML += `
    <div id="warningDiv3" class="warning_divs">This field is required</div>
    `;
  }

  //Description
  let descriptionInput = document.getElementById("description");
  let descriptionDiv = document.getElementById("description_div");

  if (
    descriptionInput.value.trim() === "" &&
    addedWarningForDescription === 0
  ) {
    addedWarningForDescription = 1;
    descriptionInput.classList.add("input_field_warning1");
    descriptionDiv.innerHTML +=
      '<div id="warningDiv1" class="warning_divs">This field is required</div>';
    document.getElementById("cornerImg").style =
      "position: absolute; bottom: 39px; right: 8px;";
  }

  //Due Date
  let dueDateInput = document.getElementById("dueDate");
  let dueDateDiv = document.getElementById("dueDate_div");

  if (dueDateInput.value.trim() === "" && addedWarningForDueDate === 0) {
    addedWarningForDueDate = 1;
    dueDateInput.classList.add("input_field_warning");
    dueDateDiv.innerHTML +=
      '<div id="warningDiv2" class="warning_divs">This field is required</div>';
  }
}

/**
 * If text was entered, the warning div is removed
 */
function removeWarningTitle() {
  let div = document.getElementById("warningDiv3");
  let input = document.getElementById("title");
  addedWarningForTitle = 0;
  requirement1 = true;

  if (div) {
    div.remove();
    input.classList.remove("input_field_warning");
  }
}

function removeWarningDescription() {
  let div = document.getElementById("warningDiv1");
  let input = document.getElementById("description");
  addedWarningForDescription = 0;
  requirement2 = true;

  if (div) {
    div.remove();
    input.classList.remove("input_field_warning1");

    document.getElementById("cornerImg").style =
      "position: absolute; bottom: 8px; right: 6px;";
  }
}

function removeWarningDueDate() {
  let div = document.getElementById("warningDiv2");
  let input = document.getElementById("dueDate");
  addedWarningForDueDate = 0;
  requirement3 = true;

  if (div) {
    div.remove();
    input.classList.remove("input_field_warning");
  }
}

/**
 * The contacts are displayed in the “Assigned to” area as soon as the input field is clicked
 */
function showContacts() {
  let img = document.getElementById("arrow1");
  let scrollContainer = document.getElementById("scrollContainer");

  if (showedContacts === false) {
    scrollContainer.innerHTML = "";
    img.src = `../assets/img/arrow_up.png`;
    let assignedTo = document.getElementById("assignedTo");
    scrollContainer.style.display = "";

    for (let i = 0; i < contacts.length; i++) {
      let selectedClass = containerStates[`contactPerson${i}`]
        ? "classForContactButtons"
        : "contactDivs";
      let styleClass = containerStates[`contactPerson${i}`]
        ? "styleForContactButtons"
        : "";
      let imgSrc = containerStatesForButtons[`button${i}`]
        ? "../assets/img/box.png"
        : "../assets/img/Check button.png";
      let imgFilter = containerStatesForButtons[`button${i}`]
        ? "brightness(10)"
        : "none";

      scrollContainer.innerHTML += `
              <div style="cursor:pointer; margin-bottom: 0" id="contactPerson${i}" class="${selectedClass} ${styleClass}" onclick="selectContact('contactPerson${i}', 'spanName${i}', 'nameTag${i}', 'nameTagDiv${i}', '${i}'), changeButton('button${i}')">
                  <div id="nameTagDiv${i}" class="circleTag" style="background-color: var(${contacts[i].color})";"><span id="nameTag${i}" style="color: white; font-size: 16px">${contacts[i].nameTag}</span></div> <span id="spanName${i}">${contacts[i].name}</span> <img id="button${i}" style="margin-right:15px; filter: ${imgFilter}" src="${imgSrc}">
              </div>
          `;
    }
    document.getElementById("addNewContactButton").style.display = "";
    showedContacts = true;
  } else {
    img.src = `../assets/img/arrow_drop_down.png`;
    scrollContainer.style.display = "none";
    document.getElementById("addNewContactButton").style.display = "none";
    showedContacts = false;
  }
}

/**
 * this function selects a contact, colors the div blue and saves the selected contacts to an array
 *
 * @param {string} id - this is the id of the corresponding container for each contact
 * @param {string} id1 - represents each First name and last name of each contact
 * @param {string} nameTag - represents each Tag of each contact
 * @param {string} nameTagDiv - div element of the span tag
 * @param {number} indexNumber - index
 */
function selectContact(id, id1, nameTag, nameTagDiv, indexNumber) {
  const contactPerson = document.getElementById(id);
  const contactNameTag = document.getElementById(nameTag).textContent;
  const div = document.getElementById(nameTagDiv);

  let bgColorValue = div.style.backgroundColor;
  let bgColor;

  let isContactchosen = isContactchosenArray[indexNumber];
  isContactchosen = true;

  if (bgColorValue.startsWith("var(") && bgColorValue.endsWith(")")) {
    bgColor = bgColorValue.slice(4, -1).trim();
  }

  if (!containerStates[id]) {
    contactPerson.classList.add("classForContactButtons");
    contactPerson.classList.remove("contactDivs");
    contactPerson.classList.add("styleForContactButtons");
    containerStates[id] = true;
    addNameToArray(id1);
    taskassignedToNameTag.push(contactNameTag);
    taskassignedToColor.push(bgColor);
  } else {
    contactPerson.classList.remove("classForContactButtons");
    contactPerson.classList.add("contactDivs");
    contactPerson.classList.remove("styleForContactButtons");
    containerStates[id] = false;
    addNameToArray(id1);
    let index = taskassignedToNameTag.indexOf(contactNameTag);
    taskassignedToNameTag.splice(index, 1);
    let index1 = taskassignedToColor.indexOf(bgColor);
    taskassignedToColor.splice(index1, 1);
    isContactchosen = false;
  }
  isContactchosenArray[indexNumber] = isContactchosen;
  renderBadges(indexNumber);
  checkIfContainerHasBadges();
}
