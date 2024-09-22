<script>
import { SITE_NAME } from "$lib/index.js";
import DeleteSvg from "$lib/svg/delete.svelte";
import { goto } from "$app/navigation";
import { enhance } from "$app/forms";
export let data;
export let comparePage;
$: comparePage = parseInt(data.pagination.currentPage) + 2;
let checkbox = [];

const selectAll = () => {
	const idAll = document.getElementsByName("id[]");
	const ids = document.getElementById("ids");
	idAll.forEach((id) => {
		id.checked = ids.checked;
	});
};
</script>

<svelte:head>
	<title>Administração - Lista de Notícias - {SITE_NAME}</title>
	<meta name="description" content="Lista de Notícias - {SITE_NAME}" />
	<meta name="robots" content="index, follow" />
</svelte:head>

<div class="TopSpace"></div>

<section>
	<div class="central">
		<div class="conteudo-flow">
			<div class="emalta">Notícias</div>
			<form action="?/deleteall" method="post" use:enhance>
				<div class="actions">
					<button
						type="submit"
						class="btn_transparent deleteSelected"
						on:click={(e) => {
							if (confirm('Deseja realmente deletar?') == false) {
								e.preventDefault();
								return false;
							}
						}}>Apagar selecionados</button
					>
					<a href="/admin/news/create" class="link"
						><button class="btn_transparent novo">Nova notícia</button></a
					>
				</div>
				<table>
					<tr class="header">
						<td><input type="checkbox" name="ids" id="ids" on:click={selectAll} /></td>
						<td width="100%">Título</td>
						<td><span class="delete"></span></td>
					</tr>
					{#each data.news as news}
						<tr>
							<td><input type="checkbox" name="id[]" id="id" value={news.id} /></td>
							<td><a href="/admin/news/{news.slug}" class="link">{news.title}</a></td>
							<td>
								<form action="?/delete" method="post" use:enhance>
									<input type="hidden" name="id" value={news.id} />
									<DeleteSvg />
								</form>
							</td>
						</tr>
					{/each}
				</table>
			</form>
			<section>
				<div class="pagination">
					{#if parseInt(data.pagination.currentPage) >= 4}
						<button on:click={() => goto('/admin/news/1/16')} class="btn_transparent">
							<div class="page">
								<a href="/admin/news/1/16" class="link">1</a>
							</div>
						</button>
						...
					{/if}
					{#if data.pagination.previousPages}
						{#each data.pagination.previousPages as previousPage}
							{#if previousPage > 0}
								<button
									on:click={() => goto('/admin/news/' + previousPage + '/16')}
									class="btn_transparent"
								>
									<div class="page">
										<a href="/admin/news/{previousPage}/16" class="link">{previousPage}</a>
									</div>
								</button>
							{/if}
						{/each}
					{/if}
					{#if data.pagination.currentPage}
						<button
							on:click={() => goto('/admin/news/' + data.pagination.currentPage + '/16')}
							class="btn_transparent"
						>
							<div class="page page_current">
								<a href="/admin/news/{data.pagination.currentPage}/16" class="link link_current"
									>{data.pagination.currentPage}</a
								>
							</div>
						</button>
					{/if}
					{#if data.pagination.nextPages}
						{#each data.pagination.nextPages as nextPage}
							<button
								on:click={() => goto('/admin/news/' + nextPage + '/16')}
								class="btn_transparent"
							>
								<div class="page">
									<a href="/admin/news/{nextPage}/16" class="link">{nextPage}</a>
								</div>
							</button>
						{/each}
					{/if}
					{#if comparePage < parseInt(data.pagination.totalPages)}
						...
						<button
							on:click={() => goto('/admin/news/' + data.pagination.totalPages + '/16')}
							class="btn_transparent"
						>
							<div class="page">
								<a
									href="/admin/news/{data.pagination.totalPages}/16"
									class="link"
									data-sveltekit-preload-code="viewport">{data.pagination.totalPages}</a
								>
							</div>
						</button>
					{/if}
				</div>
			</section>
		</div>
	</div>
</section>

<style>
	.pagination {
		margin-top: 32px;
		margin-bottom: 32px;
	}
	.actions {
		display: flex;
		justify-content: space-between;
	}
	.btn_transparent {
		float: none;
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
		border-radius: 50px;
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
		border-radius: 50px;
		background-color: var(--cinza-claro);
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
