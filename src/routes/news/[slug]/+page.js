export async function load({ fetch, params }) {
	const res = await fetch(`http://localhost:8080/news/${params.slug}`);
	const item = await res.json();

	item['text'] = item.text.replace(/\n\n \n\n/g, '<br><br>');
	item['text'] = item.text.replace(/\n/g, '');
	item['text'] = item.text.replace(/\n\n/g, '');
	item['text'] = item.text.replace(/<br><br><br><br>/g, '');

	console.log(item.text);

	return { item };
}
