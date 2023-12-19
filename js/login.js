let inputName;
let inputEmail;
let inputPassword;
let inputConfirmPassword;
let singupInputs;
let loginInputs;
let loginForm;
let BackBtnSignup;
let customCheckboxRememberMe;
let customCheckboxAcceptPrivacy;
let loginCheckbox;
function initLogin() {
  createInputElements();
  createAllElements();
  renderLoginElements("Login");
}


function createAllElements(){
  loginForm = "LoginInputs";
  checkboxtext = "Remember Me";
  checkBoxId = "rememberMe";
  customCheckboxRememberMe = new customCheckbox(loginForm, checkBoxId, checkboxtext);
  checkboxtext = /*html*/ `
  I accept the <a href="../html/PrivacyPolicy.html">Privacy Policy</a>
    `;
    checkBoxId = "acceptPrivacy";
  customCheckboxAcceptPrivacy = new customCheckbox(loginForm, checkBoxId, checkboxtext);
  
  setBackBtnSignup();
}

function renderLoginElements(bool) {
  // bool = "Login";
  let inputFields;
  let button;
  singupInputs = [inputName, inputEmail, inputPassword, inputConfirmPassword];
  loginInputs = [inputEmail, inputPassword];
  inputFields = loginInputs;
  loginCheckbox = customCheckboxRememberMe;
  button = ` <button onclick="navToSummary()" class="button">Log in</button>
    <button onclick="navToSummary()" class="secondaryButton">Guest Log in</button>
    `;

  if (bool === "Sign up") {
    inputFields = singupInputs;
    loginCheckbox = customCheckboxAcceptPrivacy;
    button = `<button id="SignupForm-btn" onclick='renderLoginElements("Login")' class="Button">Sign up</button>`;
  }

  docID("LoginHeadline").innerHTML = bool;
   docID(loginForm).innerHTML= setInputs(inputFields);
  //  changePassword-Style
 docID(loginForm).innerHTML += loginCheckbox.content;
// docID(customCheckboxAcceptPrivacy.labelID).innerHTML= checkboxtext;
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
  }
}

function navToSummary() {
  window.location = "../html/summary.html";
}
