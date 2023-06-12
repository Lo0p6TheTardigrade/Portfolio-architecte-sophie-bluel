const token = 'Bearer ' + sessionStorage.getItem('token');
const tokenWithoutQuotes = token.replace(/"/g, '');
let workFormData = new FormData();
const modalButtonSend = document.createElement('span');
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
    userLoginTools.classList.add('userLoginTools');
    getBody.insertBefore(userLoginTools, getHeader);

    const userEditionModeBox = document.createElement('div');
    userEditionModeBox.setAttribute('id', 'userEditionModeBox');
    userEditionModeBox.classList.add('userEditionModeBox');
    userLoginTools.appendChild(userEditionModeBox);

    const userEditionMode = document.createElement('span');
    userEditionMode.setAttribute('id', 'userEditionMode');
    userEditionMode.classList.add('userEditionMode');
    userEditionMode.style.cursor = 'pointer';
    userEditionMode.textContent = 'Mode édition';
    userEditionModeBox.appendChild(userEditionMode);

    const userEditionModeIcon = document.createElement('i');
    userEditionModeIcon.setAttribute('id', 'userEditionModeIcon');
    userEditionModeIcon.setAttribute('class', 'fa-regular');
    userEditionModeIcon.classList.add('fa-pen-to-square');
    userEditionModeIcon.style.cursor = 'pointer';
    userEditionModeBox.appendChild(userEditionModeIcon);

    const userEditionModeBox2 = document.createElement('div');
    userEditionModeBox2.setAttribute('id', 'userEditionModeBox2');
    userEditionModeBox2.classList.add('userEditionModeBox2');
    sectionPortfolio.insertBefore(userEditionModeBox2, sectionPortfolioH2);
    userEditionModeBox2.appendChild(sectionPortfolioH2);

    const userEditionMode2 = document.createElement('span');
    userEditionMode2.setAttribute('id', 'userEditionMode2');
    userEditionMode2.classList.add('userEditionMode2');
    userEditionMode2.style.cursor = 'pointer';
    userEditionMode2.textContent = 'Modifier';
    userEditionModeBox2.appendChild(userEditionMode2);

    const userEditionModeIcon2 = document.createElement('i');
    userEditionModeIcon2.setAttribute('id', 'userEditionModeIcon2');
    userEditionModeIcon2.setAttribute('class', 'fa-regular');
    userEditionModeIcon2.classList.add('fa-pen-to-square');
    userEditionModeIcon2.style.cursor = 'pointer';
    userEditionModeBox2.appendChild(userEditionModeIcon2);

    const userEditionModeBox3 = document.createElement('div');
    introductionFigure.appendChild(userEditionModeBox3);

    const userEditionMode3 = document.createElement('span');
    userEditionMode3.setAttribute('id', 'userEditionMode3');
    userEditionMode3.classList.add('userEditionMode3');
    userEditionMode3.style.cursor = 'pointer';
    userEditionModeBox3.setAttribute('id', 'userEditionModeBox3');
    userEditionMode3.textContent = 'Modifier';
    userEditionModeBox3.appendChild(userEditionMode3);

    const userEditionModeIcon3 = document.createElement('i');
    userEditionModeIcon3.setAttribute('id', 'userEditionModeIcon3');
    userEditionModeIcon3.setAttribute('class', 'fa-regular');
    userEditionModeIcon3.classList.add('fa-pen-to-square');
    userEditionModeIcon3.style.cursor = 'pointer';
    userEditionModeBox3.appendChild(userEditionModeIcon3);

    const publishChange = document.createElement('span');
    publishChange.setAttribute('id', 'publishChange');
    publishChange.classList.add('publishChange');
    publishChange.style.cursor = 'pointer';
    publishChange.textContent = 'publier les changements';
    userLoginTools.appendChild(publishChange);

    const createModal = [];
    let modalCreated = false;

    userEditionMode.addEventListener('click', () => {
      if (!modalCreated) {
        const modal = document.createElement('modal');
        modal.setAttribute('id', 'modal1');
        const modalBox = document.createElement('form');

        createModal.push(modal);

        getBody.appendChild(modalBox);
        modalBox.appendChild(modal);
        modalBox.classList.add('modalBoxModal');

        const modalCrossBox = document.createElement('div');
        modalCrossBox.classList.add('modalCrossBox');
        modal.appendChild(modalCrossBox);

        const modalCross = document.createElement('i');
        modalCross.setAttribute('id', 'modalCross');
        modalCross.setAttribute('class', 'fa-solid');
        modalCross.classList.add('fa-xmark');
        modalCross.style.cursor = 'pointer';
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

        const modalSeparator = document.createElement('div');
        modalSeparator.classList.add('modalSeparator');
        modal.appendChild(modalSeparator);

        const modalButtonBox = document.createElement('div');
        modalButtonBox.classList.add('modalButtonBox');
        modal.appendChild(modalButtonBox);

        const modalButton = document.createElement('span');
        modalButton.classList.add('modalButton');
        modalButton.style.cursor = 'pointer';
        modalButton.textContent = 'Ajouter une photo';
        modalButtonBox.appendChild(modalButton);

        const modalButton2 = document.createElement('span');
        modalButton2.classList.add('modalButton2');
        modalButton2.style.cursor = 'pointer';
        modalButton2.textContent = 'Supprimer la galerie';
        modalButtonBox.appendChild(modalButton2);
        modalButton2.addEventListener('click', () => {});

        fetch('http://localhost:5678/api/works')
          .then((response) => response.json())
          .then((works) => {
            works.forEach((work) => {
              // Const for get all value in work objects
              const getImageUrl = work.imageUrl;

              // Create new elements for modal edit
              // Create figure tag
              const modalFigure = document.createElement('figure');
              modalFigureImgBox.appendChild(modalFigure);

              // Create img tag
              const modalFigureImg = document.createElement('img');
              modalFigureImg.setAttribute('src', getImageUrl);
              modalFigureImg.setAttribute('id', work.id);
              modalFigureImg.classList.add('modalFigureImg');
              modalFigureImg.style.cursor = 'pointer';
              modalFigure.appendChild(modalFigureImg);

              // Create text under img
              const modalFigureTextBox = document.createElement('p');
              modalFigureTextBox.textContent = 'éditer';
              modalFigureTextBox.classList.add('modalFigureTextBox');
              modalFigureTextBox.style.cursor = 'pointer';
              modalFigure.appendChild(modalFigureTextBox);

              // Create box for Font Awesome
              const modalIconBox = document.createElement('div');
              modalIconBox.classList.add('modalIconBox');
              modalFigure.appendChild(modalIconBox);

              let modalTrashCanBox = document.createElement('div');
              modalTrashCanBox.setAttribute('id', modalFigureImg.id);
              modalTrashCanBox.classList.add('modalTrashCanBox');
              modalIconBox.appendChild(modalTrashCanBox);

              const modalTrashCan = document.createElement('i');
              modalTrashCan.setAttribute('id', 'modalTrashCan');
              modalTrashCan.setAttribute('class', 'fa-solid');
              modalTrashCan.classList.add('fa-trash-can');
              modalTrashCan.style.cursor = 'pointer';
              modalTrashCanBox.appendChild(modalTrashCan);

              // Event click for trash work
              modalTrashCanBox.addEventListener('click', async () => {
                // Variable get id from trash box
                let workId = parseInt(modalTrashCanBox.id);

                // Fetch for delete work
                try {
                  let response = await fetch(`http://localhost:5678/api/works/${workId}`, {
                    method: 'DELETE',
                    headers: {
                      Authorization: tokenWithoutQuotes,
                    },
                  });
                  if (response.ok) {
                    alert('Travail supprimé avec succès !');
                  } else {
                    alert('Erreur lors de la suppression du travail');
                  }
                } catch (error) {
                  console.error(error);
                }
              });

              // Font Awesome zoom selection
              const modalZoomSelectedIconBox = document.createElement('div');
              modalZoomSelectedIconBox.classList.add('modalZoomSelectedIconBox');
              modalIconBox.appendChild(modalZoomSelectedIconBox);

              const modalZoomSelectedIcon = document.createElement('i');
              modalZoomSelectedIcon.setAttribute('id', 'modalZoomSelectedIcon');
              modalZoomSelectedIcon.setAttribute('class', 'fa-solid');
              modalZoomSelectedIcon.classList.add('fa-maximize');
              modalZoomSelectedIcon.style.cursor = 'pointer';

              // Array for stopping miltiple icon + Event listener mouse events (Enter and Leave)
              let modalZoomSelectedIconArray = [];
              modalZoomSelectedIconBox.style.display = 'none';
              modalFigure.addEventListener('mouseenter', () => {
                modalZoomSelectedIconArray.push(modalZoomSelectedIconBox);
                modalZoomSelectedIconBox.appendChild(modalZoomSelectedIcon);
                modalIconBox.appendChild(modalZoomSelectedIconBox);
                modalZoomSelectedIconBox.style.display = 'flex';
              });
              modalFigure.addEventListener('mouseleave', () => {
                modalZoomSelectedIconArray.pop(modalZoomSelectedIconBox);
                modalZoomSelectedIconBox.style.display = 'none';
              });

              const modalFigureImgDownloadInputWorkCategory = document.createElement('div');
              const modalFigureImgDownloadInputWorkSelect = document.createElement('select');
              const modalFigureImgDownloadInputWorkOption = document.createElement('option');

              const userId = work.userId;
              console.log(userId);

              // Button for add work section
              modalButton.addEventListener('click', (e) => {
                modalButtonBox.innerHTML = '';
                modalButtonSend;
                modalButtonSend.classList.add('modalButton');
                modalButtonSend.style.cursor = 'pointer';
                modalButtonSend.setAttribute('id', 'send');
                modalButtonSend.textContent = 'Ajout photo';
                modalButtonBox.appendChild(modalButtonSend);

                modalTitle.textContent = 'Ajout photo';
                modalFigureImgBox.innerHTML = '';
                modalFigureImgBox.classList.replace('modalFigureImgBox', 'modalFigureImgBoxChangeToSendWork');
                const modalFigureImgDownload = document.createElement('label');
                const modalFigureImgDownloadInput = document.createElement('input');
                modalFigureImgDownloadInput.setAttribute('id', 'modalFigureImgDownloadIcon');
                modalFigureImgDownloadInput.setAttribute('class', 'fa-regular');
                modalFigureImgDownloadInput.classList.add('fa-image');
                modalFigureImgDownloadInput.type = 'file';

                const modalFigureImgDownloadText = document.createElement('span');
                const modalFigureImgDownloadFileType = document.createElement('span');

                modalFigureImgDownload.setAttribute('for', 'modalFigureImgDownloadIcon');
                modalFigureImgDownload.setAttribute('class', 'modalFigureImgDownload');

                modalFigureImgDownloadText.setAttribute('id', 'modalFigureImgDownloadText');
                modalFigureImgDownloadText.textContent = '+ Ajouter photo';
                modalFigureImgDownloadFileType.setAttribute('id', 'modalFigureImgDownloadFileType');
                modalFigureImgDownloadFileType.textContent = 'jpg, png: 4mo max';

                const imagePreview = document.createElement('img');
                imagePreview.setAttribute('class', 'displayElementFalse');

                // Get the image path for the download preview
                modalFigureImgDownloadInput.addEventListener('click', () => {
                  // On change event after work is in input
                  modalFigureImgDownloadInput.addEventListener('change', (e) => {
                    let modalFigureImgDownloadIconValuePath = e.target.value;
                    let modalFigureImgDownloadIconValueCleanPath = modalFigureImgDownloadIconValuePath.split('\\').pop();
                    let modalFigureImgDownloadIconValue = modalFigureImgDownloadIconValueCleanPath;
                    let modalFigureImgDownloadInputPreview = location.href + 'assets/images/' + modalFigureImgDownloadIconValue;
                    modalFigureImgDownloadInput.setAttribute('class', 'displayElementFalse');

                    imagePreview.setAttribute('src', modalFigureImgDownloadInputPreview);
                    imagePreview.classList.replace('displayElementFalse', 'displayElementTrue');
                    imagePreview.setAttribute('id', 'imagePreview');
                    imagePreview.classList.add('imagePreview');

                    modalFigureImgDownloadText.textContent = '';
                    modalFigureImgDownloadText.setAttribute('class', 'displayElementFalse');

                    modalFigureImgDownloadFileType.textContent = '';
                    modalFigureImgDownloadFileType.setAttribute('class', 'displayElementFalse');
                  });
                });

                // Input element for the new work item (SEND)
                const modalFigureImgDownloadInputWorkName = document.createElement('input');
                modalFigureImgDownloadInputWorkName.type = 'text';
                modalFigureImgDownloadInputWorkName.classList.add('modalFigureImgDownloadInputWorkName');

                modalFigureImgDownloadInputWorkCategory.classList.add('modalFigureImgDownloadInputWorkCategory');
                modalFigureImgDownloadInputWorkName.classList.add('InputWorkCategory');
                modalFigureImgDownloadInputWorkSelect.classList.add('InputWorkCategory');

                // Array for avoid multiplication
                let modalFigureImgDownloadArray = [];

                modalFigureImgDownloadArray.push(modalFigureImgDownload);
                modalFigureImgDownloadArray.push(modalFigureImgDownloadInput);
                modalFigureImgDownloadArray.push(imagePreview);
                modalFigureImgDownloadArray.push(modalFigureImgDownloadInputWorkCategory);
                modalFigureImgDownloadArray.push(modalFigureImgDownloadInputWorkName);
                modalFigureImgDownloadArray.push(modalFigureImgDownloadInputWorkSelect);

                // Verification
                if (!modalFigureImgDownloadArray) {
                  modalFigureImgDownloadArray.pop();
                } else {
                  modalFigureImgBox.appendChild(modalFigureImgDownload);

                  modalFigureImgDownload.appendChild(modalFigureImgDownloadInput);

                  modalFigureImgDownload.appendChild(imagePreview);

                  modalFigureImgDownload.appendChild(modalFigureImgDownloadText);

                  modalFigureImgDownload.appendChild(modalFigureImgDownloadFileType);

                  modalFigureImgBox.appendChild(modalFigureImgDownloadInputWorkCategory);

                  modalFigureImgDownloadInputWorkCategory.appendChild(modalFigureImgDownloadInputWorkName);

                  modalFigureImgDownloadInputWorkCategory.appendChild(modalFigureImgDownloadInputWorkSelect);
                }

                // let allInputsForSend = [modalFigureImgDownloadInput, modalFigureImgDownloadInputWorkName, modalFigureImgDownloadInputWorkCategory, modalFigureImgDownloadInputWorkOption];

                let allInputsForSend = [];
                allInputsForSend.push(modalFigureImgDownloadInput);
                allInputsForSend.push(modalFigureImgDownloadInputWorkName);
                allInputsForSend.push(modalFigureImgDownloadInputWorkCategory);
                allInputsForSend.push(modalFigureImgDownloadInputWorkOption);

                const uniqueCategories = new Set();

                works.forEach((work) => {
                  uniqueCategories.add(work.categoryId);
                });

                let matchingWork;
                let option;
                uniqueCategories.forEach((categoryId) => {
                  matchingWork = works.find((work) => work.categoryId === categoryId);
                  option = modalFigureImgDownloadInputWorkOption.cloneNode(); // Cloner l'option pour chaque itération
                  option.setAttribute('id', matchingWork.categoryId); // Utiliser l'identifiant de catégorie spécifique ici
                  // option.value = matchingWork.categoryId; // Utiliser l'identifiant de catégorie spécifique ici
                  option.textContent = matchingWork.category.name; // Assurez-vous d'utiliser la propriété appropriée pour le nom de catégorie
                  // option.textContent = matchingWork.category.name; // Assurez-vous d'utiliser la propriété appropriée pour le nom de catégorie
                  modalFigureImgDownloadInputWorkSelect.appendChild(option);
                });

                modalFigureImgDownloadInputWorkCategory.appendChild(modalFigureImgDownloadInputWorkSelect);

                allInputsForSend.forEach((input) => {
                  input.addEventListener('change', (e) => {
                    modalFigureImgDownloadInputWorkOption.setAttribute('checked', 'checked');
                    modalFigureImgDownloadInputWorkOption.setAttribute('value', modalFigureImgDownloadInputWorkName.value);
                    modalFigureImgDownloadInputWorkOption.setAttribute('id', matchingWork.categoryId);
                    let modalFigureImgDownloadInputWorkNameValue = modalFigureImgDownloadInputWorkName.value;

                    let modalFigureImgDownloadIconValuePath = e.target.value;
                    let modalFigureImgDownloadIconValueCleanPath = modalFigureImgDownloadIconValuePath.split('\\').pop();

                    let modalFigureImgDownloadIconValue = modalFigureImgDownloadIconValueCleanPath;

                    let modalFigureImgDownloadInputPreview = 'http://localhost:5678/images/' + modalFigureImgDownloadIconValue;

                    let modalFigureImgDownloadInputWorkOptionValue = modalFigureImgDownloadInputWorkOption.value;

                    // Afficher les options sélectionnées
                    let selectedOption = modalFigureImgDownloadInputWorkOption.querySelector('option:checked');
                    let selectedOptionValue = modalFigureImgDownloadInputWorkOption.id;
                    let selectedOptionText = matchingWork.category.name;
                    console.log(modalFigureImgDownloadInputWorkNameValue);
                    console.log(selectedOptionValue);
                    console.log(selectedOptionText);
                    // console.log('Option sélectionnée :', selectedOptionValue, '-', selectedOptionText);

                    workFormData.append('id', selectedOptionValue);
                    workFormData.append('title', modalFigureImgDownloadInputWorkNameValue);
                    workFormData.append('imageUrl', modalFigureImgDownloadInputPreview);
                    workFormData.append('category', selectedOptionText);
                    workFormData.append('userId', userId);
                  });
                });

                // Fetch pour l'envoi des données
              });
            });
          });

        modalCreated = true;
      }
    });
    console.log(userEditionMode);
  }
}
modalButtonSend.addEventListener('click', async () => {
  // Afficher les données du FormData
  // for (let pair of workFormData.entries()) {
  //   console.log(pair[0] + ':', pair[1]);
  // }
  console.log(JSON.stringify(workFormData.entries()));
  console.log(token);

  try {
    const response = await fetch('http://localhost:5678/api/works/', {
      method: 'POST',
      headers: {
        Authorization: tokenWithoutQuotes,
        'Content-Type': 'application/json', // Ajoutez le type de contenu
      },
      body: JSON.stringify(Object.fromEntries(workFormData)), // Convertir le FormData en objet JSON
    });

    if (response.ok) {
      alert('Travail envoyé avec succès !');
    } else {
      alert("Erreur lors de l'envoi du travail");
    }
  } catch (error) {
    console.error(error);
  }
});

console.log(document.cookie);
console.log(localStorage);
console.log(sessionStorage);
