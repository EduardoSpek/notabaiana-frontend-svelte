<script>
	import { HOST, HOST_API, formatarData } from '$lib/index.js';
	import ItemNews from '$lib/ItemNews.svelte';
	import Seo from '$lib/Seo.svelte';
	export let data;
	export let comparePage;
	$: comparePage = parseInt(data.pagination.currentPage) + 2;
</script>

<Seo
	title="Notícias da Página {data.pagination.currentPage}"
	description="Lista de notícias da página número {data.pagination.currentPage}"
	url={HOST + '/news/' + data.pagination.currentPage + '/10'}
	image="{HOST}/notabaiana_1200.jpg"
/>

<div class="conteudo">
	{#each data.news as info}
		<ItemNews
			title={info.title}
			url_image="{HOST_API}/images/{info.image}"
			link={info.link}
			date={formatarData(info.created_at)}
		/>
	{/each}
	<div class="pagination">
		{#if parseInt(data.pagination.currentPage) >= 4}
			<div class="page">
				<a href="/news/1/10" class="link">1</a>
			</div>
			...
		{/if}
		{#if data.pagination.previousPages}
			{#each data.pagination.previousPages as previousPage}
				{#if previousPage > 0}
					<div class="page">
						<a href="/news/{previousPage}/10" class="link">{previousPage}</a>
					</div>
				{/if}
			{/each}
		{/if}
		{#if data.pagination.currentPage}
			<div class="page page_current">
				<a href="/news/{data.pagination.currentPage}/10" class="link link_current"
					>{data.pagination.currentPage}</a
				>
			</div>
		{/if}
		{#if data.pagination.nextPages}
			{#each data.pagination.nextPages as nextPage}
				<div class="page">
					<a href="/news/{nextPage}/10" class="link">{nextPage}</a>
				</div>
			{/each}
		{/if}
		{#if comparePage < parseInt(data.pagination.totalPages)}
			...
			<div class="page">
				<a href="/news/{data.pagination.totalPages}/10" class="link">{data.pagination.totalPages}</a
				>
			</div>
		{/if}
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
	.link_current {
		color: var(--primary);
	}
	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.page {
		font-family: 'Cabin', sans-serif;
		justify-content: center;
		align-items: center;
		width: 20px;
		background-color: var(--cinza-claro);
		padding: 8px;
		margin: 4px;
		text-align: center;
		border-radius: 8px;
		cursor: pointer;
		font-weight: 700;
	}
	.page_current {
		background-color: var(--cinza);
	}
	@media (min-width: 480px) {
		.title {
			font-size: 18px;
		}
	}
</style>
