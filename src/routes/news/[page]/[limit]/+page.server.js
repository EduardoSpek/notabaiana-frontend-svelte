import { HOST_API } from '$lib/index.js';
import { newsCache } from "$lib/cache.js";
export async function load({ fetch, params }) {
	let news;
	let banners;

	const tagCache = `news-${params.page}-${params.limit}`

	const cachedData = await newsCache.getDataByName(tagCache);


	if (Object.keys(cachedData).length !== 0) {
		banners = cachedData.banners;
		news = cachedData.news;
	} else {

		const fnBanners = () => {
			return fetch(`${HOST_API}/banners`).then((res) => {
				return res.json();
			});
		};

		const fnNews = () => {
			return fetch(`${HOST_API}/news/${params.page}/${params.limit}`).then((res) => {
				return res.json();
			});
		};

		const allPromises = Promise.all([fnBanners(), fnNews()]);

		await allPromises.then(([rbanners, rnews]) => {
			banners = rbanners;
			news = rnews;
		});

		if (news.news) {
			news.news.forEach((item, i) => {
				if (item.title_ai) {
					news.news[i].title = news.news[i].title_ai;
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
			});
		}

		await newsCache.setDataByName(tagCache, { banners, news });

	}
	return {
		banners: banners.banners,
		news: news.news,
		pagination: news.pagination
	};
}
