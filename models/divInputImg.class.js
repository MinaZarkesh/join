class Divinputimg{
  parent_div;
  child_div;
  div_id;
  div_element;
  div_onclick;
  img_id;
  img_onclick;
  imgId;
  input;
  inputfocus;
  placeholder;
  type;
  // content;
  constructor(parent, className, type, placeholder, imgsrc, id, div_id) {
  //  super();
  //  super('div', id, className)
    this.div_id = div_id;
    // this.div_id = `${parent}-div`;
    this.img_id = `${parent}-img`;
    this.parent_div = parent;
    // this.input_id = `${className}-${type}-input-id`;
    this.input_id = id;
    this.inputForSelect(parent, className);
    this.div_onclick = imgsrc.includes("+.png")
      ? function () {
          submitSubtask("input-con-Add");
        }
      : "";
    this.img_onclick = imgsrc.includes("arrow_drop_down.png")
      ? function () {
          dropdownMenu(this.img_id, parent, parent);
        }
      : "";
    this.img_onclick = imgsrc.includes("+.png")
      ? function () {
          submitSubtask("input-con-Add");
        }
      : this.imgId;
    // this.img_onclick = imgsrc.includes('icon-lock') ? togglePassword() : this.imgId; //die toggle Funktion gibt es noch nicht.
    this.inputfocus = imgsrc.includes("+.png")
      ? `onfocusin='subtasksFocusIn()'`
      : this.imgId;
    this.placeholder = placeholder;
    this.type = type;

    // this.content = /*html*/ `
    //   <div class="${className}" ${this.div_id}>
    //     <input id=${this.input_id} type="${type}" placeholder="${placeholder}" ${this.inputfocus} class="font-t6">
    //     <img ${this.img_id} src="${imgsrc}">
    //   </div>`;

    //  this.render(parent, this.content);

    //Wenn ich das Objekt neu rendere, dann erkennt er es als Object und nicht als html-element
    new Div(parent, this.div_id, className);
    // new Div(this.div_id, , className);
    this.input = new Input(
      this.div_id,
      this.input_id,
      "font-t6",
      this.type,
      this.placeholder
    );
    new Img(this.div_id, this.img_id, "", imgsrc);
   
    this.child_div = docID(parent).innerHTML;
    
    docID(this.div_id).onclick = this.div_onclick;
    docID(this.img_id).onclick = this.img_onclick;
  }

  inputForSelect(parent, className) {
    if (parent == "assigned" || parent == "category") {
      this.input_id = `${className}-${parent}-input-id`;
    }
    if (parent == "subtask") {
      this.input_id = `${className}-Add`;
    }
  }
}
