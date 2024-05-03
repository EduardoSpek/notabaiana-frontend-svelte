import { HOST_API } from '$lib/index.js';

export async function load({ fetch }) {
	const news = await fetch(`${HOST_API}/top`).then((res) => {
		return res.json();
	});

	const famosos = await fetch(`${HOST_API}/news/category/famosos/1`).then((res) => {
		return res.json();
	});

	const esportes = await fetch(`${HOST_API}/news/category/esportes/1`).then((res) => {
		return res.json();
	});

	const municipios = await fetch(`${HOST_API}/news/category/municipios/1`).then((res) => {
		return res.json();
	});

	const justica = await fetch(`${HOST_API}/news/category/justica/1`).then((res) => {
		return res.json();
	});

	news.splice(1, 2);
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
