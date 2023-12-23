class UnsortedListElement extends World{

    input_id;
    constructor(parent, subtask, ) {
        super();
        // this.input_id = `sub-list-${index}`;
        this.content= /*html*/`
            <li >
                <div class="list-element">
                    <input id="${this.input_id}" type="text" value="${subtask}">
                    <img src="../assets/img/blue Pencil.png" onclick="editSubtask()">
                    <img src="../assets/img/delete.png" onclick="deleteSubtask()">
                </div>
            </li> 
                `  
        this.render(parent, this.content);
    }
}