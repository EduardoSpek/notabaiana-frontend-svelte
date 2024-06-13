import { HOST_API } from '$lib/index.js';
import { redirect } from '@sveltejs/kit';
const access_check = async (cookies) => {
	const token = cookies.get('user_token');

	const accesscheck = await fetch(`${HOST_API}/accesscheck`, {
		headers: {
			Authorization: 'Bearer ' + token
		}
	})
		.then((response) => {
			return response.json();
		})
		.catch((e) => {
			console.log(e);
		});

	if (!accesscheck.ok) {
		redirect(302, '/admin/login');
	}
};

export { access_check };
