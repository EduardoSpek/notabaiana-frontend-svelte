<button
	type="submit"
	class="btn_transparent"
	on:click={(e) => {
		if (confirm('Deseja realmente deletar?') == false) {
			e.preventDefault();
			return false;
		}
	}}
>
	<svg
		class="icon-svg"
		fill="var(--primary)"
		id="Layer_1"
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		><title>Delete</title><path
			d="M2.88,5,5.11,24H18.89L21.12,5ZM17.11,22H6.89L5.12,7H18.88Z"
		/><polygon points="21 2 15 2 15 1 13 1 13 0 11 0 11 1 9 1 9 2 3 2 3 4 21 4 21 2" /><polygon
			points="10.23 17.66 12 15.89 13.77 17.66 15.18 16.24 13.41 14.47 15.18 12.71 13.77 11.29 12 13.06 10.23 11.29 8.82 12.71 10.59 14.47 8.82 16.24 10.23 17.66"
		/></svg
	>
</button>

<style>
	.btn_transparent {
		color: var(--primary);
		width: 16px;
	}
	.icon-svg {
		display: block;
	}
</style>
