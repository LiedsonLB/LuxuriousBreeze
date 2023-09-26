<template>
    <!-- Apresentação -->
    <div class="apresentacao">
            <div class="apresentacao-conteudo">
                <img id="logo" :src="logo" alt="Logo da empresa">
                <br><br>
                <h2 id="text-apresent">Bem-vindo ao nosso site!</h2>
            </div>
        </div>
</template>
<script>
export default {
    name: "AppApresention",
    data(){
        return {
            logo: "img/luxuriousBreezeLogo.png"
        }
    },
    mounted() {
    this.typeWriter(); // Chama a função typeWriter quando o componente é montado
    },
    methods: {
        typeWriter() {
            const titulo = document.getElementById("text-apresent");
            const logo = document.getElementById("logo");

            const textoArray = titulo.innerHTML.split("");
            titulo.innerHTML = "";
            textoArray.forEach((letra, i) => {
                setTimeout(() => {
                titulo.innerHTML += letra;
                if (i === textoArray.length - 1) {
                    titulo.style.transform = "scale(1.1)";
                    logo.style.boxShadow = "0 0 50px rgba(255, 255, 255, 0.8)";
                }
                }, 110 * i);
            });
        }
    }
}
</script>
<style>
/* Apresentação */
.apresentacao {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#589dd3, #214969); /* Fundo azul com transparência */
    z-index: 9999; /* Garante que a div de apresentação está na frente de outros elementos */
    opacity: 1; /* Inicialmente visível */
    animation: onda 1s linear infinite; /* Aplicar animação "onda" infinitamente */
}
@keyframes onda {
    0% {
        background-position: 0% 50%;
        background: linear-gradient(#589dd3, #214969); 
    }
    100% {
        background-position: 100% 50%;
        background: linear-gradient(#214969); 
    }
}
/* Estilos para o conteúdo da div de apresentação */
.apresentacao-conteudo {
    text-align: center;
    color: white;
}

/* Estilos para a logo (ajuste conforme necessário) */
.apresentacao-conteudo img {
    outline: 5px solid;
    outline-offset: 5px;
    width: 15rem;
    height: 15rem;
    background-color: var(--letter-color);
    border-radius: 50%;
    box-shadow: 0 10px 30px 0 rgba(0,0,0,0.1);
}
/* Oculta a div de apresentação quando a opacidade for 0 */
.apresentacao.oculto {
    opacity: 0;
    pointer-events: none; /* Impede interações com a div oculta */
}
#text-apresent {
    transition: 1s;
}
</style>