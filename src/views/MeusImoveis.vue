<template>
    <div>
        <AppAside :is-open-aside="asideIsOpen" @toggle-aside="toggleAside"/>
        <AppHeader @toggle-Aside="toggleAside" />
        <!-- Apresention -->

        <div id="apresention">
            <h1 style="font-size: 2em;">Bem-vindo à Sua Página de Imóveis <i class="bi bi-buildings-fill" style="color: var(--blue-color);"></i></h1>
            <p style="font-size: 1em;">Confira seus imóveis divulgados.</p>
        </div>
        <br>

        <!-- Meus Imoveis -->
        <div style="width: 90% !important; margin: 0 auto;">
            <h3 style="text-align: center;">Imoveis Divulgados</h3>
            <table>
                <thead>
                    <td>Imovel</td>
                    <td>Avaliação</td>
                    <td>Vendedor</td>
                    <td>Status</td>
                    <td>Opções</td>
                </thead>

                <tbody>
                    <tr>
                        <td>
                        <div class="represente-imovel">
                            <div class="profile">
                                <img src="https://images.vexels.com/media/users/3/142690/isolated/preview/42d5c05736bc309247375267ec45aa22-logotipo-da-lupa-de-imoveis.png" alt="" width="50px" height="50px">
                            </div>
                            <div class="table-text">
                                <h4>Nome do Imovel</h4>
                                <h5><i class="bi bi-geo-alt-fill"></i> Piripiri-PI</h5>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="star-rating">
                            <input type="radio" name="rating" id="star1" value="1" disabled>
                            <label for="star1"></label>
                            <input type="radio" name="rating" id="star2" value="2" disabled>
                            <label for="star2"></label>
                            <input type="radio" name="rating" id="star3" value="3.5" disabled>
                            <label for="star3"></label>
                            <input type="radio" name="rating" id="star4" value="4" disabled>
                            <label for="star4"></label>
                            <input type="radio" name="rating" id="star4" value="5" disabled>
                            <label for="star1"></label>
                        </div>  
                    </td>
                    <td>
                        <div class="vendedor">
                            <i class="bi bi-person-circle"></i> <h5>Liedson Barros</h5>
                        </div>
                    </td>
                    <td>
                        <h5 class="status comprado">Comprado</h5>
                    </td>
                    <td>
                        <div style="display: flex; gap: 10px; justify-content: center;">
                            <button class="edit"><i class="bi bi-pencil-square"></i> Editar</button>
                            <button class="remove"><i class="bi bi-trash"></i> Remover</button>
                        </div>
                    </td>
                    </tr>
                </tbody>

            </table>

            <h3 style="text-align: center;">Imoveis Vistos</h3>
            <table>
                <thead>
                    <td>Imovel</td>
                    <td>Avaliação</td>
                    <td>Vendedor</td>
                    <td>Status</td>
                    <td>Opções</td>
                </thead>

                <tbody>
                    <tr>
                        <td>
                        <div class="represente-imovel">
                            <div class="profile">
                                <img src="https://images.vexels.com/media/users/3/142690/isolated/preview/42d5c05736bc309247375267ec45aa22-logotipo-da-lupa-de-imoveis.png" alt="" width="50px" height="50px">
                            </div>
                            <div class="table-text">
                                <h4>Nome do Imovel</h4>
                                <h5><i class="bi bi-geo-alt-fill"></i> Piripiri-PI</h5>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="star-rating">
                            <input type="radio" name="rating" id="star1" value="1" disabled>
                            <label for="star1"></label>
                            <input type="radio" name="rating" id="star2" value="2" disabled>
                            <label for="star2"></label>
                            <input type="radio" name="rating" id="star3" value="3.5" disabled>
                            <label for="star3"></label>
                            <input type="radio" name="rating" id="star4" value="4" disabled>
                            <label for="star4"></label>
                            <input type="radio" name="rating" id="star4" value="5" disabled>
                            <label for="star1"></label>
                        </div>  
                    </td>
                    <td>
                        <div class="vendedor">
                            <i class="bi bi-person-circle"></i> <h5>Mário do arroz</h5>
                        </div>
                    </td>
                    <td>
                        <h5 class="status negociacao">Negociação</h5>
                    </td>
                    <td>
                        <div style="display: flex; gap: 10px; justify-content: center;">
                            <button class="edit"><i class="fas fa-eye"></i> Visualizar</button>
                            <button class="remove"><i class="bi bi-trash"></i> Remover</button>
                        </div>
                    </td>
                    </tr>
                    <tr>
                        <td>
                        <div class="represente-imovel">
                            <div class="profile">
                                <img src="https://images.vexels.com/media/users/3/142690/isolated/preview/42d5c05736bc309247375267ec45aa22-logotipo-da-lupa-de-imoveis.png" alt="" width="50px" height="50px">
                            </div>
                            <div class="table-text">
                                <h4>Nome do Imovel</h4>
                                <h5><i class="bi bi-geo-alt-fill"></i> Piripiri-PI</h5>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="star-rating">
                            <input type="radio" name="rating" id="star1" value="1" disabled>
                            <label for="star1"></label>
                            <input type="radio" name="rating" id="star2" value="2" disabled>
                            <label for="star2"></label>
                            <input type="radio" name="rating" id="star3" value="3.5" disabled>
                            <label for="star3"></label>
                            <input type="radio" name="rating" id="star4" value="4" disabled>
                            <label for="star4"></label>
                            <input type="radio" name="rating" id="star4" value="5" disabled>
                            <label for="star1"></label>
                        </div>  
                    </td>
                    <td>
                        <div class="vendedor">
                            <i class="bi bi-person-circle"></i> <h5>Felipe do Grau</h5>
                        </div>
                    </td>
                    <td>
                        <h5 class="status venda">À Venda</h5>
                    </td>
                    <td>
                        <div style="display: flex; gap: 10px; justify-content: center;">
                            <button class="edit"><i class="fas fa-eye"></i> Visualizar</button>
                            <button class="remove"><i class="bi bi-trash"></i> Remover</button>
                        </div>
                    </td>
                    </tr>
                </tbody>

            </table>
        </div>
        <AppFooter />
    </div>
</template>
<script>
import AppHeader from '../components/HomeComponets/AppHeader.vue'
import AppAside from '../components/HomeComponets/AppAside.vue';
import AppFooter from '../components/HomeComponets/AppFooter.vue';
export default {
    name: "AppMeusimoveis",
    components: {
        AppHeader,
        AppAside,
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
}
</script>
<style>
/* MAIN */
#apresention {
    text-align: center;
    width: 50%;
    margin: 2rem auto;
    border-bottom: 2px solid var(--blue-color);
}
table {
    background: var(--blue-color);
    width: 95%;
    margin: 0 auto;
    user-select: none;
    margin: 2rem auto;
    border-collapse: collapse;
}

thead tr {
    width: 100%;
    height: 50px;
    text-align: center;
    color: var(--letter-color);
}

tbody {
    max-height: 353px !important;
    overflow-y: auto !important;
}

tbody tr td {
    text-align: center;
    height: 100px;
    background-color: var(--site-color);
    color: var(--Dark-gray);
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}

tbody tr td button {
    font-size: 0.9rem;
    padding: 10px 15px;
    border: none;
    text-decoration: none;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    color: var(--letter-color);
}

.represente-imovel {
    display: flex;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
}

.profile {
    display: flex;
    align-items: center;
    justify-content: center;
}

.profile img {
    border-radius: 5px;
}

.table-text {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0px 10px;
    max-width: 70%;
}

.table-text h4 {
    margin: 0;
    color: var(--blue-color);
    min-width: 200px;
    padding-block: 5px;
}

.table-text h5 {
    margin: 0;
}
.vendedor {
    display: flex;
    color: var(--blue-color);
    justify-content: center;
    align-items: center;
    gap: 5px;
}
.status {
    width: 100px;
    color: var(--letter-color);
    background-color: gray;
    border: none;
    margin: 0 auto;
    padding: 5px 0px;
    text-decoration: none;
    border-radius: 100px;
}
.edit {
    background-color: #007BFF !important;
}
.edit:hover {
    background-color: #216bb9 !important;
}
.remove {
    background-color:  #FF3B30;
}
.remove:hover {
    background-color: #e43026;
}
/* Stars */
.star-rating {
    display: inline-block;
    font-size: 30px;
}

.star-rating input[type="radio"] {
    display: none;
}

.star-rating label {
    cursor: pointer;
    color: #ccc;
}

.star-rating label:before {
    content: '\2605'; /* Estrela vazia */
}
/* COMANDOS */
.comprado {
    background-color: #eb0808;
}
.negociacao {
    background-color: #e7e70b;
}
.venda {
    background-color: #06d606;
}
/* CSS para tornar a tag <tr> responsiva */
    tr {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

/* Estilos para células individuais */
td {
    flex: 1;
    padding: 10px;
    /* Outros estilos */
}

/* Media Query para ajustar o layout em telas menores */
@media (max-width: 768px) {
    tr {
        flex-direction: column; /* Empilhe as células verticalmente */
        border-bottom: 2px solid var(--blue-color);
    }

    td {
        flex: auto; /* Preencha a largura disponível */
        width: 100%; /* 100% de largura para ocupar a linha inteira */
        height: 50px !important;
    }
}
@media (max-width: 740px) {
    #apresention {
        width: 70%;
    }
}
</style>