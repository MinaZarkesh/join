class UnsortedListElement extends World{

    constructor(parent, subtask) {
        super();
        this.content= /*html*/`<li>${subtask}</li>`
        this.render(parent, this.content);
    }
}