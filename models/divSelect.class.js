class Divselect extends Labeldiv {

    
    constructor(parent, child, name, optional, id) {
        super(parent, child, name, optional)
        docID(child).innerHTML += /*html*/`
            <select id="${id}" class="form-select"></select>
        `
    }

}