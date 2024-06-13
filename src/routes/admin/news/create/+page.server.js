import { HOST_API } from '$lib/index.js';
import { redirect } from '@sveltejs/kit';
export async function load({ cookies, fetch }) {
	const token = cookies.get('user_token');

	const checkuser = await fetch(`${HOST_API}/checkuser`, {
		headers: {
			Authorization: 'Bearer ' + token
		}
	}).then((response) => {
		return response.json();
	});

	if (!checkuser.ok) {
		redirect(302, '/admin/login');
	}
}
