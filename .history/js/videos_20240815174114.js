function videos() {
    const elementos = {
        containerDeVideos: '[data-js="container-videos"]',
    }

    const containerDeVideos = document.querySelector(`${elementos.containerDeVideos}`);

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
                        <p class="categoria"><strong>Categoria: </strong>${video.categoria}</p>
                    </div>
                </li>
            `;
            })
        } catch (error) {
            containerDeVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error}</p>`;
        }
    }
    
    document.addEventListener('DOMContentLoaded', buscarEMostrarVideos);
}