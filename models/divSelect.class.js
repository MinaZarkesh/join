class Divselect extends Labeldiv {

    constructor(parent, name, optional, id) {
        super(parent, name, optional)
        docID(name).innerHTML += /*html*/`
            <select id="${id}" class="form-select"></select>
        `
    }
}