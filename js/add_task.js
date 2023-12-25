let dropdownContacts = false;
let dropdownCategory = false;
let label_description; 
let div_date;
let subtask = [];
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
    new Div('subtask', 'subtasks-con', '');
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
    if(!drop_Down) { // oder dropdownContacts
        createDropMenu(list_Parent, parent, tasks_Parent, select, imgid, list_Con, input_id);
    } else {
        dropUp(select, list_Parent, imgid, list_Con, input_id, tasks_Parent);
    }
}

function createDropMenu(list_Parent, parent, tasks_Parent, select, imgid, list_Con, input_id) {
    if (!docID(list_Parent)) {
        docID(parent).innerHTML += `<div id="${list_Parent}"></div>`;
    }
    docID(list_Parent).classList.remove('d-none');
    if (document.querySelectorAll(tasks_Parent).length == 0) {
        select == 'assigned' ? createContactListTask() : createCategoryList();
    }
    if (select == "assigned") {contact_boxes = []}
    select == 'assigned' ? dropdownContacts = true : dropdownCategory = true;  
    docID(imgid).src = "../assets/img/arrow_up.png";
    docID(list_Con).classList.add('d-none'); 
    docID(input_id).parentElement.classList.add('blue-border');
}

function dropUp(select, list_Parent, imgid, list_Con, input_id, tasks_Parent) {
    select == 'assigned' ? dropdownContacts = false : dropdownCategory = false;
    dropdownReset(list_Parent, imgid);
    contact_boxes = (select === "assigned") ? [] : contact_boxes;
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
    let checkbox;
    createContactBox("contact-list-parent");
    contact_boxes.forEach((e, index) => {
        checkbox = new Checkbox(`check-${index}`, "checkbox").content;
        docID("contact-list-parent").innerHTML += /*html*/`
            <div class="tasks-contacts">
                ${e.profile_badge}
                ${e.contact_name}
                ${checkbox}
            </div>
        `  
    })
}
function createCategoryList() {
    categorys.forEach( (e, index) => {
        let checkbox = new Checkbox(`check-${index}`, "checkbox").content;
        docID("category-list-parent").innerHTML += /*html*/`
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

function listRender(list_Con, tasks_Parent) {
    let counter = 0;
    let active_array = activeCounter(tasks_Parent);
    if (list_Con == "associate-con") {createContactBox(list_Con)}
    let items = list_Con === "associate-con" ? contact_boxes : categorys;
    let item_Name = list_Con === "associate-con" ? 'contact_itemNameTag' : 'category_itemNameTag';
    docID(list_Con).innerHTML = "";
    itemsForEach(counter, list_Con, active_array, items)
    if (counter >= 8) {numberBadge(list_Con, item_Name, plus_number, counter)}
}

function itemsForEach(counter, list_Con, active_array, items) {
    items.forEach((e, index) => {
        if (active_array[index] == true && counter < 8) {
            list_Con === "associate-con"? bagdeAssociate(e) : bagdeDepartment(e, index);
        }
        if (active_array[index] == true) {
            counter++;
        }
  })
}

function numberBadge(list_Con, item_Name, plus_number, counter) {
    plus_number = counter - 7;
    docID(list_Con).innerHTML += /*html*/` 
        <div class="profile-badge" style="background-color: var(--default);">
            <span id='${item_Name}-${plus_number}'>${plus_number}+</span>
        </div>`
}

function bagdeAssociate(e) {
    docID("associate-con").innerHTML += /*html*/`
        ${e.profile_badge}
    `  
}

function bagdeDepartment(e, index){
    docID("department-con").innerHTML += /*html*/`
        <div class="profile-badge" style="background-color: var(${e.color});">
            <span id='department_itemNameTag-${index}'>${e.nameTag}</span>
        </div>
    `
}

function activeCounter(selector) {
    let matches = document.querySelectorAll(selector);
    let array = [];
    for (let i = 0; i < matches.length; i++) {
        array.push(matches[i].children[1].checked);
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
        docID('subtask-div').innerHTML += '<img id="img-check" onclick="addSubtask()" src="../assets/img/check.png">';
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
    new UnsortedList('subtasks-con');
    for (let i = 0; i < subtask.length; i++) {
        new UnsortedListElement("subtasks-list", subtask[i], i);
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
    let edit_value = docID(value).value;
    let upadate_id = "edit-subtask";
    docID('subtasks-con').innerHTML = /*html*/`
        <div class="input-con blue-border" id="subtasklist-div">
            <input id="${upadate_id}" type="text" class="font-t6" value="${edit_value}">
            <img id="subtasklist-img" onclick="deleteSubtask(${i})" src="../assets/img/delete.png" class="margin-10">
            <img id="subtasklist-check-img" onclick="updateSubtask(${i},'${upadate_id}')" src="../assets/img/check.png">
        </div>
    `
}

function updateSubtask(i, upadate_id) {
    subtask[i] = docID(upadate_id).value;
    subtaskListRender();
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

