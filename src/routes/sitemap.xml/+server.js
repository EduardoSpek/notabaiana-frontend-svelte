export async function GET() {
	const host = 'https://www.notabaiana.com.br';
	const response = await fetch('https://bn-api-production.up.railway.app/news/1/50000');
	const data = await response.json();
	let news = data;
	let urls;

	news.news.forEach((element) => {
		urls += `<url>
        <loc>${host + element.link}</loc>
        <lastmod>${element.created_at}</lastmod>
        <priority>1.0</priority>
    </url>`;
	});

	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
		>
        ${urls}
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
