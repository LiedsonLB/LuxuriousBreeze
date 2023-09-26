<template>
    <div id="screen">
      <AppAside :is-open-aside="asideIsOpen" @toggle-aside="toggleAside" />
      <AppModal :is-open-modal="modalIsOpen" @toggle-modal="toggleModal" />
      <AppHeader @toggle-Aside="toggleAside" />
      <AppApresention />
      <AppInfoSite />
      <AppAskSite />
      <AppCoursel />
      <AppSearchImoveis @toggle-modal="toggleModal" />
      <AppImoveis />
      <AppFooter/>
    </div>
  </template>
  
  <script>
  import AppAside from '../components/HomeComponets/AppAside.vue';
  import AppModal from '../components/HomeComponets/AppModal.vue';
  import AppHeader from '../components/HomeComponets/AppHeader.vue';
  import AppApresention from '../components/HomeComponets/AppApresention.vue';
  import AppInfoSite from '../components/HomeComponets/AppInfoSite.vue';
  import AppAskSite from '../components/HomeComponets/AppAskSite.vue';
  import AppSearchImoveis from '../components/HomeComponets/AppSearchImoveis.vue';
  import AppCoursel from '../components/HomeComponets/AppCoursel.vue';
  import AppImoveis from '../components/HomeComponets/AppImoveis.vue';
  import AppFooter from '../components/HomeComponets/AppFooter.vue';
  export default {
    name : "AppHome",
    components: {
      AppAside,
      AppModal,
      AppHeader,
      AppApresention,
      AppInfoSite,
      AppAskSite,
      AppSearchImoveis,
      AppCoursel,
      AppImoveis,
      AppFooter
    },
    data() {
      return {
        modalIsOpen: false,
        asideIsOpen: false
      };
    },
    methods: {
      toggleModal(value) {
        this.modalIsOpen = value;
      },
      toggleAside(value) {
          this.asideIsOpen = value;
      }
    }
  };
  </script>
  
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
  
  :root {
      --Dark-gray: rgb(29, 29, 29);
      --blue-color: #214969;
      --letter-color: #fff;
      --site-color: #fff;
      --Font-letter: 'Montserrat', sans-serif;
  }
  html, body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
      color: var(--Dark-gray);
      overflow-x: hidden;
      background-color: var(--site-color);
      height: auto;
  }
  #screen {
      width: 100vw;
      height: auto;
      background-color: var(--site-color);
  }
  /* animações e comandos */
  .close {
      display: none !important;
  }
  .hide {
      display: none !important;
  }
  @keyframes DownAnimation {
      0% {
          -webkit-transform: translateY(-100px);
          -ms-transform: translateY(-100px);
          transform: translateY(-100px);
          opacity: 0;
      }
      100% {
          -webkit-transform: translateY(0);
          -ms-transform: translateY(0);
          transform: translateY(0);
          opacity: 1;
      }
  }
  @keyframes RightAnimation {
      0% {
          transform: translateX(300px);
          opacity: 0;
      }
      100% {
          opacity: 1;
      }
  }
  @keyframes LeftAnimation {
      0% {
          transform: translateX(-300px);
          opacity: 0;
      }
      100% {
          left: 0;
          opacity: 1;
      }
  }
  
  @media (max-width: 740px) {
      #header-modal {
      gap: 3rem;
      }
      nav {
          display: none;
      }
      #container-main-2-header{
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 10px;
          text-align: center;
      }
      main{
          width: 90%;
          height: 100%;
          margin: 0 auto;
          padding: 1rem 0;
      }
      #container-main{
          width: 100%;
          display: flex;
          flex-direction: column-reverse;
          margin: 0 auto;
          height: 100%;
          justify-content: center;
          align-items: center;
      }
      #container-text{
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
      }
      .colorido{
          color: var(--blue-color);
          text-wrap: nowrap;
      }
      #container-img {
          width: 70%;
          display: flex;
          margin: 0 auto;
          align-items: center;
          border-radius: 400px;
      }
      #container-img img{
            width: 60%;
        }
      #container-dados{
          width: 90%;
          margin: 0 auto;
          display: flex;
      }
      .card-asks{
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 5px;
          align-items: center;
      }
      #carrosel{
          min-width: 100%;
          flex-direction: column;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      #container-destaque {
        width: 100% !important;
        margin: 0 auto;
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
        gap: 5px;
        flex-wrap: wrap;
    }
    .element-card{
        text-decoration: none;
        position: relative;
        height: 20%;
        overflow: hidden; /* Para esconder a descrição até o hover */
        color: var(--Dark-gray);
        border-radius: 10px;
    }
    
    .background-card{
        position: relative;
        width: 200px;
        height: 300px;
        transition: .5s;
    }
    .background-card:hover{
        position: relative;
        transition: .5s;
    }
    .background-card img {
        height: 100%;
        width: 100%;
        background: #fff;
        object-fit: cover;
        filter: none;
    }
    .caption {
        margin-left: 0.5rem !important
    }
      #container-imoveis{
          gap: 10px;
      }
      #search {
          width: 80%;
      }
      #container-apresention-login {
        width: 85% !important;
    }
    #container-text-login h1 {
        font-size: 1.3rem;
    }
    #text p {
        font-size: 0.9rem !important;
    }
    .logsbtn {
        width: 100% !important;
    }
  }
  </style>