export async function load({ fetch, params }) {
	const res = await fetch(`https://bn-api-production.up.railway.app/news/${params.slug}`);
	const item = await res.json();

	item['text'] = item.text.replace(/\n\n \n\n/g, '<br><br>');
	item['text'] = item.text.replace(/\n/g, '');
	item['text'] = item.text.replace(/\n\n/g, '');
	item['text'] = item.text.replace(/<br><br><br><br>/g, '');

	return { item };
}
