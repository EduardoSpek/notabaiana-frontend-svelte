import { HOST_API } from '$lib/index.js';

export async function GET() {
	const host = 'https://www.notabaiana.com.br';
	const response = await fetch(`${HOST_API}/downloads/1/50000`);
	const data = await response.json();
	let downloads = data;
	let urls;

	downloads.downloads.forEach((element) => {
		urls += `<url>
        <loc>${host + '/downloads/' + element.slug}</loc>
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
