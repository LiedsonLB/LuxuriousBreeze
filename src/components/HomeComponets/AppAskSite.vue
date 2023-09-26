<template>
    <!-- Perguntas frequentes -->

    <div id="container-main-2">
        <div id="container-main-2-header">
            <h2>Perguntas Frequêntes</h2>
            <div id="container-link-help">
                <p>Tem alguma outra dúvida <a href="">pergunte</a></p>
            </div>
        </div>
        <div id="container-cards-asks">
            <div class="card-asks">
                <i class="bi bi-credit-card-fill"></i>
                <h4>Existe alguma taxa para publicar meu anúncio?</h4>
                <p>Não, atualmente não há nenhuma taxa para publicar seu anúncio em nosso site. Você pode criar e gerenciar seus anúncios de forma gratuita.</p>
            </div>
            <div class="card-asks">
                <i class="bi bi-megaphone-fill"></i>
                <h4>Posso renovar ou reativar meu anúncio após um período de tempo?</h4>
                <p>Sim, você pode renovar ou reativar seu anúncio após o período inicial. Basta acessar sua conta, encontrar o anúncio desejado e seguir as instruções para renovar ou reativar. Algumas opções de renovação podem estar disponíveis mediante pagamento.</p>
            </div>
            <div class="card-asks">
                <i class="bi bi-people-fill"></i>
                <h4>Como os interessados em meu imóvel entrarão em contato?</h4>
                <p>Os interessados em seu imóvel podem entrar em contato através do formulário de contato disponível no anúncio. Eles também podem visualizar seu número de telefone (se você optar por exibi-lo) e enviar mensagens diretas. Certifique-se de verificar sua caixa de entrada regularmente para não perder nenhuma oportunidade de contato.</p>
            </div>
            <div class="card-asks">
                <i class="bi bi-house-fill"></i>
                <h4>Como determinar o preço de venda ou aluguel do meu imóvel?</h4>
                <p>Determinar o preço do seu imóvel pode envolver pesquisas de mercado, avaliações imobiliárias e análise das características únicas do seu imóvel e da região. Recomendamos consultar um corretor imobiliário ou profissional do ramo para obter orientação sobre a definição de um preço competitivo e justo.</p>
            </div>
        </div>
    </div>
    <br><br>
</template>
<script>
export default{
    name: "AppAskSite"
}
</script>
<style>
#container-main-2{
    width: 90%;
    margin: 0 auto;
    animation: DownAnimation 1s;
}
#container-main-2-header{
    display: flex;
    justify-content: end;
    gap: 10rem;
}
#container-link-help{
    box-shadow: 0 10px 30px 0 rgba(0,0,0,0.1);
    padding: 10px 15px;
    border-left: 5px solid var(--blue-color);
}
#container-cards-asks{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1rem 0rem;
    width: 100% !important;
    align-items: baseline;
    margin: 0 auto;
    justify-content: space-evenly;
    row-gap: 10px;
}
.card-asks{
    max-width: 500px !important;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
}
.card-asks i{
    font-size: 4rem;
    color: var(--blue-color);
}
.card-asks h4{
    margin: 0;
}
.card-asks p{
    margin: 0;
    padding: 1rem 0px;
}
</style>