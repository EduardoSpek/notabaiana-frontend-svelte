<div class="TopSpace"></div>

<section>
	<div class="conteudo-flow">
		<h1 class="titulo">Administração</h1>
		<ul>
			<button
				class="btn_transparent"
				on:click={() => {
					window.location = '/admin/news';
				}}><li>Notícias</li></button
			>
			<button
				class="btn_transparent"
				on:click={() => {
					window.location = '/admin/downloads';
				}}><li>Downloads</li></button
			>
			<button
				class="btn_transparent"
				on:click={() => {
					window.location = '/admin/banners';
				}}><li>Banners</li></button
			>
			<button
				class="btn_transparent"
				on:click={() => {
					window.location = '/admin/contacts';
				}}><li>Contatos</li></button
			>
			<button
				class="btn_transparent"
				on:click={() => {
					window.location = '/admin/logout';
				}}><li>Sair da conta</li></button
			>
		</ul>
	</div>
</section>

<style>
	h1 {
		text-align: center;
		color: var(--preto);
	}
	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		font-size: 22px;
		gap: 10px;
		flex-direction: column;
		padding: 0px;
	}
	ul li {
		margin: auto;
		text-align: center;
		padding: 10px;
		background-color: var(--primary);
		border-radius: 50px;
		min-width: 250px;
		color: var(--branco);
	}
</style>
