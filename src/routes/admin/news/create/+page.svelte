<script>
	import { onMount } from 'svelte';
	import { HOST_API } from '$lib/index';
	import { initRecaptcha, KEY_RECAPTCHA, setKey, getKey } from '$lib/google_recaptcha';

	export let KEY_ADMIN;

	onMount(() => {
		initRecaptcha();
		KEY_ADMIN = getKey();
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
				<label for="keyinput">Key:</label><br />
				<input
					type="text"
					class="inputForm"
					id="keyinput"
					value={KEY_ADMIN}
					name="key"
					on:focusout={setKey}
				/><br /><br />

				<label for="cInput">Categoria:</label><br />
				<input type="text" class="inputForm" id="cInput" name="category" /><br /><br />

				<label for="tinput">Título:</label><br />
				<input type="text" class="inputForm" size="70" id="tinput" name="title" /><br /><br />

				<label for="ttextarea">Texto:</label><br />
				<textarea name="text" id="ttextarea" class="textareaForm"></textarea><br /><br />

				<label for="fileInput">Selecione um arquivo:</label><br />
				<input type="file" id="fileInput" name="image" class="fileForm" /><br /><br />
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
