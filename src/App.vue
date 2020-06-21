<template>
  <div id="app">
    <f-main-wrapper></f-main-wrapper>
  </div>
</template>

<script>
import FMainWrapper from './components/f-main-wrapper'

export default {
  name: 'App',
  components: {
    FMainWrapper
  }
}
</script>

<style>

#app {
  @import "~css-animation";
  /* Fonts*/
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
/* reset for padding and margin */
  padding: 0;
  margin: 0;
}
</style>
