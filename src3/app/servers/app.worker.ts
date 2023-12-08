
addEventListener('message', (data) => {
  console.log("webworker start", data)
  fetch(`https://jsonplaceholder.typicode.com/users/`)
    .then(response => response.json())
    .then(json => postMessage(JSON.stringify(json) ))
  console.log("webworker end", data)
});

