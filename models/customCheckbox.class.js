class CustomCheckbox extends World{
  parent;
  name;
  text;
  checkbox;
  div_id;
  container;
  label
  constructor(parent, name, text) {
    super();
    // this.checkbox = new Checkbox(`${name}`, "").content;
    this.div_id = `${parent}-div`;
    new Div(parent, this.div_id, "row");
    new Checkbox(this.div_id, name, "checkbox");
    new Label(this.div_id, name, text);
    // this.labelID = `label${name}`;
    // this.content = /*html*/ `
    //   <div class="row">
    //     ${this.checkbox}
    //     <label id=${this.labelID} for=${name}> ${text}</label>
    //   </div>`;

    // this.render(parent, this.content);
  }
}
