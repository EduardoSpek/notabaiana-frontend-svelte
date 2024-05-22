import { HOST_API } from '$lib/index.js';
export async function load({ fetch, params, url }) {
	let search = url.searchParams.get('search');
	const res = await fetch(`${HOST_API}/news/busca/${params.page}?search=${search}`);
	const news = await res.json();

	news.news.forEach((item, i) => {
		if (item.title_ai) {
			news.news[i].title = news.news[i].title_ai;
		}
	});

	return { news: news.news, pagination: news.pagination, search: news.search };
}
