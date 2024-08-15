const elementos = {
    containerDeVideos: '[data-js="container-videos"]',
    barraDePesquisa: '[data-js="barra-de-pesquisa"]',
    botaoCategoria: '[data-js="categoria"]',
}

const containerDeVideos = document.querySelector(`${elementos.containerDeVideos}`);
const barraDePesquisa = document.querySelector(`${elementos.barraDePesquisa}`);
const botaoCategoria = document.querySelectorAll(`${elementos.botaoCategoria}`);

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
    const videos = document.querySelectorAll(".videos__item");
    const valorDoFiltro = categoria.toLowerCase();
    videos.forEach((video) => {
        const categoria = video.querySelector(".categoria").textContent.toLowerCase()
        video.style.display =  valorDoFiltro !== "tudo" ? categoria.includes(valorDoFiltro) ? "block" : "none" : "block";
    });
}



