function temaEscuro() {
    const elementos = {
        botaoModoEscuro: '[data-js="modo-escuro"]',
        paginaCompleta: ':root',
    }

    const botaoModoEscuro = document.querySelector(elementos.BotaoModoEscuro);
    const paginaCompleta = document.querySelector(elementos.paginaCompleta);

    botaoModoEscuro.addEventListener('change', modoEscuro);
    
    function modoEscuro() {
        if(botaoModoEscuro.checked) {
            paginaCompleta.classList.add('modo-escuro');
            botaoModoEscuro.setAttribute('aria-checked', 'true');
        } else {
            paginaCompleta.classList.remove('modo-escuro');
            botaoModoEscuro.setAttribute('aria-checked', 'false');
        }
    }

}

export default temaEscuro;