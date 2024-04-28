<script>
	import { HOST, HOST_API, formatarData } from '$lib/index.js';
	import ItemNews from '$lib/ItemNews.svelte';
	import Seo from '$lib/Seo.svelte';
	export let data;
	export let comparePage;
	$: comparePage = parseInt(data.pagination.currentPage) + 2;

const firstLetterUppercase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
let titleUp = firstLetterUppercase(data.category);
} 
</script>

<Seo
	title="{titleUp} - Notícias da Página {data.pagination.currentPage}"
	description="Lista de notícias da página número {data.pagination.currentPage}"
	url={HOST + '/news/' + data.pagination.currentPage + '/10'}
	image="{HOST}/notabaiana_1200.jpg"
/>

<div class="conteudo">
	{#if data.news.length <= 0}
		<div class="zero_resultado">Nenhum resultado nesta categoria.</div>
	{:else}
		<div class="emalta">
			{#if data.category == 'famosos'}
				Famosos
			{:else if data.category == 'esportes'}
				Esportes
			{/if}
		</div>
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
					<a href="/news/category/{data.category}/1" class="link">1</a>
				</div>
				...
			{/if}
			{#if data.pagination.previousPages}
				{#each data.pagination.previousPages as previousPage}
					{#if previousPage > 0}
						<div class="page">
							<a href="/news/category/{data.category}/{previousPage}" class="link">{previousPage}</a
							>
						</div>
					{/if}
				{/each}
			{/if}
			{#if data.pagination.currentPage}
				<div class="page page_current">
					<a
						href="/news/category/{data.category}/{data.pagination.currentPage}"
						class="link link_current">{data.pagination.currentPage}</a
					>
				</div>
			{/if}
			{#if data.pagination.nextPages}
				{#each data.pagination.nextPages as nextPage}
					<div class="page">
						<a href="/news/category/{data.category}/{nextPage}" class="link">{nextPage}</a>
					</div>
				{/each}
			{/if}
			{#if comparePage < parseInt(data.pagination.totalPages)}
				...
				<div class="page">
					<a href="/news/category/{data.category}/{data.pagination.totalPages}" class="link"
						>{data.pagination.totalPages}</a
					>
				</div>
			{/if}
		</div>
	{/if}
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
</style>
