const token = 'Bearer ' + sessionStorage.getItem('token');
const tokenWithoutQuotes = token.replace(/"/g, '');
let api = 'http://localhost:5678/api/works';
let apiCategories = 'http://localhost:5678/api/categories';

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
const modalCrossArrowBox = document.getElementById('modal__cross__and__arrow__box');
const modalCross = createElement('i');

ifLogged(
  modalCrossBox.appendChild(modalCross),
  adminToolButton.addEventListener('click', () => {
    if (!modalCreated) {
      addClass(modalCrossBox, 'modalCrossBox');
      addClass(modal, 'modalBoxModal');
      setElementAttributes(modalCross, ['id', 'modalCross'], ['class', 'fa-solid fa-xmark cursorPointer']);
    }
    modalCreated = true;
    modalDeleteWork.classList.remove('displayElementFalse');
  })
);
const modal = document.getElementById('modal');
// function modalCondition() {

// }

const arrowBack = createElement('i');
setElementAttributes(arrowBack, ['id', 'modal__arrow__back'], ['class', 'fa-solid fa-arrow-left cursorPointer']);

function redirectToFrontEnd() {
  window.location.href = '/FrontEnd';
}

function imageBoxChange() {
  imageBox.classList.replace('ImgBox__ChangeToSendWork', 'imageBox');
}

// function arrowBackAdd() {
//   modalCrossArrowBox.appendChild(arrowBack);
//   modalCrossArrowBox.appendChild(modalCross);
// }

modalCross.addEventListener('click', () => redirectToFrontEnd());
adminToolButton.addEventListener('click', () => ifLogged);

// Arrow function for go back
function arrowBackFunction() {
  // modal.appendChild(modalCrossBox);
  // addClass(modalCrossBox, 'modalCrossBox');
  imageBoxChange();
  // modalCrossBox.classList.replace('modalCrossBoxAndArrow', 'modalCrossBox');

  const hiddenInputs = document.querySelector('input');
  setElementAttributes(hiddenInputs, ['class', 'displayElementFalse']);
  // const modalArray = Array.from(arrowBackModalSet);
  // for (let i = 0; i < modalArray.length; i++) {
  //   modal.appendChild(modalArray[i]);
  // }
  // modalTitleBox.appendChild(modalTitle);
  // resetElement(buttonBox);
  // resetElement(imageBox);
  // modalTitle.textContent = 'Galerie photo';
  // modalDeleteWork.classList.replace('displayElementFalse', 'displayElementTrue');
  modalDeleteWork.classList.remove('displayElementFalse');
  modalAddWork.classList.add('displayElementFalse');
  modalCrossBox.appendChild(modalCross);
}

arrowBack.addEventListener('click', () => {
  arrowBackFunction();
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
let worksData;

adminToolButton.addEventListener('click', fetchWorks);

async function fetchWorks() {
  fetch(api)
    .then((response) => response.json())
    .then((works) => {
      works.forEach((work) => {
        createFigureElements(work.imageUrl, work.id);
      });
    });
}
const InputWorkOption = document.createElement('option');
const InputWorkSelect = document.getElementById('select');
let getCategoryID;
let getCategoryName;
const categorySet = new Set();

fetch(apiCategories)
  .then((response) => response.json())
  .then((categories) => {
    categorySet.add(categories);
    console.log(categorySet);
    Array.from(categorySet).forEach((categoryItem) => {
      for (let i = 0; i < categoryItem.length; i++) {
        const category = categoryItem[i];
        console.log(category);
        getCategoryID = category.id;
        getCategoryName = category.name;
        const option = InputWorkOption.cloneNode(); // Clone the option element
        option.value = getCategoryID;
        option.textContent = getCategoryName;
        InputWorkSelect.appendChild(option);
      }
    });
  });

const imageBox = document.getElementById('image_box');

function createFigureElements(imageUrl, id) {
  FigureElement = document.createElement('figure');
  ImgElement = document.createElement('img');
  FigureText = document.createElement('p');
  IconBox = document.createElement('div');
  TrashBox = document.createElement('div');
  TrashElement = document.createElement('i');
  const FigureSelectedBox = document.createElement('div');
  const FigureSelectedElement = document.createElement('i');

  imageBox.appendChild(FigureElement);

  setElementAttributes(ImgElement, ['src', imageUrl], ['id', id], ['class', 'ImageElement cursorPointer'], ['value', getCategoryID]);
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

  const SelectedBox = document.createElement('div');
  const SelectedElement = document.createElement('i');
  IconBox.appendChild(SelectedBox);
  setElementAttributes(SelectedBox, ['id', 'selected__box'], ['data-id', ImgElement.id], ['class', 'selected__box']);

  setElementAttributes(SelectedElement, ['id', 'selected__element'], ['class', 'fa-solid fa-maximize cursorPointer']);
  addClass(SelectedBox, 'displayElementFalse');
  SelectedBox.appendChild(SelectedElement);

  FigureElement.addEventListener('mouseenter', () => {
    SelectedBox.classList.remove('displayElementFalse');
  });
  FigureElement.addEventListener('mouseleave', () => {
    SelectedBox.classList.add('displayElementFalse');
  });

  TrashBox.addEventListener('click', () => {
    console.log(TrashBox);
    console.log('trash clicked');
    deleteWork();
    console.log(TrashElement);
  });
}

async function deleteWork() {
  const workId = parseInt(TrashBox.getAttribute('data-id'));

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

const InputFileById = document.getElementById('image__file');
const ImagePreview = document.getElementById('image__preview');

ImagePreview.classList.add('displayElementFalse');

const InputBoxForWork = createElement('div');

let LabelElement = document.createElement('label');
let InputFile = document.getElementById('image__file');
const InputFileText = document.getElementById('input__file__text');
let InputFileType = document.getElementById('input__file__type');
let imagePreview = document.getElementById('image__preview');
let InputWorkTitle = document.getElementById('work__title');

// --------------- Modal Input ---------------//
buttonAddWork.addEventListener('click', handleAddWork);

function handleAddWork() {
  modalDeleteWork.classList.add('displayElementFalse');
  modalAddWork.classList.remove('displayElementFalse');
  // arrowBackAdd();
  modalCrossArrowBox.appendChild(arrowBack);
  modalCrossArrowBox.appendChild(modalCross);
}

async function handleImageInputChange(InputFileById) {
  const [file] = InputFileById.files;
  if (file) {
    imagePreview.src = URL.createObjectURL(file);
  }

  ImagePreview.classList.remove('displayElementFalse');

  InputFileById.classList.add('displayElementFalse');
  InputFileById.name = 'image';
  InputFileById.accept = '.jpg, .png, .jpeg, .webp';

  InputFileText.textContent = '';
  InputFileText.classList.add('displayElementFalse');

  InputFileType.classList.add('displayElementFalse');
}

InputFileById.addEventListener('change', () => {
  handleImageInputChange(InputFileById);
});

buttonSendWork.addEventListener('click', (e) => {
  handleFormSubmit(InputFileById, InputWorkTitle, InputWorkSelect);
  e.preventDefault();
});

async function handleFormSubmit(InputFileById, InputWorkTitle, InputWorkSelect) {
  const formData = new FormData();
  const newImage = InputFileById.files[0];
  const newTitle = InputWorkTitle.value;
  const newCategory = InputWorkSelect.value;
  formData.append('image', newImage);
  formData.append('title', newTitle);
  formData.append('category', newCategory);

  console.log(newImage, newTitle, newCategory);

  const response = await fetch('http://localhost:5678/api/works', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      Authorization: tokenWithoutQuotes,
    },
    body: formData,
  });
  if (response.ok) {
    alert('Le travail a été ajouté avec succès !');
    worksData = await fetchWorks();
  } else {
    alert("Erreur lors de l'ajout du travail " + '(Code erreur = ' + response.status + ')');
  }
}
