class Checkbox extends World{


    constructor(parent, name, classname) {
        super();
        this.content = `<input type="checkbox"  id=${name} class=${classname}></input>`;

        this.render(parent, this.content)
    }
}