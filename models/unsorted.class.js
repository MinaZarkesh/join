class UnsortedList extends Elements{

    constructor(parent, id, className) {
        super('ul', id, className);
        this.content = /*html*/`
            <ul id="subtasks-list"></ul>
        `
        this.render(parent, this.content)
    }
}

