<script>
	import { HOST_API } from '$lib/index.js';
	import { fly } from 'svelte/transition';
	import { SITE_NAME, formatarData } from '../lib/index';
	import ItemNews from '$lib/ItemNews.svelte';
	import TopNoticias from '$lib/TopNoticias.svelte';
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

<TopNoticias data={data.news} />
