class Divselect extends Labeldiv {

    constructor(parent, name, optional) {
        super(parent, name, optional)
        docID(name).innerHTML += /*html*/`
            <select id="category-select" class="form-select"></select>
        `
    }
}