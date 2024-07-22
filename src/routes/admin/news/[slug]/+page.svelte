<script>
	export let data;
	export let form;
</script>

<div class="TopSpace"></div>

<section>
	<div class="central">
		<div class="conteudo">
			<form action="?/update" method="post" id="formDefault" enctype="multipart/form-data">
				<input type="hidden" name="id" value={data.item.id} />
				<input type="hidden" name="slug" value={data.item.slug} />
				<input type="hidden" name="token" value={data.token} />

				<label for="cInput">Categoria:</label><br />
				<input
					type="text"
					class="inputForm"
					id="cInput"
					name="category"
					value={data.item.category}
				/><br /><br />

				<label for="tinput">Título:</label><br />

				<input
					type="text"
					class="inputForm"
					size="70"
					id="tinput"
					name="title"
					value={data.item.title}
				/><br /><br />

				<label for="ttextarea">Texto:</label><br />
				<textarea name="text" id="ttextarea" class="textareaForm" value={data.item.text}
				></textarea><br /><br />

				<label for="fileInput">Selecione um arquivo:</label><br />
				<input type="file" id="fileInput" name="image" class="fileForm" /><br /><br />

				<input
					type="checkbox"
					id="fileInput"
					name="visible"
					class="fileForm"
					checked={data.item.visible}
					value="true"
				/>
				<label for="fileInput">{data.item.visible}</label><br /><br />

				{#if form?.erro}
					<p class="alert">Houve um problema ao atualizar</p>
				{/if}

				<input type="submit" value="Atualizar" class="buttonForm" />
			</form>
		</div>
	</div>
</section>
