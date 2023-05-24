fetch('http://localhost:5678/api/works')
  .then((response) => response.json())
  .then((works) => console.log(works));

// Get section introduction tag from ID attribute
const sectionIntroduction = document.getElementById('introduction');

// get article tag by tag name
const sectionArticle = document.querySelector('article');

// Get section portfolio tag from ID attribute
const sectionPortfolio = document.getElementById('portfolio');

// Get gallery by css class
const sectionPortfolioDivGallery = document.querySelector('.gallery');

// let i = 0;
// fetch('http://localhost:5678/api/works')
//   .then((response) => response.json())
//   .then((works) => {
//     let i = 0;
//     let imageUrl = works[i].imageUrl;
//     console.log(imageUrl);
//     works.forEach((i) => {
//       // Initialize i
//       i++;

//       // Create new elements for section portfolio
//       const sectionPortfolioFigure = document.createElement('figure');
//       const sectionPortfolioFigureImg = document.createElement('img');
//       const sectionPortfolioFigcaption = document.createElement('figcaption');

//       // Append elements for the gallery section
//       sectionPortfolioDivGallery.appendChild(sectionPortfolioFigure);
//       sectionPortfolioDivGallery.appendChild(sectionPortfolioFigureImg);
//       sectionPortfolioDivGallery.appendChild(sectionPortfolioFigcaption);

//       sectionPortfolioFigureImg.setAttribute('src', imageUrl);
//     });
//   });

fetch('http://localhost:5678/api/works')
  .then((response) => response.json())
  .then((works) => {
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

      sectionPortfolioFigureImg.setAttribute('src', getImageUrl);
      sectionPortfolioFigureImg.setAttribute('alt', getTitleForAlt);
      sectionPortfolioFigcaption.innerText = getTitleForFigcaption;
    });
  });

// Console log
console.log(sectionIntroduction, sectionArticle, sectionPortfolio, sectionPortfolioDivGallery);
