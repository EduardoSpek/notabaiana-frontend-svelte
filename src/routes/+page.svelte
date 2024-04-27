<script>
	import { HOST_API } from '$lib/index.js';
	import { fly } from 'svelte/transition';
	import { SITE_NAME, formatarData } from '../lib/index';
	import ItemNews from '$lib/ItemNews.svelte';
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

<div class="conteudo" in:fly={{ duration: 200, y: 500 }}>
	<div class="emalta">Notícias em destaque</div>
	{#each data.news as info}
		<ItemNews
			title={info.title}
			url_image="{HOST_API}/images/{info.image}"
			link={info.link}
			date={formatarData(info.created_at)}
		/>
	{/each}
	<div class="box">
		<div class="box-page">
			<a href="/news/1/10" class="link">Veja todas as notícias</a>
		</div>
	</div>
</div>

<style>
	.conteudo {
		display: flex;
		flex-direction: column;
		margin-left: 12px;
		margin-right: 12px;
	}

	.link {
		text-decoration: none;
		color: var(--text);
	}
	.link:hover {
		text-decoration: underline;
	}
	@media (min-width: 480px) {
		.emalta {
			font-size: 28px;
			margin-top: -10px;
			margin-bottom: 20px;
		}
	}
</style>
