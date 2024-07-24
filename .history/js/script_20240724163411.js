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
            <div class="descricao-video">
                <img class="img-canal" src = "${video.imagem}" alt="Logo do Canal">
                <h3 class="titulo-video">${video.titulo}</h3>
                <p class="titulo-canal">${video.descricao}</p>
            </div>
        </li>
    `;
    }))
    .catch((erro) => {
        containerDeVideos.innerHTML = `<p class="erro">Houve um erro ao carregar os vídeos! ${erro}</p>`;
    });
