export async function load({ params }) {
	const res = await fetch(
		`https://bn-api-production.up.railway.app/news/${params.page}/${params.limit}`
	);
	const news = await res.json();

	return { news: news.news, pagination: news.pagination };
}
