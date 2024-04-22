export async function load() {
	const response = await fetch('https://bn-api-production.up.railway.app/top');
	const data = await response.json();
	let news = data;

	return {
		news
	};
}
