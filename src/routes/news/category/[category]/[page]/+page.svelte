<script>
import { goto } from "$app/navigation";
import { HOST, HOST_API, formatarData } from "$lib/index.js";
import { fly } from "svelte/transition";
import ItemNewsHome from "$lib/ItemNewsHome.svelte";
import Seo from "$lib/Seo.svelte";
import Banners from "$lib/Banners.svelte";
export let data;
export let comparePage;
$: comparePage = Number.parseInt(data.pagination.currentPage) + 2;
</script>

<Seo
	title="Notícias da Página {data.pagination.currentPage} - {data.category}"
	description="Lista de notícias da página número {data.pagination.currentPage}"
	url={HOST + '/news/' + data.pagination.currentPage + '/10'}
	image="{HOST}/notabaiana_1200.jpg"
/>

<div class="TopSpace"></div>

<Banners banners={data.banners} region="topo" />

<section>
	<div class="conteudo-flow" in:fly={{ duration: 200, y: 500 }}>
		{#if data.news.length <= 0}
			<div class="zero_resultado">Nenhum resultado nesta categoria.</div>
		{:else}
			<div class="emalta">
				{#if data.category == 'famosos'}
					Famosos
				{:else if data.category == 'esportes'}
					Esportes
				{:else if data.category == 'justica'}
					Justiça
				{:else if data.category == 'saude'}	
					Saúde
				{:else if data.category == 'municipios'}
					Municípios
				{/if}
			</div>
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
							on:click={() => goto('/news/category/' + data.category + '/1')}
							class="btn_transparent"
						>
							<div class="page">
								<a href="/news/category/{data.category}/1" class="link">1</a>
							</div>
						</button>
						...
					{/if}
					{#if data.pagination.previousPages}
						{#each data.pagination.previousPages as previousPage}
							{#if previousPage > 0}
								<button
									on:click={() => goto('/news/category/' + data.category + '/' + previousPage)}
									class="btn_transparent"
								>
									<div class="page">
										<a href="/news/category/{data.category}/{previousPage}" class="link"
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
								goto('/news/category/' + data.category + '/' + data.pagination.currentPage)}
							class="btn_transparent"
						>
							<div class="page page_current">
								<a
									href="/news/category/{data.category}/{data.pagination.currentPage}"
									class="link link_current">{data.pagination.currentPage}</a
								>
							</div>
						</button>
					{/if}
					{#if data.pagination.nextPages}
						{#each data.pagination.nextPages as nextPage}
							<button
								on:click={() => goto('/news/category/' + data.category + '/' + nextPage)}
								class="btn_transparent"
							>
								<div class="page">
									<a href="/news/category/{data.category}/{nextPage}" class="link">{nextPage}</a>
								</div>
							</button>
						{/each}
					{/if}
					{#if comparePage < parseInt(data.pagination.totalPages)}
						...
						<button
							on:click={() =>
								goto('/news/category/' + data.category + '/' + data.pagination.totalPages)}
							class="btn_transparent"
						>
							<div class="page">
								<a href="/news/category/{data.category}/{data.pagination.totalPages}" class="link"
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
