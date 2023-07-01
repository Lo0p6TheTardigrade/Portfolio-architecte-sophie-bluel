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

const modalAddWork = document.getElementById('modal__add_work');
const modalDeleteWork = document.getElementById('modal__delete_work');

const buttonAddWork = document.getElementById('button__add__work');
const buttonDeleteAllWork = document.getElementById('button__delete__all__work');
const buttonSendWork = document.getElementById('button__send__work');

const getHeader = document.querySelector('header');
const getBody = document.querySelector('body');
const headTarget = document.querySelector('head');
const fontAwesomeScript = document.createElement('script');

const adminToolBox = document.getElementById('admin__tool__box');
const adminToolButtonBox = document.getElementById('admin__tool__button__box');
const adminToolButton = document.getElementById('admin__tool__button');
const adminToolButtonIcon = createElement('i');

const portraitEditButtonBox = createElement('div');
const portraitButton = createElement('span');
const portraitButtonIcon = createElement('i');

const titleEditButtonBox = createElement('div');
const titleButton = createElement('span');
const titleButtonIcon = createElement('i');

const publishChange = document.getElementById('admin__publish__button');

console.log(ButtonSend);

console.log(arrowBackModalSet);
console.log(modalAddWork);
console.log(modalDeleteWork);

console.log(getHeader);
console.log(getBody);
console.log(headTarget);
console.log(fontAwesomeScript);

console.log(adminToolBox);
console.log(adminToolButtonBox);
console.log(adminToolButton);
console.log(adminToolButtonIcon);
console.log(portraitEditButtonBox);
console.log(portraitButton);
console.log(portraitButtonIcon);
console.log(titleEditButtonBox);
console.log(titleButton);
console.log(titleButtonIcon);
console.log(publishChange);

adminToolBox.classList.add('displayElementFalse');

function buttonLogin() {
  const buttonLoginSectionTitle = document.getElementById('login__section__title');
  buttonLoginSectionTitle.addEventListener('click', () => ifLogged);
  adminToolBox.classList.remove('displayElementFalse');
  console.log(buttonLoginSectionTitle);
}
function ifLogged() {
  for (let i = 0; i < sessionStorage.length; i++) {
    if (sessionStorage.key(i) === 'token') {
      headTarget.appendChild(fontAwesomeScript);
      setElementAttributes(fontAwesomeScript, ['src', 'https://kit.fontawesome.com/3fa10e7671.js'], ['crossorigin', 'anonymous']);

      setElementAttributes(adminToolBox, ['class', 'adminToolBox']);
      getBody.appendChild(adminToolBox);

      setElementAttributes(adminToolButtonBox, ['class', 'adminToolButtonBox']);
      adminToolBox.appendChild(adminToolButtonBox);
      getBody.insertBefore(adminToolBox, getHeader);

      setElementAttributes(adminToolButton, ['class', 'adminToolButton cursorPointer']);
      adminToolButton.textContent = 'Mode édition';
      adminToolButtonBox.appendChild(adminToolButton);

      setElementAttributes(adminToolButtonIcon, ['id', 'admin__tool__button__icon'], ['class', 'fa-regular fa-pen-to-square cursorPointer']);

      setElementAttributes(portraitEditButtonBox, ['id', 'portraitEditButtonBox'], ['class', 'portraitEditButtonBox']);
      sectionPortfolio.insertBefore(portraitEditButtonBox, sectionPortfolioH2);
      portraitEditButtonBox.appendChild(sectionPortfolioH2);

      setElementAttributes(portraitButton, ['id', 'portraitButton'], ['class', 'portraitButton cursorPointer']);
      portraitButton.textContent = 'modifier';
      portraitEditButtonBox.appendChild(portraitButton);

      setElementAttributes(portraitButtonIcon, ['id', 'portraitButtonIcon'], ['class', 'fa-regular fa-pen-to-square cursorPointer']);
      portraitEditButtonBox.appendChild(portraitButtonIcon);

      introductionFigure.appendChild(titleEditButtonBox);

      setElementAttributes(titleButton, ['id', 'titleButton'], ['class', 'titleButton cursorPointer']);
      titleEditButtonBox.setAttribute('id', 'titleEditButtonBox');
      titleButton.textContent = 'modifier';
      titleEditButtonBox.appendChild(titleButton);

      setElementAttributes(titleButtonIcon, ['id', 'titleButtonIcon'], ['class', 'fa-regular fa-pen-to-square cursorPointer']);
      titleEditButtonBox.appendChild(titleButtonIcon);

      setElementAttributes(publishChange, ['class', 'publishChange cursorPointer']);
      publishChange.textContent = 'publier les changements';
      adminToolBox.appendChild(publishChange);
    }
  }
}

// Modal dialog
let modalCreated = false;
const modalCrossBox = document.getElementById('modal__cross__box');
const modalCross = createElement('i');

ifLogged(
  modalCrossBox.appendChild(modalCross),
  adminToolButton.addEventListener('click', () => {
    modalCondition;
    modalDeleteWork.classList.remove('displayElementFalse');
  })
);
const modal = document.getElementById('modal');
function modalCondition() {
  if (!modalCreated) {
    addClass(modalCrossBox, 'modalCrossBox');
    addClass(modal, 'modalBoxModal');
    setElementAttributes(modalCross, ['id', 'modalCross'], ['class', 'fa-solid fa-xmark cursorPointer']);
  }
  modalCreated = true;
}

const arrowBack = createElement('i');
setElementAttributes(arrowBack, ['id', 'modal__arrow__back'], ['class', 'fa-solid fa-arrow-left cursorPointer']);

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
adminToolButton.addEventListener('click', () => modalCondition());

// Arrow function for go back
function arrowBackFunction(element) {
  resetElement(element);
  modal.appendChild(modalCrossBox);
  addClass(modalCrossBox, 'modalCrossBox');
  imageBoxChange();
  modalCrossBox.classList.replace('modalCrossBoxAndArrow', 'modalCrossBox');

  const hiddenInputs = document.querySelector('input');
  setElementAttributes(hiddenInputs, ['class', 'displayElementFalse']);
  const modalArray = Array.from(arrowBackModalSet);
  for (let i = 0; i < modalArray.length; i++) {
    modal.appendChild(modalArray[i]);
  }
  modalTitleBox.appendChild(modalTitle);
  resetElement(buttonBox);
  resetElement(imageBox);
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
let SelectedBox = createElement('div');
let SelectedElement = createElement('i');

const figuresSet = new Set();

adminToolButton.addEventListener('click', fetchWorks);

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
  SelectedBox = createElement('div');
  SelectedElement = createElement('i');

  imageBox.appendChild(FigureElement);
  addToSet(figuresSet, FigureElement);

  setElementAttributes(ImgElement, ['src', imageUrl], ['id', id], ['class', 'ImageElement cursorPointer']);
  FigureElement.appendChild(ImgElement);

  setElementAttributes(FigureText, ['class', 'FigureText cursorPointer']);
  FigureElement.appendChild(FigureText).textContent = 'éditer';

  addClass(IconBox, 'IconBox');
  setElementAttributes(IconBox, ['id', 'icon__box']);
  FigureElement.appendChild(IconBox);

  setElementAttributes(TrashBox, ['id', 'trash__box'], ['data-id', ImgElement.id], ['class', 'trash__box']);
  IconBox.appendChild(TrashBox);

  setElementAttributes(TrashElement, ['id', 'trash__element'], ['class', 'fa-solid fa-trash-can cursorPointer']);
  TrashBox.appendChild(TrashElement);

  IconBox.appendChild(SelectedBox);
  setElementAttributes(SelectedBox, ['id', 'selected__box'], ['data-id', ImgElement.id], ['class', 'selected__box']);

  setElementAttributes(SelectedElement, ['id', 'selected__element'], ['class', 'fa-solid fa-maximize cursorPointer']);
  SelectedBox.appendChild(SelectedElement);
}

// // Array avoid multiple icon + Event listener mouse events (Enter and Leave)
const SelectedElementArray = [];
// hideElement(SelectedBox);

// FigureElement.addEventListener('mouseenter', showElement(SelectedBox));

// FigureElement.addEventListener('mouseleave', hideElement(SelectedBox));

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
  // resetElement(buttonBox);
  const uniqueCategories = new Set();
  const addedOptions = new Set();
  modalDeleteWork.classList.add('displayElementFalse');
  modalAddWork.classList.remove('displayElementFalse');

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
}

let imagePreviewPath;
let imagePreviewCleanPath;

const formData = new FormData();
let imagePreviewGetPath;

function handleImageInputChange() {
  const InputFileById = document.getElementById('InputFile');
  InputFileById.addEventListener('change', () => {
    const ImagePreview = document.getElementById('imagePreview');

    const imagePreviewPath = InputFileById.value;
    const imagePreviewCleanPath = imagePreviewPath.split('\\').pop();
    imagePreviewGetPath = api + '/images/' + imagePreviewCleanPath;

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
    let categoryData = InputWorkSelect.options[InputWorkSelect.selectedIndex].id;
    formData.append('categoryId', categoryData);
  });
}
console.log(InputWorkSelect);
InputBoxForWork.appendChild(InputWorkSelect);

setElementAttributes(imagePreview, ['id', 'imagePreview'], ['class', 'imagePreview cursorPointer']);

const imageBox = document.getElementById('image_box');
imageBox.addEventListener('click', handleImageInputChange);
handleInputWorkTitleChange();
handleInputWorkSelectChange();

// function handleButtonSendClick() {
//   console.log(ButtonSend);
//   ButtonSend.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const form = e.target;

//     console.log(form);
//     const formDataToSend = new FormData(form);

//     // formDataToSend.append('imageUrl', imagePreviewGetPath);
//     // formDataToSend.append('title', InputWorkTitle.value);
//     // formDataToSend.append('categoryId', InputWorkSelect.options[InputWorkSelect.selectedIndex].id);

//     // console.log(formDataToSend.get('title'));
//     // console.log(formDataToSend.get('imageUrl'));
//     // console.log(formDataToSend.get('categoryId'));
//     const userToken = sessionStorage.getItem('token');
//     const headers = new Headers();
//     headers.append('Authorization', tokenWithoutQuotes);
//     // console.log(tokenWithoutQuotes);
//     try {
//       const response = await fetch('http://localhost:5678/api/works', {
//         method: 'POST',
//         headers: headers,
//         body: formDataToSend,
//       });

//       if (response.ok) {
//         alert('Travail envoyé avec succès !');
//       } else {
//         alert("Erreur lors de l'envoi du travail " + '(Code erreur = ' + response.status + ')');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   });
// }

// handleButtonSendClick();
buttonSendWork.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  console.log(formData.get(''));

  fetch('http://localhost:5678/api/works', {
    method: 'POST',
    headers: {
      Authorization: tokenWithoutQuotes,
    },
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        alert('Le travail a été ajouté avec succès !');
      } else {
        alert("Erreur lors de l'ajout du travail");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
