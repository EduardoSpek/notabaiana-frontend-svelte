import { HOST_API } from '$lib/index.js';
export async function load({ fetch, params, url }) {
	const search = url.searchParams.get('search');
	let downloads;
	let banners;

	const fnBanners = () => {
		return fetch(`${HOST_API}/banners`).then((res) => {
			return res.json();
		});
	};

	const fnNews = () => {
		return fetch(`${HOST_API}/downloads/search/${params.page}?search=${search}`).then((res) => {
			return res.json();
		});
	};

	const allPromises = Promise.all([fnBanners(), fnNews()]);

	await allPromises.then(([rbanners, rdownloads]) => {
		banners = rbanners;
		downloads = rdownloads;
	});

	if (downloads.downloads) {
		downloads.downloads.forEach((item, i) => {
			if (item.title_ai) {
				downloads.downloads[i].title = downloads.downloads[i].title_ai;
			}
		});
	}

	return {
		banners: banners.banners,
		downloads: downloads.downloads,
		pagination: downloads.pagination,
		search: downloads.search
	};
}
