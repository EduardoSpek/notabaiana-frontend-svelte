import { HOST_API } from '$lib/index.js';
export async function load({ params, url }) {
	let search = url.searchParams.get('search');
	const res = await fetch(`${HOST_API}/news/busca/${params.page}?search=${search}`);
	const news = await res.json();

	return { news: news.news, pagination: news.pagination, search: news.search };
}
