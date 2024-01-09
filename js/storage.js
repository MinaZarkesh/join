let contact_boxes = [];
let filtered_contacts = [];

let users = [];
let contacts = [];
let categorys = [];
let tasks = [];
let task_amounts = [];

let input_name;
let input_email;
let input_phone;
let input_password;
let input_confirm_password;

let newContact;
let active_user;

users = oldUsers;
contacts = oldContacts;
categorys = oldCategorys;
tasks = oldTasks;

// let index = 0;
// let contact = [];
// let contacts = [];
// let contactIndex;
// let task = [];
// let tasks = [];
// let taskIndex;

let segements_array = [
  "to-do-con",
  "in-progress-con",
  "await-feedback-con",
  "done-con",
];

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

/**
 * Sets a key-value pair in remote storage.
 *
 * This function sends a POST request to the remote storage URL with the provided key and value.
 *
 * @param {string} key - The key for the data.
 * @param {any} value - The value to be stored.
 * @returns {Promise<Object>} - A Promise that resolves to the response data.
 */
async function setItem(key, value) {
  const payload = { key, value, token: STORAGE_TOKEN };
  return fetch(STORAGE_URL, {
    method: "POST",
    body: JSON.stringify(payload),
  }).then((res) => res.json());
}

/**
 * Retrieves an item from the storage based on the given key.
 *
 * @param {string} key - The key of the item to retrieve.
 * @return {Promise<any>} A promise that resolves to the value of the retrieved item.
 */
async function getItem(key) {
  const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      if (res.data) {
        return res.data.value;
      }
      throw `Could not find data with key "${key}".`;
    });
}

function docID(id) {
  return document.getElementById(id);
}

async function init() {
  activeUser(); //set activeUser
  updateUserValues(); //set Header
  openNavMenu(); // set NavBar
}

function openNavMenu() {
  //fill NavBar
  new MenuLink("summary");
  new MenuLink("add_task");
  new MenuLink("board");
  new MenuLink("contacts");
}

//create Header
function updateUserValues() {
  //creates Header
  docID("header-name-tag").innerHTML = active_user.nameTag;
}

function isRequiered(id) {
  docID(id).innerHTML = /*html*/ `
    This field is required
  `;
}

//eigentlich sort Array, aber mit Kay zusammen ändern
function createContactBox(parent) {
  let parentArray = contact_boxes; //später Parameter
  contacts.sort((a, b) =>
  a.name > b.name ? 1 : b.name > a.name ? -1 : 0);
}


function getTasksAmounts() {
  task_amounts = [];
  segements_array.forEach((e) => {
    task_amounts.push(tasks.filter((obj) => obj.container == e).length);
  });
  return task_amounts;
}

function checkEmptyInputs() {
  return (
    input_name.value != "" &&
    input_email.value != "" &&
    !input_phone.value != ""
  );
}

function addNewContact() {
  let idx = setNewIdx();

 newContact = {
    name: "",
    color: setRandomColor(),
    mail: "",
    phone: "",
    nameTag: "??",
    idx: idx,
  };

  contacts.push(newContact);
}

function setNewIdx() {
  let contact_index = 0;
  //erhöhe die Variable contact_index solange bis docID() null ergibt, also noch nicht vergeben ist.
  //So wird die Zahl erhöht, bis eine nicht vergeben wurde.
  do contact_index++;
  while (docID(`contact-item-${contact_index}`) != null);
  {
    return contact_index;
  }
}

/**
 * Generates a random color from the 'backgroundcolors' array and returns it.
 * made by Mina Zarkesh
 *
 * @return {string} The randomly generated color.
 */
function setRandomColor() {
  let randomNumber = Math.floor(Math.random() * backgroundcolors.length);
  let color = backgroundcolors[randomNumber];
  // console.log("Random Index: "+randomNumber+ " random color: "+color);
  return color;
}

/**
 * Generates a name tag based on the given name.
 * made by Mina Zarkesh
 * @param {string} name - The name to generate the name tag from.
 * @return {string} The generated name tag.
 */
function setNameTag(name) {
  let currentName = name;
  let nameArray = currentName.split(" ");
  let nameTag = nameArray[0].charAt(0);
  nameTag += nameArray[nameArray.length - 1].charAt(0);
  nameTag = nameTag.toUpperCase();
  return nameTag;
}

async function loadUsers() {
  // if (!index) {
  //   index = 0;
  // }
  users = JSON.parse(await getItem("users"));
  console.log(users);
  // user = users[index];
  // return users, user, index;
}

async function loadContacts() {
  contacts = JSON.parse(await getItem("contacts"));
  console.log(contacts);
  // contact = contacts[index];
  // return contacts, contact, contactIndex;
}

async function loadTasks() {
  tasks = JSON.parse(await getItem("tasks"));
  console.log(tasks);
  // task = tasks[index];
  // return tasks, task, taskIndex;
}

async function loadCategorys() {
  categorys = JSON.parse(await getItem("categorys"));
  console.log(categorys);
  // task = tasks[index];
  // return tasks, task, taskIndex;
}

function activeUser() {
  if (localStorage.getItem("activeuser") === null) {
    if (sessionStorage.getItem("activeuser") === null) {
      window.location.href = "./index.html";
      // return false;?
    } else {
      sessionUserload();
      return true; //welche Variable wird true gesetzt?
    }
  } else {
    localUserload();
  }
}

function localUsersave(user) {
  localStorage.setItem("activeuser", user);
}

function sessionUsersave(user) {
  sessionStorage.setItem("activeuser", user);
}

function localUserload() {
  let user = localStorage.getItem("activeuser");
  active_user = JSON.parse(user);
}

function sessionUserload() {
  let user = sessionStorage.getItem("activeuser");
  active_user = JSON.parse(user);
}

// async function includeHTML() {
//   let z, i, elmnt, file, xhttp;
//   /*loop through a collection of all HTML elements:*/
//   z = document.getElementsByTagName("*");
//   for (i = 0; i < z.length; i++) {
//     elmnt = z[i];
//     /*search for elements with a certain attribute:*/
//     file = elmnt.getAttribute("w3-include-html");
//     if (file) {
//       /*make an HTTP request using the attribute value as the file name:*/
//       xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function () {
//         if (this.readyState == 4) {
//           if (this.status == 200) {
//             elmnt.innerHTML = this.responseText;
//           }
//           if (this.status == 404) {
//             elmnt.innerHTML = "Page not found.";
//           }
//           /*remove the attribute, and call this function once more:*/
//           elmnt.removeAttribute("w3-include-html");
//           includeHTML();
//         }
//       };
//       xhttp.open("GET", file, true);
//       xhttp.send();
//       /*exit the function:*/
//       return;
//     }
//   }
// }