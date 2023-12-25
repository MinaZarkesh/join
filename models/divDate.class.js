class Divdate extends Labeldiv {

    min_date;
    constructor(parent, child, name, optional) {
        super(parent, child, name, optional)
        // min="2000-01-02"
        this.min_date = this.today()
        this.content = `<input type="date" min="${this.min_date}" class="input-field input-blue font-t6" name="" id="date-input">`
        this.render(child, this.content);
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