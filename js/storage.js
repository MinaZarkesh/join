/**
 * The token used for remote storage authentication.
 * @type {string}
 */
const STORAGE_TOKEN = "CA66J9VJZ010MHTW4IAFVKAPKFNFFP7F129MWRPE";

/**
 * The URL for remote storage.
 * @type {string}
 */
const STORAGE_URL = "https://remote-storage.developerakademie.org/item";

function docID(id) {
  return document.getElementById(id);
}

async function init() {
  includeHTML();
  openNavMenu();
}

function openNavMenu() {
  new MenuLink("summary");
  new MenuLink("add_task");
  new MenuLink("board");
  new MenuLink("contacts");
}

function isRequiered(id) {
  docID(id).innerHTML = /*html*/`
    This field is required
  `
}

let inputName;
let inputEmail;
let inputPhone;
let inputPassword;
let inputConfirmPassword;

function createInputElements() {
  inputName = new Divinputimg(
    "LoginInputs",
    "inputimgdiv",
    "text",
    "Name",
    "../assets/img/icon-person.png"
  );
  inputEmail = new Divinputimg(
    "LoginInputs",
    "inputimgdiv",
    "mail",
    "Email",
    "../assets/img/icon-mail.png"
  );
  inputPhone = new Divinputimg(
    "LoginInputs",
    "inputimgdiv",
    "phone",
    "Phone",
    "../assets/img/icon-call.svg.png"
  );

  inputPassword = new Divinputimg(
    "LoginInputs",
    "inputimgdiv",
    "password",
    "Password",
    "../assets/img/icon-lock-closed.png"
  );

  inputConfirmPassword = new Divinputimg(
    "LoginInputs",
    "inputimgdiv",
    "confirmPassword",
    "Confirm Password",
    "../assets/img/icon-lock-closed.png"
  );
}

function setInputs(array) {
  let element = "";
  for (let i = 0; i < array.length; i++) {
    element += array[i].content;
  }
  return element;
}

let addinputs = [inputName, inputEmail, inputPhone];

/**
 * Sets a key-value pair in remote storage.
 *
 * This function sends a POST request to the remote storage URL with the provided key and value.
 *
 * @param {string} key - The key for the data.
 * @param {any} value - The value to be stored.
 * @returns {Promise<Object>} - A Promise that resolves to the response data.
 */
// async function setItem(key, value) {
//   const payload = { key, value, token: STORAGE_TOKEN };
//   return fetch(STORAGE_URL, {
//     method: "POST",
//     body: JSON.stringify(payload),
//   }).then((res) => res.json());
// }

/**
 * Retrieves an item from the storage based on the given key.
 *
 * @param {string} key - The key of the item to retrieve.
 * @return {Promise<any>} A promise that resolves to the value of the retrieved item.
 */
// async function getItem(key) {
//   const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
//   return fetch(url)
//     .then((res) => res.json())
//     .then((res) => {
//       if (res.data) {
//         return res.data.value;
//       }
//       throw `Could not find data with key "${key}".`;
//     });
// }

// let user = [];
// let users = [];
// let index = 0;
// let contact = [];
// let contacts = [];
// let contactIndex;
// let task = [];
// let tasks = [];
// let taskIndex;

/**
 * Loads users from the database at the specified index.
 * made by Mina Zarkesh
 * @param {number} index - The index of the user to load.
 * @return {Array} - An array containing all the users and the user at the specified index.
 */
// async function loadUsers(index) {
//   if (!index) {
//     index = 0;
//   }
//   users = JSON.parse(await getItem("users"));
//   user = users[index];
//   return users, user, index;
// }

/**
 * Loads contacts from the specified index.
 * made by Mina Zarkesh
 * @param {number} index - The index of the contact to load.
 * @return {Array} contacts - The array of loaded contacts.
 * @return {Object} contact - The loaded contact at the specified index.
 * @return {number} contactIndex - The index of the loaded contact.
 */
// async function loadContacts(index) {
//   contacts = JSON.parse(await getItem("contacts"));
//   contact = contacts[index];
//   return contacts, contact, contactIndex;
// }

/**
 * Loads tasks from storage and returns the specified task and its index.
 * made by Mina Zarkesh
 *
 * @param {number} index - The index of the task to retrieve.
 * @return {Array} - An array containing all the tasks, the specified task, and its index.
 */
// async function loadTasks(index) {
//   tasks = JSON.parse(await getItem("tasks"));
//   task = tasks[index];
//   return tasks, task, taskIndex;
// }

// let backgroundcolors = [
//   "--default",
//   "--variant02",
//   "--variant03",
//   "--variant04",
//   "--variant05",
//   "--variant06",
//   "--variant07",
//   "--variant08",
//   "--variant09",
//   "--variant10",
//   "--variant11",
//   "--variant12",
//   "--variant13",
//   "--variant14",
//   "--variant15",
//   "--variant16",
// ];

// /**
//  * Generates a random color from the 'backgroundcolors' array and returns it.
//  * made by Mina Zarkesh
//  *
//  * @return {string} The randomly generated color.
//  */
// // function setRandomColor() {
// //   let randomNumber = Math.floor(Math.random() * backgroundcolors.length);
// //   let color = backgroundcolors[randomNumber];
// //   // console.log("Random Index: "+randomNumber+ " random color: "+color);
// //   return color;
// // }

// /**
//  * Checks the index and redirects the user to a specific link.
//  * made by Mina Zarkesh
//  *
//  * @param {string} link - The link to redirect the user to.
//  * @return {undefined} This function does not return a value.
//  */
// // function checkIndex(link) {
// //   index = getCurrentUserVariable();
// //   if (index === null) {
// //     index = 0;
// //   }
// //   window.location.href = `${link}.html?id=${index}`;
// // }

// /**************** TasksArray, wird später ersetzt werden *****************/

// /**
//  * Creates an array of tasks for Backup
//  */
// let oldTasks = [
//   {
//     container: "toDo",
//     category: "User Story",
//     title: "Kochwelt Page & Recipe Recommender",
//     description: "Build start page with recipe recommendation.",
//     date: "2023-01-23",
//     priority: "Medium",
//     priorityImg: "../assets/img/medium.png",
//     assignedTo: ["Emmanuel Mauer", "Marcel Bauer", "Anton Mayer"],
//     assignedToNameTag: ["EM", "MB", "AM"],
//     assignedToColor: ["--variant10", "--variant16", "--variant09"],
//     subtasks: ["Implement Recipe Recommendation", "Start Page Layout"],
//     subtaskschecked: ["checked", "checked"],
//   },
//   {
//     container: "awaitFeedback",
//     category: "Technical Task",
//     title: "Titel: Weihnachtsfeier",
//     description:
//       "Das ist die Description, hier etwas text : handy telefonieren",
//     date: "2023-12-23",
//     priority: "Urgent",
//     priorityImg: "../assets/img/urgentImg.png",
//     assignedTo: ["Marcel Bauer", "Anton Mayer", "Emmanuel Mauer"],
//     assignedToNameTag: ["MB", "AM", "EM"],
//     assignedToColor: ["--variant16", "--variant09", "--variant10"],
//     subtasks: ["Subtask1", "Start Page Layout"],
//     subtaskschecked: ["checked", "unchecked"],
//   },
//   {
//     container: "awaitFeedback",
//     category: "Development",
//     title: "Titel: Essen",
//     description:
//       "Das ist die Description, hier etwas text : handy telefonieren",
//     date: "2023-12-30",
//     priority: "Low",
//     priorityImg: "../assets/img/low.png",
//     assignedTo: ["Marcel Bauer", "Anton Mayer", "Emmanuel Mauer"],
//     assignedToNameTag: ["MB", "AM", "EM"],
//     assignedToColor: ["--variant16", "--variant09", "--variant10"],
//     subtasks: ["Start Page Layout", "Subtask2"],
//     subtaskschecked: ["unchecked", "unchecked"],
//   },
//   {
//     container: "inProgress",
//     category: "Marketing",
//     title: "Titel: Halloweenparty, Ähh Silvester",
//     description:
//       "Das ist die Description, hier etwas text : handy telefonieren",
//     date: "2023-12-31",
//     priority: "Urgent",
//     priorityImg: "../assets/img/urgentImg.png",
//     assignedTo: ["Marcel Bauer", "Anton Mayer", "Emmanuel Mauer"],
//     assignedToNameTag: ["MB", "AM", "EM"],
//     assignedToColor: ["--variant16", "--variant09", "--variant10"],
//     subtasks: ["Start Page Layout", "Subtask3"],
//     subtaskschecked: ["unchecked", "checked"],
//   },
//   {
//     container: "done",
//     category: "Technical Task",
//     title: "Titel: Sommer Grillparty",
//     description: "Wir treffen uns alle zur Grillparty",
//     date: "2023-12-27",
//     priority: "Low",
//     priorityImg: "../assets/img/low.png",
//     assignedTo: ["Marcel Bauer", "Anton Mayer", "Emmanuel Mauer"],
//     assignedToNameTag: ["MB", "AM", "EM"],
//     assignedToColor: ["--variant16", "--variant09", "--variant10"],
//     subtasks: ["Grill aufstellen", "Spaß haben"],
//     subtaskschecked: ["checked", "checked"],
//   },
// ];

// let openTasks = oldTasks;
// /***************** Contacts **********************************/

/**
 * Creates an array of contacts for Backup
 */
let oldContactsSmall = [
  {
    name: "Anton Mayer",
    color: "--variant09",
    mail: "antom@gmail.com",
    phone: "49-123-123",
    nameTag: "AM",
  },
  {
    name: "Anja Schulz",
    color: "--variant13",
    mail: "schulz@hotmail.com",
    phone: "49-123-123",
    nameTag: "AS",
  },
  {
    name: "Benedikt Ziegler",
    color: "--default",
    mail: "benedikt@gmail.com",
    phone: "49-123-123",
    nameTag: "BZ",
  },
  {
    name: "David Eisenberg",
    color: "--variant14",
    mail: "davidberg@gmail.com",
    phone: "49-123-123",
    nameTag: "DE",
  },
  {
    name: "Eva Fischer",
    color: "--variant06",
    mail: "eva@gmail.com",
    phone: "49-222-222",
    nameTag: "EF",
  },
  {
    name: "Emmanuel Mauer",
    color: "--variant10",
    mail: "emmanuelma@gmail.com",
    phone: "49-222-222",
    nameTag: "EM",
  },
  {
    name: "Marcel Bauer",
    color: "--variant16",
    mail: "bauer@gmail.com",
    phone: "49-222-222",
    nameTag: "MB",
  },
  {
    name: "Tatjana Wolf",
    color: "--variant15",
    mail: "wolf@gmail.com",
    phone: "49-222-222",
    nameTag: "TW",
  },
  {
    name: "Sofia Müller",
    color: "--variant04",
    mail: "sofiam@gmail.com",
    phone: "49-222-222",
    nameTag: "SM",
  },
];

// /***************** alphabet **********************************/

// /**
//  * Creates an array of letters german alphabet
//  */
// let alphabet = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
//   "Ä",
//   "Ö",
//   "Ü",
// ];

// let letters = [];
// let contactArray = [];

//********************************** */

// let oldUsers = [
//   {
//     name: "Guest",
//     mail: "guest@guest.de",
//     nameTag: "G",
//     password: "test123",
//     phone: "+49 1111 111 11 1",
//     token: STORAGE_TOKEN,
//   },
//   {
//     name: "Mina M Zarkesh",
//     mail: "mina@test.de",
//     nameTag: "MZ",
//     password: "test123",
//     phone: "+49 1111 111 11 1",
//     token: STORAGE_TOKEN,
//   },

//   {
//     name: "Junus Ergin",
//     mail: "junus@test.de",
//     nameTag: "JE",
//     password: "test",
//     phone: "+49 1111 111 11 1",
//     token: STORAGE_TOKEN,
//   },
//   {
//     name: "Anton Mayer",
//     mail: "antonmayer@test.de",
//     nameTag: "AM",
//     password: "test123",
//     phone: "+49 1111 111 11 1",
//     token: STORAGE_TOKEN,
//   },
//   {
//     name: "Anton Mayer",
//     mail: "antom@gmail.com",
//     nameTag: "AM",
//     password: "test123",
//     phone: "+49 1111 111 11 1",
//     token: STORAGE_TOKEN,
//   },
//   {
//     name: "Sofia Muller",
//     mail: "sofiam@gmail.com",
//     nameTag: "SM",
//     password: "mypassword123",
//     phone: "+49 1111 111 11 1",
//     token: STORAGE_TOKEN,
//   },
//   {
//     name: "Anja Schulz",
//     mail: "schulz@hotmail.com",
//     nameTag: "AS",
//     password: "mypassword123",
//     phone: "+49 1111 111 11 1",
//     token: STORAGE_TOKEN,
//   },
//   {
//     name: "Ali",
//     mail: "ali@ali",
//     nameTag: "AA",
//     password: "123",
//     phone: "+49 1111 111 11 1",
//     token: STORAGE_TOKEN,
//   },
//   {
//     name: "Peter Pan",
//     mail: "pp@nox.de",
//     nameTag: "PP",
//     password: "wendy",
//     phone: "+49 1111 111 11 1",
//     token: STORAGE_TOKEN,
//   },
// ];

//********************************************* */
// resetUsers =
//   '[{"name": "Guest", "mail": "guest@guest.de", "nameTag": "G", "password": "test123", "phone": "+49 1111 111 11 1", "color": "--default", "token": "CA66J9VJZ010MHTW4IAFVKAPKFNFFP7F129MWRPE"}, {"name": "Mina M Zarkesh", "mail": "mina@test.de", "nameTag": "MZ", "password": "test123", "phone": "+49 1111 111 11 1", "color": "--default", "token": "CA66J9VJZ010MHTW4IAFVKAPKFNFFP7F129MWRPE"}, {"name": "Junus Ergin", "mail": "junus@test.de", "nameTag": "JE", "password": "test", "phone": "+49 1111 111 11 1", "color": "--variant03", "token": "CA66J9VJZ010MHTW4IAFVKAPKFNFFP7F129MWRPE"}, {"name": "Anton Mayer", "mail": "antonmayer@test.de", "nameTag": "AM", "password": "test123", "phone": "+49 1111 111 11 1", "color": "--variant12", "token": "CA66J9VJZ010MHTW4IAFVKAPKFNFFP7F129MWRPE"}, {"name": "Anton Mayer", "mail": "antom@gmail.com", "nameTag": "AM", "password": "test123", "phone": "+49 1111 111 11 1", "color": "--variant07", "token": "CA66J9VJZ010MHTW4IAFVKAPKFNFFP7F129MWRPE"}, {"name": "Sofia Muller", "mail": "sofiam@gmail.com", "nameTag": "SM", "password": "mypassword123", "phone": "+49 1111 111 11 1", "color": "--variant02", "token": "CA66J9VJZ010MHTW4IAFVKAPKFNFFP7F129MWRPE"}, {"name": "Anja Schulz", "mail": "schulz@hotmail.com", "nameTag": "AS", "password": "mypassword123", "phone": "+49 1111 111 11 1", "color": "--variant15", "token": "CA66J9VJZ010MHTW4IAFVKAPKFNFFP7F129MWRPE"}]';

async function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain attribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}
