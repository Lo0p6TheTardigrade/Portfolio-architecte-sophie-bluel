let getLoginContactLink = document.getElementsByTagName('*');
console.log(getLoginContactLink);
for (let index = 0; index < getLoginContactLink.length; index++) {
  if (getLoginContactLink[index].textContent === 'contact') {
    let contact = getLoginContactLink[index];
    console.log(contact);
    contact.setAttribute('id', 'contact');
  }
}
