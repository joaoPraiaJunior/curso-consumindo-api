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

    barraDePesquisa.addEventListener('input', filtrarPesquisa);

}

export default filtrarVideos;