let dropdownContacts = false;

function initAddtask() {
    init();
    new Divinput('contentbig', 'taskName', "Enter a title", "task-title", "input-field", "input");
    new Requiered('taskName');
    new Labeldiv('contentbig', "description" , "Description", true);
    new Divinput('contentbig', "description-textarea", "Enter a Description", "desc-input", "textarea", "textarea");
    new Requiered('description-textarea');
    new Divdate('contentbig','due-date', 'Due date', false);
    new Requiered('due-date');
    new Childdiv('contentCon', 'priority', 'Priority', false, 'priority-button');
    new Urgencybtn('priority-button', "Urgent");
    new Urgencybtn('priority-button', "Medium");
    new Urgencybtn('priority-button', "Low");
    new Labeldiv('contentCon', 'assigned', 'Assigned to', true);
    new Divinputimg('assigned', 'input-con', 'text', "Choose...", '../assets/img/arrow_drop_down.png');
    // new Selectoption('assigned-select', "selected", "Choose...");
    // new Selectoption('assigned-select', "value='1'", "Bild Vorname Nachname");
    // new Selectoption('assigned-select', "value='2'", "Bild Vorname Nachname");
    // new Selectoption('assigned-select', "value='3'", "Bild Vorname Nachname");
    new Labeldiv('contentCon', 'category', 'Category', false);
    new Divinputimg('category', 'input-con', 'text', "Choose...", '../assets/img/arrow_drop_down.png');
    // new Selectoption('category-select', "selected", "Choose...");
    // new Selectoption('category-select', "value='1'", "Bild Category");
    // new Selectoption('category-select', "value='2'", "Bild Category");
    // new Selectoption('category-select', "value='3'", "Bild Category");
    new Labeldiv('contentCon', 'subtask', 'Subtask', false);
    new Divinputimg('subtask', 'input-con', 'text', 'Add new subtask', '../assets/img/+.png');
    new Subtitles('contentCon', 'die-subtask', 'Dies ist eine subtask');
}

//Testfunction
function makeRequiered() {
    text = 'This field is required';
    docID('taskName-requiered').innerHTML = text;
}

function activeUrgency(id) {
    btns = ["btn-red", "btn-orange", "btn-green" ];
    btns.forEach(element => {
        docID(element).classList.remove('active');
        if(id == element){
            if (docID(element).classList.value.includes('active')) {
                docID(element).classList.remove('active');    
            } else {
                docID(element).classList.add('active');
            }
        }
    });
}

function dropdownMenu(imgid, parent) {
    if(parent == 'assigned') {
        contactDropdown(imgid, parent)
    }
    else {
        console.log('catorgyDropdown()');
    }
}

function catorgyDropdown() {
    return;
}


function contactDropdown(imgid, parent) {
    if (!dropdownContacts) {
        if (!docID('contactList-Parent')) {
            docID(parent).innerHTML += `<div id="contactList-Parent"></div>`;   
        }
        docID('contactList-Parent').classList.remove('d-none');
        docID('contactList-Parent').innerHTML = `<div id="contactList"></div>`;
        createContactBox();
        ContactBoxes.forEach((e) => {
            docID("contactList").innerHTML += /*html*/`
                <div class="tasks-contacts">
                    ${e.profileBadge}
                    ${e.contactName}
                </div>
            `  
      })
      dropdownContacts = true;
      docID(imgid).src = "../assets/img/arrow_up.png"

    } else {
        dropdownContacts = false;
        docID('contactList-Parent').classList.add('d-none');
        ContactBoxes = [];
        docID(imgid).src = "../assets/img/arrow_drop_down.png"
    }
}