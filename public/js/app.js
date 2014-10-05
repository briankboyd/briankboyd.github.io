
var bb = bb || {};
(function (bb) {
  'use strict';

	function bbGetRepo(url, callback) {
		var request = new XMLHttpRequest();
		request.open('GET', url, true);
		request.onreadystatechange = function () {
			if (request.readyState === 4 && request.status === 200) {
				callback(JSON.parse(request.responseText));
			}
		};
		request.send();
  }

	function bbProcessRepo(data) {
		var bbParsedGithubData = data,
			bbSectLeftListId = document.getElementById('bbSectLeftListId'),
			bbContent = document.createTextNode(bbParsedGithubData[0].full_name);
		bbSectLeftListId.appendChild(bbContent);
	}
	
	bbGetRepo('https://api.github.com/users/briankboyd/repos', bbProcessRepo);
}());
