<script>
	import { HOST_API, SITE_NAME, formatarData } from '$lib/index.js';
	export let data;
	export let comparePage;
	$: comparePage = parseInt(data.pagination.currentPage) + 2;
</script>

<svelte:head>
	<title>Busca por {data.search} - Página {data.pagination.currentPage} - {SITE_NAME}</title>
	<meta
		name="description"
		content="Lista de notícias da página número {data.pagination.currentPage}"
	/>
</svelte:head>

<div class="conteudo">
	{#if data.pagination.totalPages == 0}
		<div class="zero_resultado">Nenhum resultado encontrado sobre <b>{data.search}</b></div>
	{:else}
		<div class="emalta">Busca por: <b>{data.search}</b></div>
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
		<div class="pagination">
			{#if parseInt(data.pagination.currentPage) >= 4}
				<div class="page">
					<a href="/news/busca/1?search={data.search}" class="link">1</a>
				</div>
				...
			{/if}
			{#if data.pagination.previousPages}
				{#each data.pagination.previousPages as previousPage}
					{#if previousPage > 0}
						<div class="page">
							<a href="/news/busca/{previousPage}?search={data.search}" class="link"
								>{previousPage}</a
							>
						</div>
					{/if}
				{/each}
			{/if}
			{#if data.pagination.currentPage}
				<div class="page page_current">
					<a
						href="/news/busca/{data.pagination.currentPage}?search={data.search}"
						class="link link_current">{data.pagination.currentPage}</a
					>
				</div>
			{/if}
			{#if data.pagination.nextPages}
				{#each data.pagination.nextPages as nextPage}
					<div class="page">
						<a href="/news/busca/{nextPage}?search={data.search}" class="link">{nextPage}</a>
					</div>
				{/each}
			{/if}
			{#if comparePage < parseInt(data.pagination.totalPages)}
				...
				<div class="page">
					<a href="/news/busca/{data.pagination.totalPages}?search={data.search}" class="link"
						>{data.pagination.totalPages}</a
					>
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	.zero_resultado {
		font-family: 'Cabin', sans-serif;
		font-size: 16px;
		margin-top: 30px;
		margin-bottom: 30px;
	}
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
