class Contact {

profileBadge;
contactItem;
contactName;
contactEmail;
contactPhone;
    constructor(parent, color, nameTag, contactName, contactEmail, contactPhone, id){
        this.contactEmail = contactEmail;
        this.contactName = contactName;
        this.contactPhone = contactPhone;
this.profileBadge = /*html*/ `
<div  class="profile-badge" style="background-color: var(${color});">
      <span id='contactItemNameTag${id}'>${nameTag}</span>
    </div>
`;

docID(parent).innerHtml += this.profileBadge;
this.createContactItem(id);
}

     createContactItem(id) {
        this.contactItem = /*html*/`
            <div id='contactItem${id}' class="contactList-row">
                ${this.profileBadge}
                <div class ="contactList-coloumn">
                    <span id='contactItemName${id}'>${this.contactName}</span>
                    <h6 id='contactItemMail${id}'>${this.contactEmail}</h6>
                </div>
            </div>
        `
    }
}


