class Urgencybtn extends World{
    urgencyImg = `<img src="../assets/img/urgentImg.png">`;
    mediumImg = `<img src="../assets/img/Medium.png">`;
    lowImg = `<img src="../assets/img/low.png">`;
    urgencyClass = "btn-red";
    mediumClass = "btn-orange";
    lowClass = "btn-green";
    img;
    colorclass;


    constructor(parent, btnName) {
        super();
        this.img = this.which(btnName, this.urgencyImg, this.mediumImg, this.lowImg);
        this.colorclass = this.which(btnName, this.urgencyClass, this.mediumClass, this.lowClass);
        this.id = this.which(btnName, this.urgencyClass, this.mediumClass, this.lowClass);
        this.content= /*html*/`
            <button id="${this.id}" onclick="activeUrgency('${this.id}')"  class="urgency-btn ${this.colorclass}">${btnName} ${this.img}</button>
            `
        this.render(parent, this.content);
    }


    which(type, urgent, medium, low) {
        if(type == "Urgent") {return urgent};
        if(type == "Medium") {return medium};
        if(type == "Low") {return low};
        }
    }
