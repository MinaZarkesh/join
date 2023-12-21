class CustomCheckbox extends World{
  parent;
  name;
  text;
  constructor(parent, name, text) {
    super();
    // this.parent = parent;
    // this.name = name;
    // this.text = text;
    this.labelID = `label${name}`;
    this.content = /*html*/ `
    <div class="row">
        <input type="checkbox"  id=${name}>
          <label id=${this.labelID} for=${name}> ${text}</label>
        </div>`;
    this.render(parent, this.content);
  }
}
