function filtrarVideos() {

    const elementos = {
        barraDePesquisa: '[data-js="barra-de-pesquisa"]',
        videos: '[data-js="videos"]',
        tituloDoVideo: '[data-js="titulo-video"]',
    }

    const barraDePesquisa = document.querySelector(elementos.barraDePesquisa);


    function filtrarPesquisa() {
        const videos = document.querySelectorAll(elementos.videos);
        const valorDoFiltro = barraDePesquisa.value.toLowerCase();
        videos.forEach((video) => {
            const titulo = video.querySelector(elementos.tituloDoVideo).textContent.toLowerCase();
            video.style.display = valorDoFiltro ? titulo.includes(valorDoFiltro) ? "block" : "none" : "block";
        });
    }

    function focarVideoFiltrado(evento) {
        evento.preventDefault();
        const primeiroVideoFiltrado = document.querySelector(`${elementos.videos}:not([style="display: none;"])`);
        primeiroVideoFiltrado?.focus();

    }

    barraDePesquisa.addEventListener('input', filtrarPesquisa);
    barraDePesquisa.addEventListener('submit', focarVideoFiltrado);

}

export default filtrarVideos;