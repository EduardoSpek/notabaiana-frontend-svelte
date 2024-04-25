<script>
	import { HOST_API } from '$lib/index.js';
	import { fly } from 'svelte/transition';
	import { SITE_NAME, formatarData } from '../lib/index';
	export let data;
</script>

<svelte:head>
	<title>{SITE_NAME} - As notícias do jeito que o baiano gosta</title>
	<meta name="description" content="Notícias do Brasil e do Mundo" />
</svelte:head>

<div class="conteudo" in:fly={{ duration: 200, y: 500 }}>
	<div class="emalta">Notícias em destaque</div>
	{#each data.news as info}
		<div class="card">
			<div class="img">
				<a href={info.link}
					><img class="thumb" src="{HOST_API}/images/{info.image}" alt={info.title} /></a
				>
			</div>
			<div class="info">
				<div class="data_news">{formatarData(info.created_at)}</div>
				<div class="title">
					<a href={info.link} class="link">{info.title}</a>
				</div>
			</div>
		</div>
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
	.card {
		display: flex;
		gap: 12px;
		margin-bottom: 20px;
		padding-bottom: 10px;
		border-bottom: 1px dashed var(--cinza);
	}
	.img {
		width: 120px;
	}
	.thumb {
		width: 120px;
		border-radius: 4px;
	}
	.title {
		font-family: 'Cabin', sans-serif;
		font-size: 14px;
		font-weight: 700;
	}
	.link {
		text-decoration: none;
		color: var(--text);
	}
	.link:hover {
		text-decoration: underline;
	}
	.emalta {
		font-family: 'Roboto Condensed Variable', sans-serif;
		font-size: 20px;
		padding-bottom: 4px;
		margin-bottom: 10px;
	}
	@media (min-width: 480px) {
		.title {
			font-size: 18px;
		}
		.emalta {
			font-size: 28px;
			margin-top: -10px;
			margin-bottom: 20px;
		}
	}
</style>
