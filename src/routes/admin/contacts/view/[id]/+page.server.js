import { HOST_API } from '$lib/index.js';
import { access_check } from '$lib/access_check.js';
import { redirect } from '@sveltejs/kit';
export async function load({ cookies, fetch, params }) {
	const auth = await access_check(cookies);
	const token = cookies.get('user_token');
	if (!auth?.ok) {
		redirect(302, '/admin/login');
	}

	const item = await fetch(`${HOST_API}/admin/contacts/${params.id}`, {
		headers: {
			Authorization: 'Bearer ' + token
		}
	}).then((response) => {
		return response.json();
	});

	item['text'] = item.text.replace(/\n\n/g, '\n');
	item['text'] = item.text.replace(/<br><br>/g, '\n');

	return { item, token };
}
export const ssr = true;
export const csr = true;
