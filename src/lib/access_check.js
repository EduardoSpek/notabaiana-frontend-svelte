import { HOST_API } from "$lib/index.js";
const access_check = async (cookies) => {
	let accesscheck;

	const token = cookies.get("user_token");

	if (token) {
		accesscheck = await fetch(`${HOST_API}/accesscheck`, {
			headers: {
				Authorization: "Bearer " + token,
			},
		})
			.then((response) => {
				return response.json();
			})
			.catch((e) => {
				console.log(e);
			});
	}

	return accesscheck;
};

export { access_check };
