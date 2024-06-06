<script>
	import { onMount } from 'svelte';
	import { HOST_API } from '$lib/index';
	import { initRecaptcha, KEY_RECAPTCHA, setKey, getKey } from '$lib/google_recaptcha';
	export let data;

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
				action="{HOST_API}/update/news/{data.item.slug}"
				method="post"
				id="formCreateNews"
				enctype="multipart/form-data"
			>
				<input type="hidden" name="id" value={data.item.id} />
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
					value={data.item.visible}
				/>
				<label for="fileInput">{data.item.visible}</label><br /><br />

				<input
					type="submit"
					value="Atualizar"
					class="buttonForm g-recaptcha"
					data-sitekey={KEY_RECAPTCHA}
					data-callback="onSubmit"
					data-action="submit"
				/>
			</form>
		</div>
	</div>
</section>
