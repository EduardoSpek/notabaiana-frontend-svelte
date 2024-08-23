<script>
	import { globalStore } from '$lib/index.js';
	const expandList = () => {
		$globalStore.listNewsExpand = !$globalStore.listNewsExpand;
	};
</script>

<button type="submit" class="btn_transparent" on:click={expandList}>
	{#if $globalStore.listNewsExpand}
		<svg
			viewBox="0 0 64 64"
			xmlns="http://www.w3.org/2000/svg"
			class="icon-svg"
			fill="var(--primary)"
		>
			<path
				d="M25 6.75H11C8.65279 6.75 6.75 8.65279 6.75 11V25C6.75 27.3472 8.65279 29.25 11 29.25H25C27.3472 29.25 29.25 27.3472 29.25 25V11C29.25 8.65279 27.3472 6.75 25 6.75Z"
				fill="var(--primary)"
			></path>
			<path
				d="M53 6.75H39C36.6528 6.75 34.75 8.65279 34.75 11V25C34.75 27.3472 36.6528 29.25 39 29.25H53C55.3472 29.25 57.25 27.3472 57.25 25V11C57.25 8.65279 55.3472 6.75 53 6.75Z"
				fill="var(--primary)"
			></path>
			<path
				d="M25 34.75H11C8.65279 34.75 6.75 36.6528 6.75 39V53C6.75 55.3472 8.65279 57.25 11 57.25H25C27.3472 57.25 29.25 55.3472 29.25 53V39C29.25 36.6528 27.3472 34.75 25 34.75Z"
				fill="var(--primary)"
			></path>
			<path
				d="M53 34.75H39C36.6528 34.75 34.75 36.6528 34.75 39V53C34.75 55.3472 36.6528 57.25 39 57.25H53C55.3472 57.25 57.25 55.3472 57.25 53V39C57.25 36.6528 55.3472 34.75 53 34.75Z"
				fill="var(--primary)"
			></path>
		</svg>
	{:else}
		<svg
			version="1.1"
			id="Icons"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			class="icon-svg"
			viewBox="0 0 32 32"
			style="enable-background:new 0 0 32 32;"
			xml:space="preserve"
		>
			<g>
				<path
					d="M11,30H5c-1.7,0-3-1.3-3-3v-6c0-1.7,1.3-3,3-3h6c1.7,0,3,1.3,3,3v6C14,28.7,12.7,30,11,30z"
					fill="var(--primary)"
				></path>
			</g>
			<g>
				<path
					d="M29,6H17c-0.6,0-1-0.4-1-1s0.4-1,1-1h12c0.6,0,1,0.4,1,1S29.6,6,29,6z"
					fill="var(--primary)"
				></path>
			</g>
			<g>
				<path
					d="M24,10h-7c-0.6,0-1-0.4-1-1s0.4-1,1-1h7c0.6,0,1,0.4,1,1S24.6,10,24,10z"
					fill="var(--primary)"
				></path>
			</g>
			<g>
				<path
					d="M29,22H17c-0.6,0-1-0.4-1-1s0.4-1,1-1h12c0.6,0,1,0.4,1,1S29.6,22,29,22z"
					fill="var(--primary)"
				></path>
			</g>
			<g>
				<path
					d="M24,26h-7c-0.6,0-1-0.4-1-1s0.4-1,1-1h7c0.6,0,1,0.4,1,1S24.6,26,24,26z"
					fill="var(--primary)"
				></path>
			</g>
			<path
				d="M11,2H5C3.3,2,2,3.3,2,5v6c0,1.7,1.3,3,3,3h6c1.7,0,3-1.3,3-3V5C14,3.3,12.7,2,11,2z M11.7,6.7l-3,3C8.5,9.9,8.3,10,8,10
				S7.5,9.9,7.3,9.7l-2-2c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0L8,7.6l2.3-2.3c0.4-0.4,1-0.4,1.4,0S12.1,6.3,11.7,6.7z"
				fill="var(--primary)"
			></path>
		</svg>
	{/if}
</button>

<style>
	.btn_transparent {
		color: var(--primary);
		width: 16px;
	}
	.icon-svg {
		display: block;
		width: 24px;
		height: 24px;
	}
	@media (min-width: 669px) {
		.icon-svg {
			width: 34px;
			height: 34px;
			margin-left: -20px;
		}
	}
</style>
