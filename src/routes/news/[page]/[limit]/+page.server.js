import { HOST_API } from '$lib/index.js';
export async function load({ fetch, params }) {
	const res = await fetch(`${HOST_API}/news/${params.page}/${params.limit}`);
	const news = await res.json();

	return { news: news.news, pagination: news.pagination };
}
