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
            localStorage.setItem('escuro', 'true');
        } else {
            paginaCompleta.classList.remove('modo-escuro');
            botaoModoEscuro.setAttribute('aria-checked', 'false');
            localStorage.setItem('escuro', 'false');
        }
    }

    function verificarModoEscuro() {
        const modoEscuro = localStorage.getItem('escuro');
        if(modoEscuro === 'true') {
            paginaCompleta.classList.add('modo-escuro');
            botaoModoEscuro.checked = true;
        }
    }

    botaoModoEscuro.addEventListener('change', modoEscuro);
    document.addEventListener('DOMContentLoaded', verificarModoEscuro);
}

export default temaEscuro;