
/**
 * Generates a board column with the given ID and name.
 *
 * @param {string} ID - The ID of the board column.
 * @param {string} name - The name of the board column.
 * @returns {string} The generated HTML code for the board column.
 * made by Mina Zarkesh
 */

function generateBoardColumn(ID, name) {
  return /*html*/ `
    <div class="dragAndDropContainer"
         id="${ID}"
         ondrop="moveTo('${ID}')"
         ondragleave="removehiglight('${ID}')"
         ondragover="allowDrop(event);higlight('${ID}')"
         >
         <div class="dragAndDropHeadline">
                  <h3>${name}</h3>
                  <button onclick="showMainTask()">+</button>
                </div>
                <div class="DragContainer">
                  <div class="noTasks" style="display: none">
                    <p>No tasks To do</p>
                  </div>  
                  <div id="C_${ID}">
  
                  </div>
       </div> 
          
   `;
}

/**
 * Generates a task card HTML element based on the provided parameters.
 *
 * made by Mina Zarkesh
 * @param {number} id - The unique identifier of the task card.
 * @param {string} taskCategory - The category of the task.
 * @param {string} taskTitle - The title of the task.
 * @param {string} taskDescription - The description of the task.
 * @return {string} The generated task card HTML element.
 */

function generateTaskCard(id, taskCategory, taskTitle, taskDescription) {
  return /*html*/ `
          <div
          id="card${id}"
          onclick="openTask(${id})" 
                    class="card"
                    draggable="true"
                    ondragstart="startDragging(this)"
                  >
                    <div id="cardCategory${id}" class="cardCategory user-story">
                      <span>${taskCategory}</span>
                    </div>
                    <div class="cardTitel">
                      <p>${taskTitle}</p>
                    </div>
                    <div class="cardDescription">
                    ${taskDescription}
                    </div>
                   <div id="progressBar${id}" class="progressBar">
                   </div>
                    <div id="priority" class="badgeAndPriorityDiv">
                    <div class="profile-badges" id="profileBadges${id}">
                    </div>
                    <div id="priorityImg${id}">
  
                    </div>
                      </div>
                    </div>
                  </div>
    `;
}



/**
 * Generate a profile badge with the given color and name tag.
 * made by Mina Zarkesh
 * 
 * @param {string} taskassignedToColor - The color of the profile badge.
 * @param {string} taskassignedToNameTag - The name tag to be displayed on the profile badge.
 * @return {string} The HTML code for the profile badge.
 */
function generateProfileBadge(taskassignedToColor, taskassignedToNameTag) {
  return /*html*/ `
    <div class="profile-badge" style="background-color: var(${taskassignedToColor});">
          <span>${taskassignedToNameTag}</span>
        </div>
  `;
}



/**
 * Generates an open profile badge with a given contact name, tag, and color.
 * made by Mina Zarkesh
 * @param {string} openTaskContactName - The name of the contact.
 * @param {string} openTaskContactNameTag - The tag of the contact.
 * @param {string} openTaskContactColor - The color of the badge.
 * @return {string} The generated HTML for the open profile badge.
 */
function generateOpenProfileBadgeWithName(
  openTaskContactName,
  openTaskContactNameTag,
  openTaskContactColor
) {
  return /*html*/ `
       <div class="assignetNames">
          <div class="profile-badge" style="background-color: var(${openTaskContactColor});">
              <span>${openTaskContactNameTag}</span>
          </div>
          <div class="contact-frame">
              <span class="contact-frame-name">${openTaskContactName}</span>
          </div>
          </div>
    `;
}


/**
 * Generates a division element for a subtask.
 * made by Mina Zarkesh
 * @param {string} subtask - The subtask to display in the division element.
 * @param {number} i - The index of the subtask.
 * @return {string} The HTML code for the division element.
 */
function generateSubtaskDiv(subtask, i) {
  return /*html*/ `
       <li><div class="listitem">${subtask}<div class="row"><img onclick="editSubtask(${i})" src="../assets/img/edit.png"><div  id="Board_line${i}" class="line"></div><img onclick="deleteSubtask(${i})" src="../assets/img/delete.png"></div></div></li>
    `;
}

/**
 * Generates an HTML string for an open subtask div.
 * made by Mina Zarkesh
 * @param {number} index - The index of the open subtask div.
 * @param {string} openSubtask - The open subtask string.
 * @param {number} i - The loop index.
 * @return {string} The generated HTML string for the open subtask div.
 */
function generateOpenSubtaskDiv(index, openSubtask, i) {
  return /*html*/ `
         <div>
            <input id="confirm${i}" type="checkbox" onclick="toggleSubtaskschecked(${index},${i})"/>
            <label for="confirm${i}">${openSubtask}</label>
          </div>
    `;
}


/**
 * Generates the HTML code for editing a task.
 * made by Mina Zarkesh
 *
 * @param {Object} editedTask - The edited task object.
 * @param {number} index - The index of the task in the list.
 * @return {string} The HTML code for editing the task.
 */
function generateEditTask(editedTask, index) {
  return /*html*/ `
    <div class="closeDiv cardOpen ">
      <div class="taskOpen" style="justify-content: flex-end">
          <button  onclick="closeOpenTask()"><img src="../assets/img/close.png" alt="X"></button>
          </div>
        <form onsubmit="editTask(${index}); return false">
          <div class="inputTitle">
            <input
              class="taskTitle taskTitleEdit"
              id="taskTitle"
              required
              type="text"
              placeholder="Enter a title"
              value="${editedTask.title}"
            />
            <div class="seperator"></div>
          </div>
  
          <div class="input_fields">
            <h3>Description</h3>
            <textarea
              id="description"
              required
              cols="45"
              class="descriptionArea"
              type="text"
              placeholder="Enter a Description"
            >${editedTask.description}</textarea>
          </div>
  
          <div class="input_fields">
            <h3>Due date</h3>
            <input
              id="date"
              required
              class="input_field input_fieldsEdit font_size_19px"
              type="date"
              placeholder="dd/mm/yyyy"
              value="${editedTask.date}"/>
            <div class="seperator"></div>
          </div>
          <div class="input_fields">
            <h3>Priority</h3>
            <div class="priorityAddTask" style="display: flex; height: 45px">
              <button
                type="button"
                onclick="changePriority(this)"
                id="urgent"
                class="custom-container"
                name="Urgent"
              >
                Urgent
                <img src="../assets/img/urgentImg.png" />
              </button>
              <button
                type="button"
                onclick="changePriority(this)"
                id="medium"
                name="Medium"
                class="custom-container"
              >
                Medium
                <img style="margin-left: 10px" src="../assets/img/medium.png" />
              </button>
              <button
                type="button"
                onclick="changePriority(this)"
                id="low"
                class="custom-container"
                name="Low"
              >
                Low
                <img style="margin-left: 10px" src="../assets/img/low.png" />
              </button>
            </div>
          </div>
  
          <div class="input_fields">
            <h3>Assigned to</h3>
            <div class="input-row">
              <input
              
                id="assignetToInput"
                onkeyup="filterContacts();"
                class="input_field input_fieldsEdit font_size_19px placeholder"
                type="text"
                placeholder="Assigned to"
              />
              <div class="backgroundForImg" onclick="dropDownContacts()">
                <img id="assignetToImg" src="../assets/img/arrow_drop_down.png" />
              </div>
            </div>
            <div id="assignetTo" class="assignetTo scroll d-none"></div>
          </div>
  
          <div id="assignetToProfile-badges"></div>
  
          <div class="input_fields">
            <h3>Category</h3>
            <select required id="category">
              <option value=-1 disabled selected>Select Task Category</option>
              <option value=0>User Story</option>
              <option value=1>Technical Task</option>
            </select>
          </div>
  
          <div class="input_fields">
            <h3>Subtasks</h3>
            <div class="input-row">
              <input
                id="subtasks_input"
                class="input_field input_fieldsEdit font_size_19px placeholder"
                type="text"
                placeholder="Add new subtask"
                onclick="changeSubtasksImgs()"
              />
              <img
                id="Board_subtasksImg-plus"
                class="corner_image"
                src="../assets/img/+.png"
              />
              <img
                id="Board_subtasksImg-close"
                class="corner_image d-none"
                src="../assets/img/close.png"
                onclick="clearSubtasksInput()"
              />
              <div id="Board_line" class="line d-none"></div>
              <img onclick="renderSubtask()"
                id="Board_subtasksImg-check"
                class="corner_image d-none"
                src="../assets/img/check.png"
              />
            </div>
          </div>
          <div class ="mobileeditButton">
          <div id="subtasksDiv">
          </div>
  
          <div class="add_task_create_div button">
            <button type="onsubmit" id="board-add_task-createTask">
              ok
            </button>
          </div>
          </div>
        </form>
        </div>
    `;
}



/**
 * Generates an HTML string representing an open task card.
 * made by: Mina Zarkesh
 *
 * @param {number} id - The ID of the task.
 * @param {string} openCategory - The category of the task.
 * @param {string} openTitle - The title of the task.
 * @param {string} openDescription - The description of the task.
 * @param {string} openDate - The due date of the task.
 * @param {string} openPriority - The priority of the task.
 * @param {string} openPriorityImg - The image URL for the priority icon.
 * @return {string} The HTML string representing the open task card.
 */
function generateOpenTask(
  id,
  openCategory,
  openTitle,
  openDescription,
  openDate,
  openPriority,
  openPriorityImg
) {
  return /*html*/ `
      <div class="cardOpen">
        <div class="taskOpen">
          <span>${openCategory}</span>
           <button onclick="closeOpenTask()"><img src="../assets/img/close.png" alt=""></button></div>
        <div class="titelOpen">
          <h1>${openTitle}</h1>
        </div>
        <div class="descriptionOpen">
          <span>${openDescription}</span>
        </div>
        <div class="datumOpen">
          <h3>Due date:</h3>
          <span>${openDate}</span>
        </div>
        <div class="priorityOpen">
          <h3>Priority:</h3>
          <span>${openPriority}</span> <div><img src=${openPriorityImg}></div>
        </div>
        <div class="assignetToOpen">
          <h3>Assigned To:</h3>
          <div id="openAssignetTo"></div>
        <div class="suptasksOpen">
          <h3>Subtasks</h3>
          <div id="openSubtasksDiv">
          </div>
        </div>
        <div class="deletAndEditOpen">
          <button onclick="deleteTask(${id});"><img src="../assets/img/delete.png" alt="" />Delete</button>
          <div class="BTNMIddle"></div>
          <button onclick="showEditTask(${id});"><img src="../assets/img/edit.png" alt="" />Edit</button>
        </div>
      </div>
    `;
}


/**
 * Generates a HTML string for the add task form.
 * made by Mina Zarkesh
 *
 * @return {string} The generated HTML string.
 */
function generateAddTask() {
  return /*html*/ `
       <div class="closeDiv">
          <h1>Add Task</h1>
          <div class="closeDivMobile">
          <button onclick="closeMainTask()">X</button>
          </div>
        </div>
        <form onsubmit="createTask(); return false">
          <div class="inputTitle">
            <input
              class="taskTitle"
              id="taskTitle"
              required
              type="text"
              placeholder="Enter a title"
            />
            <div class="seperator"></div>
          </div>
  
          <div class="input_fields">
            <h3>Description</h3>
            <textarea
              id="description"
              required
              cols="45"
              class="descriptionArea"
              type="text"
              placeholder="Enter a Description"
            ></textarea>
          </div>
  
          <div class="input_fields">
            <h3>Due date</h3>
            <input
              id="date"
              required
              class="input_field font_size_19px"
              type="date"
              placeholder="dd/mm/yyyy"
            />
            <div class="seperator"></div>
          </div>
  
          <div class="input_fields">
            <h3>Priority</h3>
            <div class="priorityAddTask" style="display: flex; height: 45px">
              <button
                type="button"
                onclick="changePriority(this)"
                id="urgent"
                class="custom-container"
                name="Urgent"
              >
                Urgent
                <img src="../assets/img/urgentImg.png" />
              </button>
              <button
                type="button"
                onclick="changePriority(this)"
                id="medium"
                name="Medium"
                class="custom-container"
              >
                Medium
                <img style="margin-left: 10px" src="../assets/img/medium.png" />
              </button>
              <button
                type="button"
                onclick="changePriority(this)"
                id="low"
                class="custom-container"
                name="Low"
              >
                Low
                <img style="margin-left: 10px" src="../assets/img/low.png" />
              </button>
            </div>
          </div>
  
          <div class="input_fields">
            <h3>Assigned to</h3>
            <div class="input-row">
              <input
                id="assignetToInput"
                onkeyup="filterContacts();"
                class="input_field font_size_19px placeholder"
                type="text"
                placeholder="Assigned to"
              />
              <div class="backgroundForImg" onclick="dropDownContacts()">
                <img id="assignetToImg" src="../assets/img/arrow_drop_down.png" />
              </div>
            </div>
            <div id="assignetTo" class="assignetTo scroll d-none"></div>
          </div>
  
          <div id="assignetToProfile-badges"></div>
  
          <div class="input_fields">
            <h3>Category</h3>
            <select required id="category">
            <option value=-1 disabled selected>Select Task Category</option>
              <option value=0>User Story</option>
              <option value=1>Technical Task</option>
            </select>
          </div>
  
          <div class="input_fields">
            <h3>Subtasks</h3>
            <div class="input-row">
              <input
                id="subtasks_input"
                class="input_field font_size_19px placeholder"
                type="text"
                placeholder="Add new subtask"
                onclick="changeSubtasksImgs()"
              />
              <img
                id="Board_subtasksImg-plus"
                class="corner_image"
                src="../assets/img/+.png"
              />
              <img
                id="Board_subtasksImg-close"
                class="corner_image d-none"
                src="../assets/img/close.png"
                onclick="clearSubtasksInput()"
              />
              <div id="Board_line" class="line d-none"></div>
              <img onclick="renderSubtask()"
                id="Board_subtasksImg-check"
                class="corner_image d-none"
                src="../assets/img/check.png"
              />
            </div>
          </div>
  
          <div id="subtasksDiv">
          </div>
  
          <div class="add_task_create_div button">
            <button id="board-add_task-createTask">
              Create Task
            </button>
          </div>
        </form>
    `;
}


/**
 * Generate a HTML element for assigning a contact to a task.
 *
 * @param {object} contact - The contact object.
 * @param {number} i - The index of the contact.
 * @return {string} The generated HTML element.
 * made by Mina Zarkesh
 */
function generateAssignetTo(contact, i) {
  return /*html*/ `
      <div id="assignetToAddTask${i}" class="assignetToAddTask heWhoMustNotBeNamed" onclick="chooseContact(${i})">
      <div class="addTasksContactFrame">
      <div class="profile-badge" style="background-color: var(${contact.color});">
          <span >${contact.nameTag}</span>
        </div>
        <span class="contactName">${contact.name}</span>
      </div>
      <img id="checkContactImg${i}" src="../assets/img/checket.png" alt="">
      </div>
    `;
}
