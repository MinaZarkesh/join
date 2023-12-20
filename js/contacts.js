let letter = "A";
let clicked_contact = contact_boxes[0];
let add_inputs;

function initContacts() {
  init();
  createContacts();
  createFloatingContacts(contact_boxes[0]);
}

function createContacts() {
  docID("contact-list").innerHTML += createLetterBox();
  createContactBox();
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

function createFloatingContacts(contact) {
  contact.createFloatingContacts();
  docID("floating-profile-badge").innerHTML = contact.profile_badge;
  docID("floating-contacts-mail-value").innerHTML = contact.contact_email;
  docID("floating-contactsPhoneValue").innerHTML = contact.contact_phone;
  //  layoutContactsOverlay();
}

function layoutContactsOverlay() {
  createInputElements();
  add_inputs = [input_name, input_email, input_phone];
  docID("inputs-con").innerHTML = setInputs(add_inputs);

  docID("edit-contact-button-group").innerHTML = /*html*/ `
    <button id="overlay-secondary-btn" onclick="" class="secondary-button font-t5" ></button>
    <button id="overlay-primary-btn" onclick="" class="button font-t5"></button>
  `;
}

function createEditContact() {
  docID("overlay-contacts").style.display = "flex";
  layoutContactsOverlay();
  docID("overlay-contacts").style.left = "0";
  docID("edit-contact-overlay-headline").innerHTML = "Edit contact";
  docID("contact-overlay-subtitle").style.display = "none";
  docID("edit-contact-con-overlay").innerHTML = contact_boxes[0].profile_badge;
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
