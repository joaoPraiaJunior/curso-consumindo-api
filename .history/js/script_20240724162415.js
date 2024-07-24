const elementos = {
    containerDeVideos: '[data-js="container-videos"]',
}

const containerDeVideos = document.querySelector(`${elementos.containerDeVideos}`);

const api = fetch('http://localhost:3000/videos')
.then(resposta => resposta.json())
.then((videos) => videos.forEach(video => {
    containerDeVideos.innerHTML += `
        <li class="videos__item">
            <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
            
        </li>
    `;
}));