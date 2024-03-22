import { json, redirect } from '@sveltejs/kit';

export async function POST({ request }) {
	const data = await request.formData();
	const name = data.get('name');
	const zap = data.get('zap');

	const url = 'http://localhost:8080/createuser';
	const payload = {
		name: name,
		zap: zap
	};

	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload)
	});

	throw redirect(303, '/');
}
