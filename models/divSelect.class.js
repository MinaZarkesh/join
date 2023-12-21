class Divselect extends Labeldiv {


    constructor(parent, child, name, optional, id) {
        super(parent, child, name, optional)
        this.content = /*html*/`
            <select id="${id}" class="form-select"></select>
        `
        this.render(child, this.content);
    }

}