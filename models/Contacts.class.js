class Contact {
  //parameters of Constructor
  parent;
  contact_color;
  contact_name_tag;
  contact_name;
  contact_email;
  contact_phone;
  contact_idx;
  //variables for renderContactItem
  contact_item_id;
  profile_badge;
  contact_item;
  contact_inner_item;
  contact_name_tag;
  parent;
  constructor(parent, color, nameTag, contact_name, contact_email, contact_phone, idx) {
    this.parentArray = contact_boxes; //später in constructor oder gleich ins Backend
    this.contact_email = contact_email;
    this.contact_phone = contact_phone;
    this.contact_idx = idx;
    this.contact_item_id = `contact-item-${this.contact_idx}`;
    this.parentArray = contact_boxes; //später in constructor oder gleich ins Backend
    this.parent = parent;
    this.renderContactItem();
  }

  renderContactItem() {
    this.contact_item_id = `contact-item-${this.contact_idx}`;
    this.profile_badge = /*html*/ `
    <div id='profile_badgeCon-${this.contact_idx}'  class="profile-badge" style="background-color: var(${this.contact_color});">
      <span id='contact_itemNameTag-${this.contact_idx}'>${this.contact_name_tag}</span>
    </div>
`;
    docID(this.parent).innerHtml += this.profile_badge;

    this.contact_inner_item = /*html*/ `
        ${this.profile_badge}
                <div class ="contact-list-coloumn">
                    <span id='contact_itemName-${this.contact_idx}'>${this.contact_name}</span>
                    <h6 id='contact_itemMail-${this.contact_idx}'>${this.contact_email}</h6>
                </div>
    `;

    this.contact_item = /*html*/ `
      <div onclick='renderFloatingContacts(${this.contact_idx})' id='contact-item-${this.contact_idx}' class="contact-list-row">
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
    if (
      input_name.value != "" &&
      input_email.value != "" &&
      !input_phone.value != ""
    ) {
      this.contact_name = docID(input_name.input_id).value;
      this.contact_email = docID(input_email.input_id).value;
      this.contact_phone = docID(input_phone.input_id).value;
    }
    sortContactItems(this.parentArray);
  }

  setActive() {
    resetActive();
    //set new attributes
    docID(this.contact_item_id).classList.add("active-contact");
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
                  <div onclick="deleteContact(${this.contact_idx})" class="floating-headline-link">
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
}
