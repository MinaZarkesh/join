let dropdownContacts = false;
let dropdownCategory = false;
let label_description; 
let div_date;
let subtask = [];
let Span_element;
let task_assigned_to = [];
let task_assigned_to_nametag = [];
let task_assigned_to_color = [];
let departments = [];
let associates_ids = [];
function initAddtask() {
    init();
    activeUser(); //set activeUser
    updateUserValues();
    new AddTaskBox("AddTaskMainCon", true)
    new Div("addtaskCon", "button-con", "button-con"); //Div für die Add/Clear Button
    new Button("button-con", "clear-task", "secondary-button", clearTask, "Clear Task");
    new Button("button-con", "add-task-btn", "button", function() {addTask("to-do-con")}, "Create Task");
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
    counter = itemsForEach(counter, list_Con, active_array, items)
    if (counter >= 8) {numberBadge(list_Con, item_Name, counter, 7)}
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
  return counter;
}

function numberBadge(list_Con, item_Name, counter, amount) {
    let plus_number = counter - amount;
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
        matches[i].children[2].checked = false;
    }
}

function addTask(department) {
    let container = !department ? "to-do-con": department;

    let title = docID('task-title').value;
    let date = docID('date-input').value;
    if (!title) {
        docID('taskName-requiered').textContent = 'This field is requiered';
        return
    }
    if (!date) {
        docID('due-date-requiered').textContent = 'This field is requiered';
        return
    }
    let description = docID('desc-input').value;
    let urgency = theUrgency();
    theSelectors('.tasks-contacts');
    theSelectors('.tasks-category');
    let subtasks = subtask;
    let sub_checked = Subtaskschecked();
    let id = getNewId();

    let newTask = {
        container: container,
        category: departments,
        title: title,
        description: description,
        date: date,
        priority: urgency[0],
        priorityImg: urgency[1],
        associates: associates_ids,
        assignedTo: task_assigned_to,
        assignedToNameTag: task_assigned_to_nametag,
        assignedToColor: task_assigned_to_color,
        subtasks: subtasks,
        subtaskschecked: sub_checked,
        id: id
    }
    tasks.push(newTask);
    clearTask();
    task_assigned_to = [];
    task_assigned_to_nametag = [];
    task_assigned_to_color = [];

}

function requiered(title, id) {
    if (!title) {
        docID(id).textContent = 'This field is requiered';
        return false;
    } else {
        return true;
    }
}

function theUrgency() {
    let btns = ["btn-red", "btn-orange", "btn-green" ];
    let output =[];
    btns.forEach((element) => {
        if (docID(element).classList.value.includes('active')) {
            element == "btn-red" ? output.push('Urgent') : "";
            element == "btn-orange" ? output.push('Medium'): "";
            element == "btn-green" ? output.push('Low'): "";
            output.push(docID(element).children[1].src)
            }
        })
    return output;
}

function theSelectors(selector){
    let matches = document.querySelectorAll(selector);
    let work;
    let id = [];
    let idx = [];
    if (selector == '.tasks-contacts') {
        task_assigned_to = [];
        task_assigned_to_nametag = [];
        task_assigned_to_color = [];
        associates_ids= [];
    } else {
        departments = [];
    }


    for (let i = 0; i < matches.length; i++) {
        if (matches[i].children[2].checked) {
            work = matches[i].children[1].id;
            id.push(work.match(/\d+/)[0]);
            if (selector == '.tasks-contacts') {
                task_assigned_to.push(contacts[id[id.length-1]].name);
                task_assigned_to_nametag.push(contacts[id[id.length-1]].nameTag);
                task_assigned_to_color.push(contacts[id[id.length-1]].color);
                associates_ids.push(id[id.length-1]);
            } else {
                departments.push(categorys[id[id.length-1]].name);
            }
            
        }
    }

}

function Subtaskschecked() {
    checked = [];
    subtask.forEach(() => {
        checked.push('unchecked');
    })
    return checked
}

function getNewId() {
    let high = 0;
    tasks.forEach((e) => {
        if(e.id > high) {
            high = e.id;
        }
    })
    return high+1
}