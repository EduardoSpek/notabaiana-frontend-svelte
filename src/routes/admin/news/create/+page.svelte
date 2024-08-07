<script>
	export let data;
	export let form;
</script>

<div class="TopSpace"></div>

<section>
	<div class="central">
		<div class="conteudo-flow">
			<form action="?/create" method="post" id="formDefault" enctype="multipart/form-data">
				<input type="hidden" id="ctoken" name="token" value={data.token} />

				<label for="cInput">Categoria:</label><br />
				<input type="text" class="inputForm" id="cInput" name="category" /><br /><br />

				<label for="tinput">Título:</label><br />
				<input type="text" class="inputForm" size="70" id="tinput" name="title" /><br /><br />

				<label for="ttextarea">Texto:</label><br />
				<textarea name="text" id="ttextarea" class="textareaForm"></textarea><br /><br />

				<label for="fileInput">Selecione um arquivo:</label><br />
				<input type="file" id="fileInput" name="image" class="fileForm" /><br /><br />

				<input type="checkbox" id="fileInput" name="visible" value="true" checked />
				<label for="fileInput">Exibir no site</label><br /><br />

				<input type="checkbox" id="fileInput" name="topstory" value="true" />
				<label for="fileInput">Marcar como destaque</label><br /><br />

				{#if form?.erro}
					<p class="alert">Houve um problema ao cadastrar</p>
				{/if}

				<input type="submit" value="Cadastrar" class="buttonForm" />
			</form>
		</div>
	</div>
</section>
