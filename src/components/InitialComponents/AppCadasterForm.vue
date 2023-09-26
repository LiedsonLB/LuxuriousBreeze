<template>
    <div id="center-login-form">
      <div id="login-form" class="form-container">
        <h2 style="text-align: center; font-weight: bold; color: #214969;">Logar na conta</h2>
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
  
        <a href="" style="text-align: end; margin-bottom: 5px;">Esqueci a senha</a>
        <RouterLink to="/home"><button class="logsbtn" id="loginBtn">Logar</button></RouterLink>
        <p style="text-align: center; font-weight: 900; color: var(--blue-color); margin: 0; padding: 15px 0px;">Logue também com</p>
        <div id="social-midia-login">
          <a href="#" class="social-midia-login"><i class="bi bi-google"></i></a>
          <a href="#" class="social-midia-login"><i class="bi bi-facebook"></i></a>
          <a href="#" class="social-midia-login"><i class="bi bi-apple"></i></a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AppCadasterForm",
    data() {
      return {
        passwordInput: "", // Inicialize a propriedade passwordInput
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
          passwordInput.type = "password"; // Alterna de volta para senha oculta
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
}
#login-form, #cadastro-form {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 100%;
    justify-content: center;
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
#social-midia-login {
    display: flex;
    gap: 3rem;
    align-items: center;
    justify-content: center;
    padding: none !important;
}
#social-midia-login a i {
    padding: 8px 12px;
    border-radius: 50%;
    background-color: var(--blue-color);
    color: #fff;
}
#social-midia-login a i:hover {
    background-color: #0293c4;
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
        width: 100%;
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
}
</style>