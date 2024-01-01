class BackBtn {
  imgSrc;
  id;
  onclick;
  constructor(parent, id, onclick) {
    this.id=`${id}-back-btn`;
    this.imgSrc = "../assets/img/icon-arrow-left-line-blue.png";

    new Button(parent, this.id, "signup-back-btn", onclick);
    new Img(this.id, undefined, undefined, this.imgSrc);
  }
}
