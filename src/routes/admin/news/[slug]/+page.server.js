import { HOST_API } from '$lib/index.js';
import { access_check } from '$lib/access_check.js';
export async function load({ cookies, fetch, params }) {
	await access_check(cookies);

	const item = await fetch(`${HOST_API}/news/${params.slug}`).then((response) => {
		return response.json();
	});

	if (item.title_ai) {
		item.title = item.title_ai;
	}

	item['text'] = item.text.replace(/\n\n/g, '\n');
	item['text'] = item.text.replace(/<br><br>/g, '\n');

	return { item };
}

export const ssr = true;
export const csr = true;
