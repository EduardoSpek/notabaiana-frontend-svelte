import { HOST_API } from '$lib/index.js';
import { error } from '@sveltejs/kit';
import { newsCache } from "$lib/cache.js";
export async function load({ fetch, params, cookies }) {
	let item;
	let top;
	let banners;
	let token;

	const tagCache = `news-${params.slug}`;

	const cachedData = await newsCache.getDataByName(tagCache);

	if (Object.keys(cachedData).length !== 0) {
		banners = cachedData.banners;
		item = cachedData.item;
		top = cachedData.top;
		token = cachedData.token;
	} else {

		const fnBanners = () => {
			return fetch(`${HOST_API}/banners`).then((res) => {
				return res.json();
			});
		};

		const fnNews = () => {
			return fetch(`${HOST_API}/news/${params.slug}`).then((response) => {
				return response.json();
			});
		};

		const fnTop = () => {
			return fetch(`${HOST_API}/top`).then((response) => {
				return response.json();
			});
		};

		// const fnDownloads = () => {
		// 	return fetch(`${HOST_API}/downloads/topviews/1/12`).then((response) => {
		// 		return response.json();
		// 	});
		// };

		const allPromises = Promise.all([fnBanners(), fnNews(), fnTop()]);

		await allPromises.then(([rbanners, ritem, rtop]) => {
			banners = rbanners;
			item = ritem;
			top = rtop;
			//downloads = rDownloads
		});

		if (!item.id) {
			error(404, 'Not Found');
		}

		if (item.title_ai) {
			item.title = item.title_ai;
		}

		if (item.text) {
			item.text = item.text.replace(/\n/g, '<br>');

			item.text = item.text.replace(/<br><br><br><br><br><br>/g, '<br><br>');
			item.text = item.text.replace(/<br><br><br><br><br>/g, '<br><br>');
			item.text = item.text.replace(/<br><br><br><br>/g, '<br><br>');
			item.text = item.text.replace(/<br> <br><br>/g, '<br><br>');
			item.text = item.text.replace(/<br><br> <br><br> <br><br>/g, '<br><br>');
			item.text = item.text.replace(/<br><br> <br><br>/g, '<br><br>');
			item.text = item.text.replace(/<br><br><br>/g, '<br><br>');
		}

		token = cookies.get('user_token');

		if (Array.isArray(top)) {
			top.splice(top.length - 2, 2);
		}

		newsCache.setDataByName(tagCache, {
			banners: banners.banners,
			item: item,
			top: top,
			token: token,
		});

	}


	return { banners: banners.banners, item, top, token };
}
