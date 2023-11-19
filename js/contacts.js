/**
 * Initializes the contacts by calling the init function and rendering the contact list.
 * made by Mina Zarkesh
 * @return {Promise<void>} - A promise that resolves when the contacts are initialized.
 */
async function initContacts() {
    await init();
    //contacts = oldContacts;
    renderContactList();
}

/**
 * Displays the selected contact's information on the web page.
 *
 * This function updates HTML elements to show the details of the selected contact
 * and highlights the appearance of the selected contact.
 *
 * @param {number} id - The index of the contact to display.
 * made by Mina Zarkesh
 */
function renderContactRight(id) {
    contact = contacts[id];

    indexID = contactArray.indexOf(contact);
    let contactsEmail = document.getElementById("contactsEmail");
    let contactName = document.getElementById("contactsName");
    let contactNameTag = document.getElementById("contactsNameTag");
    let contactsPhone = document.getElementById("contactsPhone");
    let contactsColor = document.getElementById("profile-badge");
    let contactFloatingBox = document.getElementById("floating-contact-box");
    let contactboxes = document.querySelectorAll(".contact-box");
    let clickedContactbox = contactboxes[indexID];

    contactFloatingBox.classList.remove("d-none");
    contactName.innerHTML = `${contact.name}`;
    contactNameTag.innerHTML = `${contact.nameTag}`;
    contactsEmail.innerHTML = `${contact.mail}`;
    contactsPhone.innerHTML = `${contact.phone}`;
    contactsColor.style.backgroundColor = `var(${contact.color})`;

    for (let i = 0; i < contactboxes.length; i++) {
        const element = contactboxes[i];
        element.classList.remove("active");
    }
    clickedContactbox.classList.add("active");
    document.getElementById("mobileOverlay").style.display = "flex";
    document.getElementById("main-mobile-Overlay").style.display = "flex";
}

/**
 * Renders and displays a sorted list of contacts grouped by their first letters.
 *
 * This function takes an array of contact objects, sorts them alphabetically by their names,
 * groups them by the first letter of their names, and displays the contacts accordingly on the website.
 * made by Mina Zarkesh
 */
function renderContactList() {
    letters = [];
    contactArray = [];
    contacts = sortContactsAlphabetically(contacts);
    let contactlist = document.getElementById("contact-list");
    contactlist.innerHTML = "";
    for (let i = 0; i < contacts.length; i++) {
        contact = contacts[i];
        let firstLetter = contact.name.charAt(0);

        contacts = sortContactsAlphabetically(contacts);

        let contactlist = document.getElementById("contact-list");
        contactlist.innerHTML = "";
        for (let i = 0; i < contacts.length; i++) {
            contact = contacts[i];
            let firstLetter = contact.name.charAt(0);

            if (!letters.includes(firstLetter)) {
                letters.push(firstLetter);
            }
        }
    }
    for (let j = 0; j < letters.length; j++) {
        let contactIndex = alphabet.indexOf(letters[j]);
        contactlist.innerHTML += generateLetterBox(contactIndex, j);
        let keyword = letters[j];
        let searchResult = contacts.filter(
            (contactUser) => contactUser.name.charAt(0).indexOf(keyword) > -1
        );
        for (let k = 0; k < searchResult.length; k++) {
            let Celement = searchResult[k];
            let nameIndex = contacts.indexOf(Celement);
            contactArray.push(Celement);
            contactlist.innerHTML += generateContactBox(
                nameIndex,
                Celement.nameTag,
                Celement.name,
                Celement.mail
            );
        }
    }
}

/**
 * Sorts a list of contacts alphabetically by their names.
 * 
 * This function takes an array of contact objects and sorts them in ascending
 * alphabetical order based on the 'name' property. The sorting is case-insensitive.
 * made by Michael Povoa
 * @param {Array} contacts - The array of contact objects to be sorted.
 * @returns {Array} - The sorted array of contact objects.
 */
function sortContactsAlphabetically(contacts) {
    contacts.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    return contacts;
}

/**
 * Generates an HTML element representing a letter box.
 *
 * This function creates an HTML element for displaying a letter box on the web page.
 * Letter boxes are used to group contacts alphabetically by their first letters.
 * made by Mina Zarkesh
 * @param {number} contactIndex - The index of the contact in the alphabet array.
 * @param {number} i - The index of the letter in the letters array.
 * @returns {string} - A string containing the HTML code for the generated letter box.
 */
function generateLetterBox(contactIndex, i) {
    return /*html*/ `
    <div class="lettter-box">
  <span id="alphabet${alphabet[contactIndex]}" class="letter">${letters[i]}</span>
</div>
  `;
}

/**
 * Generates an HTML element representing a contact box.
 *
 * This function creates an HTML element to display contact information on the web page.
 * Clicking on the contact box triggers the 'renderContactRight' function to display
 * detailed information about the contact.
 * made by Mina Zarkesh
 *
 * @param {number} id - The unique identifier of the contact.
 * @param {string} nameTag - The name tag of the contact.
 * @param {string} contactName - The name of the contact.
 * @param {string} mail - The email address of the contact.
 * @returns {string} - A string containing the HTML code for the generated contact box.
 */
function generateContactBox(id, nameTag, contactName, mail) {
    return /*html*/ `
  <div class="contact-box" >
      <div class="contact-inner-box" onclick="renderContactRight(${id})">
      <!-- <img src="../assets/img/Profile_badge.svg" alt="" /> -->
        <div class="profile-badge" style="background-color: var(${contacts[id].color});">
            <span>${nameTag}</span>
        </div>
        <div class="contact-frame">
            <span class="contact-frame-name">${contactName}</span>
            <span class="contact-frame-mail">${mail}</span>
        </div>
      </div>
    </div> 
`;
}

/**
 * Displays the edit contact form.
 *
 * This function replaces the content of the main section on the web page with an edit contact form.
 * It also displays an overlay to focus user interaction on the edit form.
 * made by Mina Zarkesh
 */
function showEditContact() {
    const mainSection = document.getElementById("main_section");
    const overlay = document.getElementById("overlay");
    mainSection.innerHTML = "";
    mainSection.innerHTML = generateEditContact();
    mainSection.style.display = "block";
    overlay.style.display = "block";
    setTimeout(() => {
        mainSection.style.left = "0";
    }, 10);
}

/**
 *
 * Displays the add contact form with a slide-in animation.
 *
 * This function replaces the content of the main section on the web page with an add contact form
 * and uses a slide-in animation to display it.
 * made by Mina Zarkesh
 */
function showAddContact() {
    const mainSection = document.getElementById("main_section");
    const overlay = document.getElementById("overlay");
    mainSection.innerHTML = "";
    mainSection.innerHTML = generateAddContact();
    mainSection.style.display = "block";
    overlay.style.display = "block";
    setTimeout(() => {
        mainSection.style.left = "";
        mainSection.style.right = "0";
    }, 10);
}

/**
 * Closes an overlay with a slide-out animation.
 *
 * This function slides out the overlay from the right and hides it.
 * made by Mina Zarkesh
 */
function closeOverlay() {
    const mainSection = document.querySelector(".main_section");
    const overlay = document.getElementById("overlay");
    mainSection.style.right = "-100%";
    overlay.style.display = "none";
    setTimeout(() => {
        mainSection.style.display = "none";
    }, 300);
}

/**
 *
 * Adds a new contact to the contact list and updates the display.
 *
 * This function retrieves contact information from HTML input elements, creates a new contact object,
 * adds it to the contact list, and updates the display with the new contact's information.
 * It also saves the updated contact list to the backend and closes the overlay.
 * made by Mina Zarkesh
 */
async function addContact() {
    let Cname = document.getElementById("name");
    let Cemail = document.getElementById("mail");
    let Cphone = document.getElementById("phone");
    let Ccolor = setRandomColor();
    let CnameTag = createNameTag(Cname.value);

    let newContact = {
        name: Cname.value,
        color: Ccolor,
        mail: Cemail.value,
        phone: Cphone.value,
        nameTag: CnameTag,
    };

    contacts.push(newContact);
    await setItem("contacts", JSON.stringify(contacts));
    contact = newContact;
    renderContactList();
    addIndex = contacts.indexOf(contact);
    renderContactRight(addIndex);
    Cname.value = "";
    Cemail.value = "";
    Cphone.value = "";
    closeOverlay();
}

/**
 * Closes the mobile overlay and removes the "active" class from the clicked contact box.
 *
 * This function hides the mobile overlay on the web page and removes the "active" class
 * from the contact box that corresponds to the currently selected contact. made by Mina Zarkesh
 */
function closeMobileOverlay() {
    document.getElementById("mobileOverlay").style.display = "none";

    let indexID = contactArray.indexOf(contact);
    let contactboxes = document.querySelectorAll(".contact-box");
    let clickedContactbox = contactboxes[indexID];
    clickedContactbox.classList.remove("active");
}

/**
 *
 * Edits the contact's information if changes are made and updates the display.
 *
 * This function updates the contact's information if any changes are made to the name, email, or phone.
 * It then updates the display with the modified contact's information and saves the updated contact
 * list to the backend. made by Mina Zarkesh
 */
async function editContact() {
    let editName = document.getElementById("name");
    let editMail = document.getElementById("mail");
    let editPhone = document.getElementById("phone");

    if (!(editName.value === "") ||
        !(editMail.value === "") ||
        !(editPhone.value === "")
    ) {
        if (!(editName.value === contact.name) ||
            !(editMail.value === contact.mail) ||
            !(editPhone.value === contact.phone)
        ) {
            editIndex = contacts.indexOf(contact);
            let editNameTag = createNameTag(editName.value);
            let editContact = {
                name: editName.value,
                color: contact.color,
                mail: editMail.value,
                phone: editPhone.value,
                nameTag: editNameTag,
            };
            contacts = [];
            await loadContacts(editIndex);
            contacts[editIndex] = editContact;
            await setItem("contacts", JSON.stringify(contacts));
            renderContactList();
            renderContactRight(editIndex);
        }
    }
    closeOverlay();
}

/**
 * made by Mina Zarkesh
 * Deletes the currently selected contact and updates the display.
 *
 * This function deletes the contact currently being viewed, updates the contact list,
 * saves the updated contact list to the backend, and refreshes the display to reflect the changes.
 */
async function deleteContact() {
    deleteIndex = contacts.indexOf(contact);
    closeOverlay();
    contacts = [];
    await loadContacts();
    contacts.splice(deleteIndex, 1);
    await setItem("contacts", JSON.stringify(contacts));

    let editName = document.getElementById("name");
    let editMail = document.getElementById("mail");
    let editPhone = document.getElementById("phone");
    const mainSection = document.getElementById("main_section");

    if (mainSection.style.display === "block") {
        editName.value = "";
        editMail.value = "";
        editPhone.value = "";
    }
    let contactFloatingBox = document.getElementById("floating-contact-box");
    contactFloatingBox.classList.add("d-none");
    renderContactList();
}

/**
 * Generates the HTML code for the "Add Contact" form.
 * made by Mina Zarkesh
 * @return {string} The HTML code for the form.
 */
function generateAddContact() {
    return /*html*/ `
     <div class="add-contact-box">
      <div class="add-contact-box-header">
        <button id="close-btn"
        onclick=closeOverlay()>
          <img
            src="../assets/img/close.svg"
            alt="icon-arrow-left-line-blue"
            id="close"
          />
        </button>

        <img src="../assets/img/Logo_white.svg" alt="Logo" />
        <h1>Add Contact</h1>
        <span>Tasks are better with a team!</span>
      </div>

      <div class="add-contact-inner-box">
        <div class="profile-badge" style="width: 120px; height:120px; border-radius:50%;">
          <img src="../assets/img/person-white.svg" alt="" />
        </div>

        <div class="form">
          <form onsubmit="addContact(); return false" >
          <div class="form-outline">
            <div class="form-inner-field">
              <input required type="text" name="" id="name" placeholder="Name" />
              <img
                src="../assets/img/icon-person.png"
                alt="name"
              />
            </div>
          </div>

          <div class="form-outline">
            <div class="form-inner-field">
              <input required type="email" name="" id="mail" placeholder="Email" />
              <img src="../assets/img/icon-mail.png" alt="mail" />
            </div>
          </div>

          <div class="form-outline">
            <div class="form-inner-field">
              <input
              required
                type="number"
                name=""
                id="phone"
                placeholder="Phone"
                pattern="[0-9]{2}-[0-9]{3}-[0-9]{3}"
              />
              <img src="../assets/img/icon-call.svg" alt="lock" />
            </div>
          </div>

          <div class="container-checkbox">
          
            <button
            onclick=closeOverlay();
            id="cancel">
              Cancel
              <img src="../assets/img/icon_cancel-gray.svg" alt="" />
            </button>
            <button id="createContact">
              Create Contact <img src="../assets/img/check.svg" alt="" />
            </button>
           
          </div>
          </form>
        </div>
      </div>
    </div>
  `;
}

/**
 * Generates the HTML code for the edit contact form.
 * made by Mina Zarkesh
 * @return {string} The HTML code for the edit contact form.
 */
function generateEditContact() {
    return /*html*/ `
     <div class="add-contact-box">
      <div class="add-contact-box-header">
        <button id="close-btn"
        onclick=closeOverlay();>
        
          <img
            src="../assets/img/close.svg"
            alt="icon-arrow-left-line-blue"
            id="close"
          />
        </button>

        <img src="../assets/img/Logo_white.svg" alt="Logo" />
        <h1> Contact</h1>
    
      </div>

      <div class="add-contact-inner-box">
        <div class="profile-badge" style="width: 120px; height: 120px; border-radius:50%; font-size: 47px; background-color: var(${contact.color});">
         <span>${contact.nameTag}</span>
        </div>

        <div class="form">
        <form onsubmit="editContact(); return false" >
          <div class="form-outline">
            <div class="form-inner-field">
              <input type="text" name="" id="name" placeholder="Name" value="${contact.name}" />
              <img
                src="../assets/img/icon-person.png"
                alt="name"
              />
            </div>
          </div>

          <div class="form-outline">
            <div class="form-inner-field">
              <input type="email" name="" id="mail" placeholder="Email" value="${contact.mail}" />
              <img src="../assets/img/icon-mail.png" alt="mail" />
            </div>
          </div>

          <div class="form-outline">
            <div class="form-inner-field">
              <input
              value="${contact.phone}"
                type="number"
                name=""
                id="phone"
                placeholder="49-123-123"
                pattern="[0-9]{2}-[0-9]{3}-[0-9]{3}"
              />
              <img src="../assets/img/icon-call.svg" alt="lock" />
            </div>
          </div>

          <div class="container-checkbox">
          <button type="button" id="delete" onclick="deleteContact()">
              Delete
            </button>
            <button id="saveContact">
              Save <img src="../assets/img/check.svg" alt="" />
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", function() {
    // Überprüfen Sie den URL-Parameter, um festzustellen, ob showAddContact aufgerufen werden soll
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("showAddContact") === "true") {
        showAddContact();
    }
});