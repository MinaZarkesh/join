let letter = "A";
let clicked_contact = contact_boxes[0];
let contacts_inputs;

function initContacts() {
  init();
  createContactList();
}

function createContactList() {
  docID("contact-list").innerHTML += createLetterBox();

  if (!contact_boxes.length > 0) {
    createContactBox("contact-list");
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
  showFloatingContacts(edit_contact.contact_idx);
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

  let idx = parent_array.length;

  if (
    input_name.value != "" &&
    input_email.value != "" &&
    !input_phone.value != ""
  ) {
    // imput-img-div-Name-input-id
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
  let added_contact;
  added_contact = parent_array[idx];

  sortContactItems(added_contact.parentArray);
  showFloatingContacts(added_contact.contact_idx);
  createContactList();
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

function showFloatingContacts(idx) {
  console.log("floatingContacts: neu ", idx);
  contact = contact_boxes[idx];
  contact.contact_idx = idx;

  contact.createFloatingContacts();
  //update Values of createFloatingContacts
  docID("floating-profile-badge").innerHTML = contact.profile_badge;
  docID("floating-contacts-mail-value").innerHTML = contact.contact_email;
  docID("floating-contactsPhoneValue").innerHTML = contact.contact_phone;
}

function deleteContact(idx) {
  contact_boxes.splice(idx, 1);
  sortContactItems(contact_boxes);
  createContactList();
  docID("floating-contacts").innerHTML = "";
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
  docID("edit-contact-button-group").innerHTML = /*html*/ `
  <button id="overlay-secondary-btn" onclick="closeButton()" class="secondary-button font-t5" >  Cancel <img src="../assets/img/clear.png"></button>
  <button id="overlay-primary-btn" onclick="addNewContact()" class="button font-t5"> Create contact <img src="../assets/img/check.svg"></button>
`;
  docID("edit-contact-con-overlay").innerHTML = /*html*/ `
<img id='edit-contact-overlay-img' src="../assets/img/person-white.svg">
`;

  docID("edit-contact-overlay-headline").innerHTML = "Add Contact";
  docID("overlay-contacts").style.left = "unset";
  docID("contact-overlay-subtitle").style.display = "flex";
  docID("overlay-secondary-btn").style.width = "unset";
  docID("overlay-primary-btn").style.width = "fit-content";
}
