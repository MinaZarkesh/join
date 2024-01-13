class Divinputimg {
  div_id;
  div_onclick;
  img_id;
  img_onclick;
  imgId;
  inputfocus;
  placeholder;
  type;
  // content;
  constructor(parent, className, type, placeholder, imgsrc, id, div_id) {
    this.div_id = div_id;
    // this.div_id = `${parent}-div`;
    this.img_id = `${parent}-img`;
    // this.input_id = `${className}-${type}-input-id`;
    this.input_id = id;
    this.inputForSelect(parent, className);

    this.img_onclick = this.div_onclick = imgsrc.includes("+.png") ? function () {submitSubtask("input-con-Add")} : "";
    // this.img_onclick = imgsrc.includes("+.png") ? function () {submitSubtask("input-con-Add")} : "";
    this.img_onclick = imgsrc.includes("arrow_drop_down.png")? function () {dropdownMenu(`${parent}-img`, parent, parent)} : this.img_onclick;
    this.img_onclick = imgsrc.includes("searchLupe.png")? function () {filterTasks()} : this.img_onclick;
    this.inputfocus = imgsrc.includes("+.png") ? `onfocusin='subtasksFocusIn()'` : "";
    this.placeholder = placeholder;
    this.type = type;
    new Div(parent, this.div_id, className);
    new Input(this.div_id, this.input_id, "font-t6 input-field", this.type, this.placeholder);
    new Img(this.div_id, this.img_id, "", imgsrc);

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
