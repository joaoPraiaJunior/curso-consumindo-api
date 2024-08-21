function temaEscuro() {

    const elementos = {
        botaoModoEscuro: '[data-js="modo-escuro"]',
        paginaCompleta: ':root',
    }

    const botaoModoEscuro = document.querySelector(elementos.botaoModoEscuro);
    const paginaCompleta = document.querySelector(elementos.paginaCompleta);


    function modoEscuro(modoEscuroAtivo) {
        if (modoEscuroAtivo) {
            paginaCompleta.classList.add('modo-escuro');
            botaoModoEscuro.setAttribute('aria-checked', 'true');
            botaoModoEscuro.setAttribute('aria-label', 'Modo escuro da página');
            localStorage.setItem('classe', 'modo-escuro');
        } else {
            paginaCompleta.classList.remove('modo-escuro');
            botaoModoEscuro.setAttribute('aria-checked', 'false');
            botaoModoEscuro.setAttribute('aria-label', 'Modo claro da página');
            localStorage.removeItem('classe');
        }
    }

    function verificarModoEscuro() {
        const modoEscuroAtivo = localStorage.getItem('classe') === 'modo-escuro';
        botaoModoEscuro.checked = modoEscuroAtivo;
        modoEscuro(modoEscuroAtivo);
    }

    botaoModoEscuro.addEventListener('change', function() {
        modoEscuro(botaoModoEscuro.checked);
    });
    window.addEventListener('load', verificarModoEscuro);
}

export default temaEscuro;