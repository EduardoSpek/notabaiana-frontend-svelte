import { HOST_API } from '$lib/index.js';

export async function GET() {
	const host = 'https://www.notabaiana.com.br';
	const response = await fetch(`${HOST_API}/downloads/1/1000`);
	const data = await response.json();
	const downloads = data;
	let urls;

	for (let index = 0; index < downloads.downloads.length; index++) {
		const element = downloads.downloads[index];
		urls += `<url>
        <loc>${host}/conteudo-musical/${element.slug}</loc>
        <lastmod>${element.created_at}</lastmod>
        <priority>1.0</priority>
    </url>`;
	}

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
