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
    new Div('content-con', 'associate-con', '');
    new Labeldiv('content-con', 'category', 'Category', false);
    new Divinputimg('category', 'input-con', 'text', "Choose...", '../assets/img/arrow_drop_down.png');
    new Div('content-con', 'department-con', '');
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
    let checkbox
    if (!dropdownCategory) {
        if (!docID('category-list-parent')) {
            docID(parent).innerHTML += `<div id="category-list-parent"></div>`;   
        }
        docID('category-list-parent').classList.remove('d-none');
        if (document.querySelectorAll(".tasks-category").length == 0) {
            createCategoryList(checkbox);
        }
        dropdownCategory = true;
        docID(imgid).src = "../assets/img/arrow_up.png";
        docID("department-con").classList.add('d-none');
        docID('input-con-category-input-id').parentElement.classList.add('blue-border');
    } else {
        dropdownCategory = false;
        dropdownReset('category-list-parent', imgid);
        docID("department-con").classList.remove('d-none');
        docID('input-con-category-input-id').parentElement.classList.remove('blue-border')
        departmentRender();
    }

}

function createCategoryList() {
    docID('category-list-parent').innerHTML = `<div id="category-list"></div>`;
    categorys.forEach( (e, index) => {
        checkbox = new Checkbox(`check-${index}`, "checkbox").content;
        docID("category-list").innerHTML += /*html*/`
            <div class="tasks-category">
                <div id='profile_badgeCon-${index}'  class="profile-badge" style="background-color: var(${e.color});">
                    <span id='category_itemNameTag-${index}'>${e.nameTag}</span>
                </div>
                ${e.name}
                ${checkbox}
            </div>
        `
    })
}


function contactDropdown(imgid, parent) {
    let checkbox;
    if (!dropdownContacts) {
        if (!docID('contact-list-parent')) {
            docID(parent).innerHTML += `<div id="contact-list-parent"></div>`;   
        }
        docID('contact-list-parent').classList.remove('d-none');
        docID('contact-list-parent').innerHTML = `<div id="contact-list"></div>`;
        createContactBox("contact-list");
        contact_boxes.forEach((e, index) => {
            checkbox = new Checkbox(`check-${index}`, "checkbox").content;
            docID("contact-list").innerHTML += /*html*/`
                <div class="tasks-contacts">
                    ${e.profile_badge}
                    ${e.contact_name}
                    ${checkbox}
                </div>
            `  
      })
      dropdownContacts = true;
      docID(imgid).src = "../assets/img/arrow_up.png"
      docID("associate-con").classList.add('d-none');
      docID('input-con-assigned-input-id').parentElement.classList.add('blue-border');
    } else {
        dropdownReset('contact-list-parent', imgid);
        dropdownContacts = false;
        contact_boxes = [];
        docID("associate-con").classList.remove('d-none');
        docID('input-con-assigned-input-id').parentElement.classList.remove('blue-border')
        associateRender();
    }
}

function dropdownReset(parent, imgid) {
    docID(parent).classList.add('d-none');
    docID(imgid).src = "../assets/img/arrow_drop_down.png";
}

function subtasksFocusIn() {
    if (!docID('img-check')) {
        docID('subtask-div').innerHTML += '<img id="img-check" src="../assets/img/check.png">';
    } else {
        docID('img-check').classList.remove('d-none');
    }
    docID('subtask-img').src = '../assets/img/close.png';
    docID('subtask-img').onclick = writeMe;
    ;
}

function subtasksFocusOut() {
    if (docID('img-check')) {
        docID('img-check').classList.add('d-none');
    }
    docID('subtask-img').src = '../assets/img/+.png';
    docID('subtask-img').onclick = submitSubtask;
}


function associateRender() {
    docID("associate-con").innerHTML = "";
    let counter = 0;
    let active_array = activeCounter(".tasks-contacts");
    createContactBox("associate-con");
    contact_boxes.forEach((e, index) => {
        if (active_array[index] == true && counter < 8) {
            docID("associate-con").innerHTML += /*html*/`
            ${e.profile_badge}
            `  
        }
        if (active_array[index] == true) {
            counter++;
        }
  })

  if(counter >= 8) {
    let plus_number = counter - 7;
    docID("associate-con").innerHTML += /*html*/`
        <div class="profile-badge" style="background-color: var(--default);">
            <span id='contact_itemNameTag-${plus_number}'>${plus_number}+</span>
        </div>
`
    }
}

function departmentRender() {
    docID("department-con").innerHTML = "";
    let counter = 0;
    let active_array = activeCounter(".tasks-category");
    categorys.forEach((e, index) => {
        if (active_array[index] == true && counter < 8) {
            docID("department-con").innerHTML += /*html*/`
            <div class="profile-badge" style="background-color: var(${e.color});">
                <span id='department_itemNameTag-${index}'>${e.nameTag}</span>
            </div>
            ` 
        }
        if (active_array[index] == true) {
            counter++;
        }
    })

    if(counter >= 8) {
        let plus_number = counter - 7;
        docID("associate-con").innerHTML += /*html*/`
            <div class="profile-badge" style="background-color: var(--default);">
                <span id='contact_itemNameTag-${plus_number}'>${plus_number}+</span>
            </div>
    `
        }
}

function activeCounter(selector) {
    let matches = document.querySelectorAll(selector);
    let array = [];
    for (let i = 0; i < matches.length; i++) {
        array.push(matches[i].children[1].checked);
    }
    return array
}


function submitSubtask() {
    docID('input-con-Add').focus();
    docID('input-con-Add').select();
}

function writeMe(event) {
    event.stopPropagation();
    subtasksFocusOut();
}