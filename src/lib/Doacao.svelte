<script>
import { SITE_NAME, HOST } from "$lib/index.js";
</script>

<svelte:head>
	<title>Doação - Ajuda a manter o {SITE_NAME} no ar</title>
	<meta
		name="description"
		content="Confira as políticas de privacidade e como preservamos os seus dados. "
	/>
</svelte:head>

<div class="TopSpace"></div>

<section>
<div class="central">
    <div class="conteudo-flow">
    
    <h1>Faça uma doação!</h1>
    
    <p>O NotaBaiana é um projeto desenvolvido por <b>Eduardo Spek</b>, Engenheiro de Software e Desenvolvedor Web Full Stack.</p>
    
    <p>Para manter esse projeto no ar tem um custo mensal.</p>

    <p>Se você gosta muito do NotaBaiana.com.br e quer que ele volte, faça uma doação.</p>

    <p>Ajude a mantê-lo no ar.<br>Faça um pix de <b>apenas R$ 50,00</b> (cinquenta reais), doe!</p>

<p class="qrcode-pai"><img class="qrcode" src={`${HOST}/qrcode-pix.png`} alt="Qrcode Pix para doação"></p>

<p class="qrcode-pai"> 
    <input type="text" name="pix" value="00020126360014BR.GOV.BCB.PIX0114+5571996229991520400005303986540550.005802BR5921Eduardo Barros Freire6008Salvador62070503***6304E575" class="inputForm">
</p>
<div class="qrcode-pai">
    <h2>Obrigado!</h2>
</div>
</div>
</div>
</section>

<style>
    .qrcode-pai {
        display: flex;
        justify-content: center;        
    }
    .qrcode {
        margin-top: 30px;
        width: 300px;
        height: 300px;

    }
</style>
