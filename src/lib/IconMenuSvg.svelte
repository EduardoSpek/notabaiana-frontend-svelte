<script>
	import { globalStore } from '$lib/index.js';
	const openmenu = () => {
		$globalStore.isOpen = !$globalStore.isOpen;
	};
</script>

<div class="menu">
	<button on:click={openmenu}>
		<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" class="icon-menu">
			<path
				d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"
			></path>
		</svg>
	</button>
</div>

<div class="menu-box {$globalStore.isOpen ? 'open' : ''}">
	<div class="menu-title">Categorias</div>
	<ul>
		<li><a href="/" on:click={openmenu}>Home</a></li>
		<li><a href="/news/category/famosos/1" on:click={openmenu}>Famosos</a></li>
		<li><a href="/news/category/esportes/1" on:click={openmenu}>Esportes</a></li>
		<li><a href="/news/category/justica/1" on:click={openmenu}>Justiça</a></li>
		<li><a href="/news/category/saude/1" on:click={openmenu}>Saúde</a></li>
		<li><a href="/news/category/municipios/1" on:click={openmenu}>Municípios</a></li>
		<li><a href="/news/1/16" on:click={openmenu}>Todas as notícias</a></li>
	</ul>
	<div class="menu-title">Termos de uso</div>
	<ul>
		<li><a href="/politica-de-privacidade" on:click={openmenu}>Política de Privacidade</a></li>
	</ul>
	<div class="menu-title">Administração</div>
	<ul>
		<li><a href="/admin/login" on:click={openmenu}>Entrar</a></li>
	</ul>
</div>

<style>
	.menu-title {
		text-align: start;
		margin-left: 20px;
		margin-top: 30px;
		font-family: 'Cabin', sans-serif;
		font-size: 18px;
		color: var(--amarelo);
		border-bottom: 1px solid var(--branco);
		padding-bottom: 10px;
		margin-right: 20px;
	}
	ul {
		list-style: none;
		text-align: start;
		font-family: 'Cabin', sans-serif;
		font-size: 18px;
		font-weight: lighter;
	}
	ul li {
		margin-bottom: 12px;
	}
	ul li a {
		color: var(--branco);
		text-decoration: none;
	}
	ul li a:hover {
		color: var(--amarelo);
		text-decoration: underline;
	}
	button {
		all: unset;
		cursor: pointer;
		float: left;
	}
	.menu-box {
		position: fixed;
		top: 0;
		left: -250px; /* Menu initially hidden off-screen */
		width: 250px;
		height: 100%;
		background-color: var(--primary);
		color: var(--branco);
		transition: left 0.3s ease;
		z-index: 2;
	}

	.menu {
		flex: 0.2;
		text-align: start;
	}
	.open {
		left: 0px;
	}
	.icon-menu {
		width: 28px;
		fill: var(--cinza-escuro);
		margin-top: 6px;
		float: left;
	}
	.icon-menu:hover {
		fill: var(--primary);
	}
	@media (min-width: 669px) {
		.icon-menu {
			margin-top: 6px;
			width: 34px;
		}
	}
</style>
