function fetchMultipleData(urls){
    const promises = urls.map((url) =>
     fetch(url).then((response) => response.json())
    );
    return Promise.all(promises);
}

const urlsToFetch =[
    'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
];

fetchMultipleData(urlsToFetch).then((response)=>{
    console.log(response)
})