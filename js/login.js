let singup_inputs;
let login_inputs;
let login_form;
let back_btn;
let custom_checkbox_remember_me;
let custom_checkbox_accept_privacy;
let login_checkbox;

function initLogin() {
  createInputElements();
  createAllElements();
  renderLoginElements("Login");
}

function createAllElements() {
  login_form = "inputs-con";
  checkbox_text = "Remember Me";
  checkbox_id = "remember-me";
  custom_checkbox_remember_me = new CustomCheckbox(
    login_form,
    checkbox_id,
    checkbox_text
  );
  checkbox_text = /*html*/ `
  I accept the <a href="../html/PrivacyPolicy.html">Privacy Policy</a>
    `;
  checkbox_id = "-accept-privacy";
  custom_checkbox_accept_privacy = new CustomCheckbox(
    login_form,
    checkbox_id,
    checkbox_text
  );

  setBackBtnsignup();
}

function renderLoginElements(bool) {
  // bool = "Login";
  let input_fields;
  let button;
  singup_inputs = [
    input_name,
    input_email,
    input_password,
    input_confirm_password,
  ];
  login_inputs = [input_email, input_password];
  input_fields = login_inputs;
  login_checkbox = custom_checkbox_remember_me;
  button = ` <button onclick="navToSummary()" class="button font-t5 font-t5">Log in</button>
    <button onclick="navToSummary()" class="secondary-button font-t5 font-t5">Guest Log in</button>
    `;

  if (bool === "Sign up") {
    input_fields = singup_inputs;
    login_checkbox = custom_checkbox_accept_privacy;
    button = `<button id="signup-form-btn" onclick='renderLoginElements("Login")' class="button font-t5">Sign up</button>`;
  }

  docID("login-headline").innerHTML = bool;
  docID(login_form).innerHTML = setInputs(input_fields);
  //  changePassword-Style
  login_checkbox.render(login_form, login_checkbox.content)
  // docID(login_form).innerHTML += login_checkbox.content;
  // docID(custom_checkbox_accept_privacy.labelID).innerHTML= checkbox_text;
  //new secondary-button
  docID("login-form-button-group").innerHTML = button;
  changeStyle(bool);
}

function setBackBtnsignup() {
  back_btn = new BackBtn(
    "login-item",
    "signup",
    'renderLoginElements("Login")'
  );

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
    docID("label-accept-privacy").style.justifyContent = "center";
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
