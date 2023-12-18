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
let clickedContact;

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
  clickedContact = contact;
  docID("floatingContacts").innerHTML = /*html*/ `
  <div class="floatingCon">
            <div class="floatingHeadline">
              <div id="floatingProfileBadge">
              </div>
              <div class="floatingHeadlineTextCon">
                <h1>${clickedContact.contactName}</h1>
                <div class="floatingHeadlineLinksCon">
                  <div class="floatingHeadlineLink">
                    <img src="../assets/img/edit.png" alt="" />
                    <span> Edit</span>
                  </div>
                  <div class="floatingHeadlineLink">
                    <img src="../assets/img/delete.png" alt="" />
                    <span> Delete</span>
                  </div>
                </div>
              </div>
            </div>
            <h2>Contact Information</h2>
            <div class="gap-22">
              <div class="gap-15">
                <h6>Email</h6>
                <span id="floatingContactsMailValue" class="color-primary">${clickedContact.contactEmail}</span>
              </div>
              <div class="gap-15">
                <h6>Phone</h6>
                <span id="floatingContactsPhoneValue">${clickedContact.contactPhone}</span>
              </div>
            </div>
          </div>
  `;

  docID("floatingProfileBadge").innerHTML = clickedContact.profileBadge;
  docID("floatingContactsMailValue").innerHTML = clickedContact.contactEmail;
  docID("floatingContactsPhoneValue").innerHTML = clickedContact.contactPhone;
}
