<script>
	import { IMG_PADRAO } from '$lib/index.js';
	export let title;
	export let url_image;
	export let link;
	export let date;
</script>

<article>
	<div class="card">
		<div class="img">
			{#if url_image.includes('.jpg')}
				<a href={link}><img class="thumb" src={url_image} alt={title} /></a>
			{:else}
				<img class="thumb" src={IMG_PADRAO} alt={'Nota Baiana'} />
			{/if}
		</div>
		<div class="info">
			<div class="data_news">{date}</div>
			<div class="title">
				<a href={link} class="link">{title}</a>
			</div>
		</div>
	</div>
</article>

<style>
	.card {
		display: flex;
		gap: 14px;
		margin-bottom: 20px;
		padding-bottom: 10px;
		border-bottom: 1px dashed var(--cinza);
	}
	.img {
		width: 130px;
	}
	.thumb {
		width: 130px;
		border-radius: 4px;
	}
	.title {
		font-family: 'Cabin', sans-serif;
		font-size: 16px;
		font-weight: 700;
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
