class Divinputimg extends World{
  div_id;
  div_onclick;
  img_id;
  img_onclick;
  imgId;
  inputfocus;

  constructor(parent, className, type, placeholder, imgsrc) {
    super();
    this.div_id = `${parent}-div`;
    this.img_id = `${parent}-img`;
    this.input_id = `${className}-${type}-input-id`;
    this.inputForSelect(parent, className);
    this.div_onclick = imgsrc.includes('+.png') ? function () {submitSubtask('input-con-Add')}: "";

    this.img_onclick = imgsrc.includes('arrow_drop_down.png') ? function () {dropdownMenu(this.img_id, parent, parent)} : "";
    this.img_onclick = imgsrc.includes('+.png') ? function () {submitSubtask('input-con-Add')}: this.imgId;
    // this.img_onclick = imgsrc.includes('icon-lock') ? togglePassword() : this.imgId; //die toggle Funktion gibt es noch nicht.
    this.inputfocus =  imgsrc.includes('+.png') ? `onfocusin='subtasksFocusIn()'`:this.imgId;


    // this.content = /*html*/ `
    // <div class="${className}" ${this.childId}>
    //     <input id=${this.input_id} type="${type}" placeholder="${placeholder}" ${this.inputfocus} class="font-t6">
    //     <img ${this.imgId} src="${imgsrc}">
    // </div>`;
    // this.render(parent, this.content);
    new Div(parent, this.div_id, className);
    new Input(this.div_id, this.input_id, "font-t6", type, placeholder );
    new Img(this.div_id, this.img_id, "", imgsrc)
    docID(this.div_id).onclick = this.div_onclick;
    docID(this.img_id).onclick = this.img_onclick;

  }

  inputForSelect(parent, className) {
    if (parent == 'assigned' || parent == 'category') {
      this.input_id = `${className}-${parent}-input-id`;
    }
    if (parent == 'subtask') {
      this.input_id = `${className}-Add`;
    }
  }
}


