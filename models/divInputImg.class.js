class Divinputimg {
  content;
  imgId;
  idname;
  constructor(parent, classname, type, placeholder, imgsrc, ) {
    this.idname = `${classname}-img`;
    this.imgId = imgsrc.includes('arrow_drop_down.png') ? `id='${this.idname}' onclick='dropdownMenu("${this.idname}", "${parent}" )'`: "";
    this.imgId = imgsrc.includes('icon-lock') ? `id='${classname}-img' onclick='togglePassword()'`: this.imgId;
    this.content = /*html*/ `
    <div class="${classname}">
        <input type="${type}" placeholder="${placeholder}">
        <img ${this.imgId} src="${imgsrc}">
    </div>`;
    docID(parent).innerHTML += this.content;
  }
}
