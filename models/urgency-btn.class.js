class Urgencybtn{
    urgencyImg = `../assets/img/urgentImg.png`;
    mediumImg = `../assets/img/medium.svg`;
    lowImg = `../assets/img/low.png`;
    urgencyClass = "btn-red";
    mediumClass = "btn-orange";
    lowClass = "btn-green";
    img;
    colorclass;


    constructor(parent, btnName) {
        this.img = this.which(btnName, this.urgencyImg, this.mediumImg, this.lowImg);
        this.colorclass = this.which(btnName, this.urgencyClass, this.mediumClass, this.lowClass);
        this.id = this.which(btnName, this.urgencyClass, this.mediumClass, this.lowClass);

        new Button(parent, this.id, `urgency-btn ${this.colorclass}`, function () {activeUrgency(this.id)});
        new Span(this.id, "","urgency-span",btnName);
        new Img(this.id,"","urgency-img",this.img);
    }


    which(type, urgent, medium, low) {
        if(type == "Urgent") {return urgent};
        if(type == "Medium") {return medium};
        if(type == "Low") {return low};
        }
    }
