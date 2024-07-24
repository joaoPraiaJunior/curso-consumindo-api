const elementos = {
    containerDeVideos: '[data-js="videos"]',
}

const containerDeVideos = document.querySelector(`${elementos.videos}`);

const api = fetch('http://localhost:3000/videos')
.then(resposta => console.log(resposta.json()))