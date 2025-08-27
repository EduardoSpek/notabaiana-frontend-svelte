<script>
import { HOST_API, formatarData } from "$lib/index.js";
import { fly } from "svelte/transition";
import ItemNewsHome from "$lib/ItemNewsHome.svelte";
export let data_categorias;
export let category;
</script>

<section>
	<div class="conteudo-flow" in:fly={{ duration: 200, y: 500 }}>
		<div class="emalta">{category}</div>

		<div class="items">
			{#each data_categorias as info}
				<ItemNewsHome
					title={info.title_ai || info.title}
					url_image="{HOST_API}/images/{info.image}"
					link={info.link}
					date={formatarData(info.created_at)}
				/>
			{/each}
		</div>
		<div class="box">
			<div class="box-page">
				<a href="/news/category/{category.toLowerCase().replace('ç', 'c').replace('í', 'i')}/1" class="link"
					>Veja todas as notícias sobre {category}</a
				>
			</div>
		</div>
	</div>
</section>

<style>
	.conteudo-flow {
		padding-top: 0px;
	}
	.box {
		margin-bottom: 30px;
	}

	.items {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: stretch;
		gap: 10px;
	}
	@media (min-width: 669px) {
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
