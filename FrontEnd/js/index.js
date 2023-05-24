const reponse = fetch('http://localhost:5678/api/works');
// const swagger = reponse;
// console.log(swagger);
console.log(reponse);

// Get section introduction tag from ID attribute
const sectionIntroduction = document.getElementById('introduction');

const sectionIntroductionfigure = document.querySelector('#introduction > figure');

// get article tag by tag name
const sectionArticle = document.querySelector('article');

// Get section portfolio tag from ID attribute
const sectionPortfolio = document.getElementById('portfolio');

// Get gallery by css class
const sectionPortfolioDivGallery = document.querySelector('.gallery');

console.log(sectionIntroduction, sectionIntroductionfigure, sectionArticle, sectionPortfolio, sectionPortfolioDivGallery);
