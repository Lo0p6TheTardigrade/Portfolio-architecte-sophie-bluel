// fetch('http://localhost:5678/api/users/login')
//   .then((response) => response.json())
//   .then((users) => {
//     users.forEach((user) => {
//       console.log(user);
//     });
//   });

// Find the list item with the following text fields
let getLoginNavLink = document.getElementsByTagName('*');
console.log(getLoginNavLink);
for (let index = 0; index < getLoginNavLink.length; index++) {
  if (getLoginNavLink[index].textContent === 'login') {
    let login = getLoginNavLink[index];
    console.log(login);
    login.setAttribute('id', 'login');
  }
}
// Select the list item login
const loginNavLink = document.getElementById('login');
const mainTag = document.querySelector('main');
console.log(loginNavLink);

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
  divLabelInputPasswords.appendChild(inputPasswordLoginSectionTitle);
  let inputUserLogin = inputUserLoginSectionTitle.value;
  let inputPasswordLogin = inputPasswordLoginSectionTitle.value;

  // Create the button for the form
  const buttonLoginSectionTitle = document.createElement('span');
  buttonLoginSectionTitle.textContent = 'Se connecter';
  // buttonLoginSectionTitle.type = 'submit';
  buttonLoginSectionTitle.style.cursor = 'pointer';
  formLoginSectionTitle.appendChild(buttonLoginSectionTitle);
  buttonLoginSectionTitle.addEventListener('click', async () => {
    try {
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

      let users = await response.json();
      // Utilisez les données de la réponse ici
      console.log(users.email);
      // If user logged
      if (response.ok) {
        alert('Utilisateur connecté !');
        login.textContent = 'logout';

        // Store all connexion informations in localStorage
        localStorage.setItem('email', inputUserLoginSectionTitle.value);
        localStorage.setItem('password', inputPasswordLoginSectionTitle.value);
      } else {
        // connexion fail sent error message
        alert('Échec de la connexion');
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

  // Missing link clicked

  linkMissingLoginSectionTitle.addEventListener('click', () => {
    document.getElementById('main__section').innerHTML = '';

    h2LoginSectionTitle.textContent = 'Mot de passe oublié';
    mainTag.appendChild(loginSectionTitle);
    loginSectionTitle.appendChild(articleLoginSectionTitle);
    articleLoginSectionTitle.appendChild(h2LoginSectionTitle);
    mainTag.appendChild(formLoginSectionTitle);
    divLabelInputUser.appendChild(labelUserLoginSectionTitle);
    inputUserLoginSectionTitle.setAttribute('id', 'username');
    divLabelInputUser.appendChild(inputUserLoginSectionTitle);
    buttonLoginSectionTitle.textContent = 'Réinitialiser';
    labelPasswordLoginSectionTitle.style.display = 'none';
    inputPasswordLoginSectionTitle.style.display = 'none';
    linkMissingLoginSectionTitle.style.display = 'none';
  });
  // async function fetchData() {
  //   try {
  //     let response = await fetch('http://localhost:5678/api/users/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         email: inputUserLogin,
  //         password: inputPasswordLogin,
  //       }),
  //     });

  //     let users = await response.json();
  //     // Utilisez les données de la réponse ici
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
});
