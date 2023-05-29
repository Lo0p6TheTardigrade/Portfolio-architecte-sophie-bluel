// fetch('http://localhost:5678/api/users/login')
//   .then((response) => response.json())
//   .then((users) => {
//     users.forEach((user) => {
//       console.log(user);
//     });
//   });

let getLoginNavLink = document.getElementsByTagName('*');
console.log(getLoginNavLink);
for (let index = 0; index < getLoginNavLink.length; index++) {
  if (getLoginNavLink[index].textContent === 'login') {
    let login = getLoginNavLink[index];
    console.log(login);
    login.setAttribute('id', 'login');
  }
}
const loginNavLink = document.getElementById('login');
const mainTag = document.querySelector('main');
console.log(loginNavLink);

loginNavLink.addEventListener('click', () => {
  mainTag.setAttribute('id', 'main__section');
  document.getElementById('main__section').innerHTML = '';

  const loginSectionTitle = document.createElement('section');
  const articleLoginSectionTitle = document.createElement('article');
  const h2LoginSectionTitle = document.createElement('h2');
  h2LoginSectionTitle.textContent = 'Login';
  mainTag.appendChild(loginSectionTitle);
  loginSectionTitle.appendChild(articleLoginSectionTitle);
  articleLoginSectionTitle.appendChild(h2LoginSectionTitle);

  const formLoginSectionTitle = document.createElement('form');
  const divLabelInputPasswords = document.createElement('div');
  const divLabelInputUser = document.createElement('div');
  mainTag.appendChild(formLoginSectionTitle);
  formLoginSectionTitle.appendChild(divLabelInputUser);
  formLoginSectionTitle.appendChild(divLabelInputPasswords);

  const labelUserLoginSectionTitle = document.createElement('label');
  labelUserLoginSectionTitle.textContent = 'E-mail';
  labelUserLoginSectionTitle.setAttribute('for', 'username');
  labelUserLoginSectionTitle.setAttribute('id', 'label__id__username');
  divLabelInputUser.appendChild(labelUserLoginSectionTitle);

  const inputUserLoginSectionTitle = document.createElement('input');
  inputUserLoginSectionTitle.type = 'email';
  inputUserLoginSectionTitle.setAttribute('id', 'username');
  divLabelInputUser.appendChild(inputUserLoginSectionTitle);

  const labelPasswordLoginSectionTitle = document.createElement('label');
  labelPasswordLoginSectionTitle.textContent = 'Mot de passe';
  labelPasswordLoginSectionTitle.type = 'password';
  labelPasswordLoginSectionTitle.setAttribute('for', 'password');
  labelPasswordLoginSectionTitle.setAttribute('id', 'label__id__password');
  divLabelInputPasswords.appendChild(labelPasswordLoginSectionTitle);

  const inputPasswordLoginSectionTitle = document.createElement('input');
  inputPasswordLoginSectionTitle.type = 'password';
  inputPasswordLoginSectionTitle.setAttribute('id', 'password');
  divLabelInputPasswords.appendChild(inputPasswordLoginSectionTitle);

  const buttonLoginSectionTitle = document.createElement('button');
  buttonLoginSectionTitle.textContent = 'Se connecter';
  formLoginSectionTitle.appendChild(buttonLoginSectionTitle);

  const linkMissingLoginSectionTitle = document.createElement('a');
  linkMissingLoginSectionTitle.textContent = 'Mot de passe oublié';
  formLoginSectionTitle.appendChild(linkMissingLoginSectionTitle);
});
