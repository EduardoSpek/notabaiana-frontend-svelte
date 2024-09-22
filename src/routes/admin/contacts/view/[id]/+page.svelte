<script>
import { IMG_PADRAO, HOST_API, formatarData } from "$lib/index.js";
export let data;
let data_contacts = formatarData(data.item.created_at);
</script>

<div class="TopSpace"></div>

<section>
	<article>
		<div class="central">
			<div class="conteudo">
				<div class="data_news">Enviado em {data_contacts}</div>

				<div class="title">
					<h1>{data.item.title}</h1>
				</div>

				<div class="text" id="textNews">
					<p>{@html data.item.text}</p>
				</div>

				<div class="img">
					{#if data.item.image?.includes('.jpg')}
						<img
							class="thumb"
							src="{HOST_API}{data.item.image}"
							width="100%"
							alt={data.item.title}
						/>
					{:else}
						<img class="thumb" src={IMG_PADRAO} width="100%" alt={'Nota Baiana'} />
					{/if}
				</div>
			</div>
		</div>
	</article>
</section>

<style>
	.data_news {
		margin-top: 30px;
		margin-bottom: -4px;
	}
	.title {
		margin-bottom: -20px;
	}
</style>
