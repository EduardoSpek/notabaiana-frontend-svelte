import { HOST_API } from "$lib/index.js";
export async function load({ fetch, params }) {
	let downloads;
	let banners;

	const fnBanners = () => {
		return fetch(`${HOST_API}/banners`).then((res) => {
			return res.json();
		});
	};

	const fnNews = () => {
		return fetch(
			`${HOST_API}/downloads/category/${params.category}/${params.page}`,
		).then((res) => {
			return res.json();
		});
	};

	const allPromises = Promise.all([fnBanners(), fnNews()]);

	await allPromises.then(([rbanners, rdownloads]) => {
		banners = rbanners;
		downloads = rdownloads;
	});

	return {
		banners: banners.banners,
		downloads: downloads.downloads,
		pagination: downloads.pagination,
		category: downloads.category,
	};
}
