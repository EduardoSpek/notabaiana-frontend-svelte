<script>
import { HOST_API, formatarData } from "$lib/index.js";
import { fly } from "svelte/transition";
import ItemCD from "$lib/ItemCD.svelte";
export let data;
export let category;
const page = 24;
</script>

<section>
	<div class="conteudo-flow" in:fly={{ duration: 200, y: 500 }}>
		<div class="emalta">Conteúdo Musical - Relacionados</div>
		<div class="items">
			{#each data as download}
				<ItemCD
					title={download.title}
					url_image={HOST_API + '/images/downloads/' + download.image}
					link={'/conteudo-musical/' + download.slug}
					date={formatarData(download.created_at)}
				/>
			{/each}
		</div>
		<div class="box">
			<div class="box-page">
				<a href="/conteudo-musical/category/{category}/1" class="link" data-sveltekit-reload
					>Veja todos os conteúdos musicais</a
				>
			</div>
		</div>
	</div>
</section>
