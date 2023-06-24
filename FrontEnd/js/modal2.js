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

const ButtonSend = createElementSpan();

const arrowBackModalSet = new Set();

const getHeader = document.querySelector('header');
const getBody = document.querySelector('body');
const headTarget = document.querySelector('head');
const fontAwesomeScript = document.createElement('script');
const userLoginTools = createElementDiv();
const userEditionModeBox = createElementDiv();
const userEditionMode = createElementSpan();
const userEditionModeIcon = createElementFontAwesom();
const userEditionModeBox2 = createElementDiv();
const userEditionMode2 = createElementSpan();
const userEditionModeIcon2 = createElementFontAwesom();
const userEditionModeBox3 = createElementDiv();
const userEditionMode3 = createElementSpan();
const userEditionModeIcon3 = createElementFontAwesom();
const publishChange = createElementSpan();

for (let i = 0; i < sessionStorage.length; i++) {
  if (sessionStorage.key(i) === 'token') {
    headTarget.appendChild(fontAwesomeScript);
    fontAwesomeScript.setAttribute('src', 'https://kit.fontawesome.com/3fa10e7671.js');
    fontAwesomeScript.setAttribute('crossorigin', 'anonymous');

    setElementAttributes(userLoginTools, ['id', 'userLoginTools'], ['class', 'userLoginTools']);
    getBody.insertBefore(userLoginTools, getHeader);

    setElementAttributes(userEditionModeBox, ['id', 'userEditionModeBox'], ['class', 'userEditionModeBox']);
    userLoginTools.appendChild(userEditionModeBox);

    setElementAttributes(userEditionMode, ['id', 'userEditionMode'], ['class', 'userEditionMode ' + 'cursorPointer']);
    userEditionMode.textContent = 'Mode édition';
    userEditionModeBox.appendChild(userEditionMode);

    setElementAttributes(userEditionModeIcon, ['id', 'userEditionModeIcon'], ['class', 'cursorPointer']);
    faPenIconClass(userEditionModeIcon);
    userEditionModeBox.appendChild(userEditionModeIcon);

    setElementAttributes(userEditionModeBox2, ['id', 'userEditionModeBox2'], ['class', 'userEditionModeBox2']);
    sectionPortfolio.insertBefore(userEditionModeBox2, sectionPortfolioH2);
    userEditionModeBox2.appendChild(sectionPortfolioH2);

    setElementAttributes(userEditionMode2, ['id', 'userEditionMode2'], ['class', 'userEditionMode2 ' + 'cursorPointer']);
    userEditionMode2.textContent = 'Modifier';
    userEditionModeBox2.appendChild(userEditionMode2);

    setElementAttributes(userEditionModeIcon2, ['id', 'userEditionModeIcon2'], ['class', 'cursorPointer']);
    faPenIconClass(userEditionModeIcon2);
    userEditionModeBox2.appendChild(userEditionModeIcon2);

    introductionFigure.appendChild(userEditionModeBox3);

    setElementAttributes(userEditionMode3, ['id', 'userEditionMode3'], ['class', 'userEditionMode3 ' + 'cursorPointer']);
    userEditionModeBox3.setAttribute('id', 'userEditionModeBox3');
    userEditionMode3.textContent = 'Modifier';
    userEditionModeBox3.appendChild(userEditionMode3);

    setElementAttributes(userEditionModeIcon3, ['id', 'userEditionModeIcon3'], ['class', 'cursorPointer']);
    faPenIconClass(userEditionModeIcon3);
    userEditionModeBox3.appendChild(userEditionModeIcon3);

    setElementAttributes(publishChange, ['id', 'publishChange'], ['class', 'publishChange ' + 'cursorPointer']);
    publishChange.textContent = 'publier les changements';
    userLoginTools.appendChild(publishChange);
  }
}
// Modal dialog
const createModal = [];
let modalCreated = false;
const modalBox = document.createElement('form');
const modal = document.createElement('modal');
const modalParentChild = modalBox.appendChild(modal);
const modalCrossBox = createElementDiv();
const modalCross = createElementFontAwesom();

modal.appendChild(modalCrossBox);
modalCrossBox.appendChild(modalCross);
userEditionMode.addEventListener('click', () => {
  if (!modalCreated) {
    modalCrossBox.classList.add('modalCrossBox');
    // Modal form

    modalBox.classList.add('modalBoxModal');

    // Modal element

    modal.setAttribute('id', 'modal1');

    createModal.push(modal);

    // Append modal form to body
    getBody.insertBefore(modalBox, getHeader);

    // Value for arrowBack button

    // SetAddFunction(arrowBackModalSet, modalParentChild);

    // Cross close button box

    // Cross close button

    setElementAttributes(modalCross, ['id', 'modalCross'], ['class', 'fa-solid ' + 'fa-xmark ' + 'cursorPointer']);
  }
  modalCreated = true;
});

modalCross.addEventListener('click', () => {
  window.location.href = '/FrontEnd';
});

const modalTitleBox = createElementDiv();
const modalTitle = document.createElement('h2');
const ImageBox = createElementDiv();
const modalSeparator = createElementDiv();
const ButtonBox = createElementDiv();
const ButtonAddWork = createElementSpan();
const arrowBack = createElementFontAwesom();
const ButtonDeleteGallery = createElementSpan();

// Title for the modal

modalTitleBox.classList.add('modalTitleBox');
const modalTitleBoxParentChild = modal.appendChild(modalTitleBox);
SetAddFunction(arrowBackModalSet, modalTitleBoxParentChild);

modalTitle.textContent = 'Galerie photo';
const modalTitleParentChild = modalTitleBox.appendChild(modalTitle);
SetAddFunction(arrowBackModalSet, modalTitleParentChild);

// Figure boxes for all works

ImageBox.classList.add('ImageBox');
const modalFigureImgBoxParentChild = modal.appendChild(ImageBox);
SetAddFunction(arrowBackModalSet, modalFigureImgBoxParentChild);

// Separator between element

modalSeparator.classList.add('modalSeparator');
const modalSeparatorParentChild = modal.appendChild(modalSeparator);
SetAddFunction(arrowBackModalSet, modalSeparatorParentChild);

// Modal button box

ButtonBox.classList.add('ButtonBox');
const modalButtonBoxParentChild = modal.appendChild(ButtonBox);
SetAddFunction(arrowBackModalSet, modalButtonBoxParentChild);

setElementAttributes(ButtonAddWork, ['class', 'ButtonAddWork ' + 'cursorPointer']);
ButtonAddWork.textContent = 'Ajouter une photo';
const modalButtonForSet = ButtonBox.appendChild(ButtonAddWork);
SetAddFunction(arrowBackModalSet, modalButtonForSet);

// Arrow button

setElementAttributes(arrowBack, ['id', 'faArrowBack'], ['class', 'fa-solid ' + 'fa-arrow-left ' + 'cursorPointer']);

// Button for deleting the gallery

setElementAttributes(ButtonDeleteGallery, ['class', 'ButtonDeleteGallery ' + 'cursorPointer']);
ButtonDeleteGallery.textContent = 'Supprimer la galerie';
const DeleteGalleryForSet = ButtonBox.appendChild(ButtonDeleteGallery);
SetAddFunction(arrowBackModalSet, DeleteGalleryForSet);

// Arrow function for go back

function arrowBackFunction(element) {
  resetFunction(element);

  elementAppenChildFunction(modal, [modalCrossBox]);
  modalCrossBox.classList.add('modalCrossBox');
  modalCrossBox.classList.remove('modalCrossBoxAndArrow');
  setElementAttributes(arrowBack, ['class', 'displayElementFalse']);

  const hiddeInputs = document.querySelector('input');
  setElementAttributes(hiddeInputs, ['class', 'displayElementFalse']);

  // ImageBox.classList.replace('ImgBox__ChangeToSendWork', 'ImageBox');

  console.log(arrowBackModalSet);

  const modalArray = Array.from(arrowBackModalSet);
  for (let i = 0; i < modalArray.length; i++) {
    modal.appendChild(modalArray[i]);
    console.log(modalArray[i]);
  }

  elementAppenChildFunction(modalTitleBox, [modalTitle]);
  resetFunction(ButtonBox);
  resetFunction(ImageBox);

  elementAppendChildMultiple([ButtonBox, ButtonAddWork], [ButtonBox, ButtonDeleteGallery]);
  modalTitle.textContent = 'Gallerie';
}

arrowBack.addEventListener('click', () => {
  arrowBackFunction(modal);
});

let FigureElement = document.createElement('figure');
let ImgElement = document.createElement('img');
let FigureText = document.createElement('p');
let IconBox = createElementDiv();
let TrashBox = createElementDiv();
let TrashElement = createElementFontAwesom();

const figuresSet = new Set();

userEditionMode.addEventListener('click', () => {
  fetch('http://localhost:5678/api/works')
    .then((response) => response.json())
    .then((works) => {
      works.forEach((work) => {
        const getImageUrl = work.imageUrl;

        FigureElement = document.createElement('figure');
        ImgElement = document.createElement('img');
        FigureText = document.createElement('p');
        IconBox = createElementDiv();
        TrashBox = createElementDiv();
        TrashElement = createElementFontAwesom();

        ImageBox.appendChild(FigureElement);
        figuresSet.add(FigureElement);

        ImgElement.setAttribute('src', getImageUrl);
        ImgElement.setAttribute('id', work.id);
        ImgElement.classList.add('ImgElement');
        ImgElement.style.cursor = 'pointer';
        setElementAttributes(ImgElement, ['src', getImageUrl], ['id', work.id], ['class', 'FigureElement ' + 'cursorPointer']);
        FigureElement.appendChild(ImgElement);

        FigureText.textContent = 'éditer';
        setElementAttributes(FigureText, ['class', 'FigureText ' + 'cursorPointer']);
        FigureElement.appendChild(FigureText);

        IconBox.classList.add('IconBox');
        FigureElement.appendChild(IconBox);

        setElementAttributes(TrashBox, ['id', ImgElement.id], ['class', 'TrashBox']);
        IconBox.appendChild(TrashBox);

        setElementAttributes(TrashElement, ['id', 'TrashElement'], ['class', 'fa-solid ' + 'fa-trash-can ' + 'cursorPointer']);
        TrashBox.appendChild(TrashElement);
      });

      myFunction(FigureElement, ImgElement, FigureText, IconBox, TrashBox, TrashElement);
    });
});

function myFunction(FigureElement, ImgElement, FigureText, IconBox, TrashBox, TrashElement) {
  // Utilisez les variables ici
  // console.log(FigureElement);
  // console.log(ImgElement);
  // console.log(FigureText);
  // console.log(IconBox);
  // console.log(TrashBox);
  // console.log(TrashElement);
}

// Event click for trash work
TrashBox.addEventListener('click', async () => {
  // Variable get id from trash box
  let workId = parseInt(TrashBox.id);

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
const SelectedBox = createElementDiv();
SelectedBox.classList.add('SelectedBox');
IconBox.appendChild(SelectedBox);

const SelectedElement = createElementFontAwesom();
setElementAttributes(SelectedElement, ['id', 'SelectedElement'], ['class', 'fa-solid ' + 'fa-maximize ' + 'cursorPointer']);

// Array for stopping miltiple icon + Event listener mouse events (Enter and Leave)
let SelectedElementArray = [];
SelectedBox.style.display = 'none';

FigureElement.addEventListener('mouseenter', () => {
  SelectedElementArray.push(SelectedBox);

  elementAppendChildMultiple([SelectedBox, SelectedElement], [IconBox, SelectedBox]);
  SelectedBox.style.display = 'flex';
});

FigureElement.addEventListener('mouseleave', () => {
  SelectedElementArray.pop(SelectedBox);
  SelectedBox.style.display = 'none';
});

const InputBoxForWork = createElementDiv();
const InputWorkSelect = document.createElement('select');
const InputWorkOption = document.createElement('option');

// const userId = work.userId;

let LabelElement = document.createElement('label');
let InputFile = document.createElement('input');
let InputFileText = createElementSpan();
let InputFileType = createElementSpan();
let imagePreview = document.createElement('img');
let InputWorkTitle = document.createElement('input');

// function modalInput() {
//   let LabelElement = document.createElement('label');
//   let InputFile = document.createElement('input');
//   let InputFileText = createElementSpan();
//   let InputFileType = createElementSpan();
//   let imagePreview = document.createElement('img');
//   let InputWorkTitle = document.createElement('input');
//   return [LabelElement, InputFile, InputFileText, InputFileType, imagePreview, InputWorkTitle];
// }

// --------------- Modal Input ---------------//

ButtonAddWork.addEventListener('click', (e) => {
  ButtonBox.innerHTML = '';
  // const [LabelElement, InputFile, InputFileText, InputFileType, imagePreview, InputWorkTitle] = modalInput();
  ButtonAddWork.replaceWith(ButtonSend);
  setElementAttributes(ButtonSend, ['id', 'send'], ['class', 'ButtonAddWork ' + 'cursorPointer']);
  ButtonSend.textContent = 'Ajout photo';
  ButtonBox.appendChild(ButtonSend);

  modalCrossBox.appendChild(arrowBack);
  modalCrossBox.classList.replace('modalCrossBox', 'modalCrossBoxAndArrow');

  modalTitle.textContent = 'Ajout photo';

  ImageBox.innerHTML = '';
  ImageBox.classList.replace('ImageBox', 'ImgBox__ChangeToSendWork');

  setElementAttributes(InputFile, ['id', 'InputFile'], ['class', 'fa-image ' + 'fa-regular']);
  InputFile.type = 'file';

  setElementAttributes(LabelElement, ['for', 'InputFile'], ['id', 'LabelElement'], ['class', 'LabelElement ' + 'cursorPointer']);

  InputFileText.setAttribute('id', 'InputFileText');
  InputFileText.textContent = '+ Ajouter photo';

  InputFileType.setAttribute('id', 'InputFileType');
  InputFileType.textContent = 'jpg, png: 4mo max';

  imagePreview.setAttribute('class', 'displayElementFalse');

  ImageBox.appendChild(LabelElement);

  // Input element for the new work item (SEND)

  setElementAttributes(InputWorkTitle, ['type', 'text'], ['class', 'InputWorkTitle ' + 'inputWorkCategory'], ['id', 'title']);

  InputBoxForWork.classList.add('InputBoxForWork');
  setElementAttributes(InputWorkSelect, ['class', 'inputWorkCategory ' + 'cursorPointer']);

  // Avoid multiplication for the work inputs

  const avoidMultiplierSet = new Set();

  SetAddFunction(avoidMultiplierSet, [LabelElement, InputFile, imagePreview, InputBoxForWork, InputWorkTitle, InputWorkSelect]);

  elementAppendChildMultiple([ImageBox, LabelElement], [ImageBox, InputBoxForWork]);

  LabelElement.appendChild(InputFile);
  LabelElement.appendChild(imagePreview);

  // elementAppendChildMultiple([LabelElement, InputFile], [LabelElement, imagePreview]);
  elementAppendChildMultiple([LabelElement, InputFileText], [LabelElement, InputFileType]);

  elementAppendChildMultiple([InputBoxForWork, InputWorkTitle], [InputBoxForWork, InputWorkSelect]);

  const uniqueCategories = new Set();
  const addedOptions = new Set();
  fetch('http://localhost:5678/api/works')
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
});

let imagePreviewPath;
let imagePreviewCleanPath;
let imagePreviewGetPath;

// Get the image path for the download preview
// InputFile.addEventListener('click', () => {
//   // On change event after work is in input
//   InputFile.addEventListener('change', (e) => {
//     imagePreviewPath = e.target.value;
//     imagePreviewCleanPath = imagePreviewPath.split('\\').pop();

//     imagePreviewGetPath = location.href + 'assets/images/' + imagePreviewCleanPath;
//     InputFile.setAttribute('class', 'displayElementFalse');

//   });
// });

let categoryData;
let title;
elementAppenChildFunction(InputBoxForWork, [InputWorkSelect]);

const formData = new FormData();

console.log(imagePreview);
// setElementAttributes(imagePreview, ['id', 'imagePreview'], ['class', 'imagePreview ' + 'cursorPointer']);
imagePreview.setAttribute('id', 'imagePreview');
imagePreview.setAttribute('class', 'imagePreview ' + 'cursorPointer');

ImageBox.addEventListener('click', () => {
  const InputFileById = document.getElementById('InputFile');
  // console.log(InputFileById);
  InputFileById.addEventListener('change', () => {
    // console.log(e);
    const ImagePreview = document.getElementById('imagePreview');

    console.log(ImagePreview);

    let imagePreviewPath = InputFileById.value;
    let imagePreviewCleanPath = imagePreviewPath.split('\\').pop();

    let imagePreviewGetPath = 'http://localhost:5678/api/works/images/' + imagePreviewCleanPath;

    console.log(imagePreviewCleanPath);

    ImagePreview.setAttribute('src', imagePreviewCleanPath);

    ImagePreview.classList.replace('displayElementFalse', 'displayElementTrue');
    InputFileById.setAttribute('class', 'displayElementFalse');
    ImagePreview.classList.add('displayElementTrue');
    const InputFileText = document.getElementById('InputFileText');
    InputFileText.textContent = '';
    InputFileText.setAttribute('class', 'displayElementFalse');

    InputFileType.textContent = '';
    InputFileType.setAttribute('class', 'displayElementFalse');

    formData.append('imageUrl', imagePreviewGetPath);
    console.log(formData.get('imageUrl'));
  });

  InputWorkTitle.addEventListener('change', () => {
    let InputWorkTitleValue = InputWorkTitle.value;

    console.log(InputWorkTitle.value);
    console.log('================================OK================================');
    title = InputWorkTitleValue;
    console.log(title);
  });

  InputWorkSelect.addEventListener('change', () => {
    // let selectedOptionText = InputWorkSelect.options[InputWorkSelect.selectedIndex].textContent;
    // let selectedOptionValue = InputWorkSelect.options[InputWorkSelect.selectedIndex].id;

    console.log('================================OK================================');
    categoryData = InputWorkSelect.options[InputWorkSelect.selectedIndex].value;
    formData.append('category', categoryData);
  });

  console.log(categoryData);
  // imagePreview.setAttribute('src', 'http://127.0.0.1:59495/FrontEnd/assets/images/abajour-tahina.png');
  // console.log(formData.get('category'));

  const elementsToRemove = ['id', 'title', 'imageUrl', 'category', 'userId'];

  ButtonSend.addEventListener('click', async () => {
    formData.append('title', title);
    console.log(formData.get('title'));
  });
  console.log(sessionStorage);
});
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
  } else {
    alert("Erreur lors de l'envoi du travail");
    sessionStorageRemoveMultiple(elementsToRemove);
  }
} catch (error) {
  console.error(error);
}
