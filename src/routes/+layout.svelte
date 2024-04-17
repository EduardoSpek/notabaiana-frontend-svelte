<script>
	import '../global.css';
	import '@fontsource-variable/roboto-condensed';
	import '@fontsource-variable/cabin';
	import { setContext } from 'svelte';
	const host = 'https://bn-api-production.up.railway.app';
	setContext('host', host);
</script>

<div class="topo"><a href="/" class="link-topo" title="Página Inicial">NOTÍCIAS BRASIL</a></div>
<slot />

<style>
	.topo {
		display: flex;
		text-align: center;
		justify-content: center;
		border-bottom: 1px solid #f5f3f2;
		padding-bottom: 12px;
		padding-top: 4px;
		font-family: 'Roboto Condensed Variable', sans-serif;
		font-size: 20px;
		color: var(--primary);
		font-weight: bold;
		margin-bottom: 20px;
	}
	.link-topo {
		color: var(--primary);
		text-decoration: none;
	}
</style>
