class Divdate extends Labeldiv {

    constructor(parent, child, name, optional) {
        super(parent, child, name, optional)
        this.content = `<input type="date" class="input-field input-blue font-t6" name="" id="">`
        this.render(child, this.content);
    }
}