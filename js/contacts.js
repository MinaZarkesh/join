let contacts_inputs;
let letter;

function initContacts() {
  init();
  renderContactList();
}

function renderContactList() {
  //Teile String in Array aus Buchstaben
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let parent_array = "contact-list";

  docID(parent_array).innerHTML = "";
  //Contact_boxes füllen
  if (!contact_boxes.length > 0) {
    createContactBox(parent_array);
    //update Values
  }
  //Fülle die ContactListe neu
  alphabet.forEach((ltr) => {
    letter = ltr; //for checkLetter
    filtered_contacts = contact_boxes.filter(checkLetter);
    if (filtered_contacts.length > 0) {
      docID(parent_array).innerHTML += createLetterBox(ltr);
      filtered_contacts.forEach((e) => {
        docID(parent_array).innerHTML += e.contact_item;
      });
    }
  });
}

function checkLetter(contact) {
  firstLetter = contact.contact_name.charAt(0).toUpperCase();
  return firstLetter == letter;
}

function createLetterBox(letter) {
  return /*html*/ `
    <div class="letter-box">
  <span id="letter${letter}" class="letter">${letter}</span>
</div>
  `;
}

function resetActive() {
  for (let i = 0; i < contact_boxes.length; i++) {
    let contact = contact_boxes[i];
    //reset attributes from before
    docID(contact.contact_item_id).classList.remove("active-contact");
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
  renderEditContact(id);
  contact_boxes[id].fillEditContact(id);
}

let edit_contact;

function saveEditContact(idx) {
  edit_contact = contact_boxes[idx];
  edit_contact.updateContactItem();
  console.log(edit_contact);
  renderContactList();
  renderFloatingContacts(edit_contact.contact_idx);
   closeButton();
}

function addNewContact() {
  let parent_array = contact_boxes;
  let added_contact;
  //variables for parameters
  let parent = "contact-list";
  let profileColor = setRandomColor();
  let profileNameTag = "??";
  let input_name_value;
  let input_email_value;
  let input_phone_value;
  let idx = parent_array.length;

  if (
    input_name.value != "" &&
    input_email.value != "" &&
    !input_phone.value != ""
  ) {
    input_name_value = docID(input_name.input_id).value;
    input_email_value = docID(input_email.input_id).value;
    input_phone_value = docID(input_phone.input_id).value;
  }

  console.log("inputs: ", input_name_value);

  parent_array.push(
    new Contact(
      parent,
      profileColor,
      profileNameTag,
      input_name_value,
      input_email_value,
      input_phone_value,
      idx
    )
  );

  added_contact = parent_array[idx];
  sortContactItems(added_contact.parentArray);
  renderContactList();
  renderFloatingContacts(added_contact.contact_idx);
  closeButton();
}



function sortContactItems(parent) {
  parent.sort((a, b) =>
    a.contact_name > b.contact_name
      ? 1
      : b.contact_name > a.contact_name
      ? -1
      : 0
  );

  for (let i = 0; i < parent.length; i++) {
    //nachdem neu sortieren auch die Idexes updaten
    const element = parent[i];
    element.contact_idx = i;
    element.renderContactItem();
  }
}

function renderFloatingContacts(idx) {
  contact = contact_boxes[idx];
  contact.createFloatingContacts();
  contact.setActive();
}

function deleteContact(idx) {
  contact_boxes.splice(idx, 1);
  sortContactItems(contact_boxes);
  renderContactList();
  docID("floating-contacts").innerHTML = "";
  closeButton();
}

function closeButton() {
  docID("overlay-contacts").style.display = "none";
}

function renderEditContact(id) {
  layoutContactsOverlay();
  //change Values
  docID("edit-contact-overlay-headline").innerHTML = "Edit contact";
  docID("edit-contact-con-overlay").innerHTML = contact_boxes[id].profile_badge;
  docID("edit-contact-button-group").innerHTML = /*html*/ `
  <button id="overlay-secondary-btn" onclick="deleteContact('${id}')" class="secondary-button font-t5" >Delete</button>
  <button id="overlay-primary-btn" onclick="saveEditContact('${id}')" class="button font-t5">Save <img src="../assets/img/check.svg"></button>
`;
  //change Style
  docID("overlay-contacts").style.display = "flex";
  docID("overlay-contacts").style.left = "0";
  docID("contact-overlay-subtitle").style.display = "none";
}

function renderAddContact() {
  layoutContactsOverlay();
  docID("edit-contact-overlay-headline").innerHTML = "Add Contact";
  docID("edit-contact-con-overlay").innerHTML = /*html*/ `
<img id='edit-contact-overlay-img' src="../assets/img/person-white.svg">
`;
  docID("edit-contact-button-group").innerHTML = /*html*/ `
  <button id="overlay-secondary-btn" onclick="closeButton()" class="secondary-button font-t5" >  Cancel <img src="../assets/img/clear.png"></button>
  <button id="overlay-primary-btn" onclick="addNewContact()" class="button font-t5"> Create contact <img src="../assets/img/check.svg"></button>
`;
  //change Style values
  docID("overlay-contacts").style.left = "unset";
  docID("overlay-contacts").style.display = "flex";
  docID("contact-overlay-subtitle").style.display = "flex";
  docID("overlay-secondary-btn").style.width = "unset";
  docID("overlay-primary-btn").style.width = "fit-content";
}
