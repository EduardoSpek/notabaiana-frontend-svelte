<script>
import { onMount } from "svelte";
import { initRecaptcha, KEY_RECAPTCHA } from "$lib/google_recaptcha";
export let data;
export let form;

onMount(() => {
	initRecaptcha();
});
</script>

<div class="TopSpace"></div>

<section>
	<div class="central">
		<div class="conteudo-flow">
			{#if form?.erro}
				<p class="alert">Houve um problema ao enviar a mensagem. Tente novamente!</p>
			{/if}

			<h2>Fale conosco</h2>

			<form action="?/create" method="post" id="formDefault" enctype="multipart/form-data">
				<input type="hidden" id="ctoken" name="token" value={data.token} />

				<label for="cInputName">Nome:</label><br />
				<input
					type="text"
					class="inputForm"
					id="cInputName"
					size="70"
					name="name"
					value={data.saveData?.name}
					required
				/><br /><br />

				<label for="cInputEmail">Email:</label><br />
				<input
					type="email"
					class="inputForm"
					id="cInputEmail"
					name="email"
					value={data.saveData.email}
					required
				/><br /><br />

				<label for="cInputTitle">Assunto / Título:</label><br />
				<input
					type="text"
					class="inputForm"
					id="cInputTitle"
					name="title"
					value={data.saveData.title}
					required
				/><br /><br />

				<label for="ttextarea">Mensagem:</label><br />
				<textarea name="text" id="ttextarea" class="textareaForm" required
					>{data.saveData.text}</textarea
				><br /><br />

				<label for="fileInput">Imagem .JPG <span class="dimensoes">(opcional)</span>:</label><br />
				<input type="file" id="fileInput" name="image" class="fileForm" /><br /><br />

				<input
					type="submit"
					value="Enviar mensagem"
					class="buttonForm g-recaptcha"
					data-sitekey={KEY_RECAPTCHA}
					data-callback="onSubmit"
					data-action="submit"
				/>
			</form>
		</div>
	</div>
</section>

<div class="TopSpace"></div>

<style>
	.alert {
		margin-top: 4px;
		font-weight: bold;
		font-size: 14px;
		background-color: var(--primary);
		color: var(--branco);
		padding: 10px;
		border: 1px solid var(--cinza-escuro);
		border-radius: 14px;
		text-align: center;
	}
</style>
