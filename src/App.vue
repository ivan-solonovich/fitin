<template>
  <div id="app">
    <f-main-wrapper></f-main-wrapper>
  </div>
</template>

<script>
import FMainWrapper from './components/f-main-wrapper'
import { mapActions, mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    FMainWrapper
  },
  computed: {
    ...mapGetters([
            'IS_DESKTOP',
            'IS_TABLET',
            'IS_MOBILE'
    ])
  },
  methods:{
    ...mapActions([
            'SET_MOBILE',
            'SET_TABLET',
            'SET_DESKTOP'
    ]),

  },
  mounted() {
    let vm = this;
    window.addEventListener('resize', function() {
      if(window.innerWidth >767 && window.innerWidth<1440){
        vm.SET_TABLET();
        console.log('tablet', vm.IS_TABLET);
      }else if(window.innerWidth<767){
        vm.SET_MOBILE();
        console.log('mobile', vm.IS_MOBILE);
      }else{
        vm.SET_DESKTOP();
        console.log('desktop', vm.IS_DESKTOP);
      }
    })
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
