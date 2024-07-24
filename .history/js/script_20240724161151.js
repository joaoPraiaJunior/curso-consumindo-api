const api = fetch('http://localhost:3000/videos')
.then(res => res.json())

console.log(api)