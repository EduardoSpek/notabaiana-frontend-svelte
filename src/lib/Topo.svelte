<script>
	import IconSearchSvg from '$lib/IconSearchSvg.svelte';
	import IconMenuSvg from '$lib/IconMenuSvg.svelte';
	import { tick } from 'svelte';

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
</script>

<div class="topo">
	<IconMenuSvg />
	<div class="logo">
		<a href="/" class="link-topo" title="Página Inicial"><span>nota</span>baiana</a>
	</div>
	<IconSearchSvg onSearchClick={opensearch} />
</div>

{#if search_visible}
	<div class="search">
		<form action="/news/busca/1" method="get" on:submit={opensearch}>
			<input type="text" name="search" placeholder="Procurar por..." bind:this={ref} />
			<button type="submit">Buscar</button>
		</form>
	</div>
{/if}

<style>
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
		color: var(--cinza-escuro);
		accent-color: var(--primary);
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
	.topo {
		display: flex;
		text-align: center;
		justify-content: center;
		border-bottom: 2px solid #f5f3f2;
		padding-bottom: 6px;
		font-family: 'Poppins', sans-serif;
		font-size: 26px;
		color: var(--primary);
		font-weight: bold;
		margin-bottom: 12px;
	}
	.topo span {
		color: var(--secundary);
	}
	.link-topo {
		color: var(--primary);
		text-decoration: none;
	}
	@media (min-width: 480px) {
		.search {
			margin-top: -12px;
		}
		.topo {
			font-size: 32px;
			margin-bottom: 30px;
		}
	}
</style>
