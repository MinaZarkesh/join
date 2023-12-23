let letter = "A";
// let clicked_contact = contact_boxes[0];
let contacts_inputs;
let letters;
let myarray = [];

function initContacts() {
  init();
  createContactList();
}

// function createContactList() {
//   docID("contact-list").innerHTML += createLetterBox();

//   if (!contact_boxes.length > 0) {
//     createContactBox("contact-list");
//   }
//   docID("contact-list").innerHTML = "";
//   contact_boxes.forEach((e) => {
//     docID("contact-list").innerHTML += e.contact_item;
//   });
// }

function createContactList() {
  //Teile String in Array aus Buchstaben
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  alphabet.split("");
  letters = alphabet.split("");
  
  //Contact_boxes füllen
  docID("contact-list").innerHTML = "";
  if (!contact_boxes.length > 0) {
    createContactBox("contact-list");
  }

  //Fülle die ContactListe neu
  letters.forEach((ltr) => {
    letter = ltr;
    // debugger;
    // if (!contact_boxes.length > 0) {

      myarray = contact_boxes.filter(checkLetter);

      //wenn myArray länger als 1 ist, dann füge den Buchstaben hinzu
      //gehe dann die gefiltere Liste durch und erstelle für jeden ein ContactItem;

      if (myarray.length > 0) {
        docID("contact-list").innerHTML += createLetterBox(letter);
        myarray.forEach((e) => {
          docID("contact-list").innerHTML += e.contact_item;
        });
      }
    // }
  }); //letters.foreach
}

function checkLetter(contact) {
  firstLetter = contact.contact_name.charAt(0);
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
  renderEditContact(id);
  contact_boxes[id].fillEditContact(id);
}

function saveEditContact(idx) {
  let edit_contact = contact_boxes[idx];
  edit_contact.updateContactItem();
  renderFloatingContacts(edit_contact.contact_idx);
  createContactList();
  edit_contact.setActive();
  closeButton();
}

function addNewContact() {
  let parent_array = contact_boxes;
  let parent = "contact-list";
  let input_name_value;
  let input_email_value;
  let input_phone_value;
  let profileColor = setRandomColor();
  let profileNameTag = "??";
  let added_contact;
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
  createContactList();
  renderFloatingContacts(added_contact.contact_idx);
  added_contact.setActive();
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
    element.createContactItem();
  }
}

function renderFloatingContacts(idx) {
  contact = contact_boxes[idx];
  contact.setActive();
  contact.createFloatingContacts();
}

function deleteContact(idx) {
  contact_boxes.splice(idx, 1);
  sortContactItems(contact_boxes);
  createContactList();
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
  //changeStyle values
  docID("overlay-contacts").style.left = "unset";
  docID("overlay-contacts").style.display = "flex";
  docID("contact-overlay-subtitle").style.display = "flex";
  docID("overlay-secondary-btn").style.width = "unset";
  docID("overlay-primary-btn").style.width = "fit-content";
}
