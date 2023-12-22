class CustomCheckbox extends World{
  parent;
  name;
  text;
  checkbox;
  constructor(parent, name, text) {
    super();
    this.checkbox = new Checkbox(`${name}`, "").content;
    this.labelID = `label${name}`;
    this.content = /*html*/ `
      <div class="row">
        ${this.checkbox}
        <label id=${this.labelID} for=${name}> ${text}</label>
      </div>`;
    this.render(parent, this.content);
  }
}
