class Divinputimg {
  constructor(parent, classname, type, placeholder, imgsrc) {
    docID(parent).innerHTML += /*html*/ `
            <div class="${classname}">
                <input type="${type}" class="form-control" placeholder="${placeholder}">
                <img src="${imgsrc}">
            </div>
        `;
  }
}
