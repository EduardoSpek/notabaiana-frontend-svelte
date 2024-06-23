<script>
	import { enhance } from '$app/forms';
	export let data;
	export let title;
	export let text;
	export let category;
	export let image;
	export let resultado;
</script>

<section>
	<div class="central">
		<div class="conteudo">
			<form
				action="?/create"
				method="post"
				id="formDefault"
				enctype="multipart/form-data"
				use:enhance={() => {
					return async ({ result }) => {
						if (result.data.resultado) {
							title = '';
							text = '';
							category = '';
							image = '';
							resultado = result.data.resultado;
						}
					};
				}}
			>
				<input type="hidden" id="ctoken" name="token" value={data.token} />

				<label for="cInput">Categoria:</label><br />
				<input type="text" class="inputForm" id="cInput" name="category" bind:value={category} /><br
				/><br />

				<label for="tinput">Título:</label><br />
				<input
					type="text"
					class="inputForm"
					size="70"
					id="tinput"
					name="title"
					bind:value={title}
				/><br /><br />

				<label for="ttextarea">Texto:</label><br />
				<textarea name="text" id="ttextarea" class="textareaForm" bind:value={text}></textarea><br
				/><br />

				<label for="fileInput">Selecione um arquivo:</label><br />
				<input type="file" id="fileInput" name="image" class="fileForm" bind:value={image} /><br
				/><br />

				<input
					type="checkbox"
					id="fileInput"
					name="visible"
					class="fileForm"
					value="true"
					checked
				/>
				<label for="fileInput">true</label><br /><br />

				{#if resultado == 'erro'}
					<p class="alert">Houve um problema ao cadastrar</p>
				{:else if resultado == 'ok'}
					<p class="alert">Notícia cadastrada com sucesso!</p>
				{/if}

				<input type="submit" value="Cadastrar" class="buttonForm" />
			</form>
		</div>
	</div>
</section>
