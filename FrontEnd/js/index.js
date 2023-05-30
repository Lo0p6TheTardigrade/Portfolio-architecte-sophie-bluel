// Get section portfolio tag from ID attribute
const sectionPortfolio = document.getElementById('portfolio');
const sectionPortfolioH2 = document.querySelector('#portfolio > h2');

// Get gallery by css class
const sectionPortfolioDivGallery = document.querySelector('.gallery');

// Get section introduction tag from ID attribute
const sectionIntroduction = document.getElementById('introduction');

// get article tag by tag name
const sectionArticle = document.querySelector('article');

if (document.getElementById('main__section') === false) {
} else {
  // Find the list item with the following text fields
  let getProjectNavLink = document.getElementsByTagName('*');
  console.log(getProjectNavLink);
  for (let index = 0; index < getProjectNavLink.length; index++) {
    if (getProjectNavLink[index].textContent === 'projets') {
      let project = getProjectNavLink[index];
      console.log(project);
      project.setAttribute('id', 'projets');
      project.addEventListener('click', () => {
        document.querySelector('main').innerHTML = '';
      });
    }
  }
}
// Fetch works
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
      const getCategoryId = work.categoryId;
      console.log(getCategoryId);

      // Create new elements for section portfolio
      const sectionPortfolioFigure = document.createElement('figure');
      const sectionPortfolioFigureImg = document.createElement('img');
      const sectionPortfolioFigcaption = document.createElement('figcaption');
      const imageUrlId = parseInt(sectionPortfolioFigureImg.setAttribute('data-id', getCategoryId));

      // Append elements for the gallery section
      sectionPortfolioDivGallery.appendChild(sectionPortfolioFigure);
      sectionPortfolioFigure.appendChild(sectionPortfolioFigureImg);
      sectionPortfolioFigure.appendChild(sectionPortfolioFigcaption);

      // Set the src attribute and set the figcaption text
      sectionPortfolioFigureImg.setAttribute('src', getImageUrl);
      sectionPortfolioFigureImg.setAttribute('alt', getTitleForAlt);
      sectionPortfolioFigcaption.innerText = getTitleForFigcaption;
    });
    objectsCategoryDiv.classList.add('category');

    // Create category elements and append to category div
    const categories = [];
    const allWorksSpan = document.createElement('span');
    allWorksSpan.textContent = 'Tout';
    allWorksSpan.classList.add('span__filter__global');
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
        objectsCategorySpan.textContent = categoryName;
        objectsCategorySpan.classList.add('span__filter__global');
        objectsCategoryDiv.appendChild(objectsCategorySpan);
        objectsCategorySpan.setAttribute('id', categoryId);
        objectsCategorySpan.setAttribute('data-id', categoryId);

        // Get the category by click
        objectsCategorySpan.addEventListener('click', () => {
          const categoryId = parseInt(objectsCategorySpan.getAttribute('data-id'));
          const filteredWorks = works.filter((work) => work.category.id === categoryId);

          // Reset portfolio
          sectionPortfolioDivGallery.innerHTML = '';

          // Filter works and create
          filteredWorks.forEach((work) => {
            // Create portfolio elements
            const sectionPortfolioFigure = document.createElement('figure');
            const sectionPortfolioFigureImg = document.createElement('img');
            const sectionPortfolioFigcaption = document.createElement('figcaption');

            // Set attributes and text content
            sectionPortfolioFigureImg.setAttribute('src', work.imageUrl);
            sectionPortfolioFigureImg.setAttribute('alt', work.title);
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
            sectionPortfolioFigureImg.setAttribute('src', work.imageUrl);
            sectionPortfolioFigureImg.setAttribute('alt', work.title);
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
  });
