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
            botaoModoEscuro.setAttribute('aria-label', 'modo escuro da página');
            localStorage.setItem('classe', 'modo-escuro');
        } else {
            paginaCompleta.classList.remove('modo-escuro');
            botaoModoEscuro.setAttribute('aria-checked', 'false');
            botaoModoEscuro.setAttribute('aria-label', 'modo claro da página');
            localStorage.removeItem('classe');
        }
    }

    function verificarModoEscuro() {
        const modoEscuro = localStorage.getItem('classe');
        if(modoEscuro) {
            paginaCompleta.classList.add('modo-escuro');
            botaoModoEscuro.checked = true;
            botaoModoEscuro.setAttribute('aria-checked', 'true');
            botaoModoEscuro.setAttribute('aria-label', 'modo escuro da página');
        }
    }

    botaoModoEscuro.addEventListener('change', modoEscuro);
    window.addEventListener('load', verificarModoEscuro);
}

export default temaEscuro;