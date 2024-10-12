<script>
import { onMount } from "svelte";
import { browser } from "$app/environment";
import { KEY_RECAPTCHA } from "$lib/index.js";
export let form;
let formDefault;

onMount(() => {
	if (browser) {
		loadRecaptcha();
	}
});

function loadRecaptcha() {
	const script = document.createElement("script");
	script.src = `https://www.google.com/recaptcha/api.js?render=${KEY_RECAPTCHA}`;
	script.async = true;
	script.defer = true;
	document.body.appendChild(script);
}

function handleSubmit(event) {
	event.preventDefault();
	if (window.grecaptcha) {
		window.grecaptcha.ready(() => {
			window.grecaptcha
				.execute(KEY_RECAPTCHA, { action: "submit" })
				.then((token) => {
					// Adiciona o token ao formulário
					const input = document.createElement("input");
					input.type = "hidden";
					input.name = "g-recaptcha-response";
					input.value = token;
					formDefault.appendChild(input);

					// Envia o formulário
					formDefault.submit();
				});
		});
	}
}
</script>

<div class="TopSpace"></div>

<section>
	<div class="central">
		<div class="conteudo-flow">
			<h1 class="titulo">Administração</h1>
			<form action="?/login" method="post" id="formDefault" bind:this={formDefault} on:submit={handleSubmit}>
				<label for="cInput">Email:</label><br />
				<input type="text" class="inputForm" id="cInput" name="email" required maxlength="80" /><br /><br />
			  
				<label for="tinput">Senha:</label><br />
				<input
				  type="password"
				  class="inputForm"
				  size="70"
				  id="tinput"
				  name="password"
				  maxlength="30"
				  required="true"
				/><br /><br />
			  
				{#if form?.login.erro}
				  <p class="alert">Dados inválidos. Tente novamente.</p>
				{/if}
				<input
				  type="submit"
				  value="Enviar"
				  class="buttonForm"
				/>
			  </form>
		</div>
	</div>
</section>

<style>
	h1 {
		color: var(--preto);
	}
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
