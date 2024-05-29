<script>
	import { HOST_API } from '$lib/index';
</script>

<section>
	<div class="central">
		<div class="conteudo">
			<form action="{HOST_API}/news/create" method="post" enctype="multipart/form-data">
				<label for="keyinput">Key:</label><br />
				<input type="text" class="inputForm" id="keyinput" name="key" /><br /><br />

				<label for="cInput">Categoria:</label><br />
				<input type="text" class="inputForm" id="cInput" name="category" /><br /><br />

				<label for="tinput">Título:</label><br />
				<input type="text" class="inputForm" size="70" id="tinput" name="title" /><br /><br />

				<label for="ttextarea">Texto:</label><br />
				<textarea name="text" id="ttextarea" class="textareaForm"></textarea><br /><br />

				<label for="fileInput">Selecione um arquivo:</label><br />
				<input type="file" id="fileInput" name="Image" class="fileForm" /><br /><br />
				<input type="submit" value="Enviar Arquivo" class="buttonForm" />
			</form>
		</div>
	</div>
</section>
