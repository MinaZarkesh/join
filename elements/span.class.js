class Span extends World {

    constructor(parent, id, classname, data) {
        super()
        this.argument_array = ['parent', 'id', 'classname', 'data',];
        this.classData(arguments);
        this.content = /*html*/`<span id="${this.id}" class="${this.classname}">${this.data}</span>`
        this.render(parent, this.content);
    }
}