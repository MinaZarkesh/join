class Requiered extends World{

    constructor(parent) {
        super();
        this.content= `
            <span id="${parent}-requiered" class="requiered font-label">    </span>
        `
        this.render(parent, this.content)
    }
}