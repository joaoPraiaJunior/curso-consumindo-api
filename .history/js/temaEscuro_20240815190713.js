function temaEscuro() {

    const elementos = {
        botaoModoEscuro: '[data-js="modo-escuro"]',
        paginaCompleta: ':root',
    }

    const botaoModoEscuro = document.querySelector(elementos.botaoModoEscuro);
    const paginaCompleta = document.querySelector(elementos.paginaCompleta);


    function modoEscuro() {
        if(botaoModoEscuro.checked) {
            paginaCompleta.classList.add('modo-escuro');
            botaoModoEscuro.setAttribute('aria-checked', 'true');
        } else {
            paginaCompleta.classList.remove('modo-escuro');
            botaoModoEscuro.setAttribute('aria-checked', 'false');
        }
    }

    botaoModoEscuro.addEventListener('change', modoEscuro());

}

export default temaEscuro;