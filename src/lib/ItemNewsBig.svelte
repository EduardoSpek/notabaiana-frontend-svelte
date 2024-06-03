<script>
	import { IMG_PADRAO } from '$lib/index.js';
	export let title;
	export let url_image;
	export let link;
	export let date;
</script>

<article>
	<div class="card">
		<div class="info">
			<div class="title">
				<a href={link} class="link">{title}</a>
			</div>
		</div>
		<div class="data_news">{date}</div>
		<div class="img">
			{#if url_image.includes('.jpg')}
				<a href={link}><img class="thumb" src={url_image} alt={title} /></a>
			{:else}
				<img class="thumb" src={IMG_PADRAO} alt={'Nota Baiana'} />
			{/if}
		</div>
	</div>
</article>

<style>
	.data_news {
		margin-bottom: 10px;
		padding-bottom: 4px;
		font-size: 14px;
	}
	.card {
		gap: 12px;
		margin-bottom: 20px;
		padding-bottom: 30px;
		border-bottom: 1px solid var(--cinza);
	}
	.img {
		width: 100%;
	}
	.thumb {
		width: 100%;
		border-radius: 4px;
	}
	.title {
		font-family: 'Cabin', sans-serif;
		font-size: 18px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	.link {
		text-decoration: none;
		color: var(--text);
	}
	.link:hover {
		text-decoration: underline;
	}
	@media (min-width: 669px) {
		.title {
			font-size: 18px;
		}
	}
</style>
