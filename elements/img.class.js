class Img extends World {

    constructor(parent, id, classname, src) {
        super();
        this.argument_array = ['parent', 'id', 'classname', 'src'];
        this.classData(arguments);
        this.content = /*html*/`<img id="${this.id}" class="${this.classname}" src="${this.src}">`;
        this.render(parent, this.content);
    }
}