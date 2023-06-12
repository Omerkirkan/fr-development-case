<template>
  <div>
    
    <Header />

    <router-view />

  </div>
</template>
<script>
import Header from './components/layout/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
<style lang="scss">
	@import "~@/assets/scss/style.scss";
</style> 