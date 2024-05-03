<script>
	import { SITE_NAME, formatarData } from '../lib/index';
	import TopNoticiasHome from '$lib/TopNoticiasHome.svelte';
	import TopNoticiasCategorias from '$lib/TopNoticiasCategorias.svelte';
	export let data;
</script>

<svelte:head>
	<title>{SITE_NAME} - As notícias do jeito que o baiano gosta</title>
	<meta
		name="description"
		content="Portal baiano que reúne as principais notícias do Brasil e do mundo."
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>

<TopNoticiasHome data={data.news} />

<TopNoticiasCategorias data_categorias={data.famosos} category="Famosos" />

<TopNoticiasCategorias data_categorias={data.esportes} category="Esportes" />

<TopNoticiasCategorias data_categorias={data.municipios} category="Municípios" />

<TopNoticiasCategorias data_categorias={data.justica} category="Justiça" />
