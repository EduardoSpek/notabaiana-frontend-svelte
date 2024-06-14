<script>
	import { onMount } from 'svelte';
	import { HOST_API } from '$lib/index';
	import { initRecaptcha, KEY_RECAPTCHA } from '$lib/google_recaptcha';
	export let data;

	onMount(() => {
		initRecaptcha();
	});
</script>

<section>
	<div class="central">
		<div class="conteudo">
			<form
				action="{HOST_API}/news/create"
				method="post"
				id="formDefault"
				enctype="multipart/form-data"
			>
				<input type="hidden" id="ctoken" name="token" value={data.token} />

				<label for="cInput">Categoria:</label><br />
				<input type="text" class="inputForm" id="cInput" name="category" /><br /><br />

				<label for="tinput">Título:</label><br />
				<input type="text" class="inputForm" size="70" id="tinput" name="title" /><br /><br />

				<label for="ttextarea">Texto:</label><br />
				<textarea name="text" id="ttextarea" class="textareaForm"></textarea><br /><br />

				<label for="fileInput">Selecione um arquivo:</label><br />
				<input type="file" id="fileInput" name="image" class="fileForm" /><br /><br />

				<input
					type="checkbox"
					id="fileInput"
					name="visible"
					class="fileForm"
					value="true"
					checked
				/>
				<label for="fileInput">true</label><br /><br />

				<input
					type="submit"
					value="Cadastrar"
					class="buttonForm g-recaptcha"
					data-sitekey={KEY_RECAPTCHA}
					data-callback="onSubmit"
					data-action="submit"
				/>
			</form>
		</div>
	</div>
</section>
