import { redirect } from '@sveltejs/kit';
import { access_check } from '$lib/access_check.js';
export async function load({ cookies }) {
	const auth = await access_check(cookies);
	if (!auth.ok) {
		redirect(302, '/admin/login');
	}
}
