import { HOST_API } from '$lib/index.js';
import { redirect } from '@sveltejs/kit';
export const actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
		let user;
		const payload = {
			email,
			password
		};

		const login = await fetch(HOST_API + '/login', {
			body: JSON.stringify(payload),
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			}
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
			redirect(302, '/admin/news/create');
		} else {
			cookies.delete('user_id', { path: '/' });
			cookies.delete('user_token', { path: '/' });
			return { login: login };
		}
	}
};
