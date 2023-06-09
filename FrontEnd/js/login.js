// Find the list item with the following text fields
let getLoginNavLink = document.getElementsByTagName('*');
// console.log(getLoginNavLink);
for (let index = 0; index < getLoginNavLink.length; index++) {
  if (getLoginNavLink[index].textContent === 'login') {
    let loginNavigation = getLoginNavLink[index];
    // console.log(loginNavigation);
    loginNavigation.setAttribute('id', 'loginNavigation');
  }
}

function cookieSessionCreate() {
  document.cookie = 'session=getTokenResponse; path=/';
}
const h1Tile = document.querySelector('h1');

// Select the list item login
let loginNavLink = document.getElementById('loginNavigation');
const mainTag = document.querySelector('main');
// console.log(loginNavLink);

// Add event listener on login nav link click
loginNavLink.addEventListener('click', () => {
  mainTag.setAttribute('id', 'main__section');
  document.getElementById('main__section').innerHTML = '';

  // Create the section element for the login form with his elements
  const loginSectionTitle = document.createElement('section');
  const articleLoginSectionTitle = document.createElement('article');
  const h2LoginSectionTitle = document.createElement('h2');
  h2LoginSectionTitle.textContent = 'Login';
  mainTag.appendChild(loginSectionTitle);
  loginSectionTitle.appendChild(articleLoginSectionTitle);
  articleLoginSectionTitle.appendChild(h2LoginSectionTitle);

  // Create the form element for the login
  const formLoginSectionTitle = document.createElement('form');
  const divLabelInputPasswords = document.createElement('div');
  const divLabelInputUser = document.createElement('div');
  mainTag.appendChild(formLoginSectionTitle);
  formLoginSectionTitle.appendChild(divLabelInputUser);
  formLoginSectionTitle.appendChild(divLabelInputPasswords);

  // Create the label input elements
  // User field elements
  const labelUserLoginSectionTitle = document.createElement('label');
  labelUserLoginSectionTitle.textContent = 'E-mail';
  labelUserLoginSectionTitle.classList.add('label__text__style');
  labelUserLoginSectionTitle.setAttribute('for', 'username');
  labelUserLoginSectionTitle.setAttribute('id', 'label__id__username');
  divLabelInputUser.appendChild(labelUserLoginSectionTitle);

  const inputUserLoginSectionTitle = document.createElement('input');
  inputUserLoginSectionTitle.type = 'email';
  inputUserLoginSectionTitle.classList.add('input__style');
  inputUserLoginSectionTitle.setAttribute('id', 'username');
  // inputUserLoginSectionTitle.setAttribute('autocomplete');
  divLabelInputUser.appendChild(inputUserLoginSectionTitle);

  // Password field elements
  const labelPasswordLoginSectionTitle = document.createElement('label');
  labelPasswordLoginSectionTitle.textContent = 'Mot de passe';
  labelPasswordLoginSectionTitle.type = 'password';
  labelPasswordLoginSectionTitle.classList.add('label__text__style');
  labelPasswordLoginSectionTitle.setAttribute('for', 'password');
  labelPasswordLoginSectionTitle.setAttribute('id', 'label__id__password');
  divLabelInputPasswords.appendChild(labelPasswordLoginSectionTitle);

  const inputPasswordLoginSectionTitle = document.createElement('input');
  inputPasswordLoginSectionTitle.type = 'password';
  inputPasswordLoginSectionTitle.classList.add('input__style');
  inputPasswordLoginSectionTitle.setAttribute('id', 'password');
  // inputPasswordLoginSectionTitle.setAttribute('autocomplete');
  divLabelInputPasswords.appendChild(inputPasswordLoginSectionTitle);

  // Create the button for the form
  const buttonLoginSectionTitle = document.createElement('span');
  buttonLoginSectionTitle.textContent = 'Se connecter';
  buttonLoginSectionTitle.setAttribute('id', 'login__section__title');
  // buttonLoginSectionTitle.type = 'submit';
  buttonLoginSectionTitle.style.cursor = 'pointer';
  formLoginSectionTitle.appendChild(buttonLoginSectionTitle);

  // Click event for fetch login section
  buttonLoginSectionTitle.addEventListener('click', async () => {
    try {
      let inputUserLogin = inputUserLoginSectionTitle.value;
      let inputPasswordLogin = inputPasswordLoginSectionTitle.value;

      let response = await fetch('http://localhost:5678/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: inputUserLogin,
          password: inputPasswordLogin,
        }),
      });
      console.log(response);

      if (response.ok) {
        let data = await response.json();

        let getTokenResponse = JSON.stringify(data.token);
        sessionStorage.setItem('token', getTokenResponse);

        buttonLogin();

        console.log(getTokenResponse);
        alert('Vous êtes connecté !');

        if (buttonLoginSectionTitle) {
          sessionStorage.setItem('email', inputUserLogin);
          sessionStorage.setItem('password', inputPasswordLogin);

          window.location.href = '/FrontEnd/';
          cookieSessionCreate();
          // if (document.cookie === 'session') {
          //   const categoryHidden = document.querySelector('.category');
          //   console.log(categoryHidden);
          //   categoryHidden.classList.add('displayElementFalse');
          // }
        }
      } else {
        alert('Identifiant ou mot de passe incorrect.');
      }
    } catch (error) {
      console.error(error);
    }
  });

  // Create the missing link
  const linkMissingLoginSectionTitle = document.createElement('a');
  linkMissingLoginSectionTitle.textContent = 'Mot de passe oublié';
  linkMissingLoginSectionTitle.style.cursor = 'pointer';
  formLoginSectionTitle.appendChild(linkMissingLoginSectionTitle);
});
