class Div extends World {

    constructor(parent, id, classname, data) {
        super()
        this.argument_array = ['parent', 'id', 'classname', 'data'];
        this.classData(arguments);
        this.content = /*html*/`<div id="${this.id}" class="${this.classname}">${this.data}</div>`
        this.render(parent, this.content);
    }
}