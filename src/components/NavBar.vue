<script setup lang="ts">
  import { routes } from '@/router';
  import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="navbar-container">
    <div class="side-nav">
      <div class="routes-container">
        <RouterLink v-for="route in routes" :to="{ name: route.name }">
          <i :class="`fa ${route.meta.icon}`"></i>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/_colors.scss' as colors;

  .navbar-container {
    position: relative;

    .side-nav {
      position: fixed;
      width: 50px;
      left: 0;
      top: 0;
      padding: 0;
      margin: 0;
      height: 100vh;
      background-color: colors.$dark-purple;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3px;
        transition: all 0.3s;
        text-decoration: none;
        color: colors.$platinum;
        font-size: 2rem;

        &:hover,
        &.router-link-active {
          background-color: colors.$platinum;
          color: colors.$dark-grey-purple;
        }
      }

      .routes-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0;
        padding: 0;
        height: 100%;

        i {
          color: colors.$dark-grey-purple;
        }
      }
    }
  }

  @keyframes pulse-ring {
    0% {
      transform: scale(0.33);
    }
    80%,
    100% {
      opacity: 0;
    }
  }

  @keyframes pulse-dot {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
  }
</style>
