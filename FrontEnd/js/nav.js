if (document.getElementById('main__section') === false) {
} else {
  // Find the list item with the following text fields
  let getProjectNavLink = document.getElementsByTagName('*');
  // console.log(getProjectNavLink);
  for (let i = 0; i < getProjectNavLink.length; i++) {
    if (getProjectNavLink[i].textContent === 'projets') {
      let project = getProjectNavLink[i];
      // console.log(project);
      project.setAttribute('id', 'projets');
      project.addEventListener('click', () => {
        window.location.href = '#projetsGallery';
      });
    }
  }
  let getLoginContactLink = document.getElementsByTagName('*');
  // console.log(getLoginContactLink);
  for (let i = 0; i < getLoginContactLink.length; i++) {
    if (getLoginContactLink[i].textContent === 'contact') {
      let contact = getLoginContactLink[i];
      // console.log(contact);
      contact.setAttribute('id', 'contactNav');
      contact.addEventListener('click', () => {
        window.location.href = '#contact';
      });
    }
  }
}
