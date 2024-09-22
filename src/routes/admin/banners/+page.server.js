import { HOST_API } from "$lib/index.js";
import { access_check } from "$lib/access_check.js";
import { redirect } from "@sveltejs/kit";
export async function load({ cookies }) {
	const auth = await access_check(cookies);

	if (!auth?.ok) {
		redirect(302, "/admin/login");
	}

	const token = cookies.get("user_token");

	const banners = await fetch(`${HOST_API}/admin/banners`, {
		headers: {
			Authorization: "Bearer " + token,
		},
	}).then((response) => {
		return response.json();
	});

	return { banners, token };
}

export const actions = {
	delete: async ({ cookies, request }) => {
		await access_check(cookies);
		const token = cookies.get("user_token");
		const formData = await request.formData();

		await fetch(`${HOST_API}/admin/banners/` + formData.get("id"), {
			method: "DELETE",
			headers: {
				Authorization: "Bearer " + token,
			},
		}).then((response) => {
			return response.json();
		});
	},

	deleteall: async ({ cookies, request }) => {
		await access_check(cookies);
		const token = cookies.get("user_token");
		const formData = await request.formData();

		await fetch(`${HOST_API}/admin/banners/deleteall`, {
			method: "DELETE",
			body: JSON.stringify(formData.getAll("id[]")),
			headers: {
				Authorization: "Bearer " + token,
			},
		}).then((response) => {
			return response.json();
		});
	},
};
