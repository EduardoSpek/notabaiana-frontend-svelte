<script>
	import { getContext } from 'svelte';
	export let data;
	const host = getContext('host');
</script>

<svelte:head>
	<title>{data.item.title}</title>
	<meta name="description" content={data.item.title} />
</svelte:head>

<div class="container">
	<div class="title">
		<h3>{data.item.title}</h3>
	</div>
	<div class="img">
		<img class="thumb" src="{host}/images/{data.item.image}" alt={data.item.title} />
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
		margin-top: -20px;
	}
	.title {
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 12px;
		font-family: 'Roboto Condensed Variable', sans-serif;
	}
	.text {
		font-family: 'Cabin', sans-serif;
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
		width: 100%;
	}
</style>
