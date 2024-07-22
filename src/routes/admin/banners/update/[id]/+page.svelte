<script>
	export let data;
	export let form;
</script>

<div class="TopSpace"></div>

<section>
	<div class="central">
		<div class="conteudo">
			<form action="?/update" method="post" id="formDefault" enctype="multipart/form-data">
				<input type="hidden" name="id" value={data.id} />
				<input type="hidden" id="ctoken" name="token" value={data.token} />

				<label for="cInput">Título:</label><br />
				<input
					type="text"
					class="inputForm"
					id="cInput"
					name="title"
					value={data.banner.title}
				/><br /><br />

				<label for="tinput">Link:</label><br />
				<input
					type="text"
					class="inputForm"
					size="70"
					id="tinput"
					name="link"
					value={data.banner.link}
				/><br /><br />

				<label for="ttextarea">HTML:</label><br />
				<textarea name="html" id="ttextarea" class="textareaForm">{data.banner.html}</textarea><br
				/><br />

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
				<input
					type="text"
					class="inputForm"
					size="70"
					id="tinput"
					name="tag"
					value={data.banner.tag}
				/><br /><br />

				<input
					type="checkbox"
					id="fileInput"
					name="visible"
					class="fileForm"
					value="true"
					checked={data.banner.visible}
				/>
				<label for="fileInput">Exibir no site</label><br /><br />

				{#if form?.erro}
					<p class="alert">Houve um problema ao atualizar</p>
				{/if}

				<input type="submit" value="Atualizar" class="buttonForm" />
			</form>
		</div>
	</div>
</section>
