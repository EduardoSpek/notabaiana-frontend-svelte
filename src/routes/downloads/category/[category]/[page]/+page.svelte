<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import {
		bigFirstLetter,
		HOST,
		HOST_API,
		formatarData,
		globalStore,
		SITE_NAME
	} from '$lib/index.js';
	import ItemCD from '$lib/ItemCD.svelte';
	import { fly } from 'svelte/transition';
	import Seo from '$lib/Seo.svelte';
	import Banners from '$lib/Banners.svelte';
	export let data;
	let page = 24;
	export let comparePage;
	$: comparePage = parseInt(data.pagination.currentPage) + 2;

	onMount(() => {
		$globalStore.listNewsExpand = true;
	});
</script>

<Seo
	title="Baixe CDs de {bigFirstLetter(data.category)} - Página {data.pagination
		.currentPage} - {SITE_NAME}"
	description="Lista com os CDs mais recentes de {bigFirstLetter(data.category)} - Página {data
		.pagination.currentPage} - {SITE_NAME}"
	url={HOST + '/downloads/' + data.pagination.currentPage + '/' + page}
	image="{HOST}/notabaiana_1200.jpg"
/>

<div class="TopSpace"></div>

<Banners banners={data.banners} region="topo" />

<section>
	<div class="conteudo-flow" in:fly={{ duration: 200, y: 500 }}>
		<div class="list">
			<div class="emalta">Baixar CDs - {bigFirstLetter(data.category)}</div>
		</div>

		<div class="items">
			{#each data.downloads as download}
				<ItemCD
					title={download.title}
					url_image={HOST_API + '/images/downloads/' + download.image}
					link={download.link}
					date={formatarData(download.created_at)}
				/>
			{/each}
		</div>

		<section>
			<div class="pagination">
				{#if parseInt(data.pagination.currentPage) >= 4}
					<button
						on:click={() => goto('/downloads/category/' + data.category + '/1')}
						class="btn_transparent"
					>
						<div class="page">
							<a href="/downloads/category/{data.category}/1" class="link">1</a>
						</div>
					</button>
					...
				{/if}
				{#if data.pagination.previousPages}
					{#each data.pagination.previousPages as previousPage}
						{#if previousPage > 0}
							<button
								on:click={() => goto('/downloads/category/' + data.category + '/' + previousPage)}
								class="btn_transparent"
							>
								<div class="page">
									<a href="/downloads/category/{data.category}/{previousPage}" class="link"
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
							goto('/downloads/category/' + data.category + '/' + data.pagination.currentPage)}
						class="btn_transparent"
					>
						<div class="page page_current">
							<a
								href="/downloads/category/{data.category}/{data.pagination.currentPage}"
								class="link link_current">{data.pagination.currentPage}</a
							>
						</div>
					</button>
				{/if}
				{#if data.pagination.nextPages}
					{#each data.pagination.nextPages as nextPage}
						<button
							on:click={() => goto('/downloads/category/' + data.category + '/' + nextPage)}
							class="btn_transparent"
						>
							<div class="page">
								<a href="/downloads/category/{data.category}/{nextPage}" class="link">{nextPage}</a>
							</div>
						</button>
					{/each}
				{/if}
				{#if comparePage < parseInt(data.pagination.totalPages)}
					...
					<button
						on:click={() =>
							goto('/downloads/category/' + data.category + '/' + data.pagination.totalPages)}
						class="btn_transparent"
					>
						<div class="page">
							<a
								href="/downloads/category/{data.category}/{data.pagination.totalPages}"
								class="link">{data.pagination.totalPages}</a
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
</style>
