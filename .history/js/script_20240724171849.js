const elementos = {
    containerDeVideos: '[data-js="container-videos"]',
    barraDePesquisa: '[data-js="barra-de-pesquisa"]',
}

const containerDeVideos = document.querySelector(`${elementos.containerDeVideos}`);
const barraDePesquisa = document.querySelector(`${elementos.barraDePesquisa}`);

async function buscarEMostrarVideos() {

    try {
        const busca = await fetch('http://localhost:3000/videos');
        const videos = await busca.json();
        videos.forEach(video => {
            if (video.categoria === "") throw new Error("Vídeo não tem categoria");
            containerDeVideos.innerHTML += `
            <li class="videos__item">
                <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                <div class="descricao-video">
                    <img class="img-canal" src = "${video.imagem}" alt="Logo do Canal">
                    <h3 class="titulo-video">${video.titulo}</h3>
                    <p class="titulo-canal">${video.descricao}</p>
                </div>
            </li>
        `;
        })
    } catch (error) {
        containerDeVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error}</p>`;
    }
}

buscarEMostrarVideos();

barraDePesquisa.addEventListener('input', filtrarPesquisa);

function filtrarPesquisa() {
    const videos = document.querySelectorAll(".videos__item");

    if (barraDePesquisa.value !== "") {
        for(let video of videos) {
            let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
            let valorDoFiltro = barraDePesquisa.value.toLowerCase();

            if(!titulo.includes(valorDoFiltro)) {
                video.style.display = "none";
            } else {
                video.style.display = "block";
            }
        }

    } else {
        video.style.display = "block";
    }
}
