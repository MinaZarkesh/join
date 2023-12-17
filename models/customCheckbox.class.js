class customCheckbox {

  constructor(parent, name, text) {
    docID(parent).innerHTML += /*html*/ `
        <div class="row">
        <input type="checkbox" id=${name}>
              <label id='label${name}' for=${name}> ${text}</label>
            </div>`;
  }

  
}
