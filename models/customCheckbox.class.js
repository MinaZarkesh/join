class CustomCheckbox {
  parent;
  name;
  text;
  content;
  constructor(parent, name, text) {
    this.parent = parent;
    this.name = name;
    this.text = text;
    this.labelID = `label${name}`;
    this.content = /*html*/ `
    <div class="row">
    <input type="checkbox"  id=${name}>
          <label id=${this.labelID} for=${name}> ${text}</label>
        </div>`;
    docID(parent).innerHTML += this.content;
  }
}
