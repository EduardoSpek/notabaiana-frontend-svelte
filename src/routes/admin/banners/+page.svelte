<script>
	import { SITE_NAME } from '$lib/index.js';
	import DeleteSvg from '$lib/svg/delete.svelte';

	export let data;

	let checkbox = [];

	const deleteItem = () => {
		if (confirm('Deseja realmente deletar este item?')) {
			alert('DELETADO!');
		}
	};

	const selectAll = () => {
		const idAll = document.getElementsByName('id[]');
		const ids = document.getElementById('ids');
		idAll.forEach((id) => {
			id.checked = ids.checked;
		});
	};
</script>

<svelte:head>
	<title>Administração - Lista de Banners - {SITE_NAME}</title>
	<meta name="description" content="Lista de Banners - {SITE_NAME}" />
	<meta name="robots" content="index, follow" />
</svelte:head>

<section>
	<div class="central">
		<div class="conteudo-flow">
			<div class="emalta">Banners</div>
			<button class="btn_transparent deleteSelected">Apagar selecionados</button>
			<table>
				<tr class="header">
					<td><input type="checkbox" name="ids" id="ids" on:click={selectAll} /></td>
					<td width="100%">Título</td>
					<td><span class="delete"></span></td>
				</tr>
				{#each data.banners.banners as banner}
					<tr>
						<td><input type="checkbox" name="id[]" id="id" value={banner.id} /></td>
						<td><a href="/admin/banners/update/{banner.id}" class="link">{banner.title}</a></td>
						<td><a href="?" on:click={deleteItem(banner.id)} class="link"><DeleteSvg /></a></td>
					</tr>
				{/each}
			</table>
		</div>
	</div>
</section>

<style>
	.btn_transparent {
		float: none;
		background-color: var(--cinza-claro);
		border-radius: 50px;
	}
	.delete {
		display: block;
		width: 18px;
	}
	.deleteSelected {
		font-size: 14px;
		margin-top: 12px;
		margin-bottom: 12px;
		color: var(--primary);
		padding-top: 8px;
		padding-left: 14px;
		padding-bottom: 8px;
		padding-right: 14px;
	}
	table {
		font-family: 'Cabin', sans-serif;
		font-size: 14px;
	}
	tr {
		padding: 12px;
		background-color: var(--cinza-claro);
	}
	tr.header {
		background-color: var(--primary);
	}
	tr.header td {
		color: var(--branco);
		font-weight: bold;
	}
	td {
		padding: 8px;
		color: var(--preto);
	}
	@media (min-width: 669px) {
		table {
			width: calc(100vmin - 40px);
		}
		tr {
			padding: 22px;
		}
		td {
			padding: 12px;
		}
	}
</style>
