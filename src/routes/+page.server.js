import { HOST_API } from '$lib/index.js';

export async function load({ fetch }) {
	const news = await fetch(`${HOST_API}/top`).then((res) => {
		return res.json();
	});

	news.forEach((item, i) => {
		if (item.title_ai) {
			news[i].title = news[i].title_ai;
		}
	});

	const famosos = await fetch(`${HOST_API}/news/category/famosos/1`).then((res) => {
		return res.json();
	});

	famosos.news.forEach((item, i) => {
		if (item.title_ai) {
			famosos.news[i].title = famosos.news[i].title_ai;
		}
	});

	const esportes = await fetch(`${HOST_API}/news/category/esportes/1`).then((res) => {
		return res.json();
	});

	esportes.news.forEach((item, i) => {
		if (item.title_ai) {
			esportes.news[i].title = esportes.news[i].title_ai;
		}
	});

	const municipios = await fetch(`${HOST_API}/news/category/municipios/1`).then((res) => {
		return res.json();
	});

	municipios.news.forEach((item, i) => {
		if (item.title_ai) {
			municipios.news[i].title = municipios.news[i].title_ai;
		}
	});

	const justica = await fetch(`${HOST_API}/news/category/justica/1`).then((res) => {
		return res.json();
	});

	justica.news.forEach((item, i) => {
		if (item.title_ai) {
			justica.news[i].title = justica.news[i].title_ai;
		}
	});

	news.splice(news.length - 2, 2);
	famosos.news.splice(1, 2);
	esportes.news.splice(1, 2);
	municipios.news.splice(1, 2);
	justica.news.splice(1, 2);

	return {
		news,
		famosos: famosos.news,
		esportes: esportes.news,
		municipios: municipios.news,
		justica: justica.news
	};
}
