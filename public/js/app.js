

(function () {
  'use strict';

	var bbProfile = function () {
		var bbUrl,
			bbCallback,
			request,
			bbParsedGithubData,
			bbSectLeftListId,
			bbContent,
			bbGetRepo = function (url, callback) {
				bbUrl = url;
				bbCallback = callback;
				request = new XMLHttpRequest();
				request.open('GET', bbUrl, true);
				request.onreadystatechange = function () {
					if (request.readyState === 4 && request.status === 200) {
						bbCallback(JSON.parse(request.responseText));
					}
				};
				request.send();
			},

			bbProcessRepo = function (data) {
				bbParsedGithubData = data;
				bbSectLeftListId = document.getElementById('bbSectLeftListId');
				bbContent = document.createTextNode(bbParsedGithubData[0].full_name);
				bbSectLeftListId.appendChild(bbContent);
			};
		return {
			bbGetRepo: bbGetRepo,
			bbProcessRepo: bbProcessRepo
		};
	},

	
		bbListRepo = bbProfile();
	bbListRepo.bbGetRepo('https://api.github.com/users/briankboyd/repos', bbListRepo.bbProcessRepo);
}());
