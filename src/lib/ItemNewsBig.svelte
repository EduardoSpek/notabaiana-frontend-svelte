<script>
	export let title;
	export let url_image;
	export let link;
	export let date;
</script>

<div class="card">
	<div class="info">
		<div class="title">
			<a href={link} class="link">{title}</a>
		</div>
	</div>
	<div class="data_news">{date}</div>
	<div class="img">
		<a href={link}><img class="thumb" src={url_image} alt={title} /></a>
	</div>
</div>

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
	@media (min-width: 480px) {
		.title {
			font-size: 18px;
		}
	}
</style>
