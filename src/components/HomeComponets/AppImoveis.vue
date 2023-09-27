<template>
    <!-- Container imoveis-->

    <div id="container-imoveis">
      <div v-for="(imovel, index) in imoveis" :key="index" class="imovel">
        <div class="imovel-img">
          <img :src="imovel.src" :alt="imovel.alt">
        </div>
        <div class="imovel-description">
          <h4>{{ imovel.nome }}</h4>
          <h5><i class="bi bi-geo-alt-fill"></i> {{ imovel.localizacao }}</h5>
          <p>{{ imovel.descricao }}</p>
          <h3>{{ imovel.valor }}</h3>
          <button>Ver Mais</button>
        </div>
      </div>

      <div id="pageNavigation">
        <button class="btnPage">Anterior</button>
        <button class="btnPage active">1</button>
        <button class="btnPage">2</button>
        <button class="btnPage">3</button>
        <button class="btnPage">4</button>
        <button class="btnPage" id="btnPlusPage">...</button>
        <button class="btnPage">7</button>
        <button class="btnPage">8</button>
        <button class="btnPage">9</button>
        <button class="btnPage">10</button>
        <button class="btnPage">Proximo</button>
    </div>

    </div>
    <br><br><br>
</template>

<script>
export default{
    name: "AppImoveis",
    data(){
        return {
        infoSiteData:
            {
                NumImoveis: "2",
                NumUsers: "1",
                NumStates: "1",
            },
        imoveis: [
            {
            src: "img/imovel1.jpg",
            alt: "Imagem do imovel 1",
            nome: "Nome do Imóvel 1",
            localizacao: "Piripiri-PI",
            descricao: "Descrição do imóvel 1",
            valor: "R$ 10000,00"
            },
            {
            src: "img/imovel2.jpg",
            alt: "Imagem do imovel 2",
            nome: "Nome do Imóvel 2",
            localizacao: "Piripiri-PI",
            descricao: "Descrição do imóvel 2",
            valor: "R$ 15000,00"
            },
            {
            src: "img/imovel1.jpg",
            alt: "Imagem do imovel 1",
            nome: "Nome do Imóvel 1",
            localizacao: "Piripiri-PI",
            descricao: "Descrição do imóvel 1",
            valor: "R$ 10000,00"
            },
            {
            src: "img/imovel2.jpg",
            alt: "Imagem do imovel 2",
            nome: "Nome do Imóvel 2",
            localizacao: "Piripiri-PI",
            descricao: "Descrição do imóvel 2",
            valor: "R$ 15000,00"
            },
            {
            src: "img/imovel1.jpg",
            alt: "Imagem do imovel 1",
            nome: "Nome do Imóvel 1",
            localizacao: "Piripiri-PI",
            descricao: "Descrição do imóvel 1",
            valor: "R$ 10000,00"
            },
            {
            src: "img/imovel2.jpg",
            alt: "Imagem do imovel 2",
            nome: "Nome do Imóvel 2",
            localizacao: "Piripiri-PI",
            descricao: "Descrição do imóvel 2",
            valor: "R$ 15000,00"
            },
            // Adicione mais objetos de imóveis aqui
        ]
        };
    }
}
</script>
<style>
#container-imoveis{
    padding: 1rem 0;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}
.imovel{
    width: 380px;
    height: 200px;
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
}
.imovel-img{
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.imovel-img img{
    width: 100%;
    border-radius: 5px;
    height: 80%;
}
.imovel-description{
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0px 5px;
    width: 60%;
}
.imovel-description h4{
    margin: 0;
}
.imovel-description h3{
    margin: 0;
}
.imovel-description p{
    margin: 0;
    font-size: 1rem;
}
.imovel-description h5{
    margin: 0;
}
.imovel-description button{
    font-size: 0.9rem;
    padding: 10px 15px;
    border: none;
    text-decoration: none;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    background-color: var(--blue-color);
    color: var(--letter-color);
}
.imovel-description button:hover{
    background-color: #0293c4;
}
/* rolagem */
#pageNavigation {
    margin-top: 1rem;
    max-width: 80%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
}
.btnPage {
    box-sizing: border-box;
    border: 1.8px solid var(--blue-color);
    padding: 0.5em 1em;
    font-weight: 500;
    color: var(--blue-color);
    border-radius: 5px;
    font-size: 1em;
    background: transparent;
    cursor: pointer;
}
.btnPage:hover{
    background-color: #0293c4;
    border: 1.8px solid transparent;
    color: #fff;
}
#btnPlusPage {
    border: none !important;
    cursor: auto !important;
    background: transparent !important;
    color: var(--blue-color) !important;
}
.active {
    background-color: var(--blue-color);
    color: #fff;
}
</style>