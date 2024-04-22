<script>
	import { fly } from 'svelte/transition';
	import { SITE_NAME, formatarData } from '../lib/index';
	import { getContext } from 'svelte';
	export let data;
	const host = getContext('host');
</script>

<svelte:head>
	<title>{SITE_NAME}</title>
	<meta name="description" content="Notícias do Brasil e do Mundo" />
</svelte:head>

<div class="conteudo" in:fly={{ duration: 200, y: 500 }}>
	{#each data.news as info}
		<div class="card">
			<div class="img">
				<a href={info.link}
					><img class="thumb" src="{host}/images/{info.image}" alt={info.title} /></a
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
		font-size: 16px;
		font-weight: 700;
	}
	.link {
		text-decoration: none;
		color: var(--secundary);
	}
	.link:hover {
		text-decoration: underline;
	}
</style>
