// let allData = [];
// let allInputsForSend = [];
let modalFigureImgDownloadArray = [];
let allCategoryNames = [];

const token = 'Bearer ' + sessionStorage.getItem('token');
const tokenWithoutQuotes = token.replace(/"/g, '');

function createElementDiv() {
  return document.createElement('div');
}
function createElementSpan() {
  return document.createElement('span');
}
function createElementFontAwesom() {
  return document.createElement('i');
}

function setElementAttributes(element, ...attributes) {
  for (const attribute of attributes) {
    const [name, value] = attribute;
    element.setAttribute(name, value);
  }
}

function elementAppenChildFunction(parent, [child]) {
  parent.appendChild(child);
}

function faPenIconClass(element) {
  element.classList.add('fa-regular', 'fa-pen-to-square');
}

function arrayPushFunction(element, what) {
  element.push(what);
}

function sessionStorageRemoveMultiple(elements) {
  for (const element of elements) {
    sessionStorage.removeItem(element);
  }
}

let workFormData = new FormData();
const modalButtonSend = createElementSpan();
for (let i = 0; i < sessionStorage.length; i++) {
  if (sessionStorage.key(i) === 'token') {
    const getHeader = document.querySelector('header');
    const getBody = document.querySelector('body');
    const headTarget = document.querySelector('head');

    const fontAwesomeScript = document.createElement('script');
    headTarget.appendChild(fontAwesomeScript);
    fontAwesomeScript.setAttribute('src', 'https://kit.fontawesome.com/3fa10e7671.js');
    fontAwesomeScript.setAttribute('crossorigin', 'anonymous');

    const userLoginTools = createElementDiv();
    setElementAttributes(userLoginTools, ['id', 'userLoginTools'], ['class', 'userLoginTools']);
    getBody.insertBefore(userLoginTools, getHeader);

    const userEditionModeBox = createElementDiv();
    setElementAttributes(userEditionModeBox, ['id', 'userEditionModeBox'], ['class', 'userEditionModeBox']);
    userLoginTools.appendChild(userEditionModeBox);

    const userEditionMode = createElementSpan();
    setElementAttributes(userEditionMode, ['id', 'userEditionMode'], ['class', 'userEditionMode ' + 'cursorPointer']);
    userEditionMode.textContent = 'Mode édition';
    userEditionModeBox.appendChild(userEditionMode);

    const userEditionModeIcon = createElementFontAwesom();
    setElementAttributes(userEditionModeIcon, ['id', 'userEditionModeIcon'], ['class', 'cursorPointer']);
    faPenIconClass(userEditionModeIcon);
    userEditionModeBox.appendChild(userEditionModeIcon);

    const userEditionModeBox2 = createElementDiv();
    setElementAttributes(userEditionModeBox2, ['id', 'userEditionModeBox2'], ['class', 'userEditionModeBox2']);
    sectionPortfolio.insertBefore(userEditionModeBox2, sectionPortfolioH2);
    userEditionModeBox2.appendChild(sectionPortfolioH2);

    const userEditionMode2 = createElementSpan();
    setElementAttributes(userEditionMode2, ['id', 'userEditionMode2'], ['class', 'userEditionMode2 ' + 'cursorPointer']);
    userEditionMode2.textContent = 'Modifier';
    userEditionModeBox2.appendChild(userEditionMode2);

    const userEditionModeIcon2 = createElementFontAwesom();
    setElementAttributes(userEditionModeIcon2, ['id', 'userEditionModeIcon2'], ['class', 'cursorPointer']);
    faPenIconClass(userEditionModeIcon2);
    userEditionModeBox2.appendChild(userEditionModeIcon2);

    const userEditionModeBox3 = createElementDiv();
    introductionFigure.appendChild(userEditionModeBox3);

    const userEditionMode3 = createElementSpan();
    setElementAttributes(userEditionMode3, ['id', 'userEditionMode3'], ['class', 'userEditionMode3 ' + 'cursorPointer']);
    userEditionModeBox3.setAttribute('id', 'userEditionModeBox3');
    userEditionMode3.textContent = 'Modifier';
    userEditionModeBox3.appendChild(userEditionMode3);

    const userEditionModeIcon3 = createElementFontAwesom();
    setElementAttributes(userEditionModeIcon3, ['id', 'userEditionModeIcon3'], ['class', 'cursorPointer']);
    faPenIconClass(userEditionModeIcon3);
    userEditionModeBox3.appendChild(userEditionModeIcon3);

    const publishChange = createElementSpan();
    setElementAttributes(publishChange, ['id', 'publishChange'], ['class', 'publishChange ' + 'cursorPointer']);
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

        const modalCrossBox = createElementDiv();
        modalCrossBox.classList.add('modalCrossBox');
        modal.appendChild(modalCrossBox);

        const modalCross = createElementFontAwesom();
        setElementAttributes(modalCross, ['id', 'modalCross'], ['class', 'fa-solid ' + 'fa-xmark ' + 'cursorPointer']);
        modalCross.addEventListener('click', (e) => {
          // getBody.removeChild(modalBox);
          window.location.href = '/FrontEnd';
          // e.preventDefault();
          // window.location.reload();
        });
        modalCrossBox.appendChild(modalCross);

        const modalTitleBox = createElementDiv();
        modalTitleBox.classList.add('modalTitleBox');
        modal.appendChild(modalTitleBox);

        const modalTitle = document.createElement('h2');
        modalTitle.textContent = 'Galerie photo';
        modalTitleBox.appendChild(modalTitle);

        const modalFigureImgBox = createElementDiv();
        modalFigureImgBox.classList.add('modalFigureImgBox');
        modal.appendChild(modalFigureImgBox);

        const modalSeparator = createElementDiv();
        modalSeparator.classList.add('modalSeparator');
        modal.appendChild(modalSeparator);

        const modalButtonBox = createElementDiv();
        modalButtonBox.classList.add('modalButtonBox');
        modal.appendChild(modalButtonBox);

        const modalButton = createElementSpan();
        setElementAttributes(modalButton, ['class', 'modalButton ' + 'cursorPointer']);
        modalButton.textContent = 'Ajouter une photo';
        modalButtonBox.appendChild(modalButton);

        const arrowBack = createElementFontAwesom();
        setElementAttributes(arrowBack, ['id', 'faArrowBack'], ['class', 'fa-solid ' + 'fa-arrow-left ' + 'cursorPointer']);
        arrowBack.addEventListener('click', () => {});
        console.log(arrowBack);

        const modalButton2 = createElementSpan();
        setElementAttributes(modalButton2, ['class', 'modalButton2 ' + 'cursorPointer']);
        modalButton2.textContent = 'Supprimer la galerie';
        modalButtonBox.appendChild(modalButton2);

        function arrowBackFunction() {}
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
              setElementAttributes(modalFigureImg, ['src', getImageUrl], ['id', work.id], ['class', 'modalFigure ' + 'cursorPointer']);
              modalFigure.appendChild(modalFigureImg);

              // Create text under img
              const modalFigureTextBox = document.createElement('p');
              modalFigureTextBox.textContent = 'éditer';
              setElementAttributes(modalFigureTextBox, ['class', 'modalFigureTextBox ' + 'cursorPointer']);
              modalFigure.appendChild(modalFigureTextBox);

              // Create box for Font Awesome
              const modalIconBox = createElementDiv();
              modalIconBox.classList.add('modalIconBox');
              modalFigure.appendChild(modalIconBox);

              let modalTrashCanBox = createElementDiv();
              setElementAttributes(modalTrashCanBox, ['id', modalFigureImg.id], ['class', 'modalTrashCanBox']);
              modalIconBox.appendChild(modalTrashCanBox);

              const modalTrashCan = createElementFontAwesom();
              setElementAttributes(modalTrashCan, ['id', 'modalTrashCan'], ['class', 'fa-solid ' + 'fa-trash-can ' + 'cursorPointer']);
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
              const modalZoomSelectedIconBox = createElementDiv();
              modalZoomSelectedIconBox.classList.add('modalZoomSelectedIconBox');
              modalIconBox.appendChild(modalZoomSelectedIconBox);

              const modalZoomSelectedIcon = createElementFontAwesom();
              setElementAttributes(modalZoomSelectedIcon, ['id', 'modalZoomSelectedIcon'], ['class', 'fa-solid ' + 'fa-maximize ' + 'cursorPointer']);

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

              const modalFigureImgDownloadInputWorkCategory = createElementDiv();
              const modalFigureImgDownloadInputWorkSelect = document.createElement('select');
              const modalFigureImgDownloadInputWorkOption = document.createElement('option');

              const userId = work.userId;

              // Button for add work section
              modalButton.addEventListener('click', (e) => {
                modalButtonBox.innerHTML = '';
                modalButtonSend;
                setElementAttributes(modalButtonSend, ['id', 'send'], ['class', 'modalButton ' + 'cursorPointer']);
                modalButtonSend.textContent = 'Ajout photo';
                modalButtonBox.appendChild(modalButtonSend);

                modalCrossBox.appendChild(arrowBack);
                modalCrossBox.classList.replace('modalCrossBox', 'modalCrossBoxAndArrow');

                modalTitle.textContent = 'Ajout photo';

                modalFigureImgBox.innerHTML = '';
                modalFigureImgBox.classList.replace('modalFigureImgBox', 'modalFigureImgBoxChangeToSendWork');

                const modalFigureImgDownload = document.createElement('label');
                const modalFigureImgDownloadInput = document.createElement('input');

                setElementAttributes(modalFigureImgDownloadInput, ['id', 'modalFigureImgDownloadIcon'], ['class', 'fa-image ' + 'fa-regular']);
                modalFigureImgDownloadInput.type = 'file';

                const modalFigureImgDownloadText = createElementSpan();
                const modalFigureImgDownloadFileType = createElementSpan();

                setElementAttributes(modalFigureImgDownload, ['for', 'modalFigureImgDownloadIcon'], ['class', 'modalFigureImgDownload']);

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

                    setElementAttributes(imagePreview, ['src', modalFigureImgDownloadInputPreview], ['id', 'imagePreview'], ['class', 'imagePreview']);
                    imagePreview.classList.replace('displayElementFalse', 'displayElementTrue');

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
                modalFigureImgDownloadInputWorkName.classList.add('InputWorkCategory');

                modalFigureImgDownloadInputWorkCategory.classList.add('modalFigureImgDownloadInputWorkCategory');
                modalFigureImgDownloadInputWorkSelect.classList.add('InputWorkCategory');

                // Array for avoid multiplication

                arrayPushFunction(modalFigureImgDownloadArray, [modalFigureImgDownload, modalFigureImgDownloadInput, imagePreview, modalFigureImgDownloadInputWorkCategory, modalFigureImgDownloadInputWorkName, modalFigureImgDownloadInputWorkSelect]);

                // Verification
                if (!modalFigureImgDownloadArray) {
                  modalFigureImgDownloadArray.pop();
                } else {
                  elementAppenChildFunction(modalFigureImgBox, [modalFigureImgDownload]);
                  elementAppenChildFunction(modalFigureImgBox, [modalFigureImgDownloadInputWorkCategory]);

                  elementAppenChildFunction(modalFigureImgDownload, [modalFigureImgDownloadInput]);
                  elementAppenChildFunction(modalFigureImgDownload, [imagePreview]);
                  elementAppenChildFunction(modalFigureImgDownload, [modalFigureImgDownloadText]);
                  elementAppenChildFunction(modalFigureImgDownload, [modalFigureImgDownloadFileType]);

                  elementAppenChildFunction(modalFigureImgDownloadInputWorkCategory, [modalFigureImgDownloadInputWorkName]);
                  elementAppenChildFunction(modalFigureImgDownloadInputWorkCategory, [modalFigureImgDownloadInputWorkSelect]);
                }

                // arrayPushFunction(allInputsForSend, [modalFigureImgDownloadInput, modalFigureImgDownloadInputWorkName, modalFigureImgDownloadInputWorkCategory, modalFigureImgDownloadInputWorkOption]);

                const uniqueCategories = new Set();
                const addedOptions = new Set();

                works.forEach((work) => {
                  uniqueCategories.add(work.categoryId);
                });

                let matchingWork;
                let option;

                uniqueCategories.forEach((categoryId) => {
                  matchingWork = works.find((work) => work.categoryId === categoryId);

                  if (!addedOptions.has(categoryId)) {
                    option = modalFigureImgDownloadInputWorkOption.cloneNode();
                    option.setAttribute('id', matchingWork.categoryId);
                    option.textContent = matchingWork.category.name;

                    modalFigureImgDownloadInputWorkSelect.appendChild(option);

                    addedOptions.add(categoryId);
                  }
                });

                modalFigureImgDownloadInputWorkCategory.appendChild(modalFigureImgDownloadInputWorkSelect);

                let modalFigureImgDownloadInputWorkOptionValue = modalFigureImgDownloadInputWorkOption.value;

                let modalFigureImgBoxChangeToSendWork = document.querySelector('.modalFigureImgBoxChangeToSendWork');

                modalFigureImgBoxChangeToSendWork.addEventListener('click', () => {
                  // Afficher les options sélectionnées
                  let selectedOption = modalFigureImgDownloadInputWorkSelect.value;

                  modalFigureImgDownloadInput.addEventListener('change', () => {
                    let modalFigureImgDownloadIconValuePath = modalFigureImgDownloadInput.value;
                    let modalFigureImgDownloadIconValueCleanPath = modalFigureImgDownloadIconValuePath.split('\\').pop();
                    // let modalFigureImgDownloadPath = modalFigureImgDownloadIconValueCleanPath;
                    let modalFigureImgDownloadInputPreview = 'http://localhost:5678/images/' + modalFigureImgDownloadIconValueCleanPath;
                    sessionStorage.setItem('imageUrl', modalFigureImgDownloadInputPreview);
                    // console.log(sessionStorage.getItem('imageUrl'));
                  });

                  modalFigureImgDownloadInputWorkName.addEventListener('change', () => {
                    let modalFigureImgDownloadInputWorkNameValue = modalFigureImgDownloadInputWorkName.value;
                    sessionStorage.setItem('title', modalFigureImgDownloadInputWorkNameValue);
                    // console.log(sessionStorage.getItem('title'));
                  });

                  modalFigureImgDownloadInputWorkSelect.addEventListener('change', () => {
                    let selectedOptionText = modalFigureImgDownloadInputWorkSelect.options[modalFigureImgDownloadInputWorkSelect.selectedIndex].textContent;
                    let selectedOptionValue = modalFigureImgDownloadInputWorkSelect.options[modalFigureImgDownloadInputWorkSelect.selectedIndex].id;
                    sessionStorage.setItem('category', selectedOptionText);
                    sessionStorage.setItem('id', selectedOptionValue);
                    // console.log(selectedOptionValue);
                    // console.log(sessionStorage.getItem('category'));
                  });

                  sessionStorage.setItem('userId', userId);
                });
              });
            });
          });

        modalCreated = true;
      }
    });
  }
}

const elementsToRemove = ['id', 'title', 'imageUrl', 'category', 'userId'];

modalButtonSend.addEventListener('click', async () => {
  const workFormData = new FormData();
  // workFormData.append('id', sessionStorage.getItem('id'));
  workFormData.append('imageUrl', sessionStorage.getItem('imageUrl'));
  workFormData.append('title', sessionStorage.getItem('title'));
  workFormData.append('category', sessionStorage.getItem('category'));
  // workFormData.append('userId', sessionStorage.getItem('userId'));

  // Afficher les données du FormData
  // for (let pair of workFormData.entries()) {
  //   console.log(pair[0] + ':', pair[1]);
  // }

  // Fetch pour l'envoi des données
  try {
    const response = await fetch('http://localhost:5678/api/works/', {
      method: 'POST',
      headers: {
        Authorization: tokenWithoutQuotes,
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: workFormData,
    });

    if (response.ok) {
      alert('Travail envoyé avec succès !');
      sessionStorageRemoveMultiple(elementsToRemove);
    } else {
      alert("Erreur lors de l'envoi du travail");
      sessionStorageRemoveMultiple(elementsToRemove);
    }
  } catch (error) {
    console.error(error);
  }
});

console.log(sessionStorage);
