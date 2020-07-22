<template>    
  <div id="app">
    <div :style="getMainContainerStyle()">
      <img src="../img/kitten.png" alt="kitten" id="kitten-image">
      <div v-for="i in vertiN" :key="i">
        <div class="btn-left">
          <button v-for="j in horiN" :key="j" :style="getButtonStyle((i-1)*2, j-1)" :id="'btn' + (i-1)*2 + '-' + (j-1)"
                  type="button" class="btn btn-pink btn-circle" @click="clickOnBoard((i-1)*2, j-1), clicked()"></button>
        </div>
        <div class="btn-right">
          <button v-for="j in horiN" :key="j" :style="getButtonStyle((i-1)*2+1, j-1)" :id="'btn' + ((i-1)*2+1) + '-' + (j-1)"
                  type="button" class="btn btn-pink btn-circle" @click="clickOnBoard((i-1)*2+1, j-1), clicked()"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import {App} from './app'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

require('./styles.css');

export default App;
</script>
