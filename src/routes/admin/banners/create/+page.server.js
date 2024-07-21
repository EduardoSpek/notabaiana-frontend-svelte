import { HOST, HOST_API } from '$lib/index.js';
import { access_check } from '$lib/access_check.js';
import { redirect } from '@sveltejs/kit';
export async function load({ cookies }) {
	await access_check(cookies);

	const token = cookies.get('user_token');

	return { token };
}

export const actions = {
	create: async ({ request }) => {
		let erro = false;

		const formData = await request.formData();

		const response = await fetch(`${HOST_API}/admin/banners/create`, {
			method: 'POST',
			body: formData
		});

		const data = await response.json();

		if (data.id) {
			redirect(302, HOST + '/admin/banners');
		} else {
			erro = true;
			return { erro: erro };
		}
	}
};
