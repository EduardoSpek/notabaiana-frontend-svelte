<script>
	import { HOST, HOST_API, formatarData } from '$lib/index.js';
	import { fly, fade } from 'svelte/transition';
	import Seo from '$lib/Seo.svelte';
	import TopNoticias from '$lib/TopNoticias.svelte';
	export let data;
	let data_news = formatarData(data.item.created_at);
</script>

<Seo
	title={data.item.title}
	description="{data.item.text.substr(0, 150)}..."
	url={HOST + data.item.link}
	image="{HOST_API}/images/{data.item.image}"
/>

<div class="conteudo" in:fly={{ duration: 200, y: 500 }}>
	<div class="title">
		<h3>{data.item.title}</h3>
	</div>

	<div class="data_news">Publicado em {data_news}</div>

	<div class="img">
		<img class="thumb" src="{HOST_API}/images/{data.item.image}" alt={data.item.title} />
	</div>
	<div class="text">
		{@html data.item.text}
	</div>
</div>

<div class="separator"></div>

<TopNoticias data={data.top} />

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
		width: 100%;
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
	@media (min-width: 480px) {
		.conteudo {
			margin-top: -30px;
		}
	}
</style>
