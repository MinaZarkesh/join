class UnsortedList extends World{

    constructor(parent) {
        super();
        this.content = /*html*/`
            <ul id="subtasks-list"></ul>
        `
        this.render(parent, this.content)
    }
}