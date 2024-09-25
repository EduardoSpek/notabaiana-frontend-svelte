<script>
import { beforeNavigate } from "$app/navigation";
import { onMount } from "svelte";
import { IMG_PADRAO, HOST, HOST_API, formatarData } from "$lib/index.js";
import Banners from "$lib/Banners.svelte";
import { fly } from "svelte/transition";
import Seo from "$lib/Seo.svelte";
import TopNoticiasHome from "$lib/TopNoticiasHome.svelte";
import TopViewsDownloads from "$lib/TopViewsDownloads.svelte";
import IconSocialNetwork from "$lib/svg/IconSocialNetwork.svelte";

export let data;
const data_news = formatarData(data.item.created_at);
let textNews;
let divRef;

function removeIframe() {
	const iframe = document.querySelector("iframe");
	if (iframe) {
		iframe.remove();
	}
}

onMount(() => {
	loadInstagramWidget();
	loadTwitterWidget();
	loadTiktokWidget();
	loadFacebookComments();
	textNews = document.getElementById("textNews");
});

beforeNavigate((event) => {
	removeIframe();
});

function loadFacebookComments() {
	// Remover qualquer instância anterior do script do Facebook
	const existingScript = document.getElementById("facebook-jssdk");
	if (existingScript) {
		existingScript.remove();
	}

	// Carregar o SDK do Facebook
	const script = document.createElement("script");
	script.id = "facebook-jssdk";
	script.src =
		"https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v15.0";
	script.async = true;
	script.defer = true;
	script.crossOrigin = "anonymous";

	script.onload = () => {
		// Inicializar o widget quando o script for carregado
		if (window.FB) {
			window.FB.XFBML.parse(divRef);
		}
	};

	document.body.appendChild(script);
}

function loadInstagramWidget() {
	// Remover qualquer instância anterior do script do Instagram
	const existingScripts = document.querySelectorAll(
		'script[src*="instagram.com/embed.js"]',
	);
	existingScripts.forEach((script, i) => script.remove());

	// Remover qualquer instância anterior do objeto instgrm
	if (window.instgrm) {
		window.instgrm = undefined;
	}

	// Carrega o script do Instagram
	const script = document.createElement("script");
	script.src = "//www.instagram.com/embed.js";
	script.async = true;
	script.onload = () => {
		// Inicializa o widget quando o script for carregado
		if (window.instgrm) {
			window.instgrm.Embeds.process();
		}
	};
	document.body.appendChild(script);
}

function loadTwitterWidget() {
	// Remover qualquer instância anterior do script do Twitter
	const existingScripts = document.querySelectorAll(
		'script[src*="platform.twitter.com/widgets.js"]',
	);
	existingScripts.forEach((script, i) => script.remove());

	// Carregar o script do Twitter
	const script = document.createElement("script");
	script.id = "twitter-widget-script";
	script.src = "https://platform.twitter.com/widgets.js";
	script.async = true;
	script.charset = "utf-8";

	script.onload = () => {
		// Inicializar o widget quando o script for carregado
		if (window.twttr) {
			window.twttr.widgets.load();
		}
	};

	document.body.appendChild(script);
}

function loadTiktokWidget() {
	// Remover qualquer instância anterior do script do TikTok
	const existingScripts = document.querySelectorAll(
		'script[src*="tiktok.com/embed.js"]',
	);
	existingScripts.forEach((script, i) => script.remove());

	// Carregar o script do TikTok
	const script = document.createElement("script");
	script.id = "tiktok-embed-script";
	script.src = "https://www.tiktok.com/embed.js";
	script.async = true;

	script.onload = () => {
		// O TikTok geralmente não requer uma inicialização explícita
		// mas podemos forçar um re-parse se necessário
		if (window.TikTok) {
			//window.TikTok.reload();
		}
	};

	document.body.appendChild(script);
}
</script>

<div id="fb-root"></div>

<Seo
	title={data.item.title}
	description="{data.item.text?.substr(0, 150)}..."
	url={HOST + data.item.link}
	image="{HOST_API}/images/{data.item.image}"
/>

<div class="TopSpace"></div>

<Banners banners={data.banners} region="topo" />

<section>
	<article>
		<div class="central">
			<div class="conteudo" in:fly={{ duration: 200, y: 500 }}>
				<div class="title">
					<h1>{data.item.title}</h1>
				</div>

				<div class="data_news">
					Publicado em {data_news}
				</div>

				<div class="img">
					{#if data.item.image?.includes('.jpg')}
						<img class="thumb" src="{HOST_API}/images/{data.item.image}" alt={data.item.title} />
					{:else}
						<img class="thumb" src={IMG_PADRAO} alt={'Nota Baiana'} />
					{/if}
				</div>

				<div class="text" id="textNews">
					<p>{@html data.item.text}</p>
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
					<br /><br /><a href="{HOST}/admin{data.item.link}" class="link">Editar notícia</a>
				{/if}
			</div>
		</div>
	</article>
</section>

<div class="TopSpace"></div>

<Banners banners={data.banners} />

<div class="TopSpace2"></div>

<TopNoticiasHome data={data.top} />

<div class="TopSpace2"></div>

<Banners banners={data.banners} />

<div class="TopSpace2"></div>

<TopViewsDownloads data={data.downloads} />

<div class="TopSpace2"></div>

<Banners banners={data.banners} region="rodape" />

<style>
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
		justify-content: center;
		align-items: center;
		margin: auto;
		margin-top: 10px;
		margin-bottom: 10px;
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
		.conteudo {
			margin-top: -30px;
		}
		.img {
			margin-bottom: 0px;
		}
	}
</style>
