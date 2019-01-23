const items = Array.from(document.querySelectorAll('.menu__fixed-item'));

items.forEach(function(item){
	item.addEventListener('click', function(menuItem){
		if(menuItem.toElement.id == "resume"){
			showBlockContentResume();
			showContentResume();

			closeBlockContentPortfolio();
			closeBlockContentBlog();
			closeBlockContentContact();

			closeContentPortfolio();
			closeContentBlog();
			closeContentContact();
		}

		if(menuItem.toElement.id == "portfolio"){
			showBlockContentPortfolio();
			showContentPortfolio();

			closeBlockContentResume();
			closeBlockContentBlog();
			closeBlockContentContact();

			closeContentResume();
			closeContentBlog();
			closeContentContact();
		}

		if(menuItem.toElement.id == "blog"){
			showBlockContentBlog();
			showContentBlog();

			closeBlockContentResume();
			closeBlockContentPortfolio();
			closeBlockContentContact();

			closeContentResume();
			closeContentPortfolio();
			closeContentContact();
		}

		if(menuItem.toElement.id == "contact"){
			showBlockContentContact();
			showContentContact();

			closeBlockContentResume();
			closeBlockContentPortfolio();
			closeBlockContentBlog();

			closeContentResume();
			closeContentPortfolio();
			closeContentBlog();
		}

	});
});
