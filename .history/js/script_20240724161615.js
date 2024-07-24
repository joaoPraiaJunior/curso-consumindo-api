const elementos = {
    videos: '[data-js="videos"]',
}

const api = fetch('http://localhost:3000/videos')
.then(resposta => console.log(resposta.json()))