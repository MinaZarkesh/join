let inputName = new Divinputimg(
  "signup-name",
  "text",
  "Name",
  "../assets/img/icon-person.png"
);
let inputEmail = new Divinputimg(
  "signup-email",
  "mail",
  "Email",
  "../assets/img/icon-mail.png"
);

let inputPassword = new Divinputimg(
  "signup-password",
  "password",
  "Password",
  "../assets/img/icon-lock-closed.png"
);

let inputConfirmPassword = new Divinputimg(
  "signup-confirmPassword",
  "confirmPassword",
  "Confirm Password",
  "../assets/img/icon-lock-closed.png"
);
let singupInputs = [inputName, inputEmail, inputPassword, inputConfirmPassword];
let loginInputs = [inputEmail, inputPassword];
let loginForm = "LoginInputs";
let BackBtnSignup;

function initLogin() {
  setBackBtnSignup();
  renderLoginElements("Login");
}

function renderLoginElements(bool) {
  // bool = "Login";
  let inputFields;
  let checkboxtext;
  let checkBoxId;
  let button;
  inputFields = loginInputs;
  checkboxtext = "Remember Me";
  checkBoxId = "RememberMe";
  button = ` <button onclick="navToSummary()" class="button">Log in</button>
    <button onclick="navToSummary()" class="secondaryButton">Guest Log in</button>
    `;

  if (bool === "Sign up") {
    inputFields = singupInputs;
    checkboxtext = /*html*/ `
  I accept the <a href="../html/PrivacyPolicy.html">Privacy Policy</a>
    `;
    checkBoxId = "acceptPrivacy";
    button = `<button id="SignupForm-btn" onclick='renderLoginElements("Login")' class="Button">Sign up</button>`;
  }

  docID("LoginHeadline").innerHTML = bool;
  docID(loginForm).innerHTML = setInputs(inputFields);
  //  changePassword-Style
  setCheckBox(checkBoxId, checkboxtext);
  //new SecondaryButton
  docID("LoginFormButtonGroup").innerHTML = button;
  changeStyle(bool);
}

function setBackBtnSignup() {
  BackBtnSignup = new BackBtn(
    "LoginItem",
    "Signup",
    'renderLoginElements("Login")'
  );

  // return BackBtnSignup.content;
}

function setCheckBox(id, checkboxtext) {
  let customCheckboxLogin = new customCheckbox(loginForm, id, checkboxtext);
  return customCheckboxLogin;
}

function setInputs(array) {
  let element = "";
  for (let i = 0; i < array.length; i++) {
    element += array[i].content;
  }
  return element;
}

/*** Sign-up ***/

function changeStyle(bool) {
  if (bool === "Sign up") {
    docID("button-group").style.display = "none";
    docID("Logo-login").src = "../assets/img/Logo-middle_white.png";
    docID("LoginMain").style.backgroundColor = "var(--primary)";
    docID("LoginLinkGroup").style.color = "var(--white)";
    docID("labelacceptPrivacy").style.justifyContent = "center";
    docID("LoginFormButtonGroup").style.justifyContent = "center";
    docID("SignupBack-btn").style.display = "flex";
  } else {
    docID("SignupBack-btn").style.display = "none";
    docID("button-group").style.display = "flex";
    docID("LoginMain").style.backgroundColor = "var(--white)";
    docID("Logo-login").src = "../assets/img/Logo-middle_blue.png";
    docID("labelRememberMe").style.justifyContent = "flex-start";
  }
}

function navToSummary() {
  window.location = "../html/summary.html";
}
