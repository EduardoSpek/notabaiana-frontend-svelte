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

				<label for="cInput">Título:</label><br />
				<input type="text" class="inputForm" id="cInput" name="title" /><br /><br />

				<label for="tinput">Link:</label><br />
				<input type="text" class="inputForm" size="70" id="tinput" name="link" /><br /><br />

				<label for="ttextarea">HTML:</label><br />
				<textarea name="html" id="ttextarea" class="textareaForm"></textarea><br /><br />

				<label for="fileInput">Banner PC <span class="dimensoes">(1300 x 190 px)</span>:</label><br
				/>
				<input type="file" id="fileInput" name="image1" class="fileForm" /><br /><br />

				<label for="fileInput">Banner Tablet <span class="dimensoes">(726 x 106 px)</span>:</label
				><br />
				<input type="file" id="fileInput" name="image2" class="fileForm" /><br /><br />

				<label for="fileInput">Banner Mobile <span class="dimensoes">(386 x 386 px)</span>:</label
				><br />
				<input type="file" id="fileInput" name="image3" class="fileForm" /><br /><br />

				<label for="tinput">Tag:</label><br />
				<input type="text" class="inputForm" size="70" id="tinput" name="tag" /><br /><br />

				<input
					type="checkbox"
					id="fileInput"
					name="visible"
					class="fileForm"
					value="true"
					checked
				/>
				<label for="fileInput">Exibir no site</label><br /><br />

				{#if form?.erro}
					<p class="alert">Houve um problema ao cadastrar</p>
				{/if}

				<input type="submit" value="Cadastrar" class="buttonForm" />
			</form>
		</div>
	</div>
</section>
