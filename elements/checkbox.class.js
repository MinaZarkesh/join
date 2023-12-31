class Checkbox extends World{


    constructor(parent, name, classname) {
        super();
        this.argument_array = ['parent', 'name', 'classname'];
        this.classData(arguments);
        this.content = `<input type="checkbox"  id=${name} class='${classname}'></input>`;

        this.render(parent, this.content)
    }
}