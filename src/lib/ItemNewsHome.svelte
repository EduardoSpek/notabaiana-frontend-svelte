<script>
import { IMG_PADRAO } from "$lib/index.js";
export let title;
export let url_image;
export let link;
export let date;
</script>

<article>
	<div class="card">
		<div class="img">
			{#if url_image.includes('.jpg') || url_image.includes('.jpeg')}
				<a href={link}><img class="thumb" src={url_image} alt={title} /></a>
			{:else}
				<a href={link}><img class="thumb" src={IMG_PADRAO} alt={'Nota Baiana'} /></a>
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
	.data_news {
		margin-top: 0px;
		padding-bottom: 4px;
		font-size: 14px;
	}
	.card {
		display: flex;
		width: 100%;
		gap: 16px;
		margin-bottom: 14px;
		padding-bottom: 14px;
		border-bottom: 1px solid var(--cinza);
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
		font-size: 18px;
		font-weight: 700;
		margin-bottom: 10px;
		line-height: 20px;
	}
	.link {
		text-decoration: none;
		color: var(--text);
	}
	.link:hover {
		text-decoration: underline;
	}
	@media (min-width: 600px) {
		.title {
			font-size: 20px;
		}
		.thumb, .img {
			width: 230px;
		}
	}

	@media (min-width: 768px) {
		article {
			display: flex;
		}
		.card {
			display: block;
			width: 345px;
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
			font-size: 18px;
		}
		.data_news {
			margin-top: 10px;
			padding-bottom: 4px;
			font-size: 14px;
		}
	}

	@media (min-width: 1000px) {
		.card {
			width: 298px;
		}
	}
	@media (min-width: 1280px) {
		.card {
			width: 282px;
		}
	}
	@media (min-width: 1360px) {
		.card {
			width: 300px;
		}
	}
</style>
