class Divinputimg {
  content;
  constructor(parent, classname, type, placeholder, imgsrc) {
    this.content = /*html*/ `
    <div class="${classname}">
        <input type="${type}" class="form-control" placeholder="${placeholder}">
        <img src="${imgsrc}">
    </div>
`;
    docID(parent).innerHTML += this.content;
  }
}
