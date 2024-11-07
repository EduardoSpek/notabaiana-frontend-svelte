import { HOST_API } from "$lib/index.js";

export async function load({ fetch }) {
	let news;
	let famosos;
	let esportes;
	let municipios;
	let justica;
	let banners;

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

	if (news.ok) {
		news.forEach((item, i) => {
			if (item.title_ai) {
				news[i].title = news[i].title_ai;
			}
		});
		news.splice(news.length - 2, 2);
	}

	if (famosos.news) {
		famosos.news.forEach((item, i) => {
			if (item.title_ai) {
				famosos.news[i].title = famosos.news[i].title_ai;
			}
		});
		famosos.news.splice(famosos.news.length - 8, 8);
	}

	if (esportes.news) {
		esportes.news.forEach((item, i) => {
			if (item.title_ai) {
				esportes.news[i].title = esportes.news[i].title_ai;
			}
		});
		esportes.news.splice(esportes.news.length - 8, 8);
	}

	if (municipios.news) {
		municipios.news.forEach((item, i) => {
			if (item.title_ai) {
				municipios.news[i].title = municipios.news[i].title_ai;
			}
		});
		municipios.news.splice(municipios.news.length - 8, 8);
	}

	if (justica.news) {
		justica.news.forEach((item, i) => {
			if (item.title_ai) {
				justica.news[i].title = justica.news[i].title_ai;
			}
		});
		justica.news.splice(justica.news.length - 8, 8);
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
