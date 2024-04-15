<script>
	export let data;

	console.log(data.item);
</script>

<div class="container">
	<div class="voltar">
		<a href="javascript:void(0);" onclick="window.history.back();" class="link">Página anterior</a>
	</div>
	<div class="title">
		<h3>{data.item.title}</h3>
	</div>
	<div class="img">
		<img class="thumb" src="http://localhost:8080/images/{data.item.image}" alt={data.item.title} />
	</div>
	<div class="text">
		{@html data.item.text}
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		margin-left: 12px;
		margin-right: 12px;
	}
	.title {
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 12px;
		margin-top: 20px;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}
	.text {
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
			sans-serif;
		text-align: justify;
	}
	.img {
		justify-content: center;
		align-items: center;
		margin: auto;
		margin-bottom: 30px;
	}
	.thumb {
		border-radius: 4px;
	}
	.voltar {
		margin-bottom: -20px;
		margin-top: 10px;
	}
	.link {
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
			Geneva, Verdana, sans-serif;
		text-decoration: none;
		color: blue;
		font-size: 16px;
	}
</style>
