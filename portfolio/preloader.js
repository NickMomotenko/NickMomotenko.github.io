document.body.onload = function () {
	setTimeout(function(){
		var load = document.getElementById('load');

		if(!load.classList.contains("close")){
			load.classList.add('close');
		}
	}, 1500)
}