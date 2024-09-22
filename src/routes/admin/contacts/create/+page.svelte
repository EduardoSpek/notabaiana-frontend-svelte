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

				<label for="cInputName">Nome:</label><br />
				<input type="text" class="inputForm" id="cInput" size="70" name="name" /><br /><br />

				<label for="cInputEmail">Email:</label><br />
				<input type="email" class="inputForm" id="cInputEmail" name="email" /><br /><br />

				<label for="cInputTitle">Assunto / Título:</label><br />
				<input type="text" class="inputForm" id="cInputTitle" name="title" /><br /><br />

				<label for="ttextarea">Mensagem:</label><br />
				<textarea name="text" id="ttextarea" class="textareaForm"></textarea><br /><br />

				<label for="fileInput">Imagem .JPG<span class="dimensoes">(opcional)</span>:</label><br />
				<input type="file" id="fileInput" name="image" class="fileForm" /><br /><br />

				<input type="checkbox" id="checkboxInput" name="answered" value="true" checked />
				<label for="checkboxInput">Respondida</label><br /><br />

				{#if form?.erro}
					<p class="alert">Houve um problema ao cadastrar</p>
				{/if}

				<input type="submit" value="Cadastrar" class="buttonForm" />
			</form>
		</div>
	</div>
</section>
