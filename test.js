let countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
let names = ["Wilhelmina Schattschneider", "Anja Schulz", "Benedikt Ziegler", "David Eisenberg", "Eva Fischer", "Emmanuel Mauer", "Marcel Bauer", "Tatjana Wolf", "Sofia Müller", "Anton Mayer"];
function autocomplete(inp, arr) {//the autocomplete function takes two arguments, the text field element and an array of possible autocompleted values:
    let currentFocus;
    inp.addEventListener("input", function (e) {//execute a function when someone writes in the text field:
        let a, b, i, val = this.value;
        closeAllLists(); //close any already open lists of autocompleted values
        if (!val) { return false; }
        currentFocus = -1;
        a = document.createElement("DIV"); //create a DIV element that will contain the items (values):
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a); //append the DIV element as a child of the autocomplete container:

        for (i = 0; i < arr.length; i++) {//for each item in the array...
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) { //check if the item starts with the same letters as the text field value:
                b = document.createElement("DIV"); //create a DIV element for each matching element:
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>"; //make the matching letters bold
                b.innerHTML += arr[i].substr(val.length); //insert a input field that will hold the current array item's value:
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";//execute a function when someone clicks on the item value (DIV element)
                b.addEventListener("click", function (e) {//insert the value for the autocomplete text field:
                    inp.value = this.getElementsByTagName("input")[0].value; //close the list of autocompleted values, (or any other open lists of autocompleted values
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });

    inp.addEventListener("keydown", function (e) { //execute a function presses a key on the keyboard:
        let x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            currentFocus++; //If the arrow DOWN key is pressed, increase the currentFocus variable 
            addActive(x); //and and make the current item more visible:
        } else if (e.keyCode == 38) {
            currentFocus--; //If the arrow UP key is pressed, decrease the currentFocus variable
            addActive(x); //and and make the current item more visible:
        } else if (e.keyCode == 13) {
            e.preventDefault(); //If the ENTER key is pressed, prevent the form from being submitted,
            if (currentFocus > -1) {
                if (x) x[currentFocus].click(); //and simulate a click on the "active" item:
            }
        }
    });


    function addActive(x) {
        if (!x) return false; //a function to classify an item as "active":
        removeActive(x); /*start by removing the "active" class on all items:*/
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active"); //add class "autocomplete-active"
    }


    function removeActive(x) {
        for (let i = 0; i < x.length; i++) { //a function to remove the "active" class from all autocomplete items:
            x[i].classList.remove("autocomplete-active");
        }
    }


    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document, except the one passed as an argument:*/
        let x = document.getElementsByClassName("autocomplete-items");
        for (let i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}


// select = assign || category
function dropdownMenu(imgid, parent, select) {
    let list_Parent = select == 'assign' ? "contact-list-parent" : "category-list-parent";
    let list_Con = select == 'assign' ? "associate-con" : "department-con";
    let input_id = select == 'assign' ? "input-con-assigned-input-id" : "input-con-category-input-id";
    let tasks_Parent = select == 'assign' ? ".tasks-contacts" : ".tasks-category";
    let drop_Down = select == 'assign' ? dropdownContacts : dropdownCategory;
    if(!drop_Down) { 
        createDropMenu(list_Parent, parent, tasks_Parent, select);
    } else {
        dropUp(select, list_Parent, imgid, list_Con, input_id, tasks_Parent);
    }
}

function createDropMenu(list_Parent, parent, tasks_Parent, select) {
    if (!docID(list_Parent)) {
        docID(parent).innerHTML += `<div id="${list_Parent}"></div>`;
    }
    docID(list_Parent).classList.remove('d-none');
    if (document.querySelectorAll(tasks_Parent).length == 0) {
        select = 'assign' ? createContactList() : createCategoryList();
    }
    if (select == "assign") {contact_boxes = []}
    select == 'assign' ? dropdownContacts = true : dropdownCategory = true;  
    docID(imgid).src = "../assets/img/arrow_up.png";
    docID(list_Con).classList.add('d-none'); 
    docID(input_id).parentElement.classList.add('blue-border');
}

function dropUp(select, list_Parent, imgid, list_Con, input_id, tasks_Parent) {
    select == 'assign' ? dropdownContacts = false : dropdownCategory = false;
    dropdownReset(list_Parent, imgid);
    contact_boxes = (select === "assign") ? [] : contact_boxes;
    docID(imgid).src = "../assets/img/arrow_up.png";
    docID(list_Con).classList.add('d-none');
    docID(input_id).parentElement.classList.remove('blue-border');
    listRender(list_Con, tasks_Parent);
}

function dropdownReset(parent, imgid) {
    docID(parent).classList.add('d-none');
    docID(imgid).src = "../assets/img/arrow_drop_down.png";
}

function createContactList() {
    let checkbox;
    createContactBox("contact-list-parent");
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
}

function listRender(list_Con, tasks_Parent) {
    let counter = 0;
    let active_array = activeCounter(tasks_Parent);
    let items = list_Con === "associate-con" ? contact_boxes : category;
    let item_Name = list_Con === "associate-con" ? 'contact_itemNameTag' : 'category_itemNameTag';
    docID(list_Con).innerHTML = "";
    list_Con === "associate-con" ?? createContactBox(list_Con);
    itemsForEach(counter, list_Con, active_array, items)
    counter >= 8 ?? numberBadge(list_Con, item_Name, plus_number, counter)
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
    let plus_number = counter - 7;
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
