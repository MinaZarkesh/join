let singup_inputs;
let login_inputs;
let login_form;
let back_btn;
let custom_checkbox_remember_me;
let custom_checkbox_accept_privacy;
let login_checkbox;

function initLogin() {
//   createInputElements();
  createAllElements();
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
    docID("inputs-con").textContent = "";
    docID("login-form-button-group").textContent = "";
    if(bool == 'Login') {
        input_email = new Divinputimg("inputs-con", "imput-img-div", "mail", "Email", "../assets/img/icon-mail.png", "input-con-email-input-id", "input-con-email-input-div-id");
        input_password = new Divinputimg("inputs-con", "imput-img-div", "password", "Password", "../assets/img/icon-lock-closed.png", "input-con-password-input-id", "input-con-password-input-div-id");
        custom_checkbox_remember_me = new CustomCheckbox(login_form,checkbox_id,checkbox_text);
        new Button("login-form-button-group", "", "button font-t5", navToSummary, 'Log in');
        new Button("login-form-button-group", "", "secondary-button font-t5", navToSummary, 'Guest Log in');
    }
  // bool = "Login";
//   let input_fields;
//   let button;
//   singup_inputs = [input_name, input_email, input_password, input_confirm_password];

  if (bool === "Sign up") {
    // input_fields = singup_inputs;
    checkbox_text = "";
    input_name = new Divinputimg("inputs-con","imput-img-div","text","Name","../assets/img/icon-person.png", "input-con-name-input-id", "input-con-name-input-div-id");
    input_email = new Divinputimg("inputs-con", "imput-img-div", "mail", "Email", "../assets/img/icon-mail.png", "input-con-email-input-id", "input-con-email-input-div-id");
    // input_phone = new Divinputimg("inputs-con", "imput-img-div", "phone", "Phone", "../assets/img/icon-call.svg", "input-con-phone-input-id", "input-con-phone-input-div-id");
    input_password = new Divinputimg("inputs-con", "imput-img-div", "password", "Password", "../assets/img/icon-lock-closed.png", "input-con-password-input-id", "input-con-password-input-div-id");
    input_confirm_password = new Divinputimg("inputs-con", "imput-img-div", "password", "Confirm Password", "../assets/img/icon-lock-closed.png", "input-con-confirm-password-input-id", "input-con-confirm-password-input-div-id");
    new CustomCheckbox(login_form,checkbox_id,checkbox_text); // normale Checkbox machen
    new Span(`label${checkbox_id}`,"","",'accept the');
    new Anchor(`label${checkbox_id}`, "", "", "../html/PrivacyPolicy.html", " Privacy Policy");
    new Button("login-form-button-group","signup-form-btn", "button font-t5", function () {saveInpuValues()}, 'Sign up');
  }

  docID("login-headline").textContent = bool;
//   new CustomCheckbox(login_form,checkbox_id,checkbox_text);
//   docID("login-form-button-group").innerHTML = button;
  changeStyle(bool);
}

function setBackBtnsignup() {
  back_btn = new BackBtn("login-item","signup",() => renderLoginElements("Login"));

  // return BackBtnsignup.content;
}

// function setCheckBox(id, checkbox_text) {
//   let custom_checkbox_login = new CustomCheckbox(login_form, id, checkbox_text);
//   return custom_checkbox_login;
// }

/*** Sign-up ***/

function changeStyle(bool) {
  if (bool === "Sign up") {
    docID("button-group").style.display = "none";
    docID("logo-login").src = "../assets/img/Logo-middle_white.png";
    docID("login-main").style.backgroundColor = "var(--primary)";
    docID("login-link-group").style.color = "var(--white)";
    docID("labelcheckbox-remember-me").style.justifyContent = "center";
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