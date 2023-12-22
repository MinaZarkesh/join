class Checkbox extends World{


    constructor(name, classname) {
        super();
        this.content = `<input type="checkbox"  id=${name} class=${classname}></input>`;
    }
}