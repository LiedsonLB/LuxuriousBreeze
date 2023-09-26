<template>
    <!-- MODALS -->
    <div id="Modal-Add-imovel" v-if="isOpenModal">
            <div id="container-Add-imovel">
                <div id="header-modal">
                    <h3 class="modal-title">Adicionar Novo Imóvel</h3>
                    <button type="button" id="close-btn" data-dismiss="modal" aria-label="Fechar" @click="closeModal()">
                        <i class="bi bi-x-lg" style="font-size: 1rem; color: #fff;"></i>
                    </button>
                </div>
                <hr>
        <label for="type">Tipo de Imóvel:</label>
    <select id="type">
      <option value="casa">Casa</option>
      <option value="apartamento">Apartamento</option>
      <option value="terreno">Terreno</option>
    </select>
    <label for="city">Cidade:</label>
    <input type="text" id="city">
    <label for="deal-type">Tipo de Negócio:</label>
    <select id="deal-type">
      <option value="venda">Venda</option>
      <option value="aluguel">Aluguel</option>
    </select>
    <h4 @click="moreOptions()">{{ textOption }}</h4>
    <div id="advanced-options" :class="{ hide : !isMoreOptions}">
        <div class="range-price">
          <label for="price-range">Preço:</label>
          <input type="range" id="price-range" min="0" max="1000000" step="1000" v-model="priceRangeValue" @input="updatePriceRangeValue">
          <output for="price-range">R$ {{ displayPriceRangeValue }}</output>
        </div>
        <div class="range-price">
            <label for="area-range">Área:</label>
            <input type="range" id="area-range" min="0" max="1000" step="10" v-model="areaRangeValue">
            <output for="area-range">{{ areaRangeValue }} m²</output>
        </div>
        <!--<label for="bedrooms">Número de Quartos:</label>
        <div class="numeric-input">
            <button class="numeric-button" data-action="decrease">-</button>
            <input type="number" class="numeric-field" value="0" disabled="" max="10">
            <button class="numeric-button" data-action="increase">+</button>
        </div>-->
    </div>
        <button type="submit" id="modal-addImovel-btn">Selecionar</button>
    </div>
</div>
</template>
<script>

export default {
    name : "AppModal",
    props: {
    isOpenModal: Boolean
    },
  data() {
    return {
      isMoreOptions: false,
      priceRangeValue: 0,
      areaRangeValue: 0,
      textOption: "mais opções"
    };
  },
  computed: {
    displayPriceRangeValue() {
      if (this.priceRangeValue == "1000000") {
        return "1M+";
      }
      return this.priceRangeValue;
    },
  },
  methods: {
    closeModal() {
      this.$emit("toggle-modal", false);
    },
    moreOptions() {
      this.textOption = this.isMoreOptions ? "mais opções" : "menos opções";
      this.isMoreOptions = !this.isMoreOptions;
    },
    updatePriceRangeValue(event) {
      this.priceRangeValue = event.target.value;
    },
    updateAreaRangeValue(event) {
      this.areaRangeValue = event.target.value;
    }
  }
};
//ref="inputNome" @focus="focusInput($event.target.nextElementSibling)" @blur="blurInput($event.target, $event.target.nextElementSibling)
</script>
<style>
#header-modal {
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
    gap: 1rem;
}
#close-btn {
    font-size: 0.9rem;
    padding: 8px 15px;
    border: none;
    text-decoration: none;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    background-color: var(--blue-color);
    color: var(--letter-color);
}
#close-btn:hover {
    background-color: #0293c4;
    border-color: #0293c4;
}
.bi.bi-x-circle {
    font-size: 2em;
    color: var(--blue-color);
}
#Modal-Add-imovel{
    height: 100vh;
    width: 100%;
    z-index: 10;
    position: fixed;
    backdrop-filter: brightness(0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
#Modal-Add-imovel h3 {
    margin: 1rem 0px;
}
#Modal-Add-imovel hr{
    width: 90%;
    background-color: var(--blue-color);
    height: 2px;
    border-radius: 10px;
    border: none;
    margin: 0;
    margin-bottom: 1rem;
}
#Modal-Add-imovel h4{
    text-decoration: underline;
    cursor: pointer;
    margin: 0.3rem 0px;
}
#container-Add-imovel {
    max-width: 60%;
    background-color: #fff;
    box-shadow: 20px 20px 50px rgb(0 0 0 / 50%);
    padding: 20px;
    border-radius: 20px;
    border: none;
    display: flex;
    height: auto;
    align-items: center;
    max-width: 600px;
    margin: 0px 20px;
    animation: DownAnimation .5s;
    justify-content: center;
    flex-direction: column;
}
#container-Add-imovel input[type=text]{
    width: 85%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-weight: 900;
    text-align: center;
    outline: none;
    font-family: var(--Font-letter);
    font-size: 1rem;
}
#advanced-options {
    display: flex;
    flex-direction: column;
    align-items: center;
}
/* Estilo para os controles deslizantes de faixa */
input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  margin: 8px 0;
  height: 10px;
  background: transparent;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background-color: var(--blue-color);
  border: 2px solid var(--blue-color);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  margin-top: -6px; /* Ajuste vertical para alinhar com a faixa */
}

input[type="range"]::-webkit-slider-thumb:hover {
  background-color: #0293c4;
  border-color: #0293c4;
}

/* Estilizando a faixa do controle deslizante */
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 4px;
  background-color: var(--blue-color);
  border-radius: 2px;
}

/* Estilizando a faixa do controle deslizante quando estiver preenchido */
input[type="range"]::-webkit-slider-runnable-track::before {
  content: "";
  position: absolute;
  height: 4px;
  width: 100%;
  background-color: #0293c4;
  border-radius: 2px;
}
#container-Add-imovel input[type=number]  {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-weight: 900;
    text-align: center;
    outline: none;
    font-family: var(--Font-letter);
    font-size: 1rem;
}
#container-Add-imovel select {
    width: 90%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-family: var(--Font-letter);
    font-weight: 900;
    text-align: center;
    font-size: 1rem;
}
#container-Add-imovel select option {
    width: 90%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-family: var(--Font-letter);
    font-weight: 900;
    text-align: center;
    font-size: 1rem;
    padding: 10px 15px;
  }

  /* Advanced Options */
  #advanced-options {
    width: 90%;
  }
  #container-price {
    display: flex;
    align-items: center;
  }
  .range-price {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.2rem 0px;
  }
  .range-price input{
    width: 90%;
}
#container-area {
    display: flex;
    align-items: center;
  }
  .range-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .range-area input{
    width: 50%;
}
.numeric-input {
    display: flex;
    align-items: center;
  }
  
  .numeric-field {
    width: 60px;
    text-align: center;
  }
  #container-Add-imovel input[type=number]::-webkit-inner-spin-button, #container-Add-imovel input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
    margin: 0;
  }
  
  .numeric-button {
    font-size: 1rem;
    padding: 8px 15px;
    border: none;
    text-decoration: none;
    border-radius: 5px;
    font-family: 'bootstrap-icons';
    cursor: pointer;
    background-color: var(--blue-color);
    color: var(--letter-color);
    margin: 0px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
form {
    background-color: #fff;
    padding: 20px;
    text-align: center;
}
.floating-label {
    position: relative;
    margin-bottom: 10px;
}

.floating-label input {
    outline: none;
    font-size: 1.1rem;
    padding: 10px 15px;
    border: 1.5px solid var(--blue-color);
    text-decoration: none;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
}
#inputDescricao {
    outline: none;
    font-size: 1.1rem;
    padding: 10px 15px;
    border: 1.5px solid var(--blue-color);
    text-decoration: none;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    height: 100px;
    width: 86%;
}
.floating-label label {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 0px 5px;
    font-size: 16px;
    color: #333;
    background-color: #fff;
    transition: top 0.2s, font-size 0.2s;
    pointer-events: none;
}
#inputDescricao:focus {
    border-color: #0293c4;
}
#inputDescricao:focus + label {
    top: -10px;
    font-size: 14px;
    color: #0293c4;
}
.floating-label input:focus {
    border-color: #0293c4;
}
.floating-label input:focus + label {
    top: -10px;
    font-size: 14px;
    color: #0293c4;
}
#modal-addImovel-btn {
    font-size: 1.1rem;
    padding: 10px 15px;
    border: 1.5px solid var(--blue-color);
    text-decoration: none;
    border-radius: 100px;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    background-color: var(--blue-color);
    color: var(--letter-color);
    margin-top: 10px;
}
#modal-addImovel-btn:hover{
    background-color: #0293c4;
    border-color: #0293c4;
}
</style>