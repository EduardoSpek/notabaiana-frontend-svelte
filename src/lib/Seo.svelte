<script>
import { SITE_NAME } from "$lib/index.js";

export let title;
export let description;
export let url;
export let image;
</script>

<svelte:head>
	<title>{title} - {SITE_NAME}</title>
	<meta name="description" content="{description}..." />

	<meta property="og:title" content={title} />
	<meta property="og:description" content="{description}..." />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={image} />
</svelte:head>
