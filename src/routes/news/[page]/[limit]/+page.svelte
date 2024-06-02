<script>
	import { HOST, HOST_API, formatarData } from '$lib/index.js';
	import ItemNewsHome from '$lib/ItemNewsHome.svelte';
	import { fly } from 'svelte/transition';
	import Seo from '$lib/Seo.svelte';
	export let data;
	export let comparePage;
	$: comparePage = parseInt(data.pagination.currentPage) + 2;
</script>

<Seo
	title="Notícias da Página {data.pagination.currentPage}"
	description="Lista de notícias da página número {data.pagination.currentPage}"
	url={HOST + '/news/' + data.pagination.currentPage + '/16'}
	image="{HOST}/notabaiana_1200.jpg"
/>
<section>
	<div class="conteudo-flow" in:fly={{ duration: 200, y: 500 }}>
		<div class="items">
			{#each data.news as info}
				<ItemNewsHome
					title={info.title}
					url_image="{HOST_API}/images/{info.image}"
					link={info.link}
					date={formatarData(info.created_at)}
				/>
			{/each}
		</div>
		<section>
			<div class="pagination">
				{#if parseInt(data.pagination.currentPage) >= 4}
					<div class="page">
						<a href="/news/1/16" class="link">1</a>
					</div>
					...
				{/if}
				{#if data.pagination.previousPages}
					{#each data.pagination.previousPages as previousPage}
						{#if previousPage > 0}
							<div class="page">
								<a href="/news/{previousPage}/16" class="link">{previousPage}</a>
							</div>
						{/if}
					{/each}
				{/if}
				{#if data.pagination.currentPage}
					<div class="page page_current">
						<a href="/news/{data.pagination.currentPage}/16" class="link link_current"
							>{data.pagination.currentPage}</a
						>
					</div>
				{/if}
				{#if data.pagination.nextPages}
					{#each data.pagination.nextPages as nextPage}
						<div class="page">
							<a href="/news/{nextPage}/16" class="link">{nextPage}</a>
						</div>
					{/each}
				{/if}
				{#if comparePage < parseInt(data.pagination.totalPages)}
					...
					<div class="page">
						<a
							href="/news/{data.pagination.totalPages}/16"
							class="link"
							data-sveltekit-preload-code="viewport">{data.pagination.totalPages}</a
						>
					</div>
				{/if}
			</div>
		</section>
	</div>
</section>
