class BackBtn {
  imgSrc;
  id;
  onclick;
  constructor(parent, id, onclick) {
    this.parent = parent;
    this.id=`${id}Back-btn`;
    this.onclick = onclick;
    this.imgSrc = "../assets/img/icon-arrow-left-line-blue.png";
    docID(parent).innerHTML += /*html*/ `
        <button class="Back-btn" onclick=${onclick} id=${this.id}><img src='${this.imgSrc}' alt=""></button>
        `;
  }
}
