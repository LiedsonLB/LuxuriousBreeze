<template>
    <!-- fachada do site -->

    <main>
        <div id="container-main">
            <div id="container-text">
                <div>
                    <h1 style="width: 80%;color: var(--Dark-gray);">Divulgue para Vários Usuários o <span class="colorido">Seu Imóvel</span></h1>
                <p>Descubra o imóvel dos seus sonhos e estabeleça uma conexão direta com clientes, permitindo-lhe também promover a sua própria propriedade com total facilidade.</p>
                </div>
                <div id="container-main-btn">
                    <router-link to="/divulgarproduto"><button class="main-btn" id="main-search"><i class="bi bi-search"></i> Divulgar Imovel</button></router-link>
                </div>
            </div>
            <div id="container-img">
                <img :src="logo" alt="">
            </div>
        </div>
    </main>
</template>
<script>
export default {
    name: "AppApresention",
    data(){
        return {
            logo: "img/luxuriousBreezeLogo.png"
        }
    },
}
</script>
<style>
main{
    width: 90%;
    height: 80%;
    margin: 0 auto;
    padding: 1rem 0;
    height: 350px;
}
#container-main{
    width: 96%;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    height: 100%;
    justify-content: center;
    align-items: center;
}
#container-text{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    animation: LeftAnimation 1s;
}
#container-text h2{
    font-size: 2.5rem;
    width: 80%;
    color: var(--blue-color) !important;
}
.colorido{
    color: var(--blue-color);
}
#container-text p{
    font-size: 1.2rem;
}
#container-main-btn{
    display: flex;
    align-items: center;
    gap: 10px;
}
.main-btn{
    font-size: 1.1rem;
    padding: 10px 15px;
    border: 1.5px solid var(--blue-color);
    text-decoration: none;
    border-radius: 100px;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
}
#main-search{
    background-color: var(--blue-color);
    color: var(--letter-color);
}
#main-search:hover{
    background-color: #0293c4;
    border-color: #0293c4;
}
#main-add{
    color: var(--blue-color);
    background-color: #fff;
}
#main-add:hover{
    background-color: #f1efef;
}
#container-img{
    position: relative;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: RightAnimation 1s;
}
#container-img img{
    width: 100%;
}
</style>