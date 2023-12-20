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

let ContactBoxes = [];
let letter = "A";
let clickedContact = ContactBoxes[0];
let addinputs;

function initContacts() {
  init();
  createContacts();
  createFloatingContacts(ContactBoxes[0]);
}

function createContacts() {
  docID("contactList").innerHTML += createLetterBox();
  for (let i = 0; i < oldContacts.length; i++) {
    const profileColor = oldContacts[i].color;
    const profileNameTag = oldContacts[i].nameTag;
    const contactName = oldContacts[i].name;
    const contactEmail = oldContacts[i].mail;
    const contactPhone = oldContacts[i].phone;
    ContactBoxes.push(
      new Contact(
        "contactList",
        profileColor,
        profileNameTag,
        contactName,
        contactEmail,
        contactPhone,
        i
      )
    );
    docID("contactList").innerHTML += ContactBoxes[i].contactItem;
  }

  function createLetterBox() {
    return /*html*/ `
    <div class="letter-box">
  <span id="letter${letter}" class="letter">${letter}</span>
</div>
  `;
  }
}

function createFloatingContacts(contact) {
  contact.createfloatingContacts();
  docID("floatingProfileBadge").innerHTML = contact.profileBadge;
  docID("floatingContactsMailValue").innerHTML = contact.contactEmail;
  docID("floatingContactsPhoneValue").innerHTML = contact.contactPhone;
  //  layoutContactsOverlay();
}

function layoutContactsOverlay() {
  createInputElements();
  addinputs = [inputName, inputEmail, inputPhone];
  docID("LoginInputs").innerHTML = setInputs(addinputs);

  docID("editContactButtonGroup").innerHTML = /*html*/ `
    <button id="overlaySecondaryBtn" onclick="" class="secondaryButton" ></button>
    <button id="overlayPrimaryBtn" onclick="" class="button"></button>
  `;
}

function createEditContact() {
  docID("overlayContacts").style.display = "flex";
  layoutContactsOverlay();
  docID("overlayContacts").style.left = "0";
  docID("editContactOverlayHeadline").innerHTML = "Edit contact";
  docID("contactOverlaySubtitle").style.display = "none";
  docID("editContactConOverlay").innerHTML = ContactBoxes[0].profileBadge;
  docID("overlaySecondaryBtn").innerHTML = "Delete";
  docID("overlaySecondaryBtn").style.width = "fit-content";
  docID("overlayPrimaryBtn").innerHTML = /*html*/ `
Save <img src="../assets/img/check.svg">
`;
}

function closeButton() {
  docID("overlayContacts").style.display = "none";
}

function createAddContact() {
  docID("overlayContacts").style.display = "flex";
  layoutContactsOverlay();
  // docID("overlayContacts").style.left = "unset";
  docID("editContactOverlayHeadline").innerHTML = "Add Contact";
  docID("contactOverlaySubtitle").style.display = "flex";
  docID("editContactConOverlay").innerHTML = /*html*/ `
     <img id='editContactOverlay-img' src="../assets/img/person-white.svg">
  `;
  docID("overlaySecondaryBtn").innerHTML = /*html*/ `
    Cancel <img src="../assets/img/clear.png">
  `;
  docID("overlaySecondaryBtn").style.width = "unset";
  docID("overlayPrimaryBtn").innerHTML = /*html*/ `
  Create contact <img src="../assets/img/check.svg">
  `;
  docID("overlayPrimaryBtn").style.width = "fit-content";
}
