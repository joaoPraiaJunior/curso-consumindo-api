function filtrarVideosPorBotoes() {

    const elementos = {
        botaoCategoria: '[data-js="botao-categoria"]',
        videos: '[data-js="videos"]',
        categoria: '[data-js="categoria"]',
        containerVideos: '[data-js="container-videos"]',
    }

    const botaoCategoria = document.querySelectorAll(elementos.botaoCategoria);
    const containerVideos = document.querySelector(elementos.containerVideos);

    botaoCategoria.forEach(botao => {
        let nomeDaCategoria = botao.getAttribute('name');
        botao.addEventListener('click', () => {
            filtrarPorCategoria(nomeDaCategoria);
            alteraOFocoDoBotao(nomeDaCategoria);
            mudarCategotiaNoPainelDeVideos(nomeDaCategoria);
        });

        botao.addEventListener('keydown', (evento) => {
            const tecla = evento.key;
            const botaoAtual = evento.target;
            navegacaoPorTeclasDeSetas(tecla, botaoAtual);
        });

        function navegacaoPorTeclasDeSetas(tecla, botaoAtual) {
            
            const tablist = document.querySelector('[role="tablist"]');

            const acoesDoTeclado = {
                'ArrowRight': () => botaoAtual === tablist.lastElementChild ? tablist.firstElementChild.focus() :
                botaoAtual.nextElementSibling.focus(),
                'ArrowLeft': () => botaoAtual === tablist.firstElementChild ? tablist.lastElementChild.focus() :
                botaoAtual.previousElementSibling.focus(),
            };

            if (acoesDoTeclado[tecla]) {
                acoesDoTeclado[tecla]();
            }
        }
    });

        // function alteraOFocoDoBotao(botao) {
        //     const botaoSetado = document.getElementsByClassName('selecionado');
        //     botaoSetado[0].classList.remove('selecionado');
        //     botao.classList.add('selecionado');
        // }


        function mudarCategotiaNoPainelDeVideos(nomeDaCategoria) {
            const categoriaSelecionada = document.querySelector(`[name="${nomeDaCategoria}"]`).id;
            containerVideos.setAttribute('aria-labelledby', categoriaSelecionada);
        }

        function alteraOFocoDoBotao(nomeDaCategoria) {
            botaoCategoria.forEach((botao) => {
                const botaoFoiSelecionado = botao.getAttribute("name") === nomeDaCategoria;

                // botao.classList.toggle("selecionado", botaoFoiSelecionado);

                botao.ariaSelected = botaoFoiSelecionado;
                botao.setAttribute("tabindex", botaoFoiSelecionado ? "0" : "-1");
            });
        }

        function filtrarPorCategoria(nomeDaCategoria) {
            const videos = document.querySelectorAll(elementos.videos);
            const valorDoFiltro = nomeDaCategoria.toLowerCase();
            videos.forEach((video) => {
                const categoria = video.querySelector(elementos.categoria).textContent.toLowerCase();
                video.style.display = valorDoFiltro !== "tudo" ? categoria.includes(valorDoFiltro) ? "block" : "none" : "block";
            });
        }
    }
    

    export default filtrarVideosPorBotoes;