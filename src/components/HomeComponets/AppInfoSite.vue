<template>
    <!-- Numeros do Site -->

    <div id="container-dados">
        <div class="card-dados">
            <h3>{{ infoSiteData.NumImoveis }}</h3>
            <p>Imoveis</p>
        </div>
        <div class="card-dados">
            <h3>{{ infoSiteData.NumUsers }}</h3>
            <p>Usuários</p>
        </div>
        <div class="card-dados">
            <h3>{{ infoSiteData.NumStates }}</h3>
            <p>Estados</p>
        </div>
    </div>
    <br><br>
</template>
<script>
export default {
    name: "AppInfoSite",
    data(){
        return{
            infoSiteData:
        {
            NumImoveis: "2",
            NumUsers: "1",
            NumStates: "1",
        },
        }
    }
}
</script>
<style>
#container-dados{
    width: 80%;
    margin: 0 auto;
    display: flex;
    padding: 1rem 0px 2rem 0px;
    gap: 10px;
}
#container-dados .card-dados:nth-child(1) {
    animation: DownAnimation .5s ease-in-out 0.5s both;
}

#container-dados .card-dados:nth-child(2) {
    animation: DownAnimation .5s ease-in-out 1s both;
}

#container-dados .card-dados:nth-child(3) {
    animation: DownAnimation .5s ease-in-out 1.5s both;
}
.card-dados{
    width: 200px;
    box-shadow: 0 10px 30px 0 rgba(0,0,0,0.1);
    padding: 10px 15px;
    border-left: 5px solid var(--blue-color);
    text-align: center;
}
.card-dados h3{
    margin: 0;
}
.card-dados p{
    margin: 0;
}
</style>