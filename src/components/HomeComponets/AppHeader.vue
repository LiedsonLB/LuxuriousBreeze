<template>
    <!-- header -->

    <header>
        <div style="display: flex; flex-direction: row; align-items: center;">
            <img :src="logo" alt="" id="logo">
            <h5 style="color: var(--blue-color);">LuxuriousBreeze</h5>
        </div>
        <div id="header-btns">
            <button id="login-btn" @click="openAside"><i class="fa-solid fa-list-ul"></i></button>
        </div>
    </header>
</template>
<script>
export default {
    name: "AppHeader",
    data(){
        return {
            logo: "img/luxuriousBreezeLogo.png"
        }
    },
    methods: {
    openAside() {
      this.$emit("toggle-Aside", true); // Emitindo o evento com o valor "true"
    }
  }
}
</script>
<style>
header {
    padding: 1rem 0px;
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
    animation: DownAnimation 1s;
}
#header-btns{
    display: flex;
    flex-direction: row;
    gap: 10px;
}
header img {
    width: 40px;
    filter: hue-rotate(40deg);
}
nav{
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 5px;
}
nav li{
    font-size: 0.9rem;
    padding: 10px 10px;
    border: 1.5px solid var(--blue-color);
    color: var(--blue-color);
    text-decoration: none;
    border-radius: 100px;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    list-style: none;
    cursor: pointer;
}
nav li:hover{
    background-color: #f1efef;
}
#login-btn{
    font-size: 2rem;
    color: var(--blue-color);
    text-decoration: none;
    cursor: pointer;
    background: transparent;
    border: none;
}
#login-btn:hover{
    color: #0293c4;
}
</style>