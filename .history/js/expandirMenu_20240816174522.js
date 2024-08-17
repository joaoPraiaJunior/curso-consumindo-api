function expandirMenu() {
    const elementos = {
        secoesDoMenu: '[data-js="secao-menu"]'
    }

    const secoesDoMenu = document.querySelectorAll(elementos.secoesDoMenu);

    secoesDoMenu.forEach(secao => {
        verificaQuantidadeDeItensDoMenu(secao);
    });

    function verificaQuantidadeDeItensDoMenu(secao) {
        const itensDaSecao = secao.querySelectorAll('ul > li');
        const quantidadeDeItens = itensDaSecao.length;

        if (quantidadeDeItens > 5) {
            const excessoDeItensDoMenu = [...itensDaSecao].slice(5);
            esconderOExcessoDeItens(excessoDeItensDoMenu);
            criarBotaoDeExpandir(secao, excessoDeItensDoMenu);
        }
    }

    function esconderOExcessoDeItens(excessoDeItensDoMenu) {
        excessoDeItensDoMenu.forEach(item => {
            item.classList.add('escondido');
        });
    }

    function criarBotaoDeExpandir(secao, excessoDeItensDoMenu) {
        const botao = document.createElement('button');
        const icone = document.createElement('i');
        const span = document.createElement('span');
        botao.classList.add('menu__itens', 'menu__botao-expandir-canais');
        botao.setAttribute('data-js', 'botao-expandir');
        botao.setAttribute('aria-expanded', 'false');
        botao.setAttribute('aria-controls', secao.id);
        icone.classList.add('icone__mostrar');
        span.textContent = `Mostrar mais ${excessoDeItensDoMenu.length}`;
        botao.append(icone, span);
        secao.append(botao);
    }
}

export default expandirMenu;