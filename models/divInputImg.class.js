class Divinputimg extends World{
  imgId;
  idname;
  childId;
  childname;
  inputfocus;

  constructor(parent, classname, type, placeholder, imgsrc) {
    super();
    this.idname = `${parent}-img`;
    this.input_id = `${classname}-${placeholder}-input-id`;
    this.inputForSelect(parent, classname);
    this.childname = `${parent}-div`;
    this.imgId = imgsrc.includes('arrow_drop_down.png') ? `id='${this.idname}' onclick="dropdownMenu('${this.idname}', '${parent}')"`: "";
    this.imgId = imgsrc.includes('+.png') ? `id='${this.idname}' onclick="submitSubtask()", "${parent}" )'`: this.imgId;
    this.childId = imgsrc.includes('+.png') ? `id='${this.childname}'`:"";
    this.inputfocus =  imgsrc.includes('+.png') ? `onfocusin='subtasksFocusIn()' onfocusout='subtasksFocusOut()'`:this.imgId;
    this.imgId = imgsrc.includes('icon-lock') ? `id='${parent}-img' onclick='togglePassword()'`: this.imgId;
    this.content = /*html*/ `
    <div class="${classname}" ${this.childId}>
        <input id=${this.input_id} type="${type}" placeholder="${placeholder}" ${this.inputfocus} class="font-t6">
        <img ${this.imgId} src="${imgsrc}">
    </div>`;
    this.render(parent, this.content);
  }

  inputForSelect(parent, classname) {
    if (parent == 'assigned' || parent == 'category') {
      this.input_id = `${classname}-${parent}-input-id`
    }
  }
}