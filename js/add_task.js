let dropdownContacts = false;
let dropdownCategory = false;
let label_description; 
let div_date;
function initAddtask() {
    init();
    new Divinput('contentbig', 'taskName', "Enter a title", "task-title", "input-field", "input");
    new Requiered('taskName');
    label_description = new Labeldiv('contentbig', "description" , "Description", true);
    new Divinput('contentbig', "description-textarea", "Enter a Description", "desc-input", "textarea", "textarea");
    new Requiered('description-textarea');
    div_date = new Divdate('contentbig','due-date', 'Due date', false);
    new Requiered('due-date');
    new Childdiv('content-con', 'priority', 'Priority', false, 'priority-button');
    new Urgencybtn('priority-button', "Urgent");
    new Urgencybtn('priority-button', "Medium");
    new Urgencybtn('priority-button', "Low");
    new Labeldiv('content-con', 'assigned', 'Assigned to', true);
    new Divinputimg('assigned', 'input-con', 'text', "Choose...", '../assets/img/arrow_drop_down.png');
    new Labeldiv('content-con', 'category', 'Category', false);
    new Divinputimg('category', 'input-con', 'text', "Choose...", '../assets/img/arrow_drop_down.png');
    new Labeldiv('content-con', 'subtask', 'Subtask', true);
    new Divinputimg('subtask', 'input-con', 'text', 'Add new subtask', '../assets/img/+.png');
    new UnsortedList('subtask');
    new UnsortedListElement("subtasks-list", "Das ist eine Subtask");
    new UnsortedListElement("subtasks-list", "Das ist eine zweite Subtask");
}

//Testfunction
function makeRequiered() {
    text = 'This field is required';
    docID('taskName-requiered').innerHTML = text;
}

function activeUrgency(id) {
    btns = ["btn-red", "btn-orange", "btn-green" ];
    btns.forEach(element => {
        if(id == element){
            if (docID(element).classList.value.includes('active')) {
                docID(element).classList.remove('active');    
            } else {
                docID(element).classList.add('active');
            }
        } else {
            docID(element).classList.remove('active')
        }
    });
}

function dropdownMenu(imgid, parent) {
    if(parent == 'assigned') {
        contactDropdown(imgid, parent)
    }
    else {
        catorgyDropdown(imgid, parent);
    }
}

function catorgyDropdown(imgid, parent) {
    if (!dropdownCategory) {
        if (!docID('category-list-parent')) {
            docID(parent).innerHTML += `<div id="category-list-parent"></div>`;   
        }
        docID('category-list-parent').classList.remove('d-none');
        docID('category-list-parent').innerHTML = `<div id="category-list"></div>`;
        categorys.forEach( (e) => {
            docID("category-list").innerHTML += /*html*/`
                <div class="tasks-contacts">${e}</div>
            `
        })
        dropdownCategory = true;
        docID(imgid).src = "../assets/img/arrow_up.png"
    } else {
        dropdownCategory = false;
        dropdownReset('category-list-parent', imgid);
    }
}


function contactDropdown(imgid, parent) {
    if (!dropdownContacts) {
        if (!docID('contact-list-parent')) {
            docID(parent).innerHTML += `<div id="contact-list-parent"></div>`;   
        }
        docID('contact-list-parent').classList.remove('d-none');
        docID('contact-list-parent').innerHTML = `<div id="contact-list"></div>`;
        createContactBox();
        contact_boxes.forEach((e) => {
            docID("contact-list").innerHTML += /*html*/`
                <div class="tasks-contacts">
                    ${e.profile_badge}
                    ${e.contact_name}
                </div>
            `  
      })
      dropdownContacts = true;
      docID(imgid).src = "../assets/img/arrow_up.png"

    } else {
        dropdownReset('contact-list-parent', imgid);
        dropdownContacts = false;
        contact_boxes = [];
    }
}

function dropdownReset(parent, imgid) {
    docID(parent).classList.add('d-none');
    docID(imgid).src = "../assets/img/arrow_drop_down.png";
}

function subtasksFocusIn() {
    if (!docID('img-check')) {
        docID('subtask-div').innerHTML += '<img id="img-check" src="../assets/img/check.png">'
    } else {
        docID('img-check').classList.remove('d-none');
    }
    docID('subtask-img').src = '../assets/img/close.png';
    ;
}

function subtasksFocusOut() {
    if (docID('img-check')) {
        docID('img-check').classList.add('d-none');
    }
    docID('subtask-img').src = '../assets/img/+.png';
}

function submitSubtask() {
    return;
}