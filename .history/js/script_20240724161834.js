const elementos = {
    containerDeVideos: '[data-js="container-videos"]',
}

const containerDeVideos = document.querySelector(`${elementos.containerDeVideos}`);

const api = fetch('http://localhost:3000/videos')
.then(resposta => console.log(resposta.json()))