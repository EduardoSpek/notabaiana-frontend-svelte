import { HOST_API } from '$lib/index.js';
import { redirect } from '@sveltejs/kit';
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
