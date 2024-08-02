export async function load({ cookies }) {
	cookies.delete('name', { path: '/' });
	cookies.delete('email', { path: '/' });
	cookies.delete('title', { path: '/' });
	cookies.delete('text', { path: '/' });
}
