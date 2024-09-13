import axios from 'axios';

function videos() {
	const elementos = {
		containerDeVideos: '[data-js="container-videos"]',
	};

	const containerDeVideos = document.querySelector(`${elementos.containerDeVideos}`);

	async function buscarEMostrarVideos() {
		const urlDosVideos = import.meta.env.PROD ? 'https://api-json-server-youtube.herokuapp.com/videos' : 'http://localhost:3000/videos';
		try {
			// const busca = await fetch('http://localhost:3000/videos');
			// const videos = await busca.json();
			const busca = await axios.get(urlDosVideos);
			const videos = await busca.data;
			videos.forEach((video) => {
				if (video.categoria === '') throw new Error('Vídeo não tem categoria');
				containerDeVideos.appendChild(criandoElementoDeVideo(video));
			});
		} catch (error) {
			containerDeVideos.innerHTML = `<p class="mensagem"> Houve um erro ao carregar os vídeos: ${error}</p>`;
		}
	}

	function criandoElementoDeVideo(video) {
		const li = document.createElement('li');
		const iframe = document.createElement('iframe');
		const div = document.createElement('div');
		const img = document.createElement('img');
		const h3 = document.createElement('h3');
		const p = document.createElement('p');
		const p2 = document.createElement('p');

		li.classList.add('videos__item');
		li.dataset.js = 'videos';

		iframe.setAttribute('frameborder', '0');
		iframe.src = `${video.url}`;
		iframe.title = `${video.titulo}`;
		iframe.setAttribute('allowfullscreen', '');

		div.classList.add('descricao-video');

		img.classList.add('img-canal');
		img.src = `${video.imagem}`;
		img.alt = `Canal ${video.canal}`;

		h3.classList.add('titulo-video');
		h3.dataset.js = 'titulo-video';
		h3.textContent = video.titulo;

		p.classList.add('titulo-canal');
		p.textContent = video.descricao;

		p2.classList.add('categoria');
		p2.dataset.js = 'categoria';
		p2.textContent = video.categoria;

		li.appendChild(iframe);
		li.appendChild(div);

		div.appendChild(img);
		div.appendChild(h3);
		div.appendChild(p);
		div.appendChild(p2);

		return li;
	}

	document.addEventListener('DOMContentLoaded', buscarEMostrarVideos);
}

export default videos;
