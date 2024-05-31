import { HOST_API } from '$lib/index.js';
export async function load({ fetch, params }) {
	const item = await fetch(`${HOST_API}/news/${params.slug}`).then((response) => {
		return response.json();
	});

	if (item.title_ai) {
		item.title = item.title_ai;
	}

	item['text'] = item.text.replace(/<br><br>/g, '\n');

	return { item };
}
