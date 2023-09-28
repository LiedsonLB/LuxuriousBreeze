<template>
    <div id="destaques">
            <div id="container-destaque">
                <div id="carrosel">
                    <h2 id="destaque-text">Qual imovel está procurando</h2>
    
                    <div id="carrosel-imoveis">
                        <a class="element-card" href="#">
                            <div class="background-card">
                                <img src="https://www.decorfacil.com/wp-content/uploads/2021/11/20211118casa-terrea.jpg" alt="Imagem de fundo do card">
                                <div class="caption">
                                    <p>Busco</p>
                                    <h3>Residencial</h3>
                                </div>
                            </div>
                        </a>
                        <a class="element-card" href="#">
                            <div class="background-card">
                                <img src="https://resizedimgs.zapimoveis.com.br/crop/614x297/named.images.sp/4a6826f5fe499833d0e643f034b0d8df/conjunto-comercial-sala-venda-43m-no-alto-da-gl-ria-curitiba.jpg" alt="Imagem de fundo do card">
                                <div class="caption">
                                    <p>Busco</p>
                                    <h3>Comercial</h3>
                                </div>
                            </div>
                        </a>
                        <a class="element-card" href="#">
                            <div class="background-card">
                                <img src="https://geourbes.com/wp-content/uploads/2021/05/imovel-rural-geo-urbes-2.jpg" alt="Imagem de fundo do card">
                                <div class="caption">
                                    <p>Busco</p>
                                    <h3>Rural</h3>
                                </div>
                            </div>
                        </a>
                        <a class="element-card" href="#">
                            <div class="background-card">
                                <img src="https://kabral.com.br/upload/peq1_16299268073_a11870d1a7a60e192a2f8d197fdf0fed.jpeg" alt="Imagem de fundo do card">
                                <div class="caption">
                                    <p>Busco</p>
                                    <h3>Lazer</h3>
                                </div>
                            </div>
                        </a>
                    </div>
    
                </div>
            </div>
        </div>
        <br><br>
</template>
<script>
export default {
    name: "AppCoursel"
}
</script>
<style>
#destaques {
    padding: 2rem 0px;
    margin: 0 auto;
    background-color: var(--blue-color);
}
#container-destaque {
    width: 90%;
    margin: 0 auto;
}
#carrosel{
    min-width: 90%;
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
}
#carrosel h2 {
    color: #fff;
    text-align: center;
}
#carrosel-imoveis {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}
.element-card{
    text-decoration: none;
    position: relative;
    height: 20%;
    overflow: hidden;
    color: var(--Dark-gray);
    border-radius: 10px;
}

.background-card{
    position: relative;
    width: 200px;
    height: 300px;
    transition: .5s;
}
.background-card:hover {
    position: relative;
    width: 200px;
    height: 300px;
    transform: scale(1.05); /* Aplica escala ao cartão quando hover */
}

.background-card img {
    object-fit: cover;
    height: 100%;
    width: 100%;
}
.caption {
    position: absolute;
    bottom: 7rem;
    width: 100%;
    height: 100%;
    transition: left 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1rem;
}
.caption h3, .caption p {
    margin: 0;
}
.element-card:hover .caption {
    left: 0; /* Move para dentro do card quando é hover */
}
.element-card:hover .background-card img {
    transition: .5s;
}
.element-card:hover .description-card {
    transform: scaleY(1);
    opacity: 1; /* Aplica quando o card é hover */
}
</style>