class Urgencybtn{
    urgencyImg = `<img src="../assets/img/urgentImg.png">`;
    mediumImg = `<img src="../assets/img/Medium.png">`;
    lowImg = `<img src="../assets/img/low.png">`;
    urgencyClass = "btn-red";
    mediumClass = "btn-orange";
    lowClass = "btn-green";
    img;
    colorclass;
    id;

    constructor(parent, btnName) {
        this.img = this.which(btnName, this.urgencyImg, this.mediumImg, this.lowImg);
        this.colorclass = this.which(btnName, this.urgencyClass, this.mediumClass, this.lowClass);
        this.id = this.which(btnName, this.urgencyClass, this.mediumClass, this.lowClass);
        docID(parent).innerHTML += /*html*/`
            <button id="${this.id}" onclick="activeUrgency('${this.id}')"  class="urgency-btn ${this.colorclass}">${btnName} ${this.img}</button>
        `
    }

    which(type, urgent, medium, low) {
        if(type == "Urgent") {return urgent};
        if(type == "Medium") {return medium};
        if(type == "Low") {return low};
        }
    }
