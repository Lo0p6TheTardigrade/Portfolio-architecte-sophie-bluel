// Get section portfolio tag from ID attribute
const sectionPortfolio = document.getElementById('portfolio');
const sectionPortfolioH2 = document.querySelector('#portfolio > h2');

// Get gallery by css class
const sectionPortfolioDivGallery = document.querySelector('.gallery');

// Get section introduction tag from ID attribute
const sectionIntroduction = document.getElementById('introduction');

sectionIntroduction.querySelector('figure').setAttribute('id', 'introductionFigure');
const introductionFigure = document.getElementById('introductionFigure');

if (document.getElementById('main__section') === false) {
} else {
  // Find the list item with the following text fields
  let getProjectNavLink = document.getElementsByTagName('*');
  // console.log(getProjectNavLink);
  for (let index = 0; index < getProjectNavLink.length; index++) {
    if (getProjectNavLink[index].textContent === 'projets') {
      let project = getProjectNavLink[index];
      project.id = 'projets';
      project.addEventListener('click', () => {
        window.location.href = '/FrontEnd';
      });
    }
  }
}
function ifPreviouslyConnected() {
  sessionStorage.getItem('token');

  document.getElementById('loginNavigation').textContent = 'logout';
}
for (let i = 0; i < sessionStorage.length; i++) {
  if (sessionStorage.key(i) === 'token') {
    ifPreviouslyConnected();
    const logoutNavigation = document.getElementById('loginNavigation');
    logoutNavigation.id = 'logoutNavigation';

    logoutNavigation.addEventListener('click', () => {
      sessionStorage.clear();
      logoutNavigation.id = 'loginNavigation';
      logoutNavigation.textContent = 'login';
      window.location.reload();
    });
  } else {
  }
}
const categories = [];
// Fetch works
function fetchHomeGallery() {
  fetch('http://localhost:5678/api/works')
    .then((response) => response.json())
    .then((works) => {
      // Create categories div
      const objectsCategoryDiv = document.createElement('div');

      works.forEach((work) => {
        // Const for get all value in work objects
        const getImageUrl = work.imageUrl;
        const getTitleForFigcaption = work.title;
        const getTitleForAlt = work.title;
        // const getCategoryId = work.categoryId;
        // console.log(getCategoryId);

        // Create new elements for section portfolio
        const sectionPortfolioFigure = document.createElement('figure');
        const sectionPortfolioFigureImg = document.createElement('img');
        const sectionPortfolioFigcaption = document.createElement('figcaption');

        // Append elements for the gallery section
        sectionPortfolioDivGallery.appendChild(sectionPortfolioFigure);
        sectionPortfolioFigure.appendChild(sectionPortfolioFigureImg);
        sectionPortfolioFigure.appendChild(sectionPortfolioFigcaption);

        // Set the src attribute and set the figcaption text
        sectionPortfolioFigureImg.src = getImageUrl;
        sectionPortfolioFigureImg.alt = getTitleForAlt;
        sectionPortfolioFigcaption.innerText = getTitleForFigcaption;
      });
      objectsCategoryDiv.classList.add('category');
      objectsCategoryDiv.id = 'categoryFilter';

      // Create category elements and append to category div
      // const categories = [];
      const allWorksSpan = document.createElement('span');
      allWorksSpan.textContent = 'Tout';
      allWorksSpan.id = 0;
      allWorksSpan.classList.add('span__filter__global');
      allWorksSpan.addEventListener('click', () => {
        allWorksSpan.classList.add('span__filter__global');
      });
      allWorksSpan.classList.add('objects__category__span');
      objectsCategoryDiv.appendChild(allWorksSpan);

      works.forEach((work) => {
        const category = work.category;
        const categoryName = category.name;
        const categoryId = category.id;

        // Verify if the category is already get in the categories array
        if (!categories.includes(categoryName)) {
          categories.push(categoryName);

          // Create the category section
          const objectsCategorySpan = document.createElement('span');

          objectsCategoryDiv.addEventListener('click', (e) => {
            const clickedSpan = e.target;

            if (clickedSpan.classList.contains('objects__category__span')) {
              const categorySpans = objectsCategoryDiv.querySelectorAll('.objects__category__span');

              categorySpans.forEach((span) => {
                if (span === clickedSpan) {
                  span.classList.add('span__filter__global');
                } else {
                  span.classList.remove('span__filter__global');
                }
              });
            }
          });

          objectsCategorySpan.textContent = categoryName;
          objectsCategorySpan.classList.add('objects__category__span');
          objectsCategoryDiv.appendChild(objectsCategorySpan);
          objectsCategorySpan.id = categoryId;
          objectsCategorySpan.setAttribute('data-id', categoryId);

          // Get the category by click
          objectsCategorySpan.addEventListener('click', () => {
            const filteredWorks = works.filter((work) => work.category.name === categoryName);

            // Reset portfolio
            sectionPortfolioDivGallery.innerHTML = '';

            // Filter works and create
            filteredWorks.forEach((work) => {
              // Create portfolio elements
              const sectionPortfolioFigure = document.createElement('figure');
              const sectionPortfolioFigureImg = document.createElement('img');
              const sectionPortfolioFigcaption = document.createElement('figcaption');

              // Set attributes and text content
              sectionPortfolioFigureImg.src = work.imageUrl;
              sectionPortfolioFigureImg.alt = work.title;
              sectionPortfolioFigureImg.setAttribute('data-id', work.id);
              sectionPortfolioFigcaption.textContent = work.title;

              // Append portfolio elements
              sectionPortfolioFigure.appendChild(sectionPortfolioFigureImg);
              sectionPortfolioFigure.appendChild(sectionPortfolioFigcaption);
              sectionPortfolioDivGallery.appendChild(sectionPortfolioFigure);
            });
          });

          allWorksSpan.addEventListener('click', () => {
            // Reset for all works
            sectionPortfolioDivGallery.innerHTML = '';

            // For each works create elements
            works.forEach((work) => {
              const sectionPortfolioFigure = document.createElement('figure');
              const sectionPortfolioFigureImg = document.createElement('img');
              const sectionPortfolioFigcaption = document.createElement('figcaption');

              // Set attributes and text content
              sectionPortfolioFigureImg.src = work.imageUrl;
              sectionPortfolioFigureImg.alt = work.title;
              sectionPortfolioFigureImg.setAttribute('data-id', work.id);
              sectionPortfolioFigcaption.textContent = work.title;

              /// Append portfolio elements
              sectionPortfolioFigure.appendChild(sectionPortfolioFigureImg);
              sectionPortfolioFigure.appendChild(sectionPortfolioFigcaption);
              sectionPortfolioDivGallery.appendChild(sectionPortfolioFigure);
            });
          });
        }
      });

      // Insert the section category div
      sectionPortfolio.appendChild(objectsCategoryDiv);
      sectionPortfolio.insertBefore(objectsCategoryDiv, sectionPortfolioDivGallery);
      if (sessionStorage.getItem('token')) {
        const objectsCategorySpan = document.querySelector('.objects__category__span');
        objectsCategoryDiv.remove(objectsCategorySpan);
        // sectionPortfolioH2.style.marginBottom = '0';
        // objectsCategorySpan.forEach((span) => {
        //   span.classList.add('displayElementFalse');
        // });
      }
    });
}
fetchHomeGallery();
