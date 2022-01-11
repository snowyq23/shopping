<template>
  <div data-app id="app">
    <div id="nav">
      <router-link to="/index-classic"></router-link>
      <router-link to="/shopping-cart"></router-link>
      <router-link to="/checkout"></router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>

<style>
</style>
