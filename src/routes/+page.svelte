<script>
	export let data;

	async function deleteUser(id) {
		let payload = { userid: id };
		try {
			const response = await fetch('/api/delete', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(payload)
			});
			if (response.ok) {
				console.log('Recurso deletado com sucesso');
				// Atualize a UI ou faça qualquer outra coisa necessária após a exclusão
			} else {
				console.error('Erro ao deletar recurso:', response.statusText);
			}
		} catch (error) {
			console.error('Erro ao fazer solicitação DELETE:', error);
		}
	}
</script>

<h1>Lista de Usuários</h1>

<ul>
	{#each data.users as user}
		<li>{user.name} - {user.zap} <button on:click={deleteUser(user.id)}>x</button></li>
	{/each}
</ul>

<form action="/api/add" method="post">
	<input type="text" name="name" />
	<input type="text" name="zap" />
	<button formaction="/api/add">Cadastrar</button>
</form>

<style>
	ul {
		list-style: none;
	}
	li {
		color: blue;
		margin-bottom: 12px;
	}
</style>
