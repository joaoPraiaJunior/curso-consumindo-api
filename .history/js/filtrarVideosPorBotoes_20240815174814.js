function filtrarVideosPorBotoes() {
    const elementos = {
        botaoCategoria: '[data-js="categoria"]',
    }

    const botaoCategoria = document.querySelectorAll(`${elementos.botaoCategoria}`);

    botaoCategoria.forEach(botao => {
        let nomeDaCategoria = botao.getAttribute('name');
        botao.addEventListener('click', () => filtrarPorCategoria(nomeDaCategoria));
    });


    function filtrarPorCategoria(categoria) {
        const videos = document.querySelectorAll(".videos__item");
        const valorDoFiltro = categoria.toLowerCase();
        videos.forEach((video) => {
            const categoria = video.querySelector(".categoria").textContent.toLowerCase()
            video.style.display = valorDoFiltro !== "tudo" ? categoria.includes(valorDoFiltro) ? "block" : "none" : "block";
        });
    }
}

export default filtrarVideosPorBotoes;