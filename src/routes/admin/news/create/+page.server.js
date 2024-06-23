import { HOST_API } from '$lib/index.js';
import { access_check } from '$lib/access_check.js';
export async function load({ cookies }) {
	await access_check(cookies);

	const token = cookies.get('user_token');

	return { token };
}

export const actions = {
	create: async ({ request }) => {
		let resultado = 'erro';

		const formData = await request.formData();
		const title = formData.get('title');
		const text = formData.get('text');
		const category = formData.get('category');
		const token = formData.get('token');
		const image = formData.get('image');

		try {
			const response = await fetch(`${HOST_API}/news/create`, {
				method: 'POST',
				body: formData
			});

			const data = await response.json();

			if (data.id) {
				resultado = 'ok';
			}
		} catch (e) {
			console.error('Error:', e);
		}

		return { resultado };
	}
};
