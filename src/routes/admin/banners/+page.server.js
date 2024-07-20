import { HOST_API } from '$lib/index.js';
import { access_check } from '$lib/access_check.js';
export async function load({ cookies }) {
	await access_check(cookies);

	const banners = await fetch(`${HOST_API}/admin/banners`).then((response) => {
		return response.json();
	});

	const token = cookies.get('user_token');

	return { banners, token };
}
