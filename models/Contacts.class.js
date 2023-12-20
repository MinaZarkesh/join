class Contact {
  profile_badge;
  contact_item;
  contact_name;
  contact_email;
  contact_phone;
  contact_id;

  constructor(parent, color, nameTag, contact_name, contact_email, contact_phone, id) {
    this.contact_email = contact_email;
    this.contact_name = contact_name;
    this.contact_phone = contact_phone;
    this.contact_id = id;
    this.profile_badge = /*html*/ `
    <div id='profile_badgeCon-${id}'  class="profile-badge" style="background-color: var(${color});">
      <span id='contact_itemNameTag-${id}'>${nameTag}</span>
    </div>
`;

    docID(parent).innerHtml += this.profile_badge;
    this.createContactItem(id);
  }

  createContactItem(id) {
    this.contact_item = /*html*/ `
            <div onclick="showFloatingContacts(${this.contact_id})" id='contact-item-${id}' class="contact-list-row">
                ${this.profile_badge}
                <div class ="contact-list-coloumn">
                    <span id='contact_itemName-${id}'>${this.contact_name}</span>
                    <h6 id='contact_itemMail-${id}'>${this.contact_email}</h6>
                </div>
            </div>
        `;
  }

  createFloatingContacts(){
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
          </div>`
  }
}