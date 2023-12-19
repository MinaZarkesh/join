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
  // docID("floatingContacts").innerHTML = contact.createfloatingContacts();
  createEditContactsOverlay();
}

function createEditContactsOverlay() {
  docID("floatingContacts").innerHTML = /*html*/ `
    <div id="editContactOverlay">
      <div class="editContactOverlayHeader">
        <img src="../assets/img/Logo_white.svg" alt="">
        <h1 id="editContactOverlayHeadline" >Add Contact</h1>
        <span>Tasks are better with a team!</span>
      </div>
      <div class="editContactsCon">
        <div id='editContactConOverlay'  class="profile-badge" style="background-color: var(--grey);">
          <img id='editContactOverlay-img' src="../assets/img/person-white.svg">
        </div>
        <div id="inputfieldsCon">
        </div>
        <div id="editContactButtonGroup"></div>
      </div>
    </div>
  `;
createInputElements();
let addinputs = [inputName, inputEmail, inputPhone];
docID("inputfieldsCon").innerHTML = "";
docID("inputfieldsCon").innerHTML= setInputs(addinputs);
// docID("inputfieldsCon").innerHTML = addinputs;
}
