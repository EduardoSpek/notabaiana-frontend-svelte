import { HOST_API } from '$lib/index.js';

export async function load({ fetch }) {

	function fetch_news() {
		return fetch(`${HOST_API}/top`).then((res) => {
		return res.json();
		});
	} 

	const allPromises = Promise.all([fetch_news()]);

allPromises.then(([news]) => { return });


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
	famosos.news.splice(famosos.news.length - 8, 8);
	esportes.news.splice(esportes.news.length - 8, 8);
	municipios.news.splice(municipios.news.length - 8, 8);
	justica.news.splice(justica.news.length - 8, 8);

	return {
		news,
		famosos: famosos.news,
		esportes: esportes.news,
		municipios: municipios.news,
		justica: justica.news
	};
}
