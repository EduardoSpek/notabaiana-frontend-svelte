import { HOST_API } from "$lib/index.js";
import { access_check } from "$lib/access_check.js";
import { redirect } from "@sveltejs/kit";
export async function load({ params, cookies }) {
	const auth = await access_check(cookies);

	if (!auth?.ok) {
		redirect(302, "/admin/login");
	}

	const token = cookies.get("user_token");

	const news = await fetch(
		`${HOST_API}/admin/news/${params.page}/${params.limit}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	).then((response) => {
		return response.json();
	});

	return {
		news: news.news,
		pagination: news.pagination,
		token,
	};
}

export const actions = {
	delete: async ({ cookies, request }) => {
		await access_check(cookies);
		const token = cookies.get("user_token");
		const formData = await request.formData();

		await fetch(`${HOST_API}/admin/news/${formData.get("id")}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then((response) => {
			return response.json();
		});
	},

	deleteall: async ({ cookies, request }) => {
		await access_check(cookies);
		const token = cookies.get("user_token");
		const formData = await request.formData();

		await fetch(`${HOST_API}/admin/news/deleteall`, {
			method: "DELETE",
			body: JSON.stringify(formData.getAll("id[]")),
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then((response) => {
			return response.json();
		});
	},
};
