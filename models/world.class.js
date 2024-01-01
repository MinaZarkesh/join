class World {

    content;

    argument_array;
    data;
    id;
    classname;
    onclick;
    src;
    world_parameter = ['parent', 'id', 'classname', 'onclick', 'src', 'data']
    constructor() {
    }

    render(parent, html_element) {
        docID(parent).innerHTML += html_element;
    }

    depart(e, parent) {
        let color;
        let div_id;
        for (let i = 0; i < e.category.length; i++) {
            color = this.backgroundcolor(e.category[i]);
            div_id = `${parent}-${i}-div`      
            new Div(parent, div_id, "department-card");
            new Span(div_id,"","", e.category[i]);
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