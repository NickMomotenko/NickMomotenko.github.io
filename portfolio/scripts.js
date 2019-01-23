const nameBlock = document.querySelector('.block__name');
const blockMenus = document.querySelector('.block__menus');

const menuFixed = document.querySelector('.menu__fixed');
const menuCross = document.querySelector('.menu__fixed-cross');

const resumeBlock = document.querySelector('.resume-block');
const portfolioBlock = document.querySelector('.portfolio-block');
const blogBlock = document.querySelector('.blog-block');
const contactBlock = document.querySelector('.contact-block');

const contentResume = document.querySelector('.resume');
const contentPortfolio = document.querySelector('.portfolio');
const contentBlog = document.querySelector('.blog');
const contentContact = document.querySelector('.contact');

const resume    = document.querySelector('.block__resume');
const portfolio = document.querySelector('.block__portfolio');
const blog      = document.querySelector('.block__blog');
const contact   = document.querySelector('.block__contact');

const burger = document.querySelector('.burger');


resume.addEventListener('click', ()=>{
	showFixedMenu();
	showBlockContentResume();
	showContentResume();
	showLinesFromNameBlock();
	showMainMenu();
});

portfolio.addEventListener('click', ()=>{
	showFixedMenu();
	showBlockContentPortfolio();
	showContentPortfolio();
	showLinesFromNameBlock();
	showMainMenu();
});

blog.addEventListener('click', ()=>{
	showFixedMenu();
	showBlockContentBlog();
	showContentBlog();
	showLinesFromNameBlock();
	showMainMenu();
});

contact.addEventListener('click', ()=>{
	showFixedMenu();
	showBlockContentContact();
	showContentContact();
	showLinesFromNameBlock();
	showMainMenu();

});

menuCross.addEventListener('click',()=>{
	showFixedMenu();
	closeBlockContentResume();
	closeBlockContentPortfolio();
	closeBlockContentBlog();
	closeBlockContentContact();

	closeContentResume();
	closeContentPortfolio();
	closeContentBlog();
	closeContentContact();

	showLinesFromNameBlock();
	showMainMenu();
	showMenu();

	showLines();
	showBurger();
	currentPositionBurger();
	deleteBurgerToClose();
});


