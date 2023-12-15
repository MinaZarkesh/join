function initLogin() {
  includeHTML();
}

function showSignup() {

  //anders die Farbe ändern, vielleicht als Klasse in css lösen
  //change Inhalt
  docID("LoginHeadline").innerHTML = "Sign up";
  docID("LoginForm").innerHTML = generateSignupFormHTML();
  docID("LoginFormButtonGroup").innerHTML = generateSignupFormButtonHTML();
  docID("labelRememberMe").innerHTML = "I accept the Privacy Policy";
  docID("LoginItem").innerHTML += generateSignupBackButtonHTML();

   //Change Styling
   docID("button-group").style.display = "none";
   docID("Logo-login").src = "../assets/img/Logo-middle_white.png";
   docID("LoginMain").style.backgroundColor = "var(--primary)";
   docID("LoginLinkGroup").style.color = "var(--white)";
   docID("labelRememberMe").style.justifyContent = "center";
   docID("LoginFormButtonGroup").style.justifyContent = "center";
}

function showLogin() {
  docID("LoginItem").innerHTML = generateLoginHtml();
  docID("button-group").style.display = "flex";
  docID("LoginMain").style.backgroundColor = "var(--white)";
  docID("Logo-login").src = "../assets/img/Logo-middle_blue.png";
  docID("labelRememberMe").style.justifyContent = "flex-start";
}

function generateSignupFormButtonHTML() {
  return /*html*/ `
      <button id="SignupForm-btn" onclick="showLogin()" class="Button">Sign up</button>
    `;
}
function generateSignupFormHTML() {
  return /*html*/ `
      <div class="contentCon">
          <input
            type="text"
            name="Name"
            placeholder="Name"
            id="signup-name"
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            id="signup-email"
          />
          <input
            type="password"
            name="Password"
            placeholder="Password"
            id="signup-password"
          />
          <input
            type="password"
            name="signup-confirmPassword"
            placeholder="Confirm Password"
            id="signup-confirmPassword"
          />
      </div>
            <!-- changePassword-Style-->
      <div class="row">
          <input type="checkbox" name="rememberMe" id="rememberMe" />
          <label id="labelRememberMe" for="rememberMe"> Remember me</label>
      </div>
    `;
}

function generateSignupBackButtonHTML() {
  return /*html*/ `
      <button onclick="showLogin()" id="SignupBack-btn"><img src="../assets/img/icon-arrow-left-line-blue.png" alt=""></button>
    `;
}

function generateLoginHtml() {
  return /*html*/ `
        <h1 id="LoginHeadline">Log in</h1>
          <form  id="LoginForm" action="">
          <div class="contentCon">
            <input
            type="email"
            name="Email"
            placeholder="Email"
            id="login-email"
          />
          <input
            type="password"
            name="Password"
            placeholder="Password"
            id="login-password"
          />
          </div>
            <!-- changePassword-Style-->
            <div class="row">
              <input type="checkbox" name="rememberMe" id="rememberMe" />
              <label id="labelRememberMe" for="rememberMe"> Remember me</label>
            </div>
          </form>
          <div id="LoginFormButtonGroup" class="row">
            <button class="button">Log in</button>
            <button class="secondaryButton">Guest Log in</button>
          </div>
    `;
}
