<script>
	import { goto } from '$app/navigation';
	import { HOST, HOST_API, formatarData } from '$lib/index.js';
	import ItemNewsHome from '$lib/ItemNewsHome.svelte';
	import { fly } from 'svelte/transition';
	import Seo from '$lib/Seo.svelte';
	import Banners from '$lib/Banners.svelte';
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

<div class="TopSpace"></div>

<Banners banners={data.banners} region="topo" />

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
					<button on:click={() => goto('/news/1/16')} class="btn_transparent">
						<div class="page">
							<a href="/news/1/16" class="link">1</a>
						</div>
					</button>
					...
				{/if}
				{#if data.pagination.previousPages}
					{#each data.pagination.previousPages as previousPage}
						{#if previousPage > 0}
							<button
								on:click={() => goto('/news/' + previousPage + '/16')}
								class="btn_transparent"
							>
								<div class="page">
									<a href="/news/{previousPage}/16" class="link">{previousPage}</a>
								</div>
							</button>
						{/if}
					{/each}
				{/if}
				{#if data.pagination.currentPage}
					<button
						on:click={() => goto('/news/' + data.pagination.currentPage + '/16')}
						class="btn_transparent"
					>
						<div class="page page_current">
							<a href="/news/{data.pagination.currentPage}/16" class="link link_current"
								>{data.pagination.currentPage}</a
							>
						</div>
					</button>
				{/if}
				{#if data.pagination.nextPages}
					{#each data.pagination.nextPages as nextPage}
						<button on:click={() => goto('/news/' + nextPage + '/16')} class="btn_transparent">
							<div class="page">
								<a href="/news/{nextPage}/16" class="link">{nextPage}</a>
							</div>
						</button>
					{/each}
				{/if}
				{#if comparePage < parseInt(data.pagination.totalPages)}
					...
					<button
						on:click={() => goto('/news/' + data.pagination.totalPages + '/16')}
						class="btn_transparent"
					>
						<div class="page">
							<a
								href="/news/{data.pagination.totalPages}/16"
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
