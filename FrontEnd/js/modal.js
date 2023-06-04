// if (document.cookie === 'session=getTokenResponse') {
for (let i = 0; i < sessionStorage.length; i++) {
  if (sessionStorage.key(i) === 'token') {
    userLoginTools.setAttribute('id', 'userLoginTools');
    const getHeader = document.querySelector('header');
    const getBody = document.querySelector('body');
    getBody.insertBefore(userLoginTools, getHeader);
    userEditionMode.setAttribute('id', 'userEditionMode');
    publishChange.setAttribute('id', 'publishChange');
    userLoginTools.appendChild(userEditionMode);
    userEditionMode.textContent = 'Modifier';
    userLoginTools.appendChild(publishChange);
    publishChange.textContent = 'Publier les changements';
  }
}

console.log(userEditionMode);
console.log(document.cookie);
console.log(localStorage);
console.log(sessionStorage);
