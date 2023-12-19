let oldContacts = [
  {
    name: "Wilhelmina Schattschneider",
    color: "--variant09",
    mail: "antom@gmail.com",
    phone: "+49-123-123",
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

let letter = "A";
let clickedContact = ContactBoxes[0];
let addinputs;

function initContacts() {
  init();
  createContacts();

  //  createInputElements();
  createFloatingContacts(ContactBoxes[0]);
}

  function createContacts() {
    docID("contactList").innerHTML += createLetterBox();
    createContactBox();
    ContactBoxes.forEach((e) => {
      docID("contactList").innerHTML += e.contactItem;
    })
  }

  function createLetterBox() {
    return /*html*/ `
    <div class="letter-box">
  <span id="letter${letter}" class="letter">${letter}</span>
</div>
  `;
  }

function createFloatingContacts(contact) {
  contact.createfloatingContacts();
  docID("floatingProfileBadge").innerHTML = contact.profileBadge;
  docID("floatingContactsMailValue").innerHTML = contact.contactEmail;
  docID("floatingContactsPhoneValue").innerHTML = contact.contactPhone;
  // docID("floatingContacts").innerHTML = contact.createfloatingContacts();
  createEditContactsOverlay();
}

function createEditContactsOverlay() {
  docID("floatingContacts").innerHTML = /*html*/ `
    <div id="editContactOverlay">
      <div class="editContactOverlayHeader">
        <img src="../assets/img/Logo_white.svg" alt="">
        <h1 id="editContactOverlayHeadline" >Add Contact</h1>
        <span id="contactOverlaySubtitle">Tasks are better with a team!</span>
      </div>
      <div class="editContactsCon">
        <div id='editContactConOverlay'  class="profile-badge" style="background-color: var(--grey);">
          <img id='editContactOverlay-img' src="../assets/img/person-white.svg">
        </div>
        <div id="LoginInputs" class="contentCon">
        </div>
        <div id="editContactButtonGroup" class="row"></div>
      </div>
    </div>
  `;

  createInputElements();
  addinputs = [inputName, inputEmail, inputPhone];
  docID("LoginInputs").innerHTML = setInputs(addinputs);

  docID("editContactButtonGroup").innerHTML = /*html*/ `
    <button id="overlaySecondaryBtn" onclick="" class="secondaryButton" >Cancel <img src="../assets/img/clear.png"></button>
    <button id="overlayPrimaryBtn" onclick="" class="button">Create contact <img src="../assets/img/check.svg"></button>
  `;

  docID("editContactOverlay").innerHTML += /*html*/`
       <button onclick="" class="close-btn">X</button>
 
  `;

  createEdit();
}

function createEdit(i){
  docID("editContactOverlayHeadline").innerHTML ="Edit contact";
  docID("contactOverlaySubtitle").style.display = "none";
  docID("editContactConOverlay").innerHTML = ContactBoxes[0].profileBadge;
  docID("overlaySecondaryBtn").innerHTML="Delete";
  docID("overlaySecondaryBtn").style.width ="fit-content";
  // docID("overlayPrimaryBtn")
}