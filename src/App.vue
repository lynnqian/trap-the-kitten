<template>    
  <div id="app">
    <div v-for="n in 9" :key="n">
      <div class="btn-left">
        <button v-for="n in 20" :key="n" type="button" class="btn btn-secondary btn-circle"></button>
      </div>
      <div class="btn-right">
        <button v-for="n in 20" :key="n" type="button" class="btn btn-secondary btn-circle"></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


require('./styles.css');

export default class App extends Vue {}
</script>
