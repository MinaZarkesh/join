let letter = "A";
let clicked_contact = contact_boxes[0];
let add_inputs;

function initContacts() {
  init();
  createContacts();
  // showFloatingContacts(0);
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

  for (let i = 0; i < contact_boxes.length; i++) {
    let contact_item_id = "contact-item-" + i;
    let contact_mail_id = "contact_itemMail-" + i;
    let contact_name_id = "contact_itemName-" + i;
    //reset attributes from before
    docID(contact_item_id).style.background = "var(--white)";
    docID(contact_mail_id).style.color = "var(--primary)";
    docID(contact_name_id).style.color = "var(--black)";
  }
  //set new attributes
  docID(clicked_contact_box_id).style.background = "var(--primary)";
  docID(clicked_mail_id).style.color = "var(--white)";
  docID(clicked_name_id).style.color = "var(--white)";
}

function layoutContactsOverlay(idx) {
  createInputElements();
  add_inputs = [input_name, input_email, input_phone];
  docID("inputs-con").innerHTML = setInputs(add_inputs);

  docID("edit-contact-button-group").innerHTML = /*html*/ `
    <button id="overlay-secondary-btn" onclick="" class="secondary-button font-t5" ></button>
    <button id="overlay-primary-btn" onclick="saveEditContact('${idx}')" class="button font-t5"></button>
  `;
}

function createEditContact(id) {
  layoutEditContact(id);

  docID(input_name.input_id).value = contact_boxes[id].contact_name;
  docID(input_email.input_id).value = contact_boxes[id].contact_email;
  docID(input_phone.input_id).value = contact_boxes[id].contact_phone;
}

function saveEditContact(idx) {
  let input_name_value = docID(input_name.input_id).value;
  let input_email_value = docID(input_email.input_id).value;
  let input_phone_value = docID(input_phone.input_id).value;
  if (
    !(
      input_name_value == "" ||
      input_email_value == "" ||
      input_phone_value == ""
    )
  ) {
    console.log(idx);

    let edit_contact; 
    contact_boxes[idx].contact_name = docID(input_name.input_id).value;
    contact_boxes[idx].contact_email = docID(input_email.input_id).value;
    contact_boxes[idx].contact_phone = docID(input_phone.input_id).value;
  }

  console.log(contact_boxes[idx].contact_name);

  // contact_boxes[id].contact_name = docID(input_name.input_id).value;
  // contact_boxes[id].contact_email = docID(input_email.input_id).value;
  // contact_boxes[id].contact_phone = docID(input_phone.input_id).value;
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
