let singup_inputs;
let login_inputs;
let login_form;
let back_btn;
let custom_checkbox_remember_me;
let custom_checkbox_accept_privacy;
let login_checkbox;

function initLogin() {
  createInputElements();
  // createAllElements();
  renderLoginElements("Login");
}

function createAllElements() {
  login_form = "inputs-con";
  checkbox_text = "Remember Me";
  checkbox_id = "checkbox-remember-me";
  // custom_checkbox_remember_me = new CustomCheckbox(login_form,checkbox_id,checkbox_text);
  // custom_checkbox_accept_privacy = new CustomCheckbox(login_form,checkbox_id, checkbox_text);
  setBackBtnsignup();
}

function renderLoginElements(bool) {
  // bool = "Login";
  let input_fields;
  let button;
  singup_inputs = [input_name, input_email, input_password, input_confirm_password];
  login_inputs = [input_email, input_password];
  input_fields = login_inputs;
  login_checkbox = custom_checkbox_remember_me;
  button = ` <button onclick="navToSummary()" class="button font-t5 font-t5">Log in</button>
    <button onclick="navToSummary()" class="secondary-button font-t5 font-t5">Guest Log in</button>
    `;

  if (bool === "Sign up") {
    input_fields = singup_inputs;
    login_checkbox = custom_checkbox_accept_privacy;
    checkbox_id = "checkbox-accept-privacy";
    checkbox_text = /*html*/ `accept the <a href="../html/PrivacyPolicy.html">Privacy Policy</a>`;
    button = `<button id="signup-form-btn" onclick="saveInputValues()" class="button font-t5">Sign up</button>`;
  }

  docID("login-headline").innerHTML = bool;
  docID(login_form).innerHTML = setInputs(input_fields);
  new CustomCheckbox(login_form,checkbox_id,checkbox_text);
  //  changePassword-Style
  // login_checkbox.render(login_form, login_checkbox.content);
  // docID(login_form).innerHTML += login_checkbox.content;
  // docID(custom_checkbox_accept_privacy.labelID).innerHTML= checkbox_text;
  //new secondary-button
  docID("login-form-button-group").innerHTML = button;
  changeStyle(bool);
}

function setBackBtnsignup() {
  back_btn = new BackBtn("login-item","signup",() => renderLoginElements("Login"));

  // return BackBtnsignup.content;
}

function setCheckBox(id, checkbox_text) {
  let custom_checkbox_login = new CustomCheckbox(login_form, id, checkbox_text);
  return custom_checkbox_login;
}

/*** Sign-up ***/

function changeStyle(bool) {
  if (bool === "Sign up") {
    docID("button-group").style.display = "none";
    docID("logo-login").src = "../assets/img/Logo-middle_white.png";
    docID("login-main").style.backgroundColor = "var(--primary)";
    docID("login-link-group").style.color = "var(--white)";
    docID("labelcheckbox-accept-privacy").style.justifyContent = "center";
    docID("login-form-button-group").style.justifyContent = "center";
    docID("signup-back-btn").style.display = "flex";
  } else {
    docID("signup-back-btn").style.display = "none";
    docID("button-group").style.display = "flex";
    docID("login-main").style.backgroundColor = "var(--white)";
    docID("logo-login").src = "../assets/img/Logo-middle_blue.png";
  }
}

function navToSummary() {
  window.location = "../html/summary.html";
}

function saveInputValues() {
  let input_name_value = docID("imput-img-div-text-input-id").value;
  let input_email_value = docID("imput-img-div-mail-input-id").value;
  let input_password_value = docID("imput-img-div-password-input-id").value;
  let input_confirm_password_value = docID(
    "imput-img-div-confirmPassword-input-id"
  ).value;
  let isCheckedBox;
  isCheckedBox = docID("checkbox-accept-privacy").checked;
  let name_value;
  let email_value;
  let password_value;
  let confirm_password_value;

  if (isCheckSignupForm()) {

    name_value = input_name_value;
    email_value = input_email_value;
    password_value = input_password_value;
    confirm_password_value = input_confirm_password_value;
    console.log("Login: ",name_value,email_value,password_value, confirm_password_value
    );
  }

  // renderLoginElements('Login')
}

function isCheckSignupForm(){
return   (input_name_value != "" &&
input_email_value != "" &&
input_password_value != "" &&
input_confirm_password_value != "" && isCheckedBox)
}