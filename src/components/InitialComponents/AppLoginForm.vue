<template>
    <div id="center-login-form">
      <div id="login-form" class="form-container">
        <h2 style="text-align: center; font-weight: bold; color: #214969; margin: 0.5rem 0px;">Logar na conta</h2>
        <p style="margin: 0; text-align: center; font-weight: 100;">Olá, seja bem vindo de volta</p>
        <label for="">Email</label>
  
        <div class="input-group">
          <input type="text" class="form-control" placeholder="exemple@gmail.com">
          <span class="input-group-text">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
  
        <label for="">Senha</label>
  
        <div class="password-input-container">
            <input v-model="passwordInput" ref="passwordInput" type="password" name="" id="password" placeholder="••••••••••••••">
            <i @click="viewPassword" ref="viewIcon" class="bi bi-eye-fill" id="password-toggle"></i>
            <span class="input-group-text">
                <i class="fas fa-lock"></i>
            </span>
        </div>
  
        <div style="width: 100%; display: flex; flex-direction: row; justify-content: end; align-items: center;">
            <a href="#" style="text-align: end; margin-bottom: 5px;">Esqueci a senha</a>
        </div>
        <RouterLink to="/home"><button class="logsbtn" id="loginBtn">Logar</button></RouterLink>
        <div id="division">
            <p>ou</p>
            <hr>
        </div>
        <div id="social-midia-login">
          <a href="#" class="social-midia-login"><i class="bi bi-google"></i> Logue com o google</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AppLoginForm",
    data() {
      return {
        passwordInput: "",
      };
    },
    methods: {
      viewPassword() {
        const passwordInput = this.$refs.passwordInput;
        const viewEyeIcon = this.$refs.viewIcon;
        if (passwordInput.type === "password") {
          passwordInput.type = "text"; // Alterna para texto visível
          viewEyeIcon.classList.remove('bi-eye-fill');
          viewEyeIcon.classList.add('bi-eye-slash-fill');
        } else {
          passwordInput.type = "password";
          viewEyeIcon.classList.remove('bi-eye-slash-fill');
          viewEyeIcon.classList.add('bi-eye-fill');
        }
      },
    },
  };
  </script>
<style scoped>
#center-login-form {
    width: 100%;
    height: 70%;
}
#login-form, #cadastro-form {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 100%;
    justify-content: space-around;
    margin: 0 auto;
}
#option-loginbtn {
    display: flex;
    gap: 10px;
    padding: 5px;
    border-radius: 5px;
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
#login-form a {
    font-weight: 500;
    color: var(--blue-color);
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
#division {
    position: relative;
}
#division p{
    text-align: center;
    font-weight: 900;
    color: var(--blue-color);
    padding: 10px 0px;
    z-index: 10;
    position: relative;
    background: #fff;
    width: 50px;
    margin: 0 auto;
}
#division hr {
    position: absolute;
    height: 1px;
    width: 100%;
    background: var(--blue-color);
    top: 11px;
}
#social-midia-login {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
}
#social-midia-login a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    outline: none;
    font-weight: 900;
    padding: 10px 15px;
    font-size: 0.9rem !important;
    text-align: center;
    border: 1.5px solid var(--blue-color);
    text-decoration: none;
    border-radius: 5px;
    font-family: Montserrat,sans-serif;
    cursor: pointer;
    width: 100%;
    margin: 0 auto;
}
#social-midia-login a i {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
#social-midia-login p {
    margin: 0;
}
#container-footer a {
    font-size: 1rem;
    color: var(--letter-color);
}
.social-midia-login {
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
    background-color: transparent;
    border: none;
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
    top: 42%;
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
}
</style>