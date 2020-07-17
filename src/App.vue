<template>    
  <div id="app">
    <div v-for="i in 9" :key="i">
      <div class="btn-left">
        <button v-for="j in 20" :key="j" type="button" class="btn btn-secondary btn-circle" :style="testStyle" :id="'btn' + (i-1)*2 + '-' + j">
        </button>
      </div>
      <div class="btn-right">
        <button v-for="j in 20" :key="j" type="button" class="btn btn-secondary btn-circle" :style="testStyle" :id="'btn' + ((i-1)*2+1) + '-' + j">
        </button>
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
