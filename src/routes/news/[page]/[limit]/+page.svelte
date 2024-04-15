<script>
	export let data;
</script>

<div class="container">
	<h2>Notícias</h2>

	{#each data.news as info, i}
		<div class="card">
			<div class="img">
				<a href={info.link}
					><img class="thumb" src="http://localhost:8080/images/{info.image}" alt={info.title} /></a
				>
			</div>
			<div class="info">
				<div class="title">
					<a href={info.link} class="link">{info.title}</a>
				</div>
			</div>
		</div>
	{/each}
	<div class="pagination">
		<div class="page"><a href="/news/1/10" class="link">1</a></div>
		<div class="page"><a href="/news/2/10" class="link">2</a></div>
		<div class="page"><a href="/news/3/10" class="link">3</a></div>
	</div>
</div>

<style>
	:global(body) {
		-webkit-font-smoothing: antialiased; /* Para navegadores WebKit (Chrome, Safari, etc.) */
		-moz-osx-font-smoothing: grayscale; /* Para Firefox no macOS */
		font-smooth: always;
	}
	h2 {
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}
	.container {
		display: flex;
		flex-direction: column;
		margin-left: 12px;
		margin-right: 12px;
	}
	.card {
		display: flex;
		gap: 12px;
		margin-bottom: 20px;
		padding-bottom: 10px;
		border-bottom: 1px dashed #ccc;
	}
	.img {
		width: 120px;
	}
	.thumb {
		width: 120px;
		border-radius: 4px;
	}
	.title {
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		font-size: 16px;
	}
	.link {
		text-decoration: none;
		color: #333;
	}
	.link:hover {
		text-decoration: underline;
	}
	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.page {
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		justify-content: center;
		align-items: center;
		width: 20px;
	}
</style>
