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

    isdata(data) {
        if (data == "" || data == undefined) {
            return ""
        } else {
            return data
        }
    }

    classData(arg) {
        this.argument_array.forEach((e, index) => { 
            if (e == 'parent') {
                this.parent = arg[index] ?arg[index] : "";
            }
            if (e == 'id') {
                this.id = arg[index] ?arg[index] : "";
            }
            if (e == 'classname') {
                this.classname = arg[index] ?arg[index] : "";
            }
            if (e == 'onclick') {
                this.onclick = arg[index] ?arg[index] : "";
            }
            if (e == 'src') {
                this.src = arg[index] ?arg[index] : "";
            }
            if (e == 'data') {
                this.data = arg[index] ?arg[index] : "";
            }
        })
    }

    neuFunc() {
        this.world_parameter.forEach((p) => {
            if (e == p) {
                this.parent = arg[index] ?arg[index] : "";
            }
        } ) 
    }
}