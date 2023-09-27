<template>
    <div id="screen-login" v-if="mostrarDiv">
      <appApresention />
    </div>
    <div id="screen-page-login">
      <!-- Escolha de login -->
  
      <div id="container-apresention-login">
        <div id="container-left">
            <img :src="logo" alt="">
        </div>

        <div id="container-right">
          <!-- CAMPO CADASTRO -->
          <div id="option-loginbtn">
            <button @click="SelectionBtn('login')" :class="{ 'selecionado': loginSelection }" id="option-log">Login</button>
            <button @click="SelectionBtn('cadastro')" :class="{ 'selecionado': cadasterSelection }" id="option-cadaster">Cadastro</button>
          </div>
          <AppLoginForm ref="loginForm" />
        </div>
      </div>
      
    </div>
  </template>
  
  <script>
  import AppApresention from '../components/InitialComponents/AppApresention.vue';
  import AppLoginForm from '../components/InitialComponents/AppLoginForm.vue';
  
  export default {
    name: "PageInitial",
    components: {
      AppApresention,
      AppLoginForm
    },
    data() {
      return {
        logo: "img/luxuriousBreezeimagemia1.jpg",
        mostrarDiv: true,
        cadasterSelection: false,
        loginSelection: true,
      };
    },
    mounted() {
      // Após um atraso de 3 segundos, ocultar a div
      setTimeout(() => {
        this.mostrarDiv = false;
      }, 5000);
    },
    methods: {
      SelectionBtn(option) {
        if (option === 'login') {
          this.loginSelection = true;
          this.cadasterSelection = false;
          //this.$refs.loginForm.selectLogin(); // Chame um método no componente filho se necessário
        } else if (option === 'cadastro') {
          this.loginSelection = false;
          this.cadasterSelection = true;
          //this.$refs.loginForm.selectCadastro(); // Chame um método no componente filho se necessário
        }
      },
    },
  };
</script>  
<style scoped>
#screen-login {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(#dae5ed, #589dd3, #214969);
    display: flex;
    align-items: center;
    justify-content: center;
}
/* Escolha Login */
#screen-page-login {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: var(--Font-letter);
}
#header-login{
    padding: 0px 4rem;
    height: 8%;
    background-color: var(--blue-color);
    color: var(--letter-color);
    margin: 0 !important;
}
#footer-login{
    padding: 0px 4rem;
    height: 8%;
    text-align: end;
    font-weight: bold;
    background-color: var(--blue-color);
    color: var(--letter-color);
}
#container-apresention-login {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
}
#container-left, #container-right {
    width: 50%;
}
#container-left {
    overflow: hidden;
    height: 100%;
}
#container-left img{
    object-fit: cover;
    width: 100%;
}
.colorido{
    color: var(--blue-color);
    font-weight: 900 !important;
}
#container-right {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
#text {
    width: 80%;
    text-align: start;
    margin: 0 auto;
}
#text h1{
    margin: 0;
    margin-bottom: 0.5rem !important;
    font-weight: 100;
}
#text p {
    margin: 0;
    font-weight: 600;
}
#login-form h2,#cadastro-form h2 {
    margin: 0;
}
#login-form, #cadastro-form {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 100%;
    justify-content: center;
}
#option-loginbtn {
    display: flex;
    gap: 10px;
    padding: 5px;
    border-radius: 5px;
    width: 70%;
}
#option-loginbtn button{
    font-weight: bold;
    padding: 10px 0px;
    text-align: center;
    border: none;
    text-decoration: none;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    width: 50%;
    margin: 0 auto;
    background: #e3e3e3;
    color: gray;
}
#login-form input, #cadastro-form input{
    outline: none;
    font-weight: bold;
    padding: 15px 0px 15px 50px;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    border: none;
    width: 88%;
    margin: 0 auto;
    color: var(--blue-color);
    margin-bottom: 10px;
    background: #e3e3e3;
}
#login-form label, #cadastro-form label {
    font-weight: bolder;
}
.logsbtn {
    font-size: 0.9rem;
    font-weight: bold;
    padding: 15px 0px;
    text-align: center;
    border: 1.5px solid var(--blue-color);
    text-decoration: none;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    width: 100%;
    margin: 0 auto;
}
#loginBtn {
    background-color: #214969;
    color: #fff;
}
#loginBtn:hover {
    background-color: #0293c4;
    border-color: #0293c4;
}
#CadasterBtn {
    background-color: transparent;
    color: var(--blue-color);
}
#CadasterBtn:hover {
    background-color: #f3f3f3;
}
#social-midia {
    margin-top: 1rem;
    display: flex;
    gap: 3rem;
    align-items: center;
    justify-content: center;
}
#social-midia a i {
    padding: 8px 12px;
    border-radius: 50%;
    background-color: var(--blue-color);
    color: #fff;
}
.social-midia {
    font-size: 1.5rem !important;
    color: var(--blue-color) !important;
}
.selecionado {
    background: var(--blue-color) !important;
    color: var(--letter-color) !important;
}
/* Estilos para o campo de entrada de email */
.input-group {
  position: relative;
}

/* Estilos para o ícone do envelope */
.input-group-text {
    background-color: #e3e3e3;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 20%;
    left: 20px;
    font-size: 1.2rem;
    color: var(--blue-color);
}

/* Estilos para o campo de entrada de senha */
.password-input-container {
  position: relative;
}

/* Estilos para o ícone do olho (senha) */
#password-toggle {
    position: absolute;
    top: 40%;
    right: 20px;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 1.5em;
    color: var(--blue-color);
}
.campo-cadastro {
    display: none;
}
@media (max-width: 740px) {
    #container-left {
        display: none !important;
    }
    #container-right {
      height: 90%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: auto;
    }
    #login-form, #cadastro-form {
        width: 100%;
    }
    #footer-login{
        padding: 0 !important;
        font-size: 14px;
        text-align: center;
    }
    #container-apresention-login {
        width: 85% !important;
    }
    #container-right h1 {
        font-size: 1.3rem;
    }
    #text p {
        font-size: 0.9rem !important;
    }
    .logsbtn {
        width: 100%;
    }
    #option-loginbtn {
    width: 100%;
    }
}
</style>