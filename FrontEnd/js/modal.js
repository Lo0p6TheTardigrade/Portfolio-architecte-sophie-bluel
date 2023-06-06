// if (document.cookie === 'session=getTokenResponse') {
for (let i = 0; i < sessionStorage.length; i++) {
  if (sessionStorage.key(i) === 'token') {
    const getHeader = document.querySelector('header');
    const getBody = document.querySelector('body');
    const headTarget = document.querySelector('head');

    const fontAwesomeScript = document.createElement('script');
    headTarget.appendChild(fontAwesomeScript);
    fontAwesomeScript.setAttribute('src', 'https://kit.fontawesome.com/3fa10e7671.js');
    fontAwesomeScript.setAttribute('crossorigin', 'anonymous');

    const userLoginTools = document.createElement('div');
    userLoginTools.setAttribute('id', 'userLoginTools');
    getBody.insertBefore(userLoginTools, getHeader);

    const userEditionModeBox = document.createElement('div');
    userEditionModeBox.setAttribute('id', 'userEditionModeBox');
    userLoginTools.appendChild(userEditionModeBox);

    const userEditionMode = document.createElement('span');
    userEditionMode.setAttribute('id', 'userEditionMode');
    userEditionMode.textContent = 'Mode édition';
    userEditionModeBox.appendChild(userEditionMode);

    const userEditionModeIcon = document.createElement('i');
    userEditionModeIcon.setAttribute('id', 'userEditionModeIcon');
    userEditionModeIcon.setAttribute('class', 'fa-regular');
    userEditionModeIcon.classList.add('fa-pen-to-square');
    userEditionModeIcon.classList.add('cursorPointer');
    userEditionModeBox.appendChild(userEditionModeIcon);

    const userEditionModeBox2 = document.createElement('div');
    userEditionModeBox2.setAttribute('id', 'userEditionModeBox2');
    sectionPortfolio.insertBefore(userEditionModeBox2, sectionPortfolioH2);
    userEditionModeBox2.appendChild(sectionPortfolioH2);

    const userEditionMode2 = document.createElement('span');
    userEditionMode2.setAttribute('id', 'userEditionMode2');
    userEditionMode2.textContent = 'Modifier';
    userEditionModeBox2.appendChild(userEditionMode2);

    const userEditionModeIcon2 = document.createElement('i');
    userEditionModeIcon2.setAttribute('id', 'userEditionModeIcon2');
    userEditionModeIcon2.setAttribute('class', 'fa-regular');
    userEditionModeIcon2.classList.add('fa-pen-to-square');
    userEditionModeIcon2.classList.add('cursorPointer');
    userEditionModeBox2.appendChild(userEditionModeIcon2);

    const userEditionModeBox3 = document.createElement('div');
    introductionFigure.appendChild(userEditionModeBox3);

    const userEditionMode3 = document.createElement('span');
    userEditionMode3.setAttribute('id', 'userEditionMode3');
    userEditionModeBox3.setAttribute('id', 'userEditionModeBox3');
    userEditionMode3.textContent = 'Modifier';
    userEditionModeBox3.appendChild(userEditionMode3);

    const userEditionModeIcon3 = document.createElement('i');
    userEditionModeIcon3.setAttribute('id', 'userEditionModeIcon3');
    userEditionModeIcon3.setAttribute('class', 'fa-regular');
    userEditionModeIcon3.classList.add('fa-pen-to-square');
    userEditionModeIcon3.classList.add('cursorPointer');
    userEditionModeBox3.appendChild(userEditionModeIcon3);

    const publishChange = document.createElement('span');
    publishChange.textContent = 'publier les changements';
    userLoginTools.appendChild(publishChange);
    publishChange.setAttribute('id', 'publishChange');
    publishChange.classList.add('cursorPointer');

    const createModal = [];
    let modalCreated = false;

    userEditionMode.addEventListener('click', () => {
      if (!modalCreated) {
        const modal = document.createElement('modal');
        modal.setAttribute('id', 'modal1');
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

        const modalCross = document.createElement('i');
        modalCross.setAttribute('id', 'modalCross');
        modalCross.setAttribute('class', 'fa-solid');
        modalCross.classList.add('fa-xmark');
        modalCross.classList.add('cursorPointer');
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
              modalFigureImgBox.appendChild(modalFigure);

              const modalFigureImg = document.createElement('img');
              modalFigureImg.setAttribute('src', getImageUrl);
              modalFigureImg.setAttribute('id', modalFigureImg);
              modalFigureImg.classList.add('cursorPointer');
              modalFigure.appendChild(modalFigureImg);

              const modalFigureTextBox = document.createElement('p');
              modalFigureTextBox.textContent = 'éditer';
              modalFigureTextBox.classList.add('modalFigureTextBox');
              modalFigureTextBox.classList.add('cursorPointer');
              modalFigure.appendChild(modalFigureTextBox);

              const modalIconBox = document.createElement('div');
              modalIconBox.classList.add('modalIconBox');
              modalFigure.appendChild(modalIconBox);

              const modalTrashCanBox = document.createElement('div');
              modalTrashCanBox.classList.add('modalTrashCanBox');
              modalIconBox.appendChild(modalTrashCanBox);

              const modalTrashCan = document.createElement('i');
              modalTrashCan.setAttribute('id', 'modalTrashCan');
              modalTrashCan.setAttribute('class', 'fa-solid');
              modalTrashCan.classList.add('fa-trash-can');
              modalTrashCan.classList.add('cursorPointer');
              modalTrashCanBox.appendChild(modalTrashCan);

              const modalZoomSelectedIconBox = document.createElement('div');
              modalZoomSelectedIconBox.classList.add('modalZoomSelectedIconBox');
              modalIconBox.appendChild(modalZoomSelectedIconBox);

              const modalZoomSelectedIcon = document.createElement('i');
              modalZoomSelectedIcon.setAttribute('id', 'modalZoomSelectedIcon');
              modalZoomSelectedIcon.setAttribute('class', 'fa-solid');
              modalZoomSelectedIcon.classList.add('fa-maximize');
              modalZoomSelectedIcon.classList.add('cursorPointer');
              modalZoomSelectedIconBox.appendChild(modalZoomSelectedIcon);
            });
            const modalSeparator = document.createElement('div');
            modalSeparator.classList.add('modalSeparator');
            modal.appendChild(modalSeparator);

            const modalButtonBox = document.createElement('div');
            modalButtonBox.classList.add('modalButtonBox');
            modal.appendChild(modalButtonBox);

            const modalButton = document.createElement('span');
            modalButton.classList.add('modalButton');
            modalButton.classList.add('cursorPointer');
            modalButton.textContent = 'Ajouter une photo';
            modalButtonBox.appendChild(modalButton);
            modalButton.addEventListener('click', () => {});

            const modalButton2 = document.createElement('span');
            modalButton2.classList.add('modalButton2');
            modalButton2.classList.add('cursorPointer');
            modalButton2.textContent = 'Supprimer la galerie';
            modalButtonBox.appendChild(modalButton2);
            modalButton2.addEventListener('click', () => {});
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
