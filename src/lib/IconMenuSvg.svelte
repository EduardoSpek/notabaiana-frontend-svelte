<script>
import { globalStore } from "$lib/index.js";
import IconSetaDireita from "$lib/svg/IconSetaDireita.svelte";
const openmenu = () => {
	$globalStore.isOpen = !$globalStore.isOpen;
};
let cat1 = true;
const expand1 = () => {
	cat1 = !cat1;
	cat2 = false;
	cat3 = false;
	cat4 = false;
};

let cat2 = false;
const expand2 = () => {
	cat1 = false;
	cat2 = !cat2;
	cat3 = false;
	cat4 = false;
};

let cat3 = false;
const expand3 = () => {
	cat1 = false;
	cat2 = false;
	cat3 = !cat3;
	cat4 = false;
};

let cat4 = false;
const expand4 = () => {
	cat1 = false;
	cat2 = false;
	cat3 = false;
	cat4 = !cat4;
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
	<div class="menu-category">
		<div class="menu-title">
			<button class="btn_transparent" on:click={expand1}
				><IconSetaDireita seta={cat1} /> Categorias</button
			>
		</div>
		<ul class={cat1 ? 'visible' : 'invisible'}>
			<li><a href="/" on:click={openmenu}>Home</a></li>
			<li><a href="/news/category/famosos/1" on:click={openmenu}>Famosos</a></li>
			<li><a href="/news/category/esportes/1" on:click={openmenu}>Esportes</a></li>
			<li><a href="/news/category/justica/1" on:click={openmenu}>Justiça</a></li>
			<li><a href="/news/category/saude/1" on:click={openmenu}>Saúde</a></li>
			<li><a href="/news/category/municipios/1" on:click={openmenu}>Municípios</a></li>
			<li><a href="/news/1/24" on:click={openmenu}>Todas as notícias</a></li>
		</ul>
	</div>
	<div class="menu-title">
		<button class="btn_transparent" on:click={expand2}
			><IconSetaDireita seta={cat2} /> Conteúdo Musical</button
		>
	</div>
	<ul class={cat2 ? 'visible' : 'invisible'}>
		<li><a href="/conteudo-musical/1/24" on:click={openmenu}>Recentes</a></li>
		<li><a href="/conteudo-musical/category/arrocha/1" on:click={openmenu}>Arrocha</a></li>
		<li>
			<a href="/conteudo-musical/category/arrochadeira/1" on:click={openmenu}>Arrochadeira</a>
		</li>
		<li><a href="/conteudo-musical/category/axe/1" on:click={openmenu}>Axé</a></li>
		<li><a href="/conteudo-musical/category/brega/1" on:click={openmenu}>Brega</a></li>
		<li><a href="/conteudo-musical/category/brega-funk/1" on:click={openmenu}>Brega Funk</a></li>
		<li><a href="/conteudo-musical/category/eletronica/1" on:click={openmenu}>Eletrônica</a></li>
		<li><a href="/conteudo-musical/category/forro/1" on:click={openmenu}>Forró</a></li>
		<li><a href="/conteudo-musical/category/funk/1" on:click={openmenu}>Funk</a></li>
		<li><a href="/conteudo-musical/category/gospel/1" on:click={openmenu}>Gospel</a></li>
		<li><a href="/conteudo-musical/category/rap-hip-hop/1" on:click={openmenu}>Rap Hip Hop</a></li>
		<li><a href="/conteudo-musical/category/mpb/1" on:click={openmenu}>MPB</a></li>
		<li><a href="/conteudo-musical/category/pagode/1" on:click={openmenu}>Pagode</a></li>
		<li><a href="/conteudo-musical/category/pop/1" on:click={openmenu}>Pop</a></li>
		<li><a href="/conteudo-musical/category/reggae/1" on:click={openmenu}>Reggae</a></li>
		<li><a href="/conteudo-musical/category/piseiro/1" on:click={openmenu}>Piseiro</a></li>
		<li><a href="/conteudo-musical/category/rock/1" on:click={openmenu}>Rock</a></li>
		<li><a href="/conteudo-musical/category/samba/1" on:click={openmenu}>Samba</a></li>
		<li><a href="/conteudo-musical/category/sertanejo/1" on:click={openmenu}>Sertanejo</a></li>
		<li><a href="/conteudo-musical/category/swingueira/1" on:click={openmenu}>Swingueira</a></li>
		<li><a href="/conteudo-musical/category/variados/1" on:click={openmenu}>Variados</a></li>
	</ul>
	<div class="menu-title">
		<button class="btn_transparent" on:click={expand3}
			><IconSetaDireita seta={cat3} /> Institucional</button
		>
	</div>
	<ul class={cat3 ? 'visible' : 'invisible'}>
		<li><a href="/politica-de-privacidade" on:click={openmenu}>Política de Privacidade</a></li>
		<li><a href="/fale-conosco" on:click={openmenu}>Fale conosco</a></li>
	</ul>
	<div class="menu-title">
		<button class="btn_transparent" on:click={expand4}
			><IconSetaDireita seta={cat4} /> Administração</button
		>
	</div>
	<ul class={cat4 ? 'visible' : 'invisible'}>
		<li><a href="/admin/login" on:click={openmenu}>Entrar</a></li>
	</ul>
	<br />
	<br />
	<br />
	<br />
	<br />
</div>

<style>
	.btn_transparent {
		width: 100%;
	}
	.invisible {
		display: none;
	}
	.visible {
		display: block;
		transition: all 1s ease;
		animation: fadeIn 0.4s ease;
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(-30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.menu-title {
		text-align: start;
		margin-left: 10px;
		margin-top: 30px;
		font-family: 'Cabin', sans-serif;
		font-size: 18px;
		color: var(--dark-title);
		margin-right: 10px;
		background-color: var(--preto-fixo);
		padding: 12px;
		padding-left: 20px;
		padding-bottom: 14px;
		height: 20px;
		border-radius: 50px;
	}
	ul {
		list-style: none;
		text-align: start;
		font-family: 'Cabin', sans-serif;
		font-size: 18px;
		font-weight: lighter;
	}
	ul li {
		margin-left: 10px;
		margin-bottom: 12px;
	}
	ul li a {
		color: var(--dark-subtitle);
		text-decoration: none;
	}
	ul li a:hover {
		color: var(--dark-title);
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
		background-color: var(--dark);
		color: var(--branco);
		transition: left 0.3s ease;
		z-index: 2;
		overflow-y: auto;
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
