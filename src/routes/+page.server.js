export async function load() {
	const response = await fetch('http://localhost:8080/userlist');
	const data = await response.json();
	let users = data;

	return {
		users
	};
}
