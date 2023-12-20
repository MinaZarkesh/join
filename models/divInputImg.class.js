class Divinputimg {
  content;
  imgId;
  idname;
  childId;
  childname;
  inputfocus;

  constructor(parent, classname, type, placeholder, imgsrc, ) {
    this.idname = `${parent}-img`;
    this.childname = `${parent}-div`;
    this.imgId = imgsrc.includes('arrow_drop_down.png') ? `id='${this.idname}' onclick='dropdownMenu("${this.idname}", "${parent}" )'`: "";
    this.imgId = imgsrc.includes('+.png') ? `id='${this.idname}' onclick="submitSubtask()", "${parent}" )'`: "";
    this.childId = imgsrc.includes('+.png') ? `id='${this.childname}'`:"";
    this.inputfocus =  imgsrc.includes('+.png') ? `onfocusin='subtasksFocusIn()' onfocusout='subtasksFocusOut()'`:"";
    this.imgId = imgsrc.includes('icon-lock') ? `id='${parent}-img' onclick='togglePassword()'`: this.imgId;
    this.content = /*html*/ `
    <div class="${classname}" ${this.childId}>
        <input type="${type}" placeholder="${placeholder}" ${this.inputfocus} class="font-t6">
        <img ${this.imgId} src="${imgsrc}">
    </div>`;
    docID(parent).innerHTML += this.content;
  }
}
