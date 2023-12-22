class UnsortedListElement extends World{

    constructor(parent, subtask) {
        super();
        this.content= /*html*/`
            <li >
                <div class="list-element">
                    <input type="text" value="${subtask}">
                    <img src="../assets/img/blue Pencil.png">
                    <img src="../assets/img/delete.png"></li>
                </div>
                
                `  
        this.render(parent, this.content);
    }
}