export async function load({ fetch, params }) {
	const res = await fetch(`http://localhost:8080/news/${params.page}/${params.limit}`);
	const news = await res.json();

	return { news };
}
