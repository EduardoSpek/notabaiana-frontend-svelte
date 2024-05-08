<script>
	import { HOST_API } from '$lib/index.js';
	import { fly } from 'svelte/transition';
	import { formatarData } from './index';
	import ItemNewsHome from '$lib/ItemNewsHome.svelte';
	export let data_categorias;
	export let category;
</script>

<div class="conteudo-flow" in:fly={{ duration: 200, y: 500 }}>
	<div class="emalta">{category}</div>

	<div class="items">
		{#each data_categorias as info}
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
			<a href="/news/category/{category.toLowerCase().replace('ç', 'c')}/1" class="link"
				>Veja todas as notícias sobre {category}</a
			>
		</div>
	</div>
</div>

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
		flex-direction: row;
		flex-wrap: wrap;
		align-items: stretch;
		gap: 10px;
	}
	@media (min-width: 480px) {
		.conteudo-flow {
			margin: auto;
		}
		.items {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			align-items: stretch;
			gap: 34px;
		}
	}
</style>
