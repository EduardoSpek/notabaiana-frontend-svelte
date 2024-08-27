<script>
	import { onMount } from 'svelte';
	let isVisible = false;

	// Função para rolar até o topo
	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	// Mostra o botão quando o usuário rolar 100px para baixo
	function handleScroll() {
		isVisible = window.scrollY > 500;
	}

	// Adiciona um listener para o evento de rolagem
	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<button
	class={isVisible ? 'scroll-to-top-btn scroll-to-top-btn-visible ' : 'scroll-to-top-btn'}
	on:click={scrollToTop}
>
	<svg
		fill="var(--branco)"
		width="22px"
		height="22px"
		viewBox="0 0 32 32"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		class="icon-svg"
	>
		<title>up</title>
		<path d="M11.25 15.688l-7.656 7.656-3.594-3.688 11.063-11.094 11.344 11.344-3.5 3.5z"></path>
	</svg>
</button>

<style>
	.icon-svg {
		display: block;
		margin: auto;
		margin-left: 5px;
	}
	.scroll-to-top-btn {
		position: fixed;
		bottom: 20px;
		right: 20px;
		padding: 10px;
		padding-top: 12px;
		padding-bottom: 12px;
		font-size: 14px;
		font-weight: 700;
		background-color: var(--preto);
		color: var(--branco);
		border: none;
		border-radius: 50%;
		cursor: pointer;
		display: none;
		align-items: center;
		justify-content: center;
		transition: opacity 0.3s ease;
	}
	.scroll-to-top-btn-visible {
		display: flex;
	}
</style>
