// https://api.github.com/users/EPetrineLynghaug/repos
// https://api.github.com/repos/EPetrineLynghaug/Community-Science-Museum 
// https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

const getRepo = async (repoName) => {
  const response = await fetch(`https://api.github.com/repos/EPetrineLynghaug/${repoName}`);
  const data = await response.json();
  return data;
}

let repository = getRepo('Community-Science-Museum');
console.log(repository);

class UserContent {
    constructor(author, date, content) {
        this.author = author;
        this.date = date;
        this.content = content;
    }
}

class Post extends UserContent {}