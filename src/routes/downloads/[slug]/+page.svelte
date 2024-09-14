<script>
	import { onMount } from 'svelte';
	import { IMG_PADRAO, HOST, HOST_API, formatarData } from '$lib/index.js';
	import Banners from '$lib/Banners.svelte';
	import { fly } from 'svelte/transition';
	import Seo from '$lib/Seo.svelte';
	import CatDownloads from '$lib/CatDownloads.svelte';
	import IconSocialNetwork from '$lib/svg/IconSocialNetwork.svelte';

	export let data;
	let divRef;
	let data_news = formatarData(data.item.created_at);

	onMount(() => {
		loadFacebookComments();
	});

	function loadFacebookComments() {
		// Remover qualquer instância anterior do script do Facebook
		const existingScript = document.getElementById('facebook-jssdk');
		if (existingScript) {
			existingScript.remove();
		}

		// Resetar o objeto FB se existir
		if (window.FB) {
			delete window.FB;
		}

		// Carregar o SDK do Facebook
		const script = document.createElement('script');
		script.id = 'facebook-jssdk';
		script.src = 'https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v15.0';
		script.async = true;
		script.defer = true;
		script.crossOrigin = 'anonymous';

		script.onload = () => {
			// Inicializar o widget quando o script for carregado
			if (window.FB) {
				window.FB.XFBML.parse(divRef);
			}
		};

		document.body.appendChild(script);
	}
</script>

<div id="fb-root"></div>

<Seo
	title="{data.item.title} - Baixar CD"
	description="{data.item.text?.substr(0, 150)}..."
	url={HOST + '/downloads/' + data.item.slug}
	image="{HOST_API}/images/downloads/{data.item.image}"
/>

<div class="TopSpace"></div>

<Banners banners={data.banners} region="topo" />

<section>
	<article>
		<div class="conteudo" in:fly={{ duration: 200, y: 500 }}>
			<div class="title">
				<h1>{data.item.title}</h1>
			</div>

			<div class="data_news">
				Publicado em {data_news}
			</div>

			<div class="img">
				{#if data.item.image?.includes('.jpg')}
					<img
						class="thumb"
						src="{HOST_API}/images/downloads/{data.item.image}"
						alt={data.item.title}
					/>
				{:else}
					<img class="thumb" src={IMG_PADRAO} alt={'Nota Baiana'} />
				{/if}
			</div>

			<div class="text" id="textNews">
				<p>{@html data.item.text}</p>
			</div>
			<div class="baixar">
				<button
					class="btn_transparent btn_baixar"
					on:click={() => {
						window.open(data.item.link);
					}}>Quero baixar este CD</button
				>
			</div>
			<div class="social">
				<IconSocialNetwork url={HOST + data.item.link} />
			</div>
			<div class="comentarios">
				<div
					class="fb-comments"
					data-href={HOST + data.item.link}
					data-width="100%"
					data-numposts="5"
				></div>
			</div>
			{#if data.token}
				<br /><br /><a href="{HOST}/admin/downloads/update/{data.item.slug}" class="link"
					>Editar download</a
				>
			{/if}
		</div>
	</article>
</section>

<div class="TopSpace"></div>

<CatDownloads data={data.relacionados} category={data.category} />

<Banners banners={data.banners} region="rodape" />

<style>
	.baixar {
		display: flex;
		justify-content: center;
	}
	.btn_baixar {
		padding: 16px;
		padding-left: 64px;
		padding-right: 64px;
		border-radius: 50px;
		font-family: 'Cabin', sans-serif;
		font-weight: 700;
		background-color: var(--secundary);
		font-size: 18px;
		color: var(--branco);
		margin-bottom: 40px;
	}
	.btn_baixar:hover {
		background-color: var(--primary);
		color: var(--branco);
	}
	.comentarios {
		margin-top: 50px;
	}
	h1 {
		color: var(--preto);
	}

	.title {
		font-weight: bold;
		margin-bottom: 12px;
		font-family: 'Roboto Condensed Variable', sans-serif;
		font-size: 22px;
	}
	.text {
		font-family: 'Cabin', sans-serif;
		text-align: justify;
		font-size: 20px;
		color: var(--text);
	}
	.text p {
		line-height: 28px;
	}
	.img {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: auto;
		margin-top: 10px;
		margin-bottom: 20px;
		width: 100%;
	}
	.thumb {
		border-radius: 4px;
		width: 100%;
	}
	.data_news {
		font-family: 'Cabin', sans-serif;
		font-size: 16px;
		color: var(--cinza-escuro);
		margin-top: -24px;
		margin-bottom: 20px;
	}
	@media (min-width: 669px) {
		h1 {
			font-size: 32px;
		}
		.thumb {
			width: 550px;
			margin: auto;
		}
	}
</style>
