class Button extends World {

    constructor_array;
    constructor(parent, id, classname, onclick, data) {
        super();
        this.argument_array = ['parent', 'id', 'classname', 'onclick', 'data'];
        this.classData(arguments);
        this.content = /*html*/`
            <button id="${this.id}" class="${this.classname}" onclick="${this.onclick}">${this.data}</button>
        `
        // this.content = this.createButtons(parent, id, classname, onclick, data)
        this.render(parent, this.content)
    }
}


