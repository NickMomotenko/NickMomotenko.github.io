function showLinesFromNameBlock() {
	nameBlock.classList.toggle('no-visible-lines');
}

function showLines() {
	nameBlock.classList.remove('no-visible-lines');
}

function deleteLines() {
	nameBlock.classList.add('no-visible-lines');
}

/*****************************************************/
function showMainMenu(){
	blockMenus.classList.toggle('no-visible');
}

function showMenu(){
	blockMenus.classList.toggle('showMenu');
}

/*****************************************************/

function showFixedMenu(){
	menuFixed.classList.toggle('show');
}

/*******************************************************/
function showBlockContentResume(){
	resumeBlock.classList.add('show-content');
}

function closeBlockContentResume(){
	resumeBlock.classList.remove('show-content');
}

function showBlockContentPortfolio(){
	portfolioBlock.classList.add('show-content');
}

function closeBlockContentPortfolio(){
	portfolioBlock.classList.remove('show-content');
}

function showBlockContentBlog(){
	blogBlock.classList.add('show-content');
}

function closeBlockContentBlog(){
	blogBlock.classList.remove('show-content');
}

function showBlockContentContact(){
	contactBlock.classList.add('show-content');
}

function closeBlockContentContact(){
	contactBlock.classList.remove('show-content');
}
/************************************************************/


/**************************************************************/
function showContentResume(){
	contentResume.classList.remove('no-visible');
}

function closeContentResume(){
	contentResume.classList.add('no-visible');
}

function showContentPortfolio(){
	contentPortfolio.classList.remove('no-visible');
}

function closeContentPortfolio(){
	contentPortfolio.classList.add('no-visible');
}

function showContentBlog(){
	contentBlog.classList.remove('no-visible');
}

function closeContentBlog(){
	contentBlog.classList.add('no-visible');
}

function showContentContact(){
	contentContact.classList.remove('no-visible');
}

function closeContentContact(){
	contentContact.classList.add('no-visible');
}


// close burger

function animationBurgerToClose(){
	burger.classList.add('closeBurger');
}

function deleteBurgerToClose(){
	burger.classList.remove('closeBurger');
}

function currentPositionBurger(){
	burger.classList.add('showBurger');
}

function showBurger(){
	burger.classList.add('showBurger');
}
