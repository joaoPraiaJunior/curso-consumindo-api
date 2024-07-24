const elementos = {
    containerDeVideos: '[data-js="container-videos"]',
    barraDePesquisa: '[data-js="barra-de-pesquisa"]',
    botaoCategoria: '[data-js="categoria"]',
}

const containerDeVideos = document.querySelector(`${elementos.containerDeVideos}`);
const barraDePesquisa = document.querySelector(`${elementos.barraDePesquisa}`);
const botaoCategoria = document.querySelectorAll(`${elementos.botaoCategoria}`);

async function buscarEMostrarVideos() {

    try {
        const busca = await fetch('http://localhost:3000/videos');
        const videos = await busca.json();
        videos.forEach(video => {
            if (video.categoria === "") throw new Error("Vídeo não tem categoria");
            containerDeVideos.innerHTML += `
            <li class="videos__item">
                <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                <div class="descricao-video">
                    <img class="img-canal" src = "${video.imagem}" alt="Logo do Canal">
                    <h3 class="titulo-video">${video.titulo}</h3>
                    <p class="titulo-canal">${video.descricao}</p>
                    <p class="categoria" hidden>${video.categoria}</p>
                </div>
            </li>
        `;
        })
    } catch (error) {
        containerDeVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error}</p>`;
    }
}

buscarEMostrarVideos();

barraDePesquisa.addEventListener('input', filtrarPesquisa);

function filtrarPesquisa() {
    const videos = document.querySelectorAll(".videos__item");
    const valorDoFiltro = barraDePesquisa.value.toLowerCase();
    videos.forEach((video) => {
        const titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
        video.style.display = valorDoFiltro ? titulo.includes(valorDoFiltro) ? "block" : "none": "block";
    });
}

botaoCategoria.forEach(botao => {
    let nomeDaCategoria = botao.getAttribute('name');
    botao.addEventListener('click', () => filtrarPorCategoria(nomeDaCategoria));
});

function filtrarPorCategoria(categoria) {
    console.log(categoria);
    const videos = document.querySelectorAll(".videos__item");
    const valorDoFiltro = categoria.toLowerCase();
    videos.forEach((video) => {
        const categoria = video.querySelector(".categoria").textContent.toLowerCase()
        video.style.display =  valorDoFiltro ? categoria.includes(valorDoFiltro) ? valorDoFiltro === "tudo" ? "block" : "none" : "block" : "none";
    });
}



