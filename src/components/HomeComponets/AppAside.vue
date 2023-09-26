<template>
    <!-- Aside -->
    <div id="Add-Aside" v-if="isOpenAside">
            <div id="Aside">
                <div id="header-aside">
                    <button @click="closeAside">
                        <i class="bi bi-arrow-left"></i>
                    </button>
                    <div id="logo-aside" style="display: flex;">
                        <img :src="logo" alt="">
                        <h5 style="color: var(--blue-color);">LuxuriousBreeze</h5>
                    </div>
                </div>
                <div id="aside-options">
                    <div id="profile">
                        <img :src="perfil" alt="">
                    </div>
                    <div class="aside-text">
                        <h4>Liedson Barros</h4>
                        <p>liedson.b9@gmail.com</p>
                    </div>
                </div>
                    <div class="aside-options">
                        
                        <div class="aside-text">
                            <router-link to="/home"><h4><i class="bi bi-house-door-fill"></i> Ínicio</h4></router-link>
                        </div>
                    </div>
                    <div class="aside-options">
                    
                        <div class="aside-text">
                            <router-link to="/meusimoveis"><h4><i class="bi bi-buildings-fill"></i> Meus Imóveis</h4></router-link>
                        </div>
                    </div>
                    <div class="aside-options">
                    
                        <div class="aside-text">
                            <h4><i class="bi bi-heart-fill"></i> Favoritos</h4>
                        </div>
                    </div>
                    <div class="aside-options">
                    
                        <div class="aside-text">
                            <h4><i class="bi bi-gear-fill"></i> Configurações</h4>
                        </div>
                    </div>
                    <div class="aside-options">
                    
                        <div class="aside-text">
                            <h4><i class="bi bi-wrench-adjustable"></i> Suporte</h4>
                        </div>
                    </div>

                    <div class="aside-options" id="logout" style="position: absolute; bottom: 40px; max-width: 15rem; background: var(--blue-color);border: none;">
                        <div class="aside-text">
                            <router-link to="/"><h4 style="color: #fff;"><i class="bi bi-box-arrow-in-left"></i> Logout</h4></router-link>
                        </div>
                    </div>
            </div>
        </div>
</template>
<script>

export default {
    name: "AppAside",
    data(){
        return{
            perfil: "img/perfil teste.png",
            logo: "img/luxuriousBreezeLogo.png"
        }
    },
    props: {
    isOpenAside: Boolean
    },
    methods: {
        closeAside() {
            this.$emit("toggle-aside", false);
        }
    }
}
</script>
<style>
#Add-Aside{
    height: 100vh;
    width: 100%;
    z-index: 10;
    position: fixed;
    backdrop-filter: brightness(0.5);
    display: flex;
    justify-content: end;
    align-items: center;
}
#Aside {
    max-width: 15rem;
    background-color: #fff;
    box-shadow: 20px 20px 50px rgb(0 0 0 / 50%);
    padding: 25px;
    border-radius: 20px;
    border: none;
    display: flex;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    animation: RightAnimation .3s ease-in-out .5s both;
}
#aside-options {
    padding: 10px 10px;
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    border-bottom: 5px solid var(--blue-color);
    border-radius: 5px;
    padding-bottom: 2px;
}
#Aside a {
    display: contents;
}
.aside-options {
    margin-top: 10px;
    padding: 10px 10px;
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 0px 3px rgb(0 0 0 / 50%);
    font-size: 1.1rem;
    justify-content: center;
    border-left: 5px solid var(--blue-color);
    cursor: pointer;
}
.aside-options:hover {
    background-color: #f3f3f3;
}
#header-aside {
    display: flex;
    width: 100%;
    justify-content: space-between;
}
#header-aside button{
    font-size: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
}
#header-aside button i{
    color: var(--blue-color);
}
#logo-aside {
    height: 50px;
    display: flex;
    align-items: center;
}
#logo-aside img{
    height: 100%;
}
#logo-aside h5{
    margin: 0;
    color: var(--blue-color);
}
#profile{
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
#profile img{
    width: 100%;
    border-radius: 100px;
    height: 60%;
}
.aside-text{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0px 5px;
    width: 80%;
}
.aside-text h4{
    margin: 0;
    color: var(--blue-color);
    font-weight: bold;
    padding: none;
}
.aside-text h3{
    margin: 0;
}
.aside-text p{
    margin: 0;
    font-size: 1rem;
}
h4
.aside-text h5{
    margin: 0;
}
#logout:hover {
    background: #0293c4 !important;
}
</style>