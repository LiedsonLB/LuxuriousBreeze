<template>
    <div id="screen">
        <AppAside :is-open-aside="asideIsOpen" @toggle-aside="toggleAside"/>
        <AppHeader @toggle-Aside="toggleAside" />
        <div id="apresention" style="height: 20rem;">
            <h1 style="font-size: 2em;">Publique seu imovel gratuitamente</h1>
            <p style="font-size: 1em; width: 80%; margin: 0 auto;">Preencha corretamente as informações sobre seu imovel para uma futura venda</p>
        </div>
        <AppFooter />
    </div>
</template>
<script>
import AppHeader from '../components/HomeComponets/AppHeader.vue'
import AppAside from '../components/HomeComponets/AppAside.vue';
import AppFooter from '../components/HomeComponets/AppFooter.vue';
export default {
    name: "DivulgarProduto",
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

