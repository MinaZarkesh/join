class Elements{

    element;
    constructor(html_tag, id, className) {
        // super();
        this.element = document.createElement(html_tag);
        this.element.id =  id;
        this.element.className = className;
        // this.html_tag = html_tag;
    }

    depart(e, parent) {
        let color;
        let div_id;
        for (let i = 0; i < e.category.length; i++) {
            color = this.backgroundcolor(e.category[i]);
            div_id = `${parent}-${i}-div`      
            new Div(parent, div_id, "department-card");
            new Span(div_id,"","deparment-span", e.category[i]);
            docID(div_id).style = `background-color: var(${color})`;
        }
    }
    
    backgroundcolor(department) {
        let color;
        categorys.forEach((e) => {
            if(e.name == department) {
                color = e.color;
            }
        });
        return color
    }
}
