<template>
  <md-layout md-row class="md-page-load" v-show="isLoading">
    <md-layout md-align="center" md-vertical-align="center">
      <pre>{{ isLoading }}</pre>
      <md-spinner :md-size="150" md-indeterminate></md-spinner>
    </md-layout>
  </md-layout>
</template>

<script>
import Vue from 'vue'
// import PageloadSwitcher from '../../core/pageloadSwitcher'

export default {
  name: 'md-page-load',
  computed: {
    isLoading () {
      return Vue.OroneMaterial.PageloadSwitcher.loading
    }
  }
}
</script>

<style>
.md-page-load {
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(163, 173, 185, 0.5);
}
</style>
