// if (document.cookie === 'session=getTokenResponse') {
for (let i = 0; i < sessionStorage.length; i++) {
  if (sessionStorage.key(i) === 'token') {
    userLoginTools.setAttribute('id', 'userLoginTools');

    const getHeader = document.querySelector('header');
    const getBody = document.querySelector('body');

    getBody.insertBefore(userLoginTools, getHeader);

    userEditionMode.setAttribute('id', 'userEditionMode');
    userEditionMode2.setAttribute('id', 'userEditionMode2');
    userEditionMode3.setAttribute('id', 'userEditionMode3');

    publishChange.setAttribute('id', 'publishChange');

    headTarget.appendChild(fontAwesomeScript);
    fontAwesomeScript.setAttribute('src', 'https://kit.fontawesome.com/3fa10e7671.js');
    fontAwesomeScript.setAttribute('crossorigin', 'anonymous');

    userEditionModeBox.setAttribute('id', 'userEditionModeBox');
    userEditionModeBox.appendChild(userEditionModeIcon);
    userEditionModeBox.appendChild(userEditionMode);

    userEditionModeIcon.setAttribute('id', 'userEditionModeIcon');
    userEditionModeIcon.setAttribute('class', 'fa-regular');
    userEditionModeIcon.classList.add('fa-pen-to-square');

    userLoginTools.appendChild(userEditionModeBox);

    userEditionMode.textContent = 'Modifier';
    userEditionMode2.textContent = 'Modifier';
    userEditionMode3.textContent = 'Modifier';

    userLoginTools.appendChild(publishChange);

    publishChange.textContent = 'publier les changements';
  }
}

console.log(userEditionMode);
console.log(document.cookie);
console.log(localStorage);
console.log(sessionStorage);
