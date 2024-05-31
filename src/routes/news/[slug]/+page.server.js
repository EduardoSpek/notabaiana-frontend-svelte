import { HOST_API } from '$lib/index.js';
export async function load({ fetch, params }) {
	const item = await fetch(`${HOST_API}/news/${params.slug}`).then((response) => {
		return response.json();
	});

	if (item.title_ai) {
		item.title = item.title_ai;
	}

	const top = await fetch(`${HOST_API}/top`).then((response) => {
		return response.json();
	});

	item['text'] = item.text.replace(/\n/g, '<br>');

	item['text'] = item.text.replace(/<br><br><br><br>/g, '');
	item['text'] = item.text.replace(/<br><br><br>/g, '');
	item['text'] = item.text.replace(/<br><br>/g, '<br>');

	return { item, top };
}
