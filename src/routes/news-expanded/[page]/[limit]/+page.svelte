<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { IMG_PADRAO, HOST, HOST_API, formatarData, globalStore } from '$lib/index.js';
	import ItemNewsHome from '$lib/ItemNewsHome.svelte';
	import ListNewsCloseSvg from '$lib/svg/list_news_close.svelte';
	import { fly } from 'svelte/transition';
	import Seo from '$lib/Seo.svelte';
	import Banners from '$lib/Banners.svelte';
	export let data;
	export let comparePage;
	let page = 24;
	$: comparePage = parseInt(data.pagination.currentPage) + 2;

	onMount(() => {
		$globalStore.listNewsExpand = false;
	});
</script>

<Seo
	title="Notícias da Página {data.pagination.currentPage}"
	description="Lista de notícias da página número {data.pagination.currentPage}"
	url={HOST + '/news-expanded/' + data.pagination.currentPage + '/' + page}
	image="{HOST}/notabaiana_1200.jpg"
/>

<div class="TopSpace"></div>

<Banners banners={data.banners} region="topo" />

<section>
	<div class="conteudo-flow" in:fly={{ duration: 200, y: 500 }}>
		<div class="list">
			<div class="emalta">Notícias recentes</div>
			<div class="flexRight">
				<ListNewsCloseSvg />
			</div>
		</div>

		<div class="itemsExpanded">
			{#each data.news as info}
				<section class="listExpanded">
					<article>
						<div class="title">
							<h1>{info.title}</h1>
						</div>

						<div class="data_news">
							Publicado em {formatarData(info.created_at)}
						</div>

						<div class="img">
							{#if info.image?.includes('.jpg')}
								<img class="thumb" src="{HOST_API}/images/{info.image}" alt={info.title} />
							{:else}
								<img class="thumb" src={IMG_PADRAO} alt={'Nota Baiana'} />
							{/if}
						</div>

						<div class="text" id="textNews">
							<p>{@html info.text}</p>
						</div>
						{#if data.token}
							<br /><br /><a href="{HOST}/admin{data.item.link}" class="link">Editar notícia</a>
						{/if}
					</article>
				</section>

				<div class="TopSpace"></div>
			{/each}
		</div>

		<section>
			<div class="pagination">
				{#if parseInt(data.pagination.currentPage) >= 4}
					<button on:click={() => goto('/news-expanded/1/' + page)} class="btn_transparent">
						<div class="page">
							<a href="/news-expanded/1/{page}" class="link">1</a>
						</div>
					</button>
					...
				{/if}
				{#if data.pagination.previousPages}
					{#each data.pagination.previousPages as previousPage}
						{#if previousPage > 0}
							<button
								on:click={() => goto('/news-expanded/' + previousPage + '/' + page)}
								class="btn_transparent"
							>
								<div class="page">
									<a href="/news-expanded/{previousPage}/{page}" class="link">{previousPage}</a>
								</div>
							</button>
						{/if}
					{/each}
				{/if}
				{#if data.pagination.currentPage}
					<button
						on:click={() => goto('/news-expanded/' + data.pagination.currentPage + '/' + page)}
						class="btn_transparent"
					>
						<div class="page page_current">
							<a
								href="/news-expanded/{data.pagination.currentPage}/{page}"
								class="link link_current">{data.pagination.currentPage}</a
							>
						</div>
					</button>
				{/if}
				{#if data.pagination.nextPages}
					{#each data.pagination.nextPages as nextPage}
						<button
							on:click={() => goto('/news-expanded/' + nextPage + '/' + page)}
							class="btn_transparent"
						>
							<div class="page">
								<a href="/news-expanded/{nextPage}/{page}" class="link">{nextPage}</a>
							</div>
						</button>
					{/each}
				{/if}
				{#if comparePage < parseInt(data.pagination.totalPages)}
					...
					<button
						on:click={() => goto('/news-expanded/' + data.pagination.totalPages + '/' + page)}
						class="btn_transparent"
					>
						<div class="page">
							<a
								href="/news-expanded/{data.pagination.totalPages}/{page}"
								class="link"
								data-sveltekit-preload-code="viewport">{data.pagination.totalPages}</a
							>
						</div>
					</button>
				{/if}
			</div>
		</section>
	</div>
</section>
<div class="TopSpace"></div>
<Banners banners={data.banners} region="rodape" />

<style>
	.list {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;
	}
	.listExpanded {
		margin: auto;
		padding: 0px;
	}
	h1 {
		color: var(--preto);
		margin: 0px;
		margin-bottom: 40px;
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
	.text p {
		line-height: 28px;
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
		.img {
			margin-bottom: 0px;
		}
		.itemsExpanded {
			margin: auto;
			max-width: 740px;
		}
	}
</style>
