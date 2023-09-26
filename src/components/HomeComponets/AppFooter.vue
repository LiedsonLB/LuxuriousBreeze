<template>
    <!-- Footer -->

    <footer>
        <div id="container-footer">
            <p><a href="#">Termos de Uso</a> | <a href="#">Política de Privacidade</a> | <a href="#">Central de Ajuda</a></p>
            <p>Siga-nos nas redes sociais:</p>
            <div id="social-midia">
                <a href="https://www.facebook.com/liedson.barros.750" class="social-midia"><i class="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/liedson.lb/" class="social-midia"><i class="bi bi-instagram"></i></a>
                <a href="https://api.whatsapp.com/send?phone=558698635571" class="social-midia"><i class="bi bi-whatsapp"></i></a>
            </div>
            <p>Entre em contato: <a href="mailto:liedson.b9@gmail.com">liedson.b9@gmail.com</a></p>
            <hr id="line">
            <div id="autoria">
                <p>&copy; 2023 LuxuriousBreeze. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
</template>
<script>
    export default{
    name: "AppFooter",
    }
</script>
<style>
footer{
    height: 5%;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--blue-color);
    color: var(--letter-color);
    padding: 1rem 0px;
    margin: 0;
    flex-direction: column;
}
#container-footer{
    width: 80%;
}
#container-footer p{
    margin: 0;
    padding-top: 1rem;
    text-align: center;
}
#autoria{
    text-align: center;
}
#social-midia {
    padding-top: 1rem;
    display: flex;
    gap: 3rem;
    align-items: center;
    justify-content: center;
}
#container-footer a {
    font-size: 1rem;
    color: var(--letter-color);
}
.social-midia {
    font-size: 2rem !important;
    color: var(--letter-color) !important;
}
</style>
