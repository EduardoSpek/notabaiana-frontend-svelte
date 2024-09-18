<script>
	import IconSearchSvg from '$lib/IconSearchSvg.svelte';
	import IconMenuSvg from '$lib/IconMenuSvg.svelte';
	import { tick } from 'svelte';
	import IconDarkMode from './IconDarkMode.svelte';

	let search_visible = false;
	let timeoutID;
	let ref;

	const closesearch = () => {
		search_visible = false;
		clearTimeout(timeoutID);
	};

	const opensearch = () => {
		search_visible = !search_visible;
		clearTimeout(timeoutID);
		timeoutID = setTimeout(closesearch, 15000);
		setFocus();
	};

	const setFocus = async () => {
		await tick();
		ref?.focus();
	};

	const checkWords = (e) => {
		if (ref.value.length < 3) {
			e.preventDefault();
			alert('É necessário uma palavra com no mínimo 3 caracteres');
			clearTimeout(timeoutID);
			return;
		}
		search_visible = !search_visible;
	};
</script>

<header>
	<div class="topo">
		<IconMenuSvg />
		<div class="logo">
			<a href="/" class="link-topo" title="Página Inicial"><span>nota</span>baiana</a>
		</div>
		<div class="recursos">
			<IconDarkMode />
			<IconSearchSvg onSearchClick={opensearch} />
		</div>
	</div>

	{#if search_visible}
		<div class="search">
			<form action="/news/search/1" method="get" on:submit={checkWords}>
				<input type="text" name="search" placeholder="Procurar notícia..." bind:this={ref} />
				<button type="submit">Buscar</button>
			</form>
		</div>
	{/if}
</header>

<style>
	.recursos {
		display: flex;
		gap: 20px;
	}
	.search {
		display: flex;
		justify-content: center;
		padding: 10px;
		margin-bottom: 20px;
	}
	.search form {
		display: flex;
	}
	.search form input {
		font-family: 'Cabin', sans-serif;
		height: 22px;
		width: 100%;
		border: 1px solid var(--primary);
		font-size: 16px;
		padding: 8px;
		border-radius: 8px 0px 0px 8px;
		color: var(--preto);
		accent-color: var(--primary);
		background-color: var(--branco);
	}
	.search form button {
		font-family: 'Cabin', sans-serif;
		border-radius: 0px 8px 8px 0px;
		border: 1px;
		border: 1px solid var(--primary);
		color: var(--branco);
		background-color: var(--primary);
		padding-left: 20px;
		padding-right: 20px;
	}
	.logo {
		flex: 1;
	}
	header {
		position: fixed;
		width: 100%;
		background-color: var(--branco);
		height: 52px;
		float: left;
	}
	.topo {
		display: flex;
		text-align: center;
		justify-content: center;
		border-bottom: 2px solid var(--cinza-claro);
		font-family: 'Poppins', sans-serif;
		font-size: 26px;
		color: var(--primary);
		padding-bottom: 6px;
		font-weight: bold;
		margin-left: 16px;
		margin-right: 16px;
		margin-top: 6px;
	}
	.topo span {
		color: var(--secundary);
	}
	.link-topo {
		color: var(--primary);
		text-decoration: none;
	}
	@media (min-width: 669px) {
		header {
			height: 62px;
		}
		.search {
			margin-top: -12px;
		}
		.topo {
			font-size: 32px;
			margin-bottom: 30px;
			margin-left: 20px;
			margin-right: 20px;
		}
		.logo {
			flex: 4;
		}
	}
</style>
