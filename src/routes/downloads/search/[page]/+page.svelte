<script>
	import { goto } from '$app/navigation';
	import { HOST, HOST_API, SITE_NAME, formatarData } from '$lib/index.js';
	import { fly } from 'svelte/transition';
	import Seo from '$lib/Seo.svelte';
	import ItemCD from '$lib/ItemCD.svelte';
	import Banners from '$lib/Banners.svelte';
	import IconSearchSvg from '$lib/IconSearchSvg.svelte';
	import InputSearchDownload from '$lib/InputSearchDownload.svelte';
	export let data;
	export let comparePage;
	$: comparePage = parseInt(data.pagination.currentPage) + 2;

	let search_visible = false;
	let timeoutID;
	let ref;

	const closesearch = () => {
		search_visible = false;
		clearTimeout(timeoutID);
	};

	const opensearch = () => {
		search_visible = !search_visible;
		clearTimeout(timeoutID);
		timeoutID = setTimeout(closesearch, 15000);
		setFocus();
	};

	const setFocus = async () => {
		await tick();
		ref?.focus();
	};
</script>

<Seo
	title="Busca por {data.search} - Página {data.pagination.currentPage} - {SITE_NAME}"
	description="Lista de downloads - {data.search}"
	url={HOST + '/downloads/search/' + data.pagination.currentPage + '?search=' + data.search}
	image="{HOST}/notabaiana_1200.jpg"
/>

<div class="TopSpace"></div>
<InputSearchDownload {search_visible} />

<Banners banners={data.banners} region="topo" />

<section>
	<div class="conteudo-flow" in:fly={{ duration: 200, y: 500 }}>
		{#if data.pagination.totalPages == 0}
			<div class="zero_resultado">Nenhum resultado encontrado sobre <b>{data.search}</b></div>
		{:else}
			<div class="list">
				<div class="emalta">Busca por: <b>{data.search}</b></div>
				<div>
					<IconSearchSvg onSearchClick={opensearch} />
				</div>
			</div>
			<div class="items">
				{#each data.downloads as download}
					<ItemCD
						title={download.title}
						url_image={HOST_API + '/images/downloads/' + download.image}
						link={'/downloads/' + download.slug}
						date={formatarData(download.created_at)}
					/>
				{/each}
			</div>
			<section>
				<div class="pagination">
					{#if parseInt(data.pagination.currentPage) >= 4}
						<button
							on:click={() => goto('/downloads/search/1?search=' + data.search)}
							class="btn_transparent"
						>
							<div class="page">
								<a href="/downloads/search/1?search={data.search}" class="link">1</a>
							</div>
						</button>
						...
					{/if}
					{#if data.pagination.previousPages}
						{#each data.pagination.previousPages as previousPage}
							{#if previousPage > 0}
								<button
									on:click={() =>
										goto('/downloads/search/' + previousPage + '?search=' + data.search)}
									class="btn_transparent"
								>
									<div class="page">
										<a href="/downloads/search/{previousPage}?search={data.search}" class="link"
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
								goto('/downloads/search/' + data.pagination.currentPage + '?search=' + data.search)}
							class="btn_transparent"
						>
							<div class="page page_current">
								<a
									href="/downloads/search/{data.pagination.currentPage}?search={data.search}"
									class="link link_current">{data.pagination.currentPage}</a
								>
							</div>
						</button>
					{/if}
					{#if data.pagination.nextPages}
						{#each data.pagination.nextPages as nextPage}
							<button
								on:click={() => goto('/downloads/search/' + nextPage + '?search=' + data.search)}
								class="btn_transparent"
							>
								<div class="page">
									<a href="/downloads/search/{nextPage}?search={data.search}" class="link"
										>{nextPage}</a
									>
								</div>
							</button>
						{/each}
					{/if}
					{#if comparePage < parseInt(data.pagination.totalPages)}
						...
						<button
							on:click={() =>
								goto('/downloads/search/' + data.pagination.totalPages + '?search=' + data.search)}
							class="btn_transparent"
						>
							<div class="page">
								<a
									href="/downloads/search/{data.pagination.totalPages}?search={data.search}"
									class="link">{data.pagination.totalPages}</a
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

<style>
	.list {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;
	}
</style>
