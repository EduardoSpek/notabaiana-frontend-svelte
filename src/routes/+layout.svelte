<script>
	import '../global.css';
	import '@fontsource-variable/roboto-condensed';
	import '@fontsource-variable/cabin';
	import '@fontsource/poppins';
	import Topo from '$lib/Topo.svelte';
	import { globalStore } from '$lib/index.js';

	const openmenu = () => {
		$globalStore.isOpen = !$globalStore.isOpen;
	};
</script>

<button on:click={openmenu}>
	<div class={$globalStore.isOpen ? 'menu-bg' : ''}></div>
</button>

<Topo />
<main class="main">
	<slot />
</main>

<footer>
	<div class="caixa">
		<div id="footer_conteudo">
			<h3>Conteúdo</h3>
			<ul>
				<li><a href="/" class="link">Home</a></li>
				<li><a href="/news/category/famosos/1" class="link">Famosos</a></li>
				<li><a href="/news/category/esportes/1" class="link">Esportes</a></li>
				<li><a href="/news/category/justica/1" class="link">Justiça</a></li>
				<li><a href="/news/category/saude/1" class="link">Saúde</a></li>
				<li><a href="/news/category/municipios/1" class="link">Municípios</a></li>
				<li><a href="/news/1/16" class="link">Todas as notícias</a></li>
			</ul>
		</div>
		<div id="footer_institucional">
			<h3>Institucional</h3>
			<ul>
				<li><a href="/politica-de-privacidade" class="link">Polícita de Privacidade</a></li>
				<li><a href="/fale-conosco" class="link">Fale conosco</a></li>
			</ul>
		</div>
		<div id="footer_redes">
			<p><b>NotaBaiana.com.br</b> - Todos os direitos reservados</p>
		</div>
	</div>
</footer>

<style>
	main {
		align-items: top;
	} 
	footer {
		background-color: var(--cinza-claro);
		margin-top: 40px;
	}
	.caixa {
		margin: auto;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 20px;

		max-width: 1300px;
	}
	footer div {
		color: var(--preto);
	}
	footer #footer_conteudo {
		width: 50%;
	}
	footer #footer_institucional {
		width: 50%;
	}
	footer #footer_redes {
		font-size: 14px;
		text-align: center;
		width: 100%;
		border-top: 1px solid var(--cinza);
	}
	footer h3 {
		color: var(--primary);
	}
	footer ul {
		padding: 0px;
	}
	footer ul li {
		margin-bottom: 14px;
		margin-left: 8px;
	}
	footer ul li a {
		color: var(--preto);
	}
	button {
		all: unset;
		cursor: pointer;
		float: left;
	}
	.menu-bg {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: var(--branco);
		z-index: 0;
		opacity: 0.7;
	}
	@media (min-width: 669px) {
		footer #footer_conteudo {
			width: 20%;
		}
		footer #footer_institucional {
			width: 80%;
		}
	}
</style>
