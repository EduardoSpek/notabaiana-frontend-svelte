import { json, redirect } from '@sveltejs/kit';

export async function POST({ request }) {
	const data = await request.json();

	const userid = data.userid;

	const url = 'http://localhost:8080/user/' + userid;

	const res = await fetch(url, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	throw redirect(303, '/');
}
