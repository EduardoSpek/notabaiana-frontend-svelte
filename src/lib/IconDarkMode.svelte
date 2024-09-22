<script>
import { onMount } from "svelte";
export let html;

function darkmode(e) {
	html.classList.toggle("dark-mode");
	let dark_mode = localStorage.getItem("dark-mode");
	if (dark_mode) {
		localStorage.removeItem("dark-mode");
	} else {
		localStorage.setItem("dark-mode", "dark");
	}
}
onMount(() => {
	html = document.querySelector("html");
	let dark_mode = localStorage.getItem("dark-mode");
	if (dark_mode) {
		html.classList.add("dark-mode");
	}
});
</script>

<div class="darkmode">
	<button on:click={darkmode}>
		<svg
			viewBox="0 0 24 24"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			class="icon-dark-mode"
		>
			<path
				d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z"
				id="🎨-Color"
			>
			</path>
		</svg>
	</button>
</div>

<style>
	button {
		all: unset;
		cursor: pointer;
		float: right;
		margin-right: -10px;
	}
	.darkmode {
		flex: 0.2;
		text-align: end;
	}
	.icon-dark-mode {
		width: 28px;
		fill: var(--cinza-escuro);
		margin-top: 4px;
		float: right;
	}
	.icon-dark-mode:hover {
		fill: var(--primary);
	}
	@media (min-width: 669px) {
		.icon-dark-mode {
			margin-top: 6px;
			width: 34px;
		}
	}
</style>
