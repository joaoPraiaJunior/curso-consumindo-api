const api = fetch('http://localhost:3000/videos')
.then(resposta => console.log(resposta))
console.log(api);