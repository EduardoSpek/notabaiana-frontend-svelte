import { HOST_API } from '$lib/index.js';
import { redirect } from '@sveltejs/kit';
import { access_check } from '$lib/access_check.js';
export async function load({ cookies }) {
	const auth = await access_check(cookies);
	if (auth.ok) {
		redirect(302, '/admin/banners');
	}
}

export const actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData();

		const login = await fetch(HOST_API + '/login', {
			body: data,
			method: 'post'
		})
			.then((res) => {
				return res.json();
			})
			.catch((e) => {
				console.log(e);
			});

		if (login.token) {
			cookies.set('user_id', login.id, { path: '/' });
			cookies.set('user_token', login.token, { path: '/' });
			redirect(302, '/admin/banners');
		} else {
			cookies.delete('user_id', { path: '/' });
			cookies.delete('user_token', { path: '/' });
			return { login: login };
		}
	}
};
