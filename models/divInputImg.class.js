class Divinputimg {
  content;
  constructor(id, type, placeholder, imgsrc) {
    this.content = /*html*/ `
            <div class="divinputimg">
                <input id="${id}" type="${type}" class="form-control" placeholder="${placeholder}">
                <img src="${imgsrc}">
            </div>
        `;
  }
}
