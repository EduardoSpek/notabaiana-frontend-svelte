export async function load() {
	const response = await fetch('https://bn-api-production.up.railway.app/news/1/10');
	const data = await response.json();
	let news = data;

	return {
		news: news.news,
		pagination: news.pagination
	};
}
