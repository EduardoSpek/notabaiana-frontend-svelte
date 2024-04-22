<script>
	import { fly, fade } from 'svelte/transition';
	import { SITE_NAME, formatarData } from '../../../lib/index';
	import { getContext } from 'svelte';
	export let data;
	const host = getContext('host');

	let data_news = formatarData(data.item.created_at);
</script>

<svelte:head>
	<title>{data.item.title}</title>
	<meta name="description" content={data.item.title} />
</svelte:head>

<div class="conteudo" in:fly={{ duration: 200, y: 500 }}>
	<div class="title">
		<h3>{data.item.title}</h3>
	</div>

	<div class="data_news">Publicado em {data_news}</div>

	<div class="img">
		<img class="thumb" src="{host}/images/{data.item.image}" alt={data.item.title} />
	</div>
	<div class="text">
		{@html data.item.text}
	</div>
</div>

<style>
	.conteudo {
		display: flex;
		flex-direction: column;
		margin-left: 12px;
		margin-right: 12px;
		margin-top: -20px;
	}
	.title {
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 12px;
		font-family: 'Roboto Condensed Variable', sans-serif;
		font-size: 22px;
	}
	.text {
		font-family: 'Cabin', sans-serif;
		text-align: justify;
		font-size: 20px;
	}
	.img {
		justify-content: center;
		align-items: center;
		margin: auto;
		margin-bottom: 30px;
	}
	.thumb {
		border-radius: 4px;
		width: 100%;
	}
	.data_news {
		font-family: 'Cabin', sans-serif;
		font-size: 16px;
		color: var(--cinza-escuro);
		margin-top: -24px;
		margin-bottom: 20px;
	}
</style>
