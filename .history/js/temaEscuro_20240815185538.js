function temaEscuro() {
    const elementos = {
        botaoModoEscuro: '[data-js="modo-escuro"]',
        paginaCompleta: ':root',
    }

    const botaoModoEscuro = document.querySelector(elementos.modoEscuro);
    const paginaCompleta = document.querySelector(elementos.paginaCompleta);


    function modoEscuroAtivado() {
        if(botaoModoEscuro.checked) {
            paginaCompleta.classList.add('modo-escuro');
            botaoModoEscuro.setAttribute('aria-checked', 'true');
        } else {
            paginaCompleta.classList.remove('modo-escuro');
            botaoModoEscuro.setAttribute('aria-checked', 'false');
        }
    }


    botaoModoEscuro.addEventListener('change', modoEscuroAtivado);

}

export default temaEscuro;