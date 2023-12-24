class UnsortedListElement extends World{

    input_id;
    li_id;
    constructor(parent, subtask, index) {
        super();
        this.input_id = `sub-list-${index}`;
        this.li_id =`list-${index}`
        this.content= /*html*/`
            <li id="${this.li_id}" class="list">
                <div class="list-element">
                    <input id="${this.input_id}" type="text" value="${subtask}">
                    <img src="../assets/img/blue Pencil.png" onclick="subtaskChange('${this.input_id}', ${index})">
                    <img src="../assets/img/delete.png" onclick="deleteSubtask(${index})">
                </div>
            </li> 
                `  
        this.render(parent, this.content);
    }
}