<script>
	import { goto } from '$app/navigation';
	import { HOST, HOST_API, SITE_NAME, formatarData } from '$lib/index.js';
	import { fly } from 'svelte/transition';
	import Seo from '$lib/Seo.svelte';
	import ItemNewsHome from '$lib/ItemNewsHome.svelte';
	import Banners from '$lib/Banners.svelte';
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

<div class="TopSpace"></div>

<Banners banners={data.banners} region="topo" />

<section>
	<div class="conteudo-flow" in:fly={{ duration: 200, y: 500 }}>
		{#if data.pagination.totalPages == 0}
			<div class="zero_resultado">Nenhum resultado encontrado sobre <b>{data.search}</b></div>
		{:else}
			<div class="emalta">Busca por: <b>{data.search}</b></div>
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
						<button
							on:click={() => goto('/news/busca/1?search=' + data.search)}
							class="btn_transparent"
						>
							<div class="page">
								<a href="/news/busca/1?search={data.search}" class="link">1</a>
							</div>
						</button>
						...
					{/if}
					{#if data.pagination.previousPages}
						{#each data.pagination.previousPages as previousPage}
							{#if previousPage > 0}
								<button
									on:click={() => goto('/news/busca/' + previousPage + '?search=' + data.search)}
									class="btn_transparent"
								>
									<div class="page">
										<a href="/news/busca/{previousPage}?search={data.search}" class="link"
											>{previousPage}</a
										>
									</div>
								</button>
							{/if}
						{/each}
					{/if}
					{#if data.pagination.currentPage}
						<button
							on:click={() =>
								goto('/news/busca/' + data.pagination.currentPage + '?search=' + data.search)}
							class="btn_transparent"
						>
							<div class="page page_current">
								<a
									href="/news/busca/{data.pagination.currentPage}?search={data.search}"
									class="link link_current">{data.pagination.currentPage}</a
								>
							</div>
						</button>
					{/if}
					{#if data.pagination.nextPages}
						{#each data.pagination.nextPages as nextPage}
							<button
								on:click={() => goto('/news/busca/' + nextPage + '?search=' + data.search)}
								class="btn_transparent"
							>
								<div class="page">
									<a href="/news/busca/{nextPage}?search={data.search}" class="link">{nextPage}</a>
								</div>
							</button>
						{/each}
					{/if}
					{#if comparePage < parseInt(data.pagination.totalPages)}
						...
						<button
							on:click={() =>
								goto('/news/busca/' + data.pagination.totalPages + '?search=' + data.search)}
							class="btn_transparent"
						>
							<div class="page">
								<a href="/news/busca/{data.pagination.totalPages}?search={data.search}" class="link"
									>{data.pagination.totalPages}</a
								>
							</div>
						</button>
					{/if}
				</div>
			</section>
		{/if}
	</div>
</section>

<div class="TopSpace"></div>
<Banners banners={data.banners} region="rodape" />
