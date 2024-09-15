import { HOST_API } from '$lib/index.js';
import { error } from '@sveltejs/kit';
export async function load({ fetch, params, cookies }) {
	let item;
	let banners;

	const fnBanners = () => {
		return fetch(`${HOST_API}/banners`).then((res) => {
			return res.json();
		});
	};

	const fnDownload = () => {
		return fetch(`${HOST_API}/download/${params.slug}`).then((response) => {
			return response.json();
		});
	};

	const allPromises = Promise.all([fnBanners(), fnDownload()]);

	await allPromises.then(([rbanners, ritem]) => {
		banners = rbanners;
		item = ritem;
	});

	if (!item.id) {
		error(404, 'Not Found');
	}

	if (item.text) {
		item['text'] = item.text.replace(/\n/g, '<br>');

		item['text'] = item.text.replace(/<br><br><br><br><br><br>/g, '<br><br>');
		item['text'] = item.text.replace(/<br><br><br><br><br>/g, '<br><br>');
		item['text'] = item.text.replace(/<br><br><br><br>/g, '<br><br>');
		item['text'] = item.text.replace(/<br> <br><br>/g, '<br><br>');
		item['text'] = item.text.replace(/<br><br> <br><br> <br><br>/g, '<br><br>');
		item['text'] = item.text.replace(/<br><br> <br><br>/g, '<br><br>');
		item['text'] = item.text.replace(/<br><br><br>/g, '<br><br>');
	}

	const downRelacionados = await fetch(`${HOST_API}/downloads/category/${item.category}/1`).then(
		(response) => {
			return response.json();
		}
	);

	const token = cookies.get('user_token');

	return { banners: banners.banners, relacionados: downRelacionados.downloads,category: item.category, item, token };
}
