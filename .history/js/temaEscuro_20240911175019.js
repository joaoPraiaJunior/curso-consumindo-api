function temaEscuro() {
	const elementos = {
		botaoModoEscuro: '[data-js="modo-escuro"]',
		paginaCompleta: ":root",
	};

	const botaoModoEscuro = document.querySelector(elementos.botaoModoEscuro);
	const paginaCompleta = document.querySelector(elementos.paginaCompleta);

	function modoEscuro(modoEscuroAtivo) {
		if (modoEscuroAtivo) {
			paginaCompleta.classList.add("modo-escuro");
			localStorage.setItem("classe", "modo-escuro");
		} else {
			paginaCompleta.classList.remove("modo-escuro");
			localStorage.removeItem("classe");
		}

		atualizarAtributosAria(modoEscuroAtivo);
	}

	function atualizarAtributosAria(modoEscuroAtivo) {
		botaoModoEscuro.setAttribute("aria-checked", modoEscuroAtivo);
		botaoModoEscuro.setAttribute(
			"aria-label",
			modoEscuroAtivo ? "Modo escuro da página" : "Modo claro da página",
		);
	}

	function verificaModoEscuroAoIniciarPagina() {
		const modoEscuroAtivo = localStorage.getItem("classe") === "modo-escuro";
		botaoModoEscuro.checked = modoEscuroAtivo;
		modoEscuro(modoEscuroAtivo);
	}

	botaoModoEscuro.addEventListener("change", function () {
		modoEscuro(botaoModoEscuro.checked);
	});

	window.addEventListener("load", verificaModoEscuroAoIniciarPagina);
}

export default temaEscuro;
