<script>
	import { onMount } from 'svelte';
	import { initRecaptcha, KEY_RECAPTCHA } from '$lib/google_recaptcha';
	export let form;

	onMount(() => {
		initRecaptcha();
	});
</script>

<div class="TopSpace"></div>

<section>
	<div class="central">
		<div class="conteudo">
			<h1 class="titulo">Administração</h1>
			<form action="?/login" method="post" id="formDefault">
				<label for="cInput">Email:</label><br />
				<input type="text" class="inputForm" id="cInput" name="email" required maxlength="80" /><br
				/><br />

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
					<p class="alert">Dados inválidos. Tente novanente.</p>
				{/if}
				<input
					type="submit"
					value="Enviar"
					class="buttonForm g-recaptcha"
					data-sitekey={KEY_RECAPTCHA}
					data-callback="onSubmit"
					data-action="submit"
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
