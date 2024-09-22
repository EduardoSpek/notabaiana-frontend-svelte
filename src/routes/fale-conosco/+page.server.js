import { HOST, HOST_API } from '$lib/index.js';
import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
	const saveData = {
		name: cookies.get('name') ?? '',
		email: cookies.get('email') ?? '',
		title: cookies.get('title') ?? '',
		text: cookies.get('text') ?? ''
	};

	return {
		saveData: saveData
	};
}

export const actions = {
	create: async ({ request, cookies }) => {
		let erro = false;

		const formData = await request.formData();

		cookies.set('name', formData.get('name'), { path: '/' });
		cookies.set('email', formData.get('email'), { path: '/' });
		cookies.set('title', formData.get('title'), { path: '/' });
		cookies.set('text', formData.get('text'), { path: '/' });

		const response = await fetch(`${HOST_API}/contacts/create`, {
			method: 'POST',
			body: formData
		});

		const data = await response.json();

		if (data.id) {
			redirect(302, `${HOST}/fale-conosco/ok`);
		} else {
			erro = true;
			return { erro: erro };
		}
	}
};
