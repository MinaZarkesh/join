class BackBtn {
  imgSrc;
  constructor(parent, id, onclick) {
    this.onclick = onclick;

    this.imgSrc = "../assets/img/icon-arrow-left-line-blue.png";
    docID(parent).innerHTML += /*html*/ `
        <button class="Back-btn" onclick=${onclick} id='${id}Back-btn'><img src='${this.imgSrc}' alt=""></button>
        
        `;
  }
}
