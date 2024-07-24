import { HOST, HOST_API } from '$lib/index.js';
import { access_check } from '$lib/access_check.js';
import { redirect } from '@sveltejs/kit';
export async function load({ cookies, fetch, params }) {
	const auth = await access_check(cookies);

	if (!auth.ok) {
		redirect(302, '/admin/login');
	}

	const item = await fetch(`${HOST_API}/news/${params.slug}`).then((response) => {
		return response.json();
	});

	if (item.title_ai) {
		item.title = item.title_ai;
	}

	item['text'] = item.text.replace(/\n\n/g, '\n');
	item['text'] = item.text.replace(/<br><br>/g, '\n');

	const token = cookies.get('user_token');

	return { item, token };
}

export const actions = {
	update: async ({ request }) => {
		let erro = false;

		const formData = await request.formData();
		const slug = formData.get('slug');

		const response = await fetch(`${HOST_API}/admin/news/update/${slug}`, {
			method: 'POST',
			body: formData
		});

		const data = await response.json();

		if (data.id) {
			redirect(302, HOST + data.link);
		} else {
			erro = true;
			return { erro: erro };
		}
	}
};

export const ssr = true;
export const csr = true;
