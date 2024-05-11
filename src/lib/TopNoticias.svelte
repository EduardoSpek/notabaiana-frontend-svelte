<script>
	import { HOST_API } from '$lib/index.js';
	import { fly } from 'svelte/transition';
	import { formatarData } from '../lib/index';
	import ItemNewsBig from '$lib/ItemNewsBig.svelte';
	export let data;
</script>

<section>
	<div class="central">
		<div class="conteudo" in:fly={{ duration: 200, y: 500 }}>
			<div class="emalta">Notícias em destaque</div>
			{#each data as info}
				<ItemNewsBig
					title={info.title}
					url_image="{HOST_API}/images/{info.image}"
					link={info.link}
					date={formatarData(info.created_at)}
				/>
			{/each}
			<div class="box">
				<div class="box-page">
					<a href="/news/1/10" class="link">Veja todas as notícias</a>
				</div>
			</div>
		</div>
	</div>
</section>
