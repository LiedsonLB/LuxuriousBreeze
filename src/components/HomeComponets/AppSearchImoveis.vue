<template>
    <!-- Search Imoveis -->
    <h2 style="text-align: center;">Confira os imoveis disponíveis</h2>

<div id="container-options-search">
        <div id="search">
            <input type="search" name="search" id="search-input">
            <button id="search-btn">
                <i class="bi bi-search"></i>
            </button>
        </div>
        <div>
            <button id="filter" @click="openModal">
                <i class="bi bi-sliders"></i>
            </button>
        </div>
</div>
</template>
<script>
export default {
  name: "AppSearchImovel",
  methods: {
    openModal() {
      this.$emit("toggle-modal", true); // Emitindo o evento com o valor "true"
    }
  }
};
</script>
<style>
#container-options-search {
    display: flex;
    flex-direction: row;
    width: 95%;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem 0px;
}
#search {
    display: flex;
    width: 50%;
    justify-content: center;
    gap: 2px;
    position: relative;
}
#search-input{
    font-size: 0.9rem;
    padding: 10px 40px;
    border: 1px solid var(--blue-color);
    text-decoration: none;
    border-radius: 100px;
    font-family: 'Montserrat', sans-serif;
    color: var(--blue-color);
    width: 100%;
    outline: none;
    font-weight: 900;
}
#search-btn {
    font-size: 1.5rem;
    padding: 8px 15px;
    border: none;
    text-decoration: none;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    background: transparent;
    color: var(--blue-color);
    position: absolute;
    right: 0px;
    top: -3px;
}
#filter {
    font-size: 1.2rem;
    padding: 7px 10px;
    border: none;
    text-decoration: none;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    background: var(--blue-color);
}
#filter i {
    color: var(--letter-color);
}
#filter:hover {
    background: #0293c4;
}
/* Oculta o botão "X" nos campos de pesquisa */
input[type="search"]::-webkit-search-cancel-button {
  display: none;
}

/* Oculta o botão "X" nos campos de pesquisa em outros navegadores */
input[type="search"]::-ms-clear {
  display: none;
}

</style>