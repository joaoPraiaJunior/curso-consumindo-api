function filtrarVideosPorBotoes() {
    
    const elementos = {
        botaoCategoria: '[data-js="categoria"]',
        videos: '[data-js="videos"]',
        categoria: '[data-js="categoria"]',
    }

    const botaoCategoria = document.querySelectorAll(elementos.botaoCategoria);

    botaoCategoria.forEach(botao => {
        let nomeDaCategoria = botao.getAttribute('name');
        botao.addEventListener('click', () => filtrarPorCategoria(nomeDaCategoria));
    });

    function filtrarPorCategoria(nomeDaCategoria) {
        const videos = document.querySelectorAll(elementos.videos);
        const valorDoFiltro = nomeDaCategoria.toLowerCase();
        videos.forEach((video) => {
            const categoria = video.querySelector(elementos.categoria).textContent.toLowerCase()
            video.style.display = valorDoFiltro !== "tudo" ? categoria.includes(valorDoFiltro) ? "block" : "none" : "block";
        });
    }
}

export default filtrarVideosPorBotoes;