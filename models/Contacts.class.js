class Contact {
  profile_badge;
  contact_item;
  contact_item_id;
  contact_name;
  contact_email;
  contact_phone;
  contact_id;
  contact_inner_item;
  contact_inner_item_id;

  constructor(
    parent,
    color,
    nameTag,
    contact_name,
    contact_email,
    contact_phone,
    idx
  ) {
    this.parentArray = contact_boxes; //später in constructor oder gleich ins Backend
    this.contact_email = contact_email;
    this.contact_name = contact_name;
    this.contact_phone = contact_phone;
    this.contact_idx = idx;
    this.contact_inner_item_id;
    this.contact_item_id = `contact-item-${this.contact_idx}`;
    this.profile_badge = /*html*/ `
    <div id='profile_badgeCon-${this.contact_idx}'  class="profile-badge" style="background-color: var(${color});">
      <span id='contact_itemNameTag-${this.contact_idx}'>${nameTag}</span>
    </div>
`;

    docID(parent).innerHtml += this.profile_badge;
    this.createContactItem();
  }

  createContactItem() {
    //contact_inner_item eventuell nicht mehr benutzt
    this.contact_inner_item = /*html*/ `
        ${this.profile_badge}
                <div class ="contact-list-coloumn">
                    <span id='contact_itemName-${this.contact_idx}'>${this.contact_name}</span>
                    <h6 id='contact_itemMail-${this.contact_idx}'>${this.contact_email}</h6>
                </div>
    `;

    this.contact_item = /*html*/ `
      <div onclick='showFloatingContacts(${this.contact_idx})' id='contact-item-${this.contact_idx}' class="contact-list-row">
        ${this.contact_inner_item}
      </div>
        `;
  }

  fillEditContact() {
    docID(input_name.input_id).value = this.contact_name;
    docID(input_email.input_id).value = this.contact_email;
    docID(input_phone.input_id).value = this.contact_phone;
  }

  updateContactItem() {
    for (let i = 0; i < contacts_inputs.length; i++) {
      let element = contacts_inputs[i];
      let input_field = docID(element.input_id);

      if (!input_field.value == "") {
        this.contact_name = docID(input_name.input_id).value;
        this.contact_email = docID(input_email.input_id).value;
        this.contact_phone = docID(input_phone.input_id).value;
      }
    }
    sortContactItems(this.parentArray);
  }

  createFloatingContacts() {
    docID("floating-contacts").innerHTML = /*html*/ `
          <div class="floating-con">
            <div class="floating-headline">
              <div id="floating-profile-badge">
                ${this.profile_badge}
              </div>
              <div class="floating-headline-text-con">
                <h1>${this.contact_name}</h1>
                <div class="floating-headline-links-con">
                  <div class="floating-headline-link">
                    <img src="../assets/img/edit.png" alt="" />
                    <span onclick="createEditContact(${this.contact_idx})" > Edit</span>
                  </div>
                  <div class="floating-headline-link">
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
                <span id="floating-contacts-mail-value" class="color-primary">${this.contact_email}</span>
              </div>
              <div class="gap-15">
                <h6>Phone</h6>
                <span id="floating-contactsPhoneValue">${this.contact_phone}</span>
              </div>
            </div>
          </div>`;
  }

  setActive() {
    let clicked_contact_box_id = "contact-item-" + this.contact_idx;
    let clicked_mail_id = "contact_itemMail-" + this.contact_idx;
    let clicked_name_id = "contact_itemName-" + this.contact_idx;
    console.log(clicked_contact_box_id);
    resetActive();

    //set new attributes
    docID(clicked_contact_box_id).style.background = "var(--primary)";
    docID(clicked_mail_id).style.color = "var(--white)";
    docID(clicked_name_id).style.color = "var(--white)";
  }
}
