<script>
import { SITE_NAME, formatarData } from "../lib/index";
import TopNoticiasHome from "$lib/TopNoticiasHome.svelte";
import TopNoticiasCategorias from "$lib/TopNoticiasCategorias.svelte";
import Banners from "$lib/Banners.svelte";
export let data;
</script>

<svelte:head>
	<title>{SITE_NAME} - Notícias atuais em tempo real da Bahia e do Brasil</title>
	<meta
		name="description"
		content="Portal baiano com notícias recentes dos famosos, celebridades, futebol, cidade de Salvador, política, municípios, música, carnaval e muito mais"
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>

<div class="TopSpace"></div>

<Banners banners={data.banners} region="topo" />

<TopNoticiasHome data={data.news} />

<Banners banners={data.banners} region="meio1" />

<TopNoticiasCategorias data_categorias={data.famosos} category="Famosos" />

<Banners banners={data.banners} region="meio2" />

<TopNoticiasCategorias data_categorias={data.esportes} category="Esportes" />

<Banners banners={data.banners} region="meio3" />

<TopNoticiasCategorias data_categorias={data.municipios} category="Municípios" />

<Banners banners={data.banners} region="meio4" />

<TopNoticiasCategorias data_categorias={data.justica} category="Justiça" />

<Banners banners={data.banners} region="rodape" />
