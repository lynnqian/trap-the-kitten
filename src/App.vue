<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light" id="nav" style="background-color:#ffdeec">
      <a class="navbar-brand mb-0 h1" id="dove-brand">Trap the Kitten! 🐱</a>
      <a href="#" class="nav-link text-secondary mr-auto" id="new-game-btn" v-b-modal.restart-modal>New Game 🕹️</a>
    </nav>

    <!-- Modal -->
    <b-modal id="win-modal" @ok="handleNewGame" ok-variant="ok" cancel-variant="cancel" header-class="modal-header-class">
      <template #modal-header>
        <h5>You Win!</h5>
      </template>
      <p class="my-4">Congratulations! Do you want to play again?</p>
    </b-modal>

    <b-modal id="lose-modal" @ok="handleNewGame" ok-variant="ok" cancel-variant="cancel" header-class="modal-header-class">
      <template #modal-header>
        <h5>You Lose!</h5>
      </template>
      <p class="my-4">Oops. Do you want to try again?</p>
    </b-modal>

    <b-modal id="restart-modal" @ok="handleNewGame" ok-variant="ok" cancel-variant="cancel" header-class="modal-header-class">
      <template #modal-header>
        <h5>Restart</h5>
      </template>
      <p class="my-4">Do you want to start over?</p>
    </b-modal>

    <!-- Main Game Board -->
    <div :style="getMainContainerStyle()">
      <img src="../img/kitten.png" alt="kitten" id="kitten-image">
      <div v-for="i in vertiN" :key="i">
        <div class="btn-left">
          <button v-for="j in horiN" :key="j" :style="getButtonStyle((i-1)*2, j-1)" :id="'btn' + (i-1)*2 + '-' + (j-1)"
                  type="button" class="btn btn-pink btn-circle" @click="clickOnBoard((i-1)*2, j-1); clicked()"></button>
        </div>
        <div class="btn-right">
          <button v-for="j in horiN" :key="j" :style="getButtonStyle((i-1)*2+1, j-1)" :id="'btn' + ((i-1)*2+1) + '-' + (j-1)"
                  type="button" class="btn btn-pink btn-circle" @click="clickOnBoard((i-1)*2+1, j-1); clicked()"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /deep/ .modal-header-class {
    background: #ffdeec;
  }
</style>

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
