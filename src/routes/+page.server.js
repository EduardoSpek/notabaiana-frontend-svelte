export async function load() {
	const response = await fetch('http://localhost:8080/news/1/10');
	const data = await response.json();
	let news = data;

	return {
		news: news.news,
		pagination: news.pagination
	};
}
