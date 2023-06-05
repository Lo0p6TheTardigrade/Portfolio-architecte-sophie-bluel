// if (document.cookie === 'session=getTokenResponse') {
for (let i = 0; i < sessionStorage.length; i++) {
  if (sessionStorage.key(i) === 'token') {
    userLoginTools.setAttribute('id', 'userLoginTools');

    const getHeader = document.querySelector('header');
    const getBody = document.querySelector('body');

    getBody.insertBefore(userLoginTools, getHeader);

    sectionPortfolio.insertBefore(userEditionModeBox2, sectionPortfolioH2);

    introductionFigure.appendChild(userEditionModeBox3);
    userEditionModeBox3.appendChild(userEditionModeIcon3);
    userEditionModeBox3.appendChild(userEditionMode3);

    userEditionModeIcon3.setAttribute('id', 'userEditionModeIcon3');
    userEditionModeIcon3.setAttribute('class', 'fa-regular');
    userEditionModeIcon3.classList.add('fa-pen-to-square');

    userEditionModeBox2.appendChild(userEditionModeIcon2);

    userEditionModeIcon2.setAttribute('id', 'userEditionModeIcon2');
    userEditionModeIcon2.setAttribute('class', 'fa-regular');
    userEditionModeIcon2.classList.add('fa-pen-to-square');

    userEditionModeBox2.appendChild(sectionPortfolioH2);
    userEditionModeBox2.appendChild(userEditionMode2);

    userEditionMode.setAttribute('id', 'userEditionMode');
    userEditionMode2.setAttribute('id', 'userEditionMode2');
    userEditionModeBox2.setAttribute('id', 'userEditionModeBox2');
    userEditionMode3.setAttribute('id', 'userEditionMode3');
    userEditionModeBox3.setAttribute('id', 'userEditionModeBox3');

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

    userEditionMode.textContent = 'Mode édition';
    userEditionMode2.textContent = 'Modifier';
    userEditionMode3.textContent = 'Modifier';

    userLoginTools.appendChild(publishChange);

    publishChange.textContent = 'publier les changements';

    // const createModal = [];
    // userEditionMode.addEventListener('click', () => {
    //   const modal = document.createElement(':modal');
    //   const modalBox = document.createElement('div');

    //   if (!createModal.includes(modal)) {
    //     createModal.push(modal);
    //     console.log(createModal);

    //     getBody.appendChild(modalBox);
    //     modalBox.appendChild(modal);
    //     console.log('userEditionMode');
    //     modalBox.classList.add('modal');
    //   }
    // });

    const createModal = [];
    let modalCreated = false;

    userEditionMode.addEventListener('click', () => {
      if (!modalCreated) {
        const modal = document.createElement('modal');
        const modalBox = document.createElement('form');

        createModal.push(modal);
        console.log(createModal);

        getBody.appendChild(modalBox);
        modalBox.appendChild(modal);
        console.log('userEditionMode');
        modalBox.classList.add('modalBoxModal');

        const modalCrossBox = document.createElement('div');
        modalCrossBox.classList.add('modalCrossBox');
        modal.appendChild(modalCrossBox);

        const modalCross = document.createElement('p');
        modalCross.classList.add('modalCross');
        modalCross.textContent = 'X';
        modalCrossBox.appendChild(modalCross);

        const modalTitleBox = document.createElement('div');
        modalTitleBox.classList.add('modalTitleBox');
        modal.appendChild(modalTitleBox);

        const modalTitle = document.createElement('h2');
        modalTitle.textContent = 'Galerie photo';
        modalTitleBox.appendChild(modalTitle);

        const modalFigureImgBox = document.createElement('div');
        modalFigureImgBox.classList.add('modalFigureImgBox');
        modal.appendChild(modalFigureImgBox);

        fetch('http://localhost:5678/api/works')
          .then((response) => response.json())
          .then((works) => {
            works.forEach((work) => {
              // Const for get all value in work objects
              const getImageUrl = work.imageUrl;

              // Create new elements for modal edit
              const modalFigure = document.createElement('figure');
              const modalFigureImg = document.createElement('img');

              modalFigureImgBox.appendChild(modalFigure);
              modalFigure.appendChild(modalFigureImg);
              modalFigureImg.setAttribute('src', getImageUrl);

              const modalFigureTextBox = document.createElement('p');
              modalFigureTextBox.textContent = 'éditer';
              modalFigureTextBox.classList.add('modalFigureTextBox');

              const modalCheckbox = document.createElement('input');
              modalCheckbox.type = 'checkbox';
              modalCheckbox.classList.add('modalCheckbox');
              modalFigure.appendChild(modalCheckbox);
            });
            const modalSeparator = document.createElement('div');

            const modalButton = document.createElement('span');
            modalButton.classList.add('modalButton');
            modalButton.textContent = 'Ajouter une photo';
            modal.appendChild(modalButton);

            const modalButton2 = document.createElement('span');
            modalButton2.classList.add('modalButton2');
            modalButton2.textContent = 'Supprimer la galerie';
            modal.appendChild(modalButton2);
          });

        modalCreated = true;
      }
    });
  }
}

console.log(userEditionMode);
console.log(document.cookie);
console.log(localStorage);
console.log(sessionStorage);
