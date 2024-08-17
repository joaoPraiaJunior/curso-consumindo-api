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
        const idDaLista = secao.querySelector('ul').id
        const botao = document.createElement('button');
        const icone = document.createElement('i');
        const span = document.createElement('span');
        botao.classList.add('menu__itens', 'menu__botao-expandir-canais');
        botao.setAttribute('data-js', 'botao-expandir');
        botao.setAttribute('aria-expanded', 'false');
        botao.setAttribute('aria-controls', idDaLista);
        icone.classList.add('icone__mostrar');
        span.textContent = `Mostrar mais ${excessoDeItensDoMenu.length}`;
        botao.append(icone, span);
        secao.append(botao);

        expandirOuRecolherMenu(botao, excessoDeItensDoMenu);
    }

    function expandirOuRecolherMenu(botao, excessoDeItensDoMenu) {

        botao.addEventListener('click', () => {
            const botaoExpandido = botao.getAttribute('aria-expanded');
            const textoDoBotao = botao.querySelector('span');
            console.log(teste);
            const focoNoPrimeiroItemExpandido = excessoDeItensDoMenu[0].querySelector('a');
            excessoDeItensDoMenu.forEach(item => {
                item.classList.toggle('escondido');
            });

            if (botaoExpandido === 'false') {
                botao.setAttribute('aria-expanded', 'true');
                textoDoBotao.textContent = 'Mostrar menos';
                focoNoPrimeiroItemExpandido.focus();
            } else {
                botao.setAttribute('aria-expanded', 'false');
                textoDoBotao.textContent = `Mostrar mais ${excessoDeItensDoMenu.length}`;
            }
        });
    }
}

export default expandirMenu;