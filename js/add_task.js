let dropdownContacts = false;
let dropdownCategory = false;
let label_description; 
let div_date;
let subtask = [];
let Span_element;
function initAddtask() {
    init();
    new Divinput('contentbig', 'taskName', "Enter a title", "task-title", "input-field", "input");
    new Span('taskName','taskName-requiered', "requiered font-label");
    label_description = new Labeldiv('contentbig', "description" , "Description", true);
    new Divinput('contentbig', "description-textarea", "Enter a Description", "desc-input", "textarea", "textarea");
    new Span('description-textarea', 'description-textarea-requiered', "requiered font-label");
    new Labeldiv('contentbig','due-date', 'Due date', false);
    new Divdate('due-date', 'date-input' , 'input-field input-blue font-t6')
    // div_date = new Divdate('contentbig','due-date', 'Due date', false);
    Span_element = new Span('due-date', 'due-date-requiered', "requiered font-label");
    new Labeldiv('content-con', 'priority', 'Priority', false);
    new Div('priority', 'priority-button')
    new Urgencybtn('priority-button', "Urgent");
    new Urgencybtn('priority-button', "Medium");
    new Urgencybtn('priority-button', "Low");
    new Labeldiv('content-con', 'assigned', 'Assigned to', true);
    new Divinputimg('assigned', 'input-con', 'text', "Choose...", '../assets/img/arrow_drop_down.png', 'input-con-text-input-id', 'assigned-div'); //+ id + div_id
    docID('input-con-assigned-input-id').onclick = function () {dropdownMenu(`assigned-img`, 'assigned', 'assigned')};
    new Div('content-con', 'associate-con', '');
    new Labeldiv('content-con', 'category', 'Category', false);
    new Divinputimg('category', 'input-con', 'text', "Choose...", '../assets/img/arrow_drop_down.png',  'input-con-text-input-id', 'category-div'); //+ id + div_id
    docID('input-con-category-input-id').onclick = function () {dropdownMenu(`category-img`, 'category', 'category')};
    new Div('content-con', 'department-con', '');
    new Labeldiv('content-con', 'subtask', 'Subtask', true);
    new Divinputimg('subtask', 'input-con', 'text', 'Add new subtask', '../assets/img/+.png',  'input-con-text-input-id', 'subtask-div'); //+ id + div_id
    new Div('subtask', 'subtasks-con', '');
    setNavBarActive("add_task-link");
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

function dropdownMenu(imgid, parent, select) {
    let list_Parent = select == 'assigned' ? "contact-list-parent" : "category-list-parent";
    let list_Con = select == 'assigned' ? "associate-con" : "department-con";
    let input_id = select == 'assigned' ? "input-con-assigned-input-id" : "input-con-category-input-id";
    let tasks_Parent = select == 'assigned' ? ".tasks-contacts" : ".tasks-category";
    let drop_Down = select == 'assigned' ? dropdownContacts : dropdownCategory;
    if(!drop_Down) {
        createDropMenu(list_Parent, parent, tasks_Parent, select, imgid, list_Con, input_id);
    } else {
        dropUp(select, list_Parent, imgid, list_Con, input_id, tasks_Parent);
    }
}

function createDropMenu(list_parent, parent, tasks_parent, select, imgid, list_Con, input_id) {
    if (!docID(list_parent)) {
        // docID(parent).innerHTML += `<div id="${list_parent}"></div>`;
        new Div(parent, list_parent);
    }
    docID(list_parent).classList.remove('d-none');
    if (document.querySelectorAll(tasks_parent).length == 0) {
        select == 'assigned' ? createContactListTask() : createCategoryList();
    }
    select == 'assigned' ? dropdownContacts = true : dropdownCategory = true;  
    docID(imgid).src = "../assets/img/arrow_up.png";
    docID(list_Con).classList.add('d-none'); 
    docID(input_id).parentElement.classList.add('blue-border');
}

function dropUp(select, list_Parent, imgid, list_Con, input_id, tasks_Parent) {
    select == 'assigned' ? dropdownContacts = false : dropdownCategory = false;
    dropdownReset(list_Parent, imgid);
    docID(imgid).src = "../assets/img/arrow_drop_down.png";
    docID(list_Con).classList.remove('d-none');
    docID(input_id).parentElement.classList.remove('blue-border');
    listRender(list_Con, tasks_Parent);

}

function dropdownReset(parent, imgid) {
    if (docID(parent)) {
        docID(parent).classList.add('d-none');
    }
    docID(imgid).src = "../assets/img/arrow_drop_down.png";
}

function createContactListTask() {
    createContactBox("contact-list-parent");
    let div_id;
    contacts.forEach((e) => {
        div_id = `contact-list-parent-div-${e.idx}`;
        new Div("contact-list-parent", div_id, "tasks-contacts");
        new ProfilBagde(div_id, e.idx, e.color, e.nameTag);
        new Span(div_id, `span-${e.idx}`,"", e.name)
        new Checkbox(div_id,`check-${e.idx}`, "checkbox");
        // docID("contact-list-parent").innerHTML += /*html*/`
        //     <div class="tasks-contacts">
        //         ${e.profile_badge}
        //         ${e.contact_name}
        //     </div>
        // `
    })
}
function createCategoryList() {
    let div_id;
    let filtered_Contact = filterList();
    filtered_Contact.forEach( (e) => {
        div_id = `tasks-category-${e.idx}`;
        new Div("category-list-parent",div_id, "tasks-category");
        new ProfilBagde(div_id, e.idx, e.color, e.nameTag);
        new Span(div_id, `category-span-${e.idx}`,"", e.name)
        new Checkbox(div_id, `category-check-${e.idx}`, "checkbox");
        // docID("category-list-parent").innerHTML += /*html*/`
        //     <div id="tasks-category-${index}" class="tasks-category">
        //         <div id='profile_badgeCon-${index}'  class="profile-badge" style="background-color: var(${e.color});">
        //             <span id='category_itemNameTag-${index}'>${e.nameTag}</span>
        //         </div>
        //         ${e.name}
        //     </div>
        // `
    })
}

function filterList() {
    let output = [];
    let input_value = docID('input-con-assigned-input-id').value.toLowerCase();
    categorys.forEach((e) => {
        let check = e.name.toLowerCase();
        if(check.includes(input_value)){
            output.push(e);
        }
    })
    return output;
}


function listRender(list_Con, tasks_Parent) {
    let counter = 0;
    let active_array = activeCounter(tasks_Parent);
    if (list_Con == "associate-con") {createContactBox(list_Con)}
    let items = list_Con === "associate-con" ? contacts : categorys;
    let item_Name = list_Con === "associate-con" ? 'contact_itemNameTag' : 'category_itemNameTag';
    docID(list_Con).innerHTML = "";
    itemsForEach(counter, list_Con, active_array, items)
    if (counter >= 8) {numberBadge(list_Con, item_Name, plus_number, counter)}
}

function itemsForEach(counter, list_Con, active_array, items) {
    items.forEach((e, index) => {
        if (active_array[index] == true && counter < 8) {
            if (list_Con === "associate-con") {
                new ProfilBagde("associate-con", e.idx, e.color, e.nameTag);
            } else {
                new ProfilBagde("department-con", e.idx, e.color, e.nameTag);
            }
        }
        if (active_array[index] == true) {
            counter++;
        }
  })
}

function numberBadge(list_Con, item_Name, plus_number, counter) {
    plus_number = counter - 7;
    new ProfilBagde(list_Con, `${item_Name}-${plus_number}`, `--default`, `${plus_number}+`)
}

function activeCounter(selector) {
    let matches = document.querySelectorAll(selector);
    let array = [];
    for (let i = 0; i < matches.length; i++) {
        array.push(matches[i].children[2].checked);
    }
    return array
}

function submitHelpFunction() {
    let id = 'input-con-Add';
    submitSubtask(id);
}

function submitSubtask(id) {
    docID(id).focus();
    docID(id).select();
    subtasksFocusIn();
}

function writeMe(event) {
    event.stopPropagation();
    subtasksFocusOut();
}

function subtasksFocusIn() {
    if (!docID('img-check')) {
        new Img('subtask-div', 'img-check',"", "../assets/img/check.png");
        docID('img-check').onclick = addSubtask;
    } else {
        docID('img-check').classList.remove('d-none');
    }
    docID('subtask-img').src = '../assets/img/close.png';
    docID('subtask-img').onclick = writeMe;
    docID('input-con-Add').addEventListener("keydown", (e) => {
        if(e.key == 'Enter') {
            addSubtask();
        }
    })
    docID('subtask-div').classList.add('blue-border');
    docID('subtask-img').classList.add('margin-10');
}

function subtasksFocusOut() {
    if (docID('img-check')) {
        docID('img-check').classList.add('d-none');
    }
    docID('subtask-img').src = '../assets/img/+.png';
    docID('subtask-img').onclick = submitHelpFunction;
    docID('subtask-div').classList.remove('blue-border');
    docID('subtask-img').classList.remove('margin-10');
}

function addSubtask() {
    if (docID('input-con-Add').value != "") {
        subtask.push(docID('input-con-Add').value)
        docID('input-con-Add').value = "";
        docID('input-con-Add').blur(); //nimmt den Focus von der Input
        subtasksFocusOut();
        subtaskListRender();
    } else {
        //hinweisschild
    }
}

function subtaskListRender() {
    docID("subtasks-con").innerHTML = "";
    new Elements("ul",'subtasks-con',"subtasks-list");
    for (let i = 0; i < subtask.length; i++) {
        new UnsortedListElement("subtasks-con", subtask[i], i);
    }
}

function editSubtask(id){
    submitSubtask(id);
}

function deleteSubtask(i) {
    subtask.splice(i, 1);
    subtaskListRender();
    return // element slicen und Liste neu rendern
}

function subtaskChange(value, i) {
    let img_id_1 = value.replace("sub-", "") + `-img-1`;
    let img_id_2 = value.replace("sub-", "") + `-img-2`;
    docID(value).focus();
    docID(img_id_1).src = "../assets/img/delete.png";
    docID(img_id_1).onclick = function () {deleteSubtask(i)};
    docID(img_id_2).src = "../assets/img/check.png";
    docID(img_id_2).classList.remove('sub-change-img');
    docID(img_id_2).classList.add('sub-change-img');
    docID(img_id_2).onclick = function () {updateSubtask(i,`${value}`)};
    docID(value).addEventListener("keydown", (e) => {
        if(e.key == 'Enter') {
            updateSubtask(i,`${value}`);
        }
    })
}

function updateSubtask(i, upadate_id) {
    if(!docID(upadate_id).value) {
        deleteSubtask(i);
    } else {
        subtask[i] = docID(upadate_id).value;
        subtaskListRender();
    }
}

function clearTask() {
    docID('task-title').value = "";
    docID('desc-input').value = "";
    docID('date-input').value = "";
    activeUrgency('all');
    dropdownContacts = true;
    dropdownCategory = true;
    dropdownMenu('assigned-img', 'assigned', 'assigned');
    dropdownMenu('category-img', 'category', 'category');
    uncountCounter(".tasks-contacts");
    uncountCounter(".tasks-category");
    listRender('associate-con', ".tasks-contacts");
    listRender('department-con', ".tasks-category");
    docID('input-con-Add').value = "";
    subtask = [];
    subtaskListRender();
}

function uncountCounter(selector) {
    let matches = document.querySelectorAll(selector);
    for (let i = 0; i < matches.length; i++) {
        matches[i].children[1].checked = false;
    }
}

function addTask() {
    let title = docID('task-title').value;
    let description = docID('desc-input').value;
    let date = docID('date-input').value;
    let urgency = theUrgency();
    let associates = theSelectors('.tasks-contacts');
    let departments = theSelectors('.tasks-contacts');
    let subtasks = subtask;
    let sub_checked = Subtaskschecked();

    let newTask = {
        "title": title,
        "description": description,
        "date": date,
        "urgency": urgency,
        "associates": associates,
        "departments": departments,
        "subtasks": subtasks,
        "sub_checked": sub_checked 
    }
    clearTask();
}

function theUrgency() {
    let btns = ["btn-red", "btn-orange", "btn-green" ];
    let output;
    btns.forEach((element) => {
        if (docID(element).classList.value.includes('active')) {
            output = element;
        }
    })
    return output;
}

function theSelectors(selector){
    let matches = document.querySelectorAll(selector);
    let work;
    let id = [];
    let idx = [];
    for (let i = 0; i < matches.length; i++) {
        if (matches[i].children[1].checked) {
            work = matches[i].children[1].id;
            id.push(work.match(/\d+/)[0]);
        }
    }
    if (selector == '.tasks-contacts') {
        if (!id == []) {createContactBox("associate-con")};
            contact_boxes.forEach((e, index) => {
                if(id.includes(`${index}`)) {
                    contact_idx.push(e.contact_idx)
            }
        })
    } else {
        idx = id;
    }
    return idx
}

function Subtaskschecked() {
    checked = [];
    subtask.forEach(() => {
        checked.push('unchecked');
    })
}

