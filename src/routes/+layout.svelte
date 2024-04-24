<script>
	import '../global.css';
	import '@fontsource-variable/roboto-condensed';
	import '@fontsource-variable/cabin';
	import '@fontsource/poppins';
	import { setContext } from 'svelte';
	const host = 'https://bn-api-production.up.railway.app';
	setContext('host', host);
</script>

<div class="topo">
	<a href="/" class="link-topo" title="Página Inicial"><span>nota</span>baiana</a>
</div>
<div class="container">
	<slot />
</div>

<style>
	.topo {
		display: flex;
		text-align: center;
		justify-content: center;
		border-bottom: 2px solid #f5f3f2;
		padding-bottom: 6px;
		padding-top: 2px;
		font-family: 'Poppins', sans-serif;
		font-size: 22px;
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
		.topo {
			padding-top: 4px;
			padding-bottom: 12px;
			font-size: 32px;
			margin-bottom: 30px;
		}
	}
</style>
