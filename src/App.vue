<script setup lang="ts">
  import NavBar from '@/components/ui/NavBar.vue';
</script>

<template>
  <div id="app" class="app">
    <div class="app-body">
      <NavBar />
      <div class="content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/_style-config.scss' as colors;
  .app-body {
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;

    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    }
  }
</style>
