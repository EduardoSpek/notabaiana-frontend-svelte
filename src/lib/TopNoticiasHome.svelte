<script>
	import { HOST_API, formatarData } from '$lib/index.js';
	import { fly } from 'svelte/transition';
	import ItemNewsHome from '$lib/ItemNewsHome.svelte';
	export let data;
</script>

<section>
	<div class="conteudo-flow" in:fly={{ duration: 200, y: 500 }}>
		<div class="emalta">Notícias em destaque</div>

		<div class="items">
			{#each data as info}
				<ItemNewsHome
					title={info.title}
					url_image="{HOST_API}/images/{info.image}"
					link={info.link}
					date={formatarData(info.created_at)}
				/>
			{/each}
		</div>
		<div class="box">
			<div class="box-page">
				<a href="/news/1/10" class="link">Veja todas as notícias</a>
			</div>
		</div>
	</div>
</section>

<style>
	.box {
		margin-bottom: 30px;
	}
	.conteudo-flow {
		margin-left: 10px;
		margin-right: 10px;
	}
	.items {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-items: normal;
		gap: 10px;
	}
	@media (min-width: 480px) {
		.conteudo-flow {
			margin: auto;
		}
		.items {
			display: flex;
			align-items: stretch;
			flex-direction: row;
			flex-wrap: wrap;
			gap: 34px;
		}
	}
</style>
