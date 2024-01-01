class Divdate extends Elements {

    min_date;
    constructor(parent, id, className) {
        super("input", id, className)
        // min="2000-01-02"
        this.element.min = this.today()
        this.element.type = 'date';

        // this.content = `<input type="date" min="${this.min_date}" class="input-field input-blue font-t6" name="" id="date-input">`
        // this.render(child, this.content);
        docID(parent).appendChild(this.element);
    }

    today(){
        let time = new Date;
        let year = time.getFullYear();
        let month = time.getMonth() + 1;
        let day = time.getDate()
        let today = `${year}-${month}-${day}`; 

        return today
    }
}
