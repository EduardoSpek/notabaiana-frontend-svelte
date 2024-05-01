import { HOST_API } from '$lib/index.js';

export async function load({ fetch }) {
	const response = await fetch(`${HOST_API}/top`);
	const data = await response.json();
	let news = data;

	news.splice(1, 2);

	return {
		news
	};
}
