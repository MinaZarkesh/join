let inputName;
let inputEmail;
let inputPassword;
let inputConfirmPassword;
let singupInputs;
let loginInputs;
let loginForm;
let BackBtnSignup;


function initLogin() {
  inputName = new Divinputimg(
    "LoginInputs",
    "inputimgdiv",
    "text",
    "Name",
    "../assets/img/icon-person.png"
  );
  inputEmail = new Divinputimg(
    "LoginInputs",
    "inputimgdiv",
    "mail",
    "Email",
    "../assets/img/icon-mail.png"
  );
  
  inputPassword = new Divinputimg(
    "LoginInputs",
    "inputimgdiv",
    "password",
    "Password",
    "../assets/img/icon-lock-closed.png"
  );
  
  inputConfirmPassword = new Divinputimg(
    "LoginInputs",
    "inputimgdiv",
    "confirmPassword",
    "Confirm Password",
    "../assets/img/icon-lock-closed.png"
  );
  singupInputs = [inputName, inputEmail, inputPassword, inputConfirmPassword];
  loginInputs = [inputEmail, inputPassword];
  loginForm = "LoginInputs";
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
  setInputs(inputFields);
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
