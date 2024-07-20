import { HOST, HOST_API } from '$lib/index.js';
import { access_check } from '$lib/access_check.js';
import { redirect } from '@sveltejs/kit';
export async function load({ cookies, params }) {
	await access_check(cookies);

	const id = params.id;

	const banner = await fetch(`${HOST_API}/admin/banners/${id}`).then((response) => {
		return response.json();
	});

	const token = cookies.get('user_token');

	return { banner, token, id };
}

export const actions = {
	update: async ({ request }) => {
		let erro = false;

		const formData = await request.formData();

		const response = await fetch(`${HOST_API}/admin/banners/update/` + formData.get('id'), {
			method: 'POST',
			body: formData
		});

		const data = await response.json();

		if (data.id) {
			redirect(302, HOST + '/admin/banners/update/' + data.id);
		} else {
			erro = true;
			return { erro: erro };
		}
	}
};
