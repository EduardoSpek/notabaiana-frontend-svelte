<script>
	import { beforeNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { IMG_PADRAO, HOST, HOST_API, formatarData } from '$lib/index.js';
	import Banners from '$lib/Banners.svelte';
	import { fly } from 'svelte/transition';
	import Seo from '$lib/Seo.svelte';
	import TopNoticiasHome from '$lib/TopNoticiasHome.svelte';
	export let data;
	let data_news = formatarData(data.item.created_at);
	let textNews;

	function removeIframe() {
		const iframe = document.querySelector('iframe');
		if (iframe) {
			iframe.remove();
		}
	}

	onMount(() => {
		textNews = document.getElementById('textNews');
	});

	beforeNavigate((event) => {
		removeIframe();
	});
</script>

<Seo
	title={data.item.title}
	description="{data.item.text?.substr(0, 150)}..."
	url={HOST + data.item.link}
	image="{HOST_API}/images/{data.item.image}"
/>

<div class="TopSpace"></div>

<Banners banners={data.banners} region="topo" />

<section>
	<article>
		<div class="central">
			<div class="conteudo" in:fly={{ duration: 200, y: 500 }}>
				<div class="title">
					<h1>{data.item.title}</h1>
				</div>

				<div class="data_news">
					Publicado em {data_news}
				</div>

				<div class="img">
					{#if data.item.image?.includes('.jpg')}
						<img class="thumb" src="{HOST_API}/images/{data.item.image}" alt={data.item.title} />
					{:else}
						<img class="thumb" src={IMG_PADRAO} alt={'Nota Baiana'} />
					{/if}
				</div>

				<div class="text" id="textNews">
					<p>{@html data.item.text}</p>
				</div>
				{#if data.token}
					<br /><br /><a href="{HOST}/admin{data.item.link}" class="link">Editar notícia</a>
				{/if}
			</div>
		</div>
	</article>
</section>

<div class="TopSpace"></div>

<Banners banners={data.banners} />

<TopNoticiasHome data={data.top} />

<Banners banners={data.banners} region="rodape" />

<style>
	h1 {
		color: var(--preto);
	}

	.title {
		font-weight: bold;
		margin-bottom: 12px;
		font-family: 'Roboto Condensed Variable', sans-serif;
		font-size: 22px;
	}
	.text {
		font-family: 'Cabin', sans-serif;
		text-align: justify;
		font-size: 20px;
		color: var(--text);
	}
	.img {
		justify-content: center;
		align-items: center;
		margin: auto;
		margin-top: 10px;
		margin-bottom: 10px;
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
	@media (min-width: 669px) {
		h1 {
			font-size: 32px;
		}
		.conteudo {
			margin-top: -30px;
		}
		.img {
			margin-bottom: 0px;
		}
	}
</style>
