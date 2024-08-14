import { HOST_API } from '$lib/index.js';
export async function load({ fetch, params, url }) {
	let search = url.searchParams.get('search');
	let news;
	let banners;

	const fnBanners = () => {
		return fetch(`${HOST_API}/banners`).then((res) => {
			return res.json();
		});
	};

	const fnNews = () => {
		return fetch(`${HOST_API}/news/search/${params.page}?search=${search}`).then((res) => {
			return res.json();
		});
	};

	const allPromises = Promise.all([fnBanners(), fnNews()]);

	await allPromises.then(([rbanners, rnews]) => {
		banners = rbanners;
		news = rnews;
	});

	news.news.forEach((item, i) => {
		if (item.title_ai) {
			news.news[i].title = news.news[i].title_ai;
		}
	});

	return {
		banners: banners.banners,
		news: news.news,
		pagination: news.pagination,
		search: news.search
	};
}
