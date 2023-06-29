const token = 'Bearer ' + sessionStorage.getItem('token');
const tokenWithoutQuotes = token.replace(/"/g, '');
let api = 'http://localhost:5678/api/works';

function createElement(element) {
  return document.createElement('' + element);
}

function addClass(element, ...classes) {
  element.classList.add(...classes);
}

function replaceClass(element, ...classes) {
  element.classList.replace(...classes);
}

function hideElement(element) {
  element.style.display = 'none';
}
function showElement(element) {
  element.style.display = 'flex';
}

function setElementAttributes(element, ...attributes) {
  for (const attribute of attributes) {
    const [name, value] = attribute;
    element.setAttribute(name, value);
  }
}

function resetElement(element) {
  element.innerHTML = '';
}

function pushToArray(array, item) {
  array.push(item);
}

function addToSet(set, value) {
  set.add(value);
}

function removeSessionStorageItems(elements) {
  for (const element of elements) {
    sessionStorage.removeItem(element);
  }
}

const ButtonSend = createElement('button');

const arrowBackModalSet = new Set();

const getHeader = document.querySelector('header');
const getBody = document.querySelector('body');
const headTarget = document.querySelector('head');
const fontAwesomeScript = document.createElement('script');
const userLoginTools = createElement('div');
const userEditionModeBox = createElement('div');
const userEditionMode = createElement('span');
const userEditionModeIcon = createElement('i');
const userEditionModeBox2 = createElement('div');
const userEditionMode2 = createElement('span');
const userEditionModeIcon2 = createElement('i');
const userEditionModeBox3 = createElement('div');
const userEditionMode3 = createElement('span');
const userEditionModeIcon3 = createElement('i');
const publishChange = createElement('span');

function ifLogged() {
  for (let i = 0; i < sessionStorage.length; i++) {
    if (sessionStorage.key(i) === 'token') {
      headTarget.appendChild(fontAwesomeScript);
      setElementAttributes(fontAwesomeScript, ['src', 'https://kit.fontawesome.com/3fa10e7671.js'], ['crossorigin', 'anonymous']);

      setElementAttributes(userLoginTools, ['id', 'userLoginTools'], ['class', 'userLoginTools']);
      getBody.appendChild(userLoginTools);

      setElementAttributes(userEditionModeBox, ['id', 'userEditionModeBox'], ['class', 'userEditionModeBox']);
      userLoginTools.appendChild(userEditionModeBox);
      getBody.insertBefore(userLoginTools, getHeader);

      setElementAttributes(userEditionMode, ['id', 'userEditionMode'], ['class', 'userEditionMode cursorPointer']);
      userEditionMode.textContent = 'Mode édition';
      userEditionModeBox.appendChild(userEditionMode);

      setElementAttributes(userEditionModeIcon, ['id', 'userEditionModeIcon'], ['class', 'fa-regular fa-pen-to-square cursorPointer']);
      userEditionModeBox.appendChild(userEditionModeIcon);

      setElementAttributes(userEditionModeBox2, ['id', 'userEditionModeBox2'], ['class', 'userEditionModeBox2']);
      sectionPortfolio.insertBefore(userEditionModeBox2, sectionPortfolioH2);
      userEditionModeBox2.appendChild(sectionPortfolioH2);

      setElementAttributes(userEditionMode2, ['id', 'userEditionMode2'], ['class', 'userEditionMode2 cursorPointer']);
      userEditionMode2.textContent = 'modifier';
      userEditionModeBox2.appendChild(userEditionMode2);

      setElementAttributes(userEditionModeIcon2, ['id', 'userEditionModeIcon2'], ['class', 'fa-regular fa-pen-to-square cursorPointer']);
      userEditionModeBox2.appendChild(userEditionModeIcon2);

      introductionFigure.appendChild(userEditionModeBox3);

      setElementAttributes(userEditionMode3, ['id', 'userEditionMode3'], ['class', 'userEditionMode3 cursorPointer']);
      userEditionModeBox3.setAttribute('id', 'userEditionModeBox3');
      userEditionMode3.textContent = 'modifier';
      userEditionModeBox3.appendChild(userEditionMode3);

      setElementAttributes(userEditionModeIcon3, ['id', 'userEditionModeIcon3'], ['class', 'fa-regular fa-pen-to-square cursorPointer']);
      userEditionModeBox3.appendChild(userEditionModeIcon3);

      setElementAttributes(publishChange, ['id', 'publishChange'], ['class', 'publishChange cursorPointer']);
      publishChange.textContent = 'publier les changements';
      userLoginTools.appendChild(publishChange);
    }
  }
}

// Modal dialog
let modalCreated = false;
const modalBox = document.createElement('form');
const modal = document.createElement('modal');
const modalParentChild = modalBox.appendChild(modal);
const modalCrossBox = createElement('div');
const modalCross = createElement('i');

ifLogged(modal.appendChild(modalCrossBox), modalCrossBox.appendChild(modalCross), userEditionMode.addEventListener('click', modalCondition));
function modalCondition() {
  if (!modalCreated) {
    addClass(modalCrossBox, 'modalCrossBox');
    addClass(modalBox, 'modalBoxModal');
    modal.setAttribute('id', 'modal1');
    getBody.appendChild(modalBox);
    getBody.insertBefore(modalBox, getHeader);
    setElementAttributes(modalCross, ['id', 'modalCross'], ['class', 'fa-solid fa-xmark cursorPointer']);
  }
  modalCreated = true;
}

const modalTitleBox = createElement('div');
const modalTitle = document.createElement('h2');
const imageBox = createElement('div');
const modalSeparator = createElement('div');
const buttonBox = createElement('div');
const buttonAddWork = createElement('span');
const arrowBack = createElement('i');
const buttonDeleteGallery = createElement('span');

modalTitleBox.classList.add('modalTitleBox');
const modalTitleBoxParentChild = modal.appendChild(modalTitleBox);
addToSet(arrowBackModalSet, modalTitleBoxParentChild);

modalTitle.textContent = 'Galerie Photo';
const modalTitleParentChild = modalTitleBox.appendChild(modalTitle);
addToSet(arrowBackModalSet, modalTitleParentChild);

imageBox.classList.add('imageBox');
const modalFigureImgBoxParentChild = modal.appendChild(imageBox);
addToSet(arrowBackModalSet, modalFigureImgBoxParentChild);

modalSeparator.classList.add('modalSeparator');
const modalSeparatorParentChild = modal.appendChild(modalSeparator);
addToSet(arrowBackModalSet, modalSeparatorParentChild);

buttonBox.classList.add('ButtonBox');
const modalButtonBoxParentChild = modal.appendChild(buttonBox);
addToSet(arrowBackModalSet, modalButtonBoxParentChild);

setElementAttributes(buttonAddWork, ['class', 'buttonAddWork cursorPointer']);
buttonAddWork.textContent = 'Ajouter une photo';
const modalButtonForSet = buttonBox.appendChild(buttonAddWork);
addToSet(arrowBackModalSet, modalButtonForSet);

setElementAttributes(arrowBack, ['id', 'faArrowBack'], ['class', 'fa-solid fa-arrow-left cursorPointer']);

setElementAttributes(buttonDeleteGallery, ['class', 'ButtonDeleteGallery cursorPointer']);
buttonDeleteGallery.textContent = 'Supprimer galerie';
const deleteGalleryForSet = buttonBox.appendChild(buttonDeleteGallery);
addToSet(arrowBackModalSet, deleteGalleryForSet);

function redirectToFrontEnd() {
  window.location.href = '/FrontEnd';
}

function imageBoxChange() {
  imageBox.classList.replace('ImgBox__ChangeToSendWork', 'imageBox');
}

function arrowBackAdd() {
  modalCrossBox.appendChild(arrowBack);
}

modalCross.addEventListener('click', () => redirectToFrontEnd());
userEditionMode.addEventListener('click', () => modalCondition());

// Arrow function for go back
function arrowBackFunction(element) {
  resetElement(element);
  modal.appendChild(modalCrossBox);
  addClass(modalCrossBox, 'modalCrossBox');
  imageBoxChange();
  modalCrossBox.classList.replace('modalCrossBoxAndArrow', 'modalCrossBox');
  arrowBack.style.visibility = 'hidden';
  const hiddenInputs = document.querySelector('input');
  setElementAttributes(hiddenInputs, ['class', 'displayElementFalse']);
  const modalArray = Array.from(arrowBackModalSet);
  for (let i = 0; i < modalArray.length; i++) {
    modal.appendChild(modalArray[i]);
  }
  modalTitleBox.appendChild(modalTitle);
  resetElement(buttonBox);
  resetElement(imageBox);
  buttonBox.appendChild(buttonAddWork);
  buttonBox.appendChild(buttonDeleteGallery);
  modalTitle.textContent = 'Galerie photo';
}

arrowBack.addEventListener('click', () => {
  arrowBackFunction(modal, fetchWorks());
});
// buttonAddWork.addEventListener('click', () => {
//   arrowBack.style.visibility = 'visible';
// });

let FigureElement = document.createElement('figure');
let ImgElement = document.createElement('img');
let FigureText = document.createElement('p');
let IconBox = createElement('div');
let TrashBox = createElement('div');
let TrashElement = createElement('i');

const figuresSet = new Set();

userEditionMode.addEventListener('click', fetchWorks);

function fetchWorks() {
  fetch(api)
    .then((response) => response.json())
    .then((works) => {
      works.forEach((work) => {
        createFigureElements(work.imageUrl, work.id);
      });
    });
}

function createFigureElements(imageUrl, id) {
  FigureElement = document.createElement('figure');
  ImgElement = document.createElement('img');
  FigureText = document.createElement('p');
  IconBox = createElement('div');
  TrashBox = createElement('div');
  TrashElement = createElement('i');

  imageBox.appendChild(FigureElement);
  addToSet(figuresSet, FigureElement);

  setElementAttributes(ImgElement, ['src', imageUrl], ['id', id], ['class', 'ImageElement cursorPointer']);
  FigureElement.appendChild(ImgElement);

  setElementAttributes(FigureText, ['class', 'FigureText cursorPointer']);
  FigureElement.appendChild(FigureText).textContent = 'éditer';

  addClass(IconBox, 'IconBox');
  FigureElement.appendChild(IconBox);

  setElementAttributes(TrashBox, ['id', ImgElement.id], ['class', 'TrashBox']);
  IconBox.appendChild(TrashBox);

  setElementAttributes(TrashElement, ['id', 'TrashElement'], ['class', 'fa-solid fa-trash-can cursorPointer']);
  TrashBox.appendChild(TrashElement);
}

// Event click for trash work
TrashBox.addEventListener('click', deleteWork);

async function deleteWork() {
  const workId = parseInt(TrashBox.id);

  try {
    const response = await fetch(api + `/${workId}`, {
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
}

// Font Awesome zoom selection
const SelectedBox = createElement('div');
addClass(SelectedBox, 'SelectedBox');
IconBox.appendChild(SelectedBox);

const SelectedElement = createElement('i');
setElementAttributes(SelectedElement, ['id', 'SelectedElement'], ['class', 'fa-solid fa-maximize cursorPointer']);

// // Array avoid multiple icon + Event listener mouse events (Enter and Leave)
const SelectedElementArray = [];
hideElement(SelectedBox);

FigureElement.addEventListener('mouseenter', showElement(SelectedBox));

FigureElement.addEventListener('mouseleave', hideElement(SelectedBox));

const InputBoxForWork = createElement('div');
const InputWorkSelect = document.createElement('select');
const InputWorkOption = document.createElement('option');

let LabelElement = document.createElement('label');
let InputFile = document.createElement('input');
let InputFileText = createElement('span');
let InputFileType = createElement('span');
let imagePreview = document.createElement('img');
let InputWorkTitle = document.createElement('input');

// --------------- Modal Input ---------------//

buttonAddWork.addEventListener('click', handleAddWork);

function handleAddWork() {
  resetElement(buttonBox);
  buttonAddWork.replaceWith(ButtonSend);
  setElementAttributes(ButtonSend, ['id', 'send'], ['class', 'buttonAddWork cursorPointer']);
  ButtonSend.textContent = 'Ajout photo';
  buttonBox.appendChild(ButtonSend);

  modalCrossBox.appendChild(arrowBack);
  replaceClass(modalCrossBox, 'modalCrossBox', 'modalCrossBoxAndArrow');

  modalTitle.textContent = 'Ajout photo';

  resetElement(imageBox);
  replaceClass(imageBox, 'imageBox', 'ImgBox__ChangeToSendWork');

  setElementAttributes(InputFile, ['id', 'InputFile'], ['class', 'fa-image fa-regular']);
  InputFile.type = 'file';

  setElementAttributes(LabelElement, ['for', 'InputFile'], ['id', 'LabelElement'], ['class', 'LabelElement cursorPointer']);

  InputFileText.setAttribute('id', 'InputFileText');
  InputFileText.textContent = '+ Ajouter photo';

  InputFileType.setAttribute('id', 'InputFileType');
  InputFileType.textContent = 'jpg, png: 4mo max';

  imagePreview.setAttribute('class', 'displayElementFalse');

  imageBox.appendChild(LabelElement);

  // Input element for the new work item (SEND)

  setElementAttributes(InputWorkTitle, ['type', 'text'], ['class', 'InputWorkTitle inputWorkCategory'], ['id', 'title']);

  InputBoxForWork.classList.add('InputBoxForWork');
  setElementAttributes(InputWorkSelect, ['class', 'inputWorkCategory cursorPointer']);

  // Avoid multiplication for the work inputs

  const avoidMultiplierSet = new Set();

  addToSet(avoidMultiplierSet, [LabelElement, InputFile, imagePreview, InputBoxForWork, InputWorkTitle, InputWorkSelect]);

  imageBox.appendChild(LabelElement);
  imageBox.appendChild(InputBoxForWork);

  LabelElement.appendChild(InputFile);
  LabelElement.appendChild(imagePreview);
  LabelElement.appendChild(InputFileText);
  LabelElement.appendChild(InputFileType);

  InputBoxForWork.appendChild(InputWorkTitle);
  InputBoxForWork.appendChild(InputWorkSelect);

  const uniqueCategories = new Set();
  const addedOptions = new Set();

  fetch(api)
    .then((response) => response.json())
    .then((works) => {
      works.forEach((work) => {
        works.forEach((work) => {
          uniqueCategories.add(work.categoryId);
        });

        let matchingWork;
        let option;

        uniqueCategories.forEach((categoryId) => {
          matchingWork = works.find((work) => work.categoryId === categoryId);

          if (!addedOptions.has(categoryId)) {
            option = InputWorkOption.cloneNode();
            option.setAttribute('id', matchingWork.categoryId);
            option.textContent = matchingWork.category.name;

            InputWorkSelect.appendChild(option);

            addedOptions.add(categoryId);
          }
        });
      });
    });
  arrowBack.style.visibility = 'visible';
}

let imagePreviewPath;
let imagePreviewCleanPath;
let imagePreviewGetPath;

const formData = new FormData();

function handleImageInputChange() {
  const InputFileById = document.getElementById('InputFile');
  InputFileById.addEventListener('change', () => {
    const ImagePreview = document.getElementById('imagePreview');

    const imagePreviewPath = InputFileById.value;
    const imagePreviewCleanPath = imagePreviewPath.split('\\').pop();
    const imagePreviewGetPath = api + '/images/' + imagePreviewCleanPath;
    ImagePreview.setAttribute('src', '/Frontend/assets/images/' + imagePreviewCleanPath);
    replaceClass(ImagePreview, 'displayElementFalse', 'displayElementTrue');

    InputFileById.classList.add('displayElementFalse');

    const InputFileText = document.getElementById('InputFileText');
    InputFileText.textContent = '';
    InputFileText.classList.add('displayElementFalse');

    InputFileType.classList.add('displayElementFalse');
    formData.append('imageUrl', imagePreviewGetPath);
  });
}
function handleInputWorkTitleChange() {
  InputWorkTitle.addEventListener('change', () => {
    const title = InputWorkTitle.value;
    formData.append('title', title);
  });
}
function handleInputWorkSelectChange() {
  InputWorkSelect.addEventListener('change', () => {
    const categoryData = InputWorkSelect.options[InputWorkSelect.selectedIndex].value;
    formData.append('category', categoryData);
  });
}

InputBoxForWork.appendChild(InputWorkSelect);

setElementAttributes(imagePreview, ['id', 'imagePreview'], ['class', 'imagePreview cursorPointer']);

imageBox.addEventListener('click', handleImageInputChange);
handleInputWorkTitleChange();
handleInputWorkSelectChange();

function handleButtonSendClick() {
  ButtonSend.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log(formData.get('title'));
    console.log(formData.get('imageUrl'));
    console.log(formData.get('category'));
    try {
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          Authorization: tokenWithoutQuotes,
        },
        body: formData,
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
}

handleButtonSendClick();
