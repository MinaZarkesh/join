let letter = "A";
let clicked_contact = contact_boxes[0];
let contacts_inputs;

function initContacts() {
  init();
  createContactList();
  // showFloatingContacts(0);
}

function createContactList() {
  docID("contact-list").innerHTML += createLetterBox();
  if (!contact_boxes.length > 0) {
    createContactBox();
  }
  docID("contact-list").innerHTML = "";
  contact_boxes.forEach((e) => {
    docID("contact-list").innerHTML += e.contact_item;
  });
}

function createLetterBox() {
  return /*html*/ `
    <div class="letter-box">
  <span id="letter${letter}" class="letter">${letter}</span>
</div>
  `;
}

function showFloatingContacts(id) {
  let contact = contact_boxes[id];
  setActive(id);
  contact.createFloatingContacts();

  docID("floating-profile-badge").innerHTML = contact.profile_badge;
  docID("floating-contacts-mail-value").innerHTML = contact.contact_email;
  docID("floating-contactsPhoneValue").innerHTML = contact.contact_phone;
}

function setActive(id) {
  let clicked_contact_box_id = "contact-item-" + id;
  let clicked_mail_id = "contact_itemMail-" + id;
  let clicked_name_id = "contact_itemName-" + id;
  console.log(clicked_contact_box_id);

  resetActive();
  //set new attributes
  docID(clicked_contact_box_id).style.background = "var(--primary)";
  docID(clicked_mail_id).style.color = "var(--white)";
  docID(clicked_name_id).style.color = "var(--white)";
}

function resetActive() {
  for (let i = 0; i < contact_boxes.length; i++) {
    let contact_item_id = "contact-item-" + i;
    let contact_mail_id = "contact_itemMail-" + i;
    let contact_name_id = "contact_itemName-" + i;
    //reset attributes from before
    docID(contact_item_id).style.background = "var(--white)";
    docID(contact_mail_id).style.color = "var(--primary)";
    docID(contact_name_id).style.color = "var(--black)";
  }
}

function layoutContactsOverlay(idx) {
  createInputElements();
  contacts_inputs = [input_name, input_email, input_phone];
  docID("inputs-con").innerHTML = setInputs(contacts_inputs);

  docID("edit-contact-button-group").innerHTML = /*html*/ `
    <button id="overlay-secondary-btn" onclick="" class="secondary-button font-t5" ></button>
    <button id="overlay-primary-btn" onclick="saveEditContact('${idx}')" class="button font-t5"></button>
  `;
}

function createEditContact(id) {
  layoutEditContact(id);
  contact_boxes[id].fillEditContact(id);
}

function saveEditContact(idx) {
  let edit_contact = contact_boxes[idx];
  edit_contact.updateContactItem();
  showFloatingContacts(edit_contact.contact_id);
  createContactList();
  setActive(idx);
  closeButton();
}

let temp = [];
let tempContacts = [];
let newTempContacts = [];


function sortContactItems() {

// wie kann man ein Array mit Contacten nach einer Eigenschaft sortieren.
//Idee: Nach Namen sortieren, nach dem Index suchen und dann das gesamte Contacts-Objekt in ein neues Array

  let temp;
  temp = contact_boxes;
  contact_boxes.forEach((e) => {
    sort_name = e.contact_name;
    temp.push(sort_name);
    tempContacts.push(e);
  });


  temp.sort();
  console.log(temp);
  tempContacts.sort(a.contact_name);

  tempContacts.forEach((element) => {
    newTempContacts.push(element.contact_name);
  });

  console.log("newTempcontacts Name: " + newTempContacts);
}


let addedContact = contact_boxes[7];
//Idee: neuen Contact in contact_boxes pushen und dann renderContacts
function addNewContacts(){

let temp = contact_boxes;


}

function layoutEditContact(id) {
  docID("overlay-contacts").style.display = "flex";
  layoutContactsOverlay(id);
  docID("overlay-contacts").style.left = "0";
  docID("edit-contact-overlay-headline").innerHTML = "Edit contact";
  docID("contact-overlay-subtitle").style.display = "none";
  docID("edit-contact-con-overlay").innerHTML = contact_boxes[id].profile_badge;
  docID("overlay-secondary-btn").innerHTML = "Delete";
  docID("overlay-secondary-btn").style.width = "fit-content";
  docID("overlay-primary-btn").innerHTML = /*html*/ `
Save <img src="../assets/img/check.svg">
`;
}

function closeButton() {
  docID("overlay-contacts").style.display = "none";
}

function createAddContact() {
  docID("overlay-contacts").style.display = "flex";
  layoutContactsOverlay();
  docID("overlay-contacts").style.left = "unset";
  docID("edit-contact-overlay-headline").innerHTML = "Add Contact";
  docID("contact-overlay-subtitle").style.display = "flex";
  docID("edit-contact-con-overlay").innerHTML = /*html*/ `
     <img id='edit-contact-overlay-img' src="../assets/img/person-white.svg">
  `;
  docID("overlay-secondary-btn").innerHTML = /*html*/ `
    Cancel <img src="../assets/img/clear.png">
  `;
  docID("overlay-secondary-btn").style.width = "unset";
  docID("overlay-primary-btn").innerHTML = /*html*/ `
  Create contact <img src="../assets/img/check.svg">
  `;
  docID("overlay-primary-btn").style.width = "fit-content";
}
