<script>
	import { tick } from 'svelte';
	export let search_visible = false;
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

{#if search_visible}
	<div class="search-control">
		<div class="search">
			<form action="/downloads/search/1" method="get" on:submit={opensearch}>
				<input
					type="text"
					name="search"
					id="search"
					placeholder="Encontrar CD..."
					bind:this={ref}
				/>
				<button type="submit">Buscar</button>
			</form>
		</div>
	</div>
{/if}

<style>
	.search-control {
		display: flex;
		justify-content: center;
	}
	.search {
		margin-top: -17px;
		position: fixed;
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
</style>
