class Contact {
  profileBadge;
  contactItem;
  contactName;
  contactEmail;
  contactPhone;
  id;

  constructor(parent, color, nameTag, contactName, contactEmail, contactPhone, id) {
    this.contactEmail = contactEmail;
    this.contactName = contactName;
    this.contactPhone = contactPhone;
    this.id = id;
    this.profileBadge = /*html*/ `
    <div id='profileBadgeCon${id}'  class="profile-badge" style="background-color: var(${color});">
      <span id='contactItemNameTag${id}'>${nameTag}</span>
    </div>
`;

    docID(parent).innerHtml += this.profileBadge;
    this.createContactItem(id);
  }

  createContactItem(id) {
    this.contactItem = /*html*/ `
            <div id='contactItem${id}' class="contactList-row">
                ${this.profileBadge}
                <div class ="contactList-coloumn">
                    <span id='contactItemName${id}'>${this.contactName}</span>
                    <h6 id='contactItemMail${id}'>${this.contactEmail}</h6>
                </div>
            </div>
        `;
  }

  createfloatingContacts(){
    docID("floatingContacts").innerHTML = /*html*/ `
          <div class="floatingCon">
            <div class="floatingHeadline">
              <div id="floatingProfileBadge">
                ${this.profileBadge}
              </div>
              <div class="floatingHeadlineTextCon">
                <h1>${this.contactName}</h1>
                <div class="floatingHeadlineLinksCon">
                  <div class="floatingHeadlineLink">
                    <img src="../assets/img/edit.png" alt="" />
                    <span onclick="createEditContact()" > Edit</span>
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
                <span id="floatingContactsMailValue" class="color-primary">${this.contactEmail}</span>
              </div>
              <div class="gap-15">
                <h6>Phone</h6>
                <span id="floatingContactsPhoneValue">${this.contactPhone}</span>
              </div>
            </div>
          </div>`
  }
}