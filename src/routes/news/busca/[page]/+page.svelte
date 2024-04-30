<script>
	import { HOST, HOST_API, SITE_NAME, formatarData } from '$lib/index.js';
	import { fly } from 'svelte/transition';
	import Seo from '$lib/Seo.svelte';
	import ItemNews from '$lib/ItemNews.svelte';
	export let data;
	export let comparePage;
	$: comparePage = parseInt(data.pagination.currentPage) + 2;
</script>

<Seo
	title="Busca por {data.search} - Página {data.pagination.currentPage} - {SITE_NAME}"
	description="Lista de notícias sobre {data.search}"
	url={HOST + '/news/busca/' + data.pagination.currentPage + '?search=' + data.search}
	image="{HOST}/notabaiana_1200.jpg"
/>

<div class="conteudo" in:fly={{ duration: 200, y: 500 }}>
	{#if data.pagination.totalPages == 0}
		<div class="zero_resultado">Nenhum resultado encontrado sobre <b>{data.search}</b></div>
	{:else}
		<div class="emalta">Busca por: <b>{data.search}</b></div>
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
