<script>
	import { HOST_API } from '$lib/index.js';
	export let banners;
	export let region;
	let bannersTopo;
	let aBanners = banners.flat();
	if (region) {
		bannersTopo = aBanners.filter((item, i) => item.tag === region);
	} else {
		bannersTopo = aBanners;
	}
</script>

{#if bannersTopo.length > 0}
	<section>
		<div class="conteudo-flow">
			{#if bannersTopo[0].html == ''}
				{#if bannersTopo[0].banner_pc != ''}
					<a
						href={bannersTopo[0].link}
						target="_blank"
						class="link"
						on:click={() => {
							window.open(bannersTopo[0].link, '_blank');
						}}
					>
						<img
							src={HOST_API + bannersTopo[0].banner_pc}
							alt={bannersTopo[0].title}
							title={bannersTopo[0].title}
							width="100%"
							class="b-pc"
						/>
					</a>
				{/if}
				{#if bannersTopo[0].banner_tablet != ''}
					<a href={bannersTopo[0].link} target="_blank" class="link">
						<img
							src={HOST_API + bannersTopo[0].banner_tablet}
							alt={bannersTopo[0].title}
							title={bannersTopo[0].title}
							width="100%"
							class="b-tablet"
						/>
					</a>
				{/if}
				{#if bannersTopo[0].banner_mobile != ''}
					<a href={bannersTopo[0].link} target="_blank" class="link">
						<img
							src={HOST_API + bannersTopo[0].banner_mobile}
							alt={bannersTopo[0].title}
							title={bannersTopo[0].title}
							width="100%"
							class="b-mobile"
						/>
					</a>
				{/if}
			{:else}
				{@html bannersTopo[0].html}
			{/if}
		</div>
	</section>
{/if}

<style>
	.b-pc {
		display: none;
		margin-bottom: 40px;
	}
	.b-tablet {
		display: none;
		margin-bottom: 30px;
	}
	.b-mobile {
		display: block;
		margin-bottom: 20px;
	}
	@media (min-width: 600px) {
		.b-pc {
			display: none;
		}
		.b-tablet {
			display: block;
		}
		.b-mobile {
			display: none;
		}
	}
	@media (min-width: 1024px) {
		.b-pc {
			display: block;
		}
		.b-tablet {
			display: none;
		}
		.b-mobile {
			display: none;
		}
	}
</style>
