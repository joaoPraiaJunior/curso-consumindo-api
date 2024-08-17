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
        const idDaLista = secao.querySelector('#menu__canais').id
        const botao = document.createElement('button');
        const icone = document.createElement('i');
        botao.classList.add('menu__itens', 'menu__botao-expandir-canais');
        botao.setAttribute('data-js', 'botao-expandir');
        botao.setAttribute('aria-expanded', 'false');
        botao.setAttribute('aria-controls', idDaLista);
        icone.classList.add('icone__mostrar');
        botao.append(icone);
        botao.textContent = `Mostrar mais ${excessoDeItensDoMenu.length}`;
        secao.append(botao);

        expandirOuRecolherMenu(botao, excessoDeItensDoMenu);

        return botao;
    }

    function expandirOuRecolherMenu(botao, excessoDeItensDoMenu) {

        botao.addEventListener('click', () => {
            const botaoExpandido = botao.getAttribute('aria-expanded');
            excessoDeItensDoMenu.forEach(item => {
                item.classList.toggle('escondido');
            });

            if (botaoExpandido === 'false') {
                botao.setAttribute('aria-expanded', 'true');
            }
        });

    }
}

export default expandirMenu;