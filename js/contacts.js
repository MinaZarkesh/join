// let contacts_inputs;
// let letter;
// let parent_array = "contact-list";
// let edit_contact;

function initContacts(){
init();
  
}
// function initContacts() {
//   init();
//   renderContactList();
// }
 
// function renderContactList() {
//   //Teile String in Array aus Buchstaben
//   alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
//   docID(parent_array).innerHTML = "";
//   //Fülle die ContactListe neu
//   alphabet.forEach((ltr, i) => {
//     letter = ltr; //for checkLetter
//     filtered_contacts = contacts.filter(checkLetter);
//     if (filtered_contacts.length > 0) {
//       createLetterBox(ltr, parent_array, i);
//       filtered_contacts.forEach((e) => {
//         new Div(parent_array, `contact-item-${e.idx}`, "contact-list-row");
//         docID(`contact-item-${e.idx}`).onclick = function () {
//           renderFloatingContacts(e.idx);
//         };
//         new ProfilBagde(`contact-item-${e.idx}`, e.idx, e.color, e.nameTag);
//         new Div(
//           `contact-item-${e.idx}`,
//           `contact-item-${e.idx}-div`,
//           "contact-list-coloumn"
//         );
//         new Span(
//           `contact-item-${e.idx}-div`,
//           `contact_itemName-${e.idx}`,
//           "",
//           e.name
//         );
//         new Headline(
//           "h6",
//           `contact-item-${e.idx}-div`,
//           `contact_itemMail-${e.idx}`,
//           "",
//           e.mail
//         );
//       });
//     }
//   });
// }

// function checkLetter(contact) {
//   firstLetter = contact.name.charAt(0).toUpperCase();
//   return firstLetter == letter;
// }

// function createLetterBox(letter, parent, index) {
//   new Div(parent, `${parent}-div-${index}`, "letter-box");
//   new Span(`${parent}-div-${index}`, `letter${letter}`, "letter", letter);
// }

// function setActive(idx) {
//   resetActive();
//   //set new attributes
//   docID(`contact-item-${idx}`).classList.add("active-contact");
// }

// function resetActive() {
//   for (let i = 0; i < contacts.length; i++) {
//     let contact = contacts[i];
//     //reset attributes from before
//     docID(`contact-item-${contact.idx}`).classList.remove("active-contact");
//   }
// }
// let text;

// function layoutContactsOverlay(idx) {
//   //es wird keine index übergeben.
//   createInputElements();
//   contacts_inputs = [input_name, input_email, input_phone];

//  // docID("inputs-con").innerHTML = setInputs(contacts_inputs);
//   // docID(input_name.div_id).innerHTML ="Halli Hallo";
//   // docID(input_email.div_id).innerHTML ="";
//   //  docID(input_password.div_id).innerHTML ="";
//   //  docID(input_confirm_password.div_id).innerHTML ="";

//  docID("inputs-con").innerHTML ="";
//  docID("inputs-con").innerHTML =  input_name.child_div;
//  //docID("inputs-con").appendChild(input_name.div_id);
//    // text = input_name.child_div.element.getInnerHTML(input_name);
//  //  docID(input_name.div_id).innerHTML = input_name.child_div.element.innerHTML;
    
//   // input_name.render("inputs-con", input_name.content);

//   new Button("edit-contact-button-group", "overlay-secondary-btn", "secondary-button font-t5");
//   new Button("edit-contact-button-group", "overlay-primary-btn", "button font-t5", function () {saveEditContact(`${idx}`);});
// }

// function createEditContact(id) {
//   renderEditContact(id);
//  // contacts[id].fillEditContact(id);
// }

// function fillEditContact() {
//   docID(input_name.input_id).value = this.contact_name;
//   docID(input_email.input_id).value = this.contact_email;
//   docID(input_phone.input_id).value = this.contact_phone;
// }

// function saveEditContact(idx) {
//   edit_contact = contacts[idx];
//   updateContactItem(edit_contact);
//   renderContactList();
//   renderFloatingContacts(edit_contact.idx);
//   closeButton();
// }

// function updateContactItem(contact) {
//   if (
//     input_name.value != "" &&
//     input_email.value != "" &&
//     !input_phone.value != ""
//   ) {
//     contact.name = docID(input_name.input_id).value;
//     contact.mail = docID(input_email.input_id).value;
//     contact.phone = docID(input_phone.input_id).value;
//   }
//   // sortContactItems(contacts);
// }

// function addNewContact() {
//   let added_contact;
//   //variables for parameters
//   let parent = parent_array;
//   let profileColor = setRandomColor();
//   let profileNameTag = "??";
//   let input_name_value;
//   let input_email_value;
//   let input_phone_value;
//   let idx = oldContacts.length;

//   if (
//     input_name.value != "" &&
//     input_email.value != "" &&
//     !input_phone.value != ""
//   ) {
//     input_name_value = docID(input_name.input_id).value;
//     input_email_value = docID(input_email.input_id).value;
//     input_phone_value = docID(input_phone.input_id).value;
//   }

//   contacts.push(
//     new Contact(
//       parent,
//       profileColor,
//       profileNameTag,
//       input_name_value,
//       input_email_value,
//       input_phone_value,
//       idx
//     )
//   );

//   added_contact = contacts[idx];
//   renderContactList();
//   renderFloatingContacts(added_contact.idx);
//   closeButton();
// }

// function sortContactItems(parent) {
//   parent.sort((a, b) =>
//     a.contact_name > b.contact_name
//       ? 1
//       : b.contact_name > a.contact_name
//       ? -1
//       : 0
//   );

//   for (let i = 0; i < parent.length; i++) {
//     //nachdem neu sortieren auch die Idexes updaten
//     // const element = parent[i];
//     // element.contact_idx = i;
//     element.renderContactItem();
//   }
// }

// function renderFloatingContacts(idx) {
//   contacts.forEach((e, index) => {
//     if (idx == e.idx) {
//       contact = contacts[index];
//       createFloatingContacts(contact);
//       setActive(e.idx);
//     }
//   });
// }

// function deleteContact(idx) {
//   contacts.forEach((e, index) => {
//     if (idx == e.idx) {
//       contacts.splice(index, 1);
//     }
//   });

//   // sortContactItems(contact_boxes);
//   renderContactList();
//   docID("floating-contacts").innerHTML = "";
//   closeButton();
// }

// function closeButton() {
//   docID("overlay-contacts").style.display = "none";
// }

// function renderEditContact(id) {
//   layoutContactsOverlay();
//   //change Values
//   docID("edit-contact-overlay-headline").textContent = "Edit contact";
//   // docID("edit-contact-con-overlay").innerHTML = contact_boxes[id].profile_badge;
//   new ProfilBagde(
//     "edit-contact-con-overlay",
//     id,
//     contacts[id].color,
//     contacts[id].nameTag
//   );
//   //   docID("edit-contact-button-group").innerHTML = /*html*/ `
//   //   <button id="overlay-secondary-btn" onclick="deleteContact('${id}')" class="secondary-button font-t5" >Delete</button>
//   //   <button id="overlay-primary-btn" onclick="saveEditContact('${id}')" class="button font-t5">Save <img src="../assets/img/check.svg"></button>
//   // `
//   new Button(
//     "edit-contact-button-group",
//     "overlay-secondary-btn",
//     "secondary-button font-t5",
//     function () {
//       deleteContact("${id}");
//     },
//     "Delete"
//   );
//   new Button(
//     "edit-contact-button-group",
//     "overlay-primary-btn",
//     "button font-t5",
//     function () {
//       saveEditContact("${id}");
//     }
//   );
//   new Span("overlay-primary-btn", "", "", "Save");
//   new Img("overlay-primary-btn", "", "", "../assets/img/check.svg");
//   //change Style
//   docID("overlay-contacts").style.display = "flex";
//   docID("overlay-contacts").style.left = "0";
//   docID("contact-overlay-subtitle").style.display = "none";
// }

// function renderAddContact() {
//   layoutContactsOverlay();
//   docID("edit-contact-overlay-headline").textContent = "Add Contact";
//   //   docID("edit-contact-con-overlay").innerHTML = /*html*/ `
//   // <img id='edit-contact-overlay-img' src="../assets/img/person-white.svg">
//   // `;
//   //   docID("edit-contact-button-group").innerHTML = /*html*/ `
//   //   <button id="overlay-secondary-btn" onclick="closeButton()" class="secondary-button font-t5" >  Cancel <img src="../assets/img/clear.png"></button>
//   //   <button id="overlay-primary-btn" onclick="addNewContact()" class="button font-t5"> Create contact <img src="../assets/img/check.svg"></button>
//   // `;
//   new Img(
//     "edit-contact-con-overlay",
//     "edit-contact-overlay-img",
//     "",
//     "../assets/img/person-white.svg"
//   );
//   new Button(
//     "edit-contact-button-group",
//     "overlay-secondary-btn",
//     "secondary-button font-t5",
//     function () {
//       closeButton();
//     },
//     "Cancel"
//   );
//   new Button(
//     "edit-contact-button-group",
//     "overlay-primary-btn",
//     "button font-t5",
//     function () {
//       addNewContact();
//     },
//     "Create contact"
//   );
//   //change Style values
//   docID("overlay-contacts").style.left = "unset";
//   docID("overlay-contacts").style.display = "flex";
//   docID("contact-overlay-subtitle").style.display = "flex";
//   docID("overlay-secondary-btn").style.width = "unset";
//   docID("overlay-primary-btn").style.width = "fit-content";
// }

// function createFloatingContacts(e) {
//   let parent = "floating-contacts";
//   let con_id = `floating-con${e.idx}`;
//   let con_class = "floating-con";
//   let hl_id = `floating-headline${e.idx}`;
//   let hl_class = "floating-headline";
//   let profile_con = "floating-profile-badge";
//   let hl_txt_con_id = `floating-headline-text-con${e.idx}`;
//   let hl_txt_con_class = "floating-headline-text-con";
//   let hl_lnk_con_id = `floating-headline-links-con${e.idx}`;
//   let hl_lnk_con_class = `floating-headline-links-con`;
//   let hl_lnk_id = `floating-headline-link${e.idx}`;
//   let hl_lnk_class = "floating-headline-link";
//   let hl_lnk_span_id = `floating-headline-link${e.idx}-span`;
//   let hl_lnk_2_id = `floating-headline-link-2-${e.idx}`;
//   let div_22_id = `${con_id}-22`;
//   let div_15_id_1 = `${con_id}-15-1`;
//   let div_15_id_1_span_id = "floating-contacts-mail-value-1";
//   let div_15_id_1_span_class = "color-primary";
//   let div_15_id_2 = `${con_id}-15-2`;
//   let div_15_id_2_span_id = "floating-contactsPhoneValue-2";

//   docID("floating-contacts").innerHTML = "";
//   new Div(parent, con_id, con_class);
//   new Div(con_id, hl_id, hl_class);
//   new Div(hl_id, profile_con);

//   // document.getElementById("hl_id")
//   //.innerHTML += /*html*/`
//   //   <div id="profile_con"></div>
//   // `;

//   new ProfilBagde(profile_con, e.idx, e.color, e.nameTag);
//   new Div(hl_id, hl_txt_con_id, hl_txt_con_class);
//   new Headline("h1", hl_txt_con_id, "", e.name);
//   new Div(hl_txt_con_id, hl_lnk_con_id, hl_lnk_con_class);
//   new Div(hl_lnk_con_id, hl_lnk_id, hl_lnk_class);
//   new Img(hl_lnk_id, "", "", "../assets/img/edit.png");
//   new Span(hl_lnk_id, hl_lnk_span_id, "", "Edit");
//   docID(hl_lnk_span_id).onclick = function () {
//     createEditContact(e.idx);
//   };
//   new Div(hl_lnk_con_id, hl_lnk_2_id, "floating-headline-link");
//   docID(hl_lnk_2_id).onclick = function () {
//     deleteContact(e.idx);
//   };
//   new Img(hl_lnk_2_id, "", "", "../assets/img/delete.png");
//   new Span(hl_lnk_2_id, "", "", "Delete");
//   new Headline("h2", con_id, "", "", "Contact Information");
//   new Div(con_id, div_22_id, "gap-22");
//   new Div(div_22_id, div_15_id_1, "gap-15");
//   new Headline("h6", div_15_id_1, "", "", "Email");
//   new Span(div_15_id_1, div_15_id_1_span_id, div_15_id_1_span_class, e.mail);
//   new Div(div_22_id, div_15_id_2, "gap-15");
//   new Headline("h6", div_15_id_2, "", "", "Phone");
//   new Span(div_15_id_2, div_15_id_2_span_id, "", e.phone);

//   // docID("floating-contacts").innerHTML = /*html*/ `
//   //       <div class="floating-con">
//   //         <div class="floating-headline">
//   //           <div id="floating-profile-badge">
//   //             ${this.profile_badge}
//   //           </div>
//   //           <div class="floating-headline-text-con">
//   //             <h1>${this.contact_name}</h1>
//   //             <div class="floating-headline-links-con">
//   //               <div class="floating-headline-link">
//   //                 <img src="../assets/img/edit.png" alt="" />
//   //                 <span onclick="createEditContact(${this.contact_idx})" > Edit</span>
//   //               </div>
//   //               <div onclick="deleteContact(${this.contact_idx})" class="floating-headline-link">
//   //                 <img src="../assets/img/delete.png" alt="" />
//   //                 <span> Delete</span>
//   //               </div>
//   //             </div>
//   //           </div>
//   //         </div>
//   //         <h2>Contact Information</h2>
//   //         <div class="gap-22">
//   //           <div class="gap-15">
//   //             <h6>Email</h6>
//   //             <span id="floating-contacts-mail-value" class="color-primary">${this.contact_email}</span>
//   //           </div>
//   //           <div class="gap-15">
//   //             <h6>Phone</h6>
//   //             <span id="floating-contactsPhoneValue">${this.contact_phone}</span>
//   //           </div>
//   //         </div>
//   //       </div>`;
// }
