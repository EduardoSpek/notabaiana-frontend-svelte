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

<style>
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
</style>
