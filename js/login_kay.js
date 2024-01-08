let back_btn;
let custom_checkbox_remember_me;
let custom_checkbox_accept_privacy;
let input_name_value;
let input_email_value;
let input_password_value;
let input_confirm_password_value;
let isCheckedBox;

function initLogin() {
  setBackBtnsignup();
  renderLoginElements("Login");
}

function renderLoginElements(bool) {
  docID("inputs-con").textContent = "";
  docID("login-form-button-group").textContent = "";

  if (bool == "Login") {
    input_email = new Divinputimg(
      "inputs-con",
      "imput-img-div",
      "mail",
      "Email",
      "../assets/img/icon-mail.png",
      "input-con-email-input-id",
      "input-con-email-input-div-id"
    );
    input_password = new Divinputimg(
      "inputs-con",
      "imput-img-div",
      "password",
      "Password",
      "../assets/img/icon-lock-closed.png",
      "input-con-password-input-id",
      "input-con-password-input-div-id"
    );
    custom_checkbox_remember_me = new CustomCheckbox(
      "inputs-con",
      "checkbox-remember-me",
      "Remember Me"
    );
    new Button(
      "login-form-button-group",
      "",
      "button font-t5",
      navToSummary,
      "Log in"
    );
    new Button(
      "login-form-button-group",
      "",
      "secondary-button font-t5",
      navToSummary,
      "Guest Log in"
    );
  }

  if (bool === "Sign up") {
    input_name = new Divinputimg(
      "inputs-con",
      "imput-img-div",
      "text",
      "Name",
      "../assets/img/icon-person.png",
      "input-con-name-input-id",
      "input-con-name-input-div-id"
    );
    input_email = new Divinputimg(
      "inputs-con",
      "imput-img-div",
      "mail",
      "Email",
      "../assets/img/icon-mail.png",
      "input-con-email-input-id",
      "input-con-email-input-div-id"
    );
    input_password = new Divinputimg(
      "inputs-con",
      "imput-img-div",
      "password",
      "Password",
      "../assets/img/icon-lock-closed.png",
      "input-con-password-input-id",
      "input-con-password-input-div-id"
    );
    input_confirm_password = new Divinputimg(
      "inputs-con",
      "imput-img-div",
      "password",
      "Confirm Password",
      "../assets/img/icon-lock-closed.png",
      "input-con-confirm-password-input-id",
      "input-con-confirm-password-input-div-id"
    );

    //Inhalt des Labels sind Span und Achor, muss noch geändert werden.
    custom_checkbox_accept_privacy = new CustomCheckbox(
      "inputs-con",
      "checkbox-accept-privacy",
      ""
    ); // normale Checkbox machen
    custom_checkbox_accept_privacy.text =
      new Span(`labelcheckbox-accept-privacy`, "", "", "I accept the") +
      new Anchor(
        `labelcheckbox-accept-privacy`,
        "",
        "",
        "../html/PrivacyPolicy.html",
        " Privacy Policy"
      );
    // custom_checkbox_accept_privacy.div_id = "checkbox-accept-privacy";
    new Button(
      "login-form-button-group",
      "signup-form-btn",
      "button font-t5",
      function () {
        saveInputValues();
      },
      "Sign up"
    );
  }

  docID("login-headline").textContent = bool;
  changeStyle(bool);
}

function setBackBtnsignup() {
  back_btn = new BackBtn("login-item", "signup", () =>
    renderLoginElements("Login")
  );
}

/*** Sign-up ***/

function changeStyle(bool) {
  if (bool === "Sign up") {
    docID("button-group").style.display = "none";
    docID("logo-login").src = "../assets/img/Logo-middle_white.png";
    docID("login-main").style.backgroundColor = "var(--primary)";
    docID("login-link-group").style.color = "var(--white)";
    docID("inputs-con-div").style.justifyContent = "center";
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
  input_name_value = docID("input-con-name-input-id").value;
  input_email_value = docID("input-con-email-input-id").value;
  input_password_value = docID("input-con-password-input-id").value;
  input_confirm_password_value = docID(
    "input-con-confirm-password-input-id"
  ).value;
  isCheckedBox = docID("checkbox-accept-privacy").checked;

  let name_value;
  let email_value;
  let password_value;
  let confirm_password_value;

  if (isCheckSignupForm() && isSamePassword()) {
   
    if(checkMails()){
      name_value = input_name_value;
      email_value = input_email_value;
      password_value = input_password_value;
      confirm_password_value = input_confirm_password_value;
  
      addNewUser();
    }

  }
}

function isCheckSignupForm() {
  return (
    input_name_value != "" &&
    input_email_value != "" &&
    input_password_value != "" &&
    input_confirm_password_value != "" &&
    isCheckedBox
  );
}

function isSamePassword() {
  return input_password_value == input_confirm_password_value;
}

function addNewUser() {
  let newUser = {
    name: input_name_value,
    mail: input_email_value,
    nameTag: createNameTag(input_name_value),
    password: input_password_value,
    token: STORAGE_TOKEN,
  };
  users.push(newUser);
}

let email;
let emails = [];

function checkMails() {
  for (let i = 0; i < users.length; i++) {
    email = users[i].mail;
    emails.push(email);
  }
  if (!emails.includes(input_email_value)) {
    return true;
  } else {
    docID("input-con-email-input-id").value = '';
    alert("Diese Mail ist schon registriert. Loggen Sie sich ein oder nutzen Sie eine andere Mail-Adresse.");
    return false;
  }
}


function loginUser(){
  
}