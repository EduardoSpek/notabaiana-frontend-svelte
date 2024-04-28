import { HOST_API } from '$lib/index.js';

export async function load({ fetch, setHeaders }) {
	const response = await fetch(`${HOST_API}/top`);
	const data = await response.json();
	let news = data;

	return {
		news
	};
}
