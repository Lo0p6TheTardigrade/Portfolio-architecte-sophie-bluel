let getLoginContactLink = document.getElementsByTagName('*');

for (let index = 0; index < getLoginContactLink.length; index++) {
  if (getLoginContactLink[index].textContent === 'contact') {
    let contact = getLoginContactLink[index];

    contact.setAttribute('id', 'contact');
  }
}
