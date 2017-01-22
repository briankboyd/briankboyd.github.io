

(function () {
  'use strict';
  //namespace while using revealing module pattern
  var bbProfile = function () {
    var bbUrl,
      bbCallback,
      bbRequest,
      bbParsedGithubData,
      bbSectLeftListId,
      bbContent,
      bbFilteredGithubData,
      bbGetRepo = function (url, callback) {
        bbUrl = url;
        bbCallback = callback;
        bbRequest = new XMLHttpRequest();
        bbRequest.open('GET', bbUrl, true);
        bbRequest.onreadystatechange = function () {
          if (bbRequest.readyState === 4 && bbRequest.status === 200) {
            bbCallback(JSON.parse(bbRequest.responseText));
          }
        };
        bbRequest.send();
      },

      bbProcessRepo = function (data) {
        bbParsedGithubData = data;
        bbSectLeftListId = document.getElementById('bbSectLeftUlId');
        bbFilteredGithubData  = bbParsedGithubData.filter(function (el) {
          return el.fork === false;
        });
        bbFilteredGithubData.forEach(function (el) {
          var node = document.createElement("li"),
            link = document.createElement('a');
          link.setAttribute('href', el.html_url);
          link.appendChild(document.createTextNode(el.name));
          node.appendChild(link);
          bbSectLeftListId.appendChild(node);
        });
      };
    return {
      bbGetRepo: bbGetRepo,
      bbProcessRepo: bbProcessRepo
    };
  },

    bbListRepo = bbProfile();
  bbListRepo.bbGetRepo('https://api.github.com/users/zero8urn/repos', bbListRepo.bbProcessRepo);
}());
