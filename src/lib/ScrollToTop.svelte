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
	^
</button>

<style>
	.scroll-to-top-btn {
		position: fixed;
		bottom: 20px;
		right: 20px;
		padding: 10px 18px;
		padding-top: 16px;
		font-size: 20px;
		font-weight: 700;
		background-color: var(--preto);
		color: var(--branco);
		border: none;
		border-radius: 50%;
		cursor: pointer;
		display: none;
		transition: opacity 0.3s ease;
	}
	.scroll-to-top-btn-visible {
		display: block;
	}

	.scroll-to-top-btn:hover {
		background-color: var(--hover-bg);
	}
</style>
