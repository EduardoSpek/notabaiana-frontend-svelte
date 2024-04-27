<script>
	export let title;
	export let url_image;
	export let link;
	export let date;
</script>

<div class="card">
	<div class="img">
		<a href={link}><img class="thumb" src={url_image} alt={title} /></a>
	</div>
	<div class="info">
		<div class="data_news">{date}</div>
		<div class="title">
			<a href={link} class="link">{title}</a>
		</div>
	</div>
</div>

<style>
	.card {
		display: flex;
		gap: 12px;
		margin-bottom: 20px;
		padding-bottom: 10px;
		border-bottom: 1px dashed var(--cinza);
	}
	.img {
		width: 120px;
	}
	.thumb {
		width: 120px;
		border-radius: 4px;
	}
	.title {
		font-family: 'Cabin', sans-serif;
		font-size: 14px;
		font-weight: 700;
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
