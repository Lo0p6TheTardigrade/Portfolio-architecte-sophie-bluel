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

function faPenIconClass(element) {
  element.classList.add('fa-regular', 'fa-pen-to-square');
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
function elementAppendChildMultiple([parent1, child1], [parent2, child2]) {
  parent1.appendChild(child1);
  parent2.appendChild(child2);
}

function resetFunction(element) {
  element.innerHTML = '';
}

function goHome(where) {
  window.location.href = "'" + where + "'";
}

function arrayPushFunction(element, what) {
  element.push(what);
}

function SetAddFunction(element, value) {
  element.add(value);
}

function sessionStorageRemoveMultiple(elements) {
  for (const element of elements) {
    sessionStorage.removeItem(element);
  }
}

let workFormData = new FormData();

const modalButtonSend = createElementSpan();

const arrowBackModalSet = new Set();

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

    // Modal dialog
    const createModal = [];
    let modalCreated = false;

    userEditionMode.addEventListener('click', () => {
      if (!modalCreated) {
        // Modal form
        const modalBox = document.createElement('form');
        modalBox.classList.add('modalBoxModal');

        // Modal element
        const modal = document.createElement('modal');
        modal.setAttribute('id', 'modal1');

        createModal.push(modal);

        // Append modal form to body
        getBody.insertBefore(modalBox, getHeader);

        // Value for arrowBack button
        const modalParentChild = modalBox.appendChild(modal);
        // SetAddFunction(arrowBackModalSet, modalParentChild);

        // Cross close button box
        const modalCrossBox = createElementDiv();
        modalCrossBox.classList.add('modalCrossBox');
        modal.appendChild(modalCrossBox);

        // Cross close button
        const modalCross = createElementFontAwesom();
        setElementAttributes(modalCross, ['id', 'modalCross'], ['class', 'fa-solid ' + 'fa-xmark ' + 'cursorPointer']);
        modalCross.addEventListener('click', (e) => {
          // getBody.removeChild(modalBox);
          window.location.href = '/FrontEnd';
          // e.preventDefault();
          // window.location.reload();
        });
        modalCrossBox.appendChild(modalCross);

        // Title for the modal
        const modalTitleBox = createElementDiv();
        modalTitleBox.classList.add('modalTitleBox');
        const modalTitleBoxParentChild = modal.appendChild(modalTitleBox);
        SetAddFunction(arrowBackModalSet, modalTitleBoxParentChild);

        const modalTitle = document.createElement('h2');
        modalTitle.textContent = 'Galerie photo';
        const modalTitleParentChild = modalTitleBox.appendChild(modalTitle);
        SetAddFunction(arrowBackModalSet, modalTitleParentChild);

        // Figure boxes for all works
        const modalFigureImgBox = createElementDiv();
        modalFigureImgBox.classList.add('modalFigureImgBox');
        const modalFigureImgBoxParentChild = modal.appendChild(modalFigureImgBox);
        SetAddFunction(arrowBackModalSet, modalFigureImgBoxParentChild);

        // Separator between element
        const modalSeparator = createElementDiv();
        modalSeparator.classList.add('modalSeparator');
        const modalSeparatorParentChild = modal.appendChild(modalSeparator);
        SetAddFunction(arrowBackModalSet, modalSeparatorParentChild);

        // Modal button box
        const modalButtonBox = createElementDiv();
        modalButtonBox.classList.add('modalButtonBox');
        const modalButtonBoxParentChild = modal.appendChild(modalButtonBox);
        SetAddFunction(arrowBackModalSet, modalButtonBoxParentChild);

        const modalButton = createElementSpan();
        setElementAttributes(modalButton, ['class', 'modalButton ' + 'cursorPointer']);
        modalButton.textContent = 'Ajouter une photo';
        const modalButtonParentChild = modalButtonBox.appendChild(modalButton);
        SetAddFunction(arrowBackModalSet, modalButtonParentChild);

        // Arrow button
        const arrowBack = createElementFontAwesom();
        setElementAttributes(arrowBack, ['id', 'faArrowBack'], ['class', 'fa-solid ' + 'fa-arrow-left ' + 'cursorPointer']);
        console.log(arrowBack);

        // Button for deleting the gallery
        const modalButton2 = createElementSpan();
        setElementAttributes(modalButton2, ['class', 'modalButton2 ' + 'cursorPointer']);
        modalButton2.textContent = 'Supprimer la galerie';
        const modalButton2ParentChild = modalButtonBox.appendChild(modalButton2);
        SetAddFunction(arrowBackModalSet, modalButton2ParentChild);

        // Arrow function for go back
        const figuresSet = new Set();

        function arrowBackFunction(element) {
          resetFunction(element);

          elementAppenChildFunction(modal, [modalCrossBox]);
          modalCrossBox.classList.add('modalCrossBox');
          modalCrossBox.classList.remove('modalCrossBoxAndArrow');
          setElementAttributes(arrowBack, ['class', 'displayElementFalse']);

          const hiddeInputs = document.querySelector('input');
          setElementAttributes(hiddeInputs, ['class', 'displayElementFalse']);

          modalFigureImgBox.classList.replace('modalFigureImgBoxChangeToSendWork', 'modalFigureImgBox');

          console.log(arrowBackModalSet);

          const modalArray = Array.from(arrowBackModalSet);
          for (let i = 0; i < modalArray.length; i++) {
            modal.appendChild(modalArray[i]);
            console.log(modalArray[i]);
          }

          elementAppenChildFunction(modalTitleBox, [modalTitle]);
          resetFunction(modalButtonBox);
          resetFunction(modalFigureImgBox);

          elementAppendChildMultiple([modalButtonBox, modalButton], [modalButtonBox, modalButton2]);
          modalTitle.textContent = 'Gallerie';
        }

        arrowBack.addEventListener('click', () => {
          arrowBackFunction(modal);
        });

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
              figuresSet.add(modalFigure);
              let figuresSetKeys;
              // elementAppenChildFunction(modalFigureImgBox, [figuresSetKeys]);
              // console.log(figuresSet);

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

                elementAppendChildMultiple([modalZoomSelectedIconBox, modalZoomSelectedIcon], [modalIconBox, modalZoomSelectedIconBox]);
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
              modalButton.addEventListener('click', () => {
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

                setElementAttributes(modalFigureImgDownload, ['for', 'modalFigureImgDownloadIcon'], ['class', 'modalFigureImgDownload ' + 'cursorPointer']);

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

                    setElementAttributes(imagePreview, ['src', modalFigureImgDownloadInputPreview], ['id', 'imagePreview'], ['class', 'imagePreview ' + 'cursorPointer']);
                    imagePreview.classList.replace('displayElementFalse', 'displayElementTrue');

                    modalFigureImgDownloadText.textContent = '';
                    modalFigureImgDownloadText.setAttribute('class', 'displayElementFalse');

                    modalFigureImgDownloadFileType.textContent = '';
                    modalFigureImgDownloadFileType.setAttribute('class', 'displayElementFalse');
                  });
                });

                // Input element for the new work item (SEND)
                const modalFigureImgDownloadInputWorkName = document.createElement('input');
                setElementAttributes(modalFigureImgDownloadInputWorkName, ['type', 'text'], ['class', 'modalFigureImgDownloadInputWorkName ' + 'inputWorkCategory'], ['id', 'title']);

                modalFigureImgDownloadInputWorkCategory.classList.add('modalFigureImgDownloadInputWorkCategory');
                setElementAttributes(modalFigureImgDownloadInputWorkSelect, ['class', 'inputWorkCategory ' + 'cursorPointer']);

                // Avoid multiplication for the work inputs

                const avoidMultiplierSet = new Set();

                SetAddFunction(avoidMultiplierSet, [modalFigureImgDownload, modalFigureImgDownloadInput, imagePreview, modalFigureImgDownloadInputWorkCategory, modalFigureImgDownloadInputWorkName, modalFigureImgDownloadInputWorkSelect]);

                elementAppendChildMultiple([modalFigureImgBox, modalFigureImgDownload], [modalFigureImgBox, modalFigureImgDownloadInputWorkCategory]);

                elementAppendChildMultiple([modalFigureImgDownload, modalFigureImgDownloadInput], [modalFigureImgDownload, imagePreview]);
                elementAppendChildMultiple([modalFigureImgDownload, modalFigureImgDownloadText], [modalFigureImgDownload, modalFigureImgDownloadFileType]);

                elementAppendChildMultiple([modalFigureImgDownloadInputWorkCategory, modalFigureImgDownloadInputWorkName], [modalFigureImgDownloadInputWorkCategory, modalFigureImgDownloadInputWorkSelect]);

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

                elementAppenChildFunction(modalFigureImgDownloadInputWorkCategory, [modalFigureImgDownloadInputWorkSelect]);

                let modalFigureImgBoxChangeToSendWork = document.querySelector('.modalFigureImgBoxChangeToSendWork');

                modalFigureImgBoxChangeToSendWork.addEventListener('click', () => {
                  modalFigureImgDownloadInput.addEventListener('change', () => {
                    let modalFigureImgDownloadIconValuePath = modalFigureImgDownloadInput.value;
                    let modalFigureImgDownloadIconValueCleanPath = modalFigureImgDownloadIconValuePath.split('\\').pop();
                    let modalFigureImgDownloadInputPreview = 'http://localhost:5678/images/' + modalFigureImgDownloadIconValueCleanPath;
                    sessionStorage.setItem('imageUrl', modalFigureImgDownloadInputPreview);
                  });

                  modalFigureImgDownloadInputWorkName.addEventListener('change', () => {
                    let modalFigureImgDownloadInputWorkNameValue = modalFigureImgDownloadInputWorkName.value;
                    sessionStorage.setItem('title', modalFigureImgDownloadInputWorkNameValue);
                  });

                  modalFigureImgDownloadInputWorkSelect.addEventListener('change', () => {
                    let selectedOptionText = modalFigureImgDownloadInputWorkSelect.options[modalFigureImgDownloadInputWorkSelect.selectedIndex].textContent;
                    let selectedOptionValue = modalFigureImgDownloadInputWorkSelect.options[modalFigureImgDownloadInputWorkSelect.selectedIndex].id;
                    sessionStorage.setItem('category', selectedOptionText);
                    sessionStorage.setItem('id', selectedOptionValue);
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

const imageUrl = sessionStorage.getItem('imageUrl');
console.log(imageUrl);
const categoryData = sessionStorage.getItem('category');
console.log(categoryData);
const title = sessionStorage.getItem('title');
console.log(title);

modalButtonSend.addEventListener('click', async () => {
  const formData = new FormData();

  formData.append('imageUrl', imageUrl);
  console.log(formData.get('imageUrl'));

  formData.append('title', title);
  console.log(formData.get('title'));

  formData.append('category', categoryData);
  console.log(formData.get('category'));

  // Fetch pour l'envoi des données
  try {
    const response = await fetch('http://localhost:5678/api/works/', {
      method: 'POST',
      headers: {
        Authorization: tokenWithoutQuotes,
        'Content-type': 'multipart/form-data',
      },
      body: formData,
    });

    if (response.ok) {
      alert('Travail envoyé avec succès !');
      // sessionStorageRemoveMultiple(elementsToRemove);
    } else {
      alert("Erreur lors de l'envoi du travail");
      // sessionStorageRemoveMultiple(elementsToRemove);
    }
  } catch (error) {
    console.error(error);
  }
});

console.log(sessionStorage);
