<script>
	import { SITE_NAME } from '$lib/index.js';
	import DeleteSvg from '$lib/svg/delete.svelte';
	import { enhance } from '$app/forms';
	export let data;

	let checkbox = [];

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

<div class="TopSpace"></div>

<section>
	<div class="central">
		<div class="conteudo-flow">
			<div class="emalta">Banners</div>
			<form action="?/deleteall" method="post" use:enhance>
				<div class="actions">
					<button type="submit" class="btn_transparent deleteSelected">Apagar selecionados</button>
					<a href="/admin/banners/create" class="link"
						><button class="btn_transparent novo">Novo banner</button></a
					>
				</div>
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
							<td>
								<form action="?/delete" method="post" use:enhance>
									<input type="hidden" name="id" value={banner.id} />
									<DeleteSvg />
								</form>
							</td>
						</tr>
					{/each}
				</table>
			</form>
		</div>
	</div>
</section>

<style>
	.actions {
		display: flex;
		justify-content: space-between;
	}
	.btn_transparent {
		float: none;
		background-color: var(--cinza-claro);
		border-radius: 50px;
	}
	.delete {
		display: block;
		width: 18px;
	}
	.novo {
		background-color: var(--primary);
		font-size: 14px;
		margin-top: 12px;
		margin-bottom: 12px;
		color: var(--branco);
		padding-top: 8px;
		padding-left: 14px;
		padding-bottom: 8px;
		padding-right: 14px;
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
