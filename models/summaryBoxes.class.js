class SummaryBox {

    taskCounter;
    img;
    description;
    item
    constructor(id){

        this.item = /*html*/`
             <div class="col">Hier könnte dein Name stehen</div>
        `;
         this.itemRender(id);
        }
    
        itemRender (id) {
            docID(id).innerHTML = this.item;
        }
}