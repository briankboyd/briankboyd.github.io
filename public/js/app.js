(function () {
	'use strict';
	

	function getRepos() {
		var request = new XMLHttpRequest(),
			url = 'https://api.github.com/users/briankboyd/repos';
//		request.onload = function () {
//			console.log(request.responseText);
//		}
		function getRepoText() {
			request.onreadystatechange = function () {
				if (request.readyState === 4) {
					return request.responseText;
				}
			};
		}
		request.open('GET', url, false);
		request.send();
		
		return getRepoText;
	}
	
	console.log(getRepos());
}());

