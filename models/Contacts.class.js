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
    id
  ) {
    this.parentArray = contact_boxes; //später in constructor oder gleich ins Backend
    this.contact_email = contact_email;
    this.contact_name = contact_name;
    this.contact_phone = contact_phone;
    this.contact_id = id;
    this.contact_inner_item_id;
    this.contact_item_id = `contact-item-${id}`;
    this.profile_badge = /*html*/ `
    <div id='profile_badgeCon-${id}'  class="profile-badge" style="background-color: var(${color});">
      <span id='contact_itemNameTag-${id}'>${nameTag}</span>
    </div>
`;

    docID(parent).innerHtml += this.profile_badge;
    this.createContactItem();
  }

  createContactItem() {
    //da bin ich gerade dran, die contact_boxes Daten auch zu ändern

    // this.parentArray = contact_boxes;
    //  let idx = this.parentArray.indexOf(this);
    //  if(idx == -1){
    //    console.log("Test createContactItem: ",this.contact_id);
    //  }

    this.contact_inner_item = /*html*/ `
        ${this.profile_badge}
                <div class ="contact-list-coloumn">
                    <span id='contact_itemName-${this.contact_id}'>${this.contact_name}</span>
                    <h6 id='contact_itemMail-${this.contact_id}'>${this.contact_email}</h6>
                </div>
    `;

    this.contact_item = /*html*/ `
      <div onclick="showFloatingContacts(${this.contact_id})" id='contact-item-${this.contact_id}' class="contact-list-row">
        ${this.contact_inner_item}
      </div>
        `;
  }

  fillEditContact() {
    docID(input_name.input_id).value = this.contact_name;
    docID(input_email.input_id).value = this.contact_email;
    docID(input_phone.input_id).value = this.contact_phone;
  }

  //noch nicht fertig
  updateContactItem() {
    let idx = contact_boxes.indexOf(this);
    for (let i = 0; i < contacts_inputs.length; i++) {
      let element = contacts_inputs[i];
      let input_value = docID(element.input_id).value;

      if (!input_value == "") {
        this.contact_name = docID(input_name.input_id).value;
        this.contact_email = docID(input_email.input_id).value;
        this.contact_phone = docID(input_phone.input_id).value;
      }
    }

    this.renderContacts(idx);
  }

  renderContacts(idx) {
    contact_boxes[idx] = this;
    this.createContactItem(idx);
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
                    <span onclick="createEditContact(${this.contact_id})" > Edit</span>
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
}
