import { HOST_API } from "$lib/index.js";
import { newsCache } from "$lib/cache.js";

const limitedList = (list) => {

	let local = list

	if (local.length < 4) {
		local = local.slice(0, 0);
	} else if (local.length > 4 && local.length < 8) {
		local = local.slice(0, 4);
	}
	else if (local.length >= 8 && local.length < 12) {
		local = local.slice(0, 8);
	}
	else if (local.length >= 12 && local.length < 16) {
		local = local.slice(0, 12);
	} else {
		local = local = local.slice(0, 16);
	}

	return local;
}

export async function load({ fetch }) {
	let news;
	let famosos;
	let esportes;
	let municipios;
	let justica;
	let banners;

	const cachedData = await newsCache.getData();

	if (cachedData.news) {
		banners = cachedData.banners;
		news = cachedData.news;
		famosos = cachedData.famosos;
		esportes = cachedData.esportes;
		municipios = cachedData.municipios;
		justica = cachedData.justica;
	} else {

		const fnBanners = () => {
			return fetch(`${HOST_API}/banners`).then((res) => {
				return res.json();
			});
		};

		const fnNews = () => {
			return fetch(`${HOST_API}/top`).then((res) => {
				return res.json();
			});
		};

		const fnFamosos = () => {
			return fetch(`${HOST_API}/news/category/famosos/1`).then((res) => {
				return res.json();
			});
		};

		const fnEsportes = () => {
			return fetch(`${HOST_API}/news/category/esportes/1`).then((res) => {
				return res.json();
			});
		};

		const fnMunicipios = () => {
			return fetch(`${HOST_API}/news/category/municipios/1`).then((res) => {
				return res.json();
			});
		};

		const fnJustica = () => {
			return fetch(`${HOST_API}/news/category/justica/1`).then((res) => {
				return res.json();
			});
		};

		const allPromises = Promise.all([
			fnBanners(),
			fnNews(),
			fnFamosos(),
			fnEsportes(),
			fnMunicipios(),
			fnJustica(),
		]);

		await allPromises.then(
			([rbanners, rnews, rfamosos, resportes, rmunicipios, rjustica]) => {
				banners = rbanners;
				news = rnews;
				famosos = rfamosos;
				esportes = resportes;
				municipios = rmunicipios;
				justica = rjustica;
			},
		);

		if (Array.isArray(news)) {
			news.forEach((item, i) => {
				if (item.title_ai) {
					news[i].title = news[i].title_ai;
				}
			});
			news.splice(news.length - 2, 2);
		}

		if (Array.isArray(famosos.news)) {
			famosos.news.forEach((item, i) => {
				if (item.title_ai) {
					famosos.news[i].title = famosos.news[i].title_ai;
				}
			});

			famosos.news = limitedList(famosos.news);
		}

		if (Array.isArray(esportes.news)) {
			esportes.news.forEach((item, i) => {
				if (item.title_ai) {
					esportes.news[i].title = esportes.news[i].title_ai;
				}
			});
			esportes.news = limitedList(esportes.news);
		}

		if (Array.isArray(municipios.news)) {
			municipios.news.forEach((item, i) => {
				if (item.title_ai) {
					municipios.news[i].title = municipios.news[i].title_ai;
				}
			});
			municipios.news = limitedList(municipios.news);
		}

		if (Array.isArray(justica.news)) {
			justica.news.forEach((item, i) => {
				if (item.title_ai) {
					justica.news[i].title = justica.news[i].title_ai;
				}
			});
			justica.news = limitedList(justica.news);
		}

		await newsCache.setData({
			banners,
			news,
			famosos,
			esportes,
			municipios,
			justica,
		});

	}

	return {
		banners: banners.banners,
		news,
		famosos: famosos.news,
		esportes: esportes.news,
		municipios: municipios.news,
		justica: justica.news,
	};
}
