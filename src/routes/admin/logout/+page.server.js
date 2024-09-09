import { redirect } from '@sveltejs/kit';
export async function load({ cookies }) {
	cookies.delete('user_id', { path: '/' });
	cookies.delete('user_token', { path: '/' });
	redirect(302, '/admin/login');
}
