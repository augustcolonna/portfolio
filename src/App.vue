<script setup lang="ts">
  import NavBar from '@/components/NavBar.vue';
  import Header from './components/ui/Header.vue';
</script>

<template>
  <div id="app" class="app">
    <div class="app-body">
      <NavBar />
      <div class="content">
        <Header />
        <RouterView class="view" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .app-body {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  }
</style>
