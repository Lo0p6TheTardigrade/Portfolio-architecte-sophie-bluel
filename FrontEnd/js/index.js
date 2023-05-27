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

      // Create new elements for section portfolio
      const sectionPortfolioFigure = document.createElement('figure');
      const sectionPortfolioFigureImg = document.createElement('img');
      const sectionPortfolioFigcaption = document.createElement('figcaption');

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

    works.forEach((work) => {
      const category = work.category;
      const categoryName = category.name;

      if (!categories.includes(categoryName)) {
        categories.push(categoryName);

        const objectsCategorySpan = document.createElement('span');
        objectsCategorySpan.textContent = categoryName;
        objectsCategoryDiv.appendChild(objectsCategorySpan);

        objectsCategorySpan.addEventListener('click', function () {
          console.log('trier');
        });
      }
    });

    sectionPortfolio.appendChild(objectsCategoryDiv);
    sectionPortfolio.insertBefore(objectsCategoryDiv, sectionPortfolioDivGallery);
  });

// Get section portfolio tag from ID attribute
const sectionPortfolio = document.getElementById('portfolio');
const sectionPortfolioH2 = document.querySelector('#portfolio > h2');

// Get gallery by css class
const sectionPortfolioDivGallery = document.querySelector('.gallery');

// Get section introduction tag from ID attribute
const sectionIntroduction = document.getElementById('introduction');

// get article tag by tag name
const sectionArticle = document.querySelector('article');
