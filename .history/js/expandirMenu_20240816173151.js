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
        }
    }

    function esconderOExcessoDeItens(excessoDeItensDoMenu) {
        excessoDeItensDoMenu.forEach(item => {
            item.classList.add('escondido');
        });
    }
}

export default expandirMenu;