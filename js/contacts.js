let contacts_inputs;
let letter;
let parent_array = "contact-list";
let edit_contact;
let text; // ?? wird das überhaupt benutzt ?

function initContacts() {
  init();
  activeUser(); //set activeUser
  updateUserValues();
  renderContactList();
  setNavBarActive("contacts-link");
}

function renderContactList() {
  //Teile String in Array aus Buchstaben
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ".split("");
  docID(parent_array).textContent = "";
  //Fülle die ContactListe neu
  alphabet.forEach((ltr, i) => {
    letter = ltr; //for checkLetter
    filtered_contacts = contacts.filter(checkLetter);
    if (filtered_contacts.length > 0) {
      createLetterBox(ltr, parent_array, i);
      filtered_contacts.forEach((e) => {
        new Div(parent_array, `contact-item-${e.idx}`, "contact-list-row");
        docID(`contact-item-${e.idx}`).onclick = function () {
          renderFloatingContacts(e.idx);
        };
        new ProfilBagde(`contact-item-${e.idx}`, e.idx, e.color, e.nameTag);
        new Div(
          `contact-item-${e.idx}`,
          `contact-item-${e.idx}-div`,
          "contact-list-coloumn"
        );
        new Span(
          `contact-item-${e.idx}-div`,
          `contact_itemName-${e.idx}`,
          "",
          e.name
        );
        new Headline(
          "h6",
          `contact-item-${e.idx}-div`,
          `contact_itemMail-${e.idx}`,
          "",
          e.mail
        );
      });
    }
  });
}

function checkLetter(contact) {
  firstLetter = contact.name.charAt(0).toUpperCase();
  return firstLetter == letter;
}

function createLetterBox(letter, parent, index) {
  new Div(parent, `${parent}-div-${index}`, "letter-box");
  new Span(`${parent}-div-${index}`, `letter${letter}`, "letter", letter);
}

function setActive(idx) {
  resetActive();
  //set new attributes
  docID(`contact-item-${idx}`).classList.add("active-contact");
}

function resetActive() {
  for (let i = 0; i < contacts.length; i++) {
    let contact = contacts[i];
    // console.log( i, contact);

    //reset attributes from before
     docID(`contact-item-${contact.idx}`).classList.remove("active-contact");
  }
}

function layoutContactsOverlay() {
  docID("inputs-con").textContent = "";
  input_name = new Divinputimg(
    "inputs-con",
    "imput-img-div",
    "text",
    "Name",
    "../assets/img/icon-person.png",
    "input-con-name-input-id",
    "input-con-name-input-div-id"
  );
  input_email = new Divinputimg(
    "inputs-con",
    "imput-img-div",
    "mail",
    "Email",
    "../assets/img/icon-mail.png",
    "input-con-email-input-id",
    "input-con-email-input-div-id"
  );
  input_phone = new Divinputimg(
    "inputs-con",
    "imput-img-div",
    "phone",
    "Phone",
    "../assets/img/icon-call.svg",
    "input-con-phone-input-id",
    "input-con-phone-input-div-id"
  );
}

function createEditContact(id) {
  renderEditContact(id);
  fillEditContact(contacts[id]);
}

function fillEditContact(e) {
  docID(input_name.input_id).value = e.name;
  docID(input_email.input_id).value = e.mail;
  docID(input_phone.input_id).value = e.phone;
}

function saveContact(idx) {
  edit_contact = contacts[idx];
  // contacts[idx].nameTag = setNameTag(contacts[idx].name);

  updateContactItem(edit_contact);
  renderContactList();
  renderFloatingContacts(edit_contact.idx);
  closeButton();
}

function updateContactItem(contact) {
  if (checkEmptyInputs()) {
    contact.name = docID(input_name.input_id).value;
    contact.mail = docID(input_email.input_id).value;
    contact.phone = docID(input_phone.input_id).value;
    contact.nameTag = setNameTag(contact.name);
  }
}

function renderNewContact() {
  addNewContact()

  idx = contacts.indexOf(newContact);
  contacts[idx].nameTag = setNameTag(contacts[idx].name);
  saveContact(idx);
}

function renderFloatingContacts(idx) {
  contacts.forEach((e, index) => {
    if (idx == e.idx) {
      contact = contacts[index];
      createFloatingContacts(contact);
      setActive(e.idx);
    }
  });
}

function deleteContact(idx) {

  contacts.forEach((e, index) => {
    if (idx == e.idx) {
      contacts.splice(index, 1);
    }
  });
  renderContactList();
  docID("floating-contacts").textContent = "";
  closeButton();
}

function closeButton() {
  docID("overlay-contacts").style.display = "none";
}

function renderEditContact(id) {
  layoutContactsOverlay();
  docID("edit-contact-con-overlay").textContent = "";
  new ProfilBagde(
    "edit-contact-con-overlay",
    id,
    contacts[id].color,
    contacts[id].nameTag
  );
  //change Values
  docID("edit-contact-overlay-headline").textContent = "Edit contact";
  docID("edit-contact-button-group").textContent = "";
  new Button(
    "edit-contact-button-group",
    "overlay-secondary-btn",
    "secondary-button font-t5",
    function () {
      deleteContact(`${id}`);
    },
    "Delete"
  );
  new Button(
    "edit-contact-button-group",
    "overlay-primary-btn",
    "button font-t5",
    function () {
      saveContact(`${id}`);
    }
  );
  new Span("overlay-primary-btn", "", "", "Save");
  new Img("overlay-primary-btn", "", "", "../assets/img/check.svg");
  //change Style
  docID("overlay-contacts").style.display = "flex";
  docID("edit-contact-overlay").style.left = "0";
  docID("contact-overlay-subtitle").style.display = "none";
}

function renderAddContact() {
  layoutContactsOverlay();
  docID("edit-contact-con-overlay").textContent = "";
  docID("edit-contact-button-group").textContent = "";

  docID("edit-contact-overlay-headline").textContent = "Add Contact";
  new Img(
    "edit-contact-con-overlay",
    "edit-contact-overlay-img",
    "",
    "../assets/img/person-white.svg"
  );
  new Button(
    "edit-contact-button-group",
    "overlay-secondary-btn",
    "secondary-button font-t5",
    function () {
      closeButton();
    },
    "Cancel"
  );
  new Button(
    "edit-contact-button-group",
    "overlay-primary-btn",
    "button font-t5",
    function () {
      renderNewContact();
    },
    "Create contact"
  );
  //change Style values
  docID("edit-contact-overlay").style.left = "unset";
  docID("overlay-contacts").style.display = "flex";
  docID("contact-overlay-subtitle").style.display = "flex";
  docID("overlay-secondary-btn").style.width = "unset";
  // docID("overlay-primary-btn").style.width = "fit-content";
}

function createFloatingContacts(e) {
  let parent = "floating-contacts";
  let con_id = `floating-con${e.idx}`;
  let con_class = "floating-con";
  let hl_id = `floating-headline${e.idx}`;
  let hl_class = "floating-headline";
  let profile_con = "floating-profile-badge";
  let hl_txt_con_id = `floating-headline-text-con${e.idx}`;
  let hl_txt_con_class = "floating-headline-text-con";
  let hl_lnk_con_id = `floating-headline-links-con${e.idx}`;
  let hl_lnk_con_class = `floating-headline-links-con`;
  let hl_lnk_id = `floating-headline-link${e.idx}`;
  let hl_lnk_class = "floating-headline-link";
  let hl_lnk_span_id = `floating-headline-link${e.idx}-span`;
  let hl_lnk_2_id = `floating-headline-link-2-${e.idx}`;
  let div_22_id = `${con_id}-22`;
  let div_15_id_1 = `${con_id}-15-1`;
  let div_15_id_1_span_id = "floating-contacts-mail-value-1";
  let div_15_id_1_span_class = "color-primary";
  let div_15_id_2 = `${con_id}-15-2`;
  let div_15_id_2_span_id = "floating-contactsPhoneValue-2";

  docID("floating-contacts").textContent = "";
  new Div(parent, con_id, con_class);
  new Div(con_id, hl_id, hl_class);
  new Div(hl_id, profile_con);
  new ProfilBagde(profile_con, e.idx, e.color, e.nameTag);
  new Div(hl_id, hl_txt_con_id, hl_txt_con_class);
  new Headline("h1", hl_txt_con_id, "", "", e.name);
  new Div(hl_txt_con_id, hl_lnk_con_id, hl_lnk_con_class);
  new Div(hl_lnk_con_id, hl_lnk_id, hl_lnk_class);
  new Img(hl_lnk_id, "", "", "../assets/img/edit.png");
  new Span(hl_lnk_id, hl_lnk_span_id, "", "Edit");
  docID(hl_lnk_span_id).onclick = function () {
    createEditContact(e.idx);
  };
  new Div(hl_lnk_con_id, hl_lnk_2_id, "floating-headline-link");
  docID(hl_lnk_2_id).onclick = function () {
    deleteContact(e.idx);
  };
  new Img(hl_lnk_2_id, "", "", "../assets/img/delete.png");
  new Span(hl_lnk_2_id, "", "", "Delete");
  new Headline("h2", con_id, "", "", "Contact Information");
  new Div(con_id, div_22_id, "gap-22");
  new Div(div_22_id, div_15_id_1, "gap-15");
  new Headline("h6", div_15_id_1, "", "", "Email");
  new Span(div_15_id_1, div_15_id_1_span_id, div_15_id_1_span_class, e.mail);
  new Div(div_22_id, div_15_id_2, "gap-15");
  new Headline("h6", div_15_id_2, "", "", "Phone");
  new Span(div_15_id_2, div_15_id_2_span_id, "", e.phone);
}