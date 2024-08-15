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
            localStorage.setItem('classe', 'modo-escuro');
        } else {
            paginaCompleta.classList.remove('modo-escuro');
            botaoModoEscuro.setAttribute('aria-checked', 'false');
            localStorage.removeItem('classe');
        }
    }

    function verificarModoEscuro() {
        const modoEscuro = localStorage.getItem('classe');
        if(modoEscuro) {
            paginaCompleta.classList.add('modo-escuro');
            botaoModoEscuro.checked = true;
        }
    }

    botaoModoEscuro.addEventListener('change', modoEscuro);
    document.addEventListener('DOMContentLoaded', verificarModoEscuro);
}

export default temaEscuro;