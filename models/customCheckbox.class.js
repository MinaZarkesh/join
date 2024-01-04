class CustomCheckbox extends World{
  div_id;
  constructor(parent, name, text) {
    super();
    this.div_id = `${parent}-div`;
    new Div(parent, this.div_id, "row");
    new Checkbox(this.div_id, name, "checkbox");
    new Label(this.div_id, name, text);
  }
}
