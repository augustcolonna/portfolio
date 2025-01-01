<script setup lang="ts">
  import NavBar from '@/components/ui/NavBar.vue';
</script>

<template>
  <div id="app" class="app">
    <div class="app-body">
      <div class="navbar">
        <NavBar />
      </div>
      <div class="content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/_style-config.scss' as colors;

  .app {
    display: flex;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;

    .app-body {
      display: flex;
      flex-direction: row;
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;

      .navbar {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100px;
        background: transparent;
      }

      .content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        overflow-y: auto;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .app {
      .app-body {
        display: inline-block;
        height: 100vh;

        .navbar {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100px;
          width: 100%;
          background: transparent;
        }

        .content {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          top: 0;
        }
      }
    }
  }
</style>
