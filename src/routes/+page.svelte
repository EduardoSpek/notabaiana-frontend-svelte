<script>
	import { SITE_NAME, formatarData } from '../lib/index';
	import { getContext } from 'svelte';
	export let data;
	export let comparePage;
	$: comparePage = parseInt(data.pagination.currentPage) + 2;
	const host = getContext('host');
</script>

<svelte:head>
	<title>{SITE_NAME}</title>
	<meta name="description" content="Notícias do Brasil" />
</svelte:head>

<div class="container">
	{#each data.news as info, i}
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
	<div class="pagination">
		{#if parseInt(data.pagination.currentPage) >= 4}
			<div class="page">
				<a href="/news/1/10" class="link">1</a>
			</div>
			...
		{/if}
		{#if data.pagination.previousPages}
			{#each data.pagination.previousPages as previousPage}
				<div class="page">
					<a href="/news/{previousPage}/10" class="link">{previousPage}</a>
				</div>
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
	.container {
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
	.data_news {
		font-family: 'Cabin', sans-serif;
		font-size: 14px;
		color: var(--cinza-escuro);
		margin-bottom: 4px;
	}
</style>
