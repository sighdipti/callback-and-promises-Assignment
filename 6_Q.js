function fetchUserDataAndPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(userData => {
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
          .then(response => response.json())
          .then(posts => ({ userData, posts }));
      });
  }

  function fetchMultipleData(urls) {
    return Promise.all(urls.map(url => fetch(url).then(response => response.json())));
  }

  fetchUserDataAndPosts(1).then(data => console.log(data));

const urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
];

fetchMultipleData(urls).then(responses => console.log(responses));