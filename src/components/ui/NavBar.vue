<script setup lang="ts">
  import { routes } from '@/router';
  import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="navbar-container">
    <div class="side-nav">
      <div class="routes-container">
        <RouterLink v-for="route in routes" :to="{ name: route.name }" :key="route.name" class="icon-container">
          <i :class="`fa ${route.meta.icon}`"></i>
          <span class="icon-label">{{ route.meta.headline }}</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/_colors.scss' as colors;

  .navbar-container {
    position: relative;
    background-color: colors.$dark-purple;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    left: 0;
    top: 0;

    .side-nav {
      position: fixed;
      width: 100px;
      left: 0;
      top: 0;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        text-decoration: none;
        color: inherit;
        margin: 10px 0;

        &.router-link-active {
          color: colors.$platinum;
        }
      }

      .routes-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: colors.$slate-grey;
        border-radius: 15px;
        gap: 30px;
        margin: 0;
        padding: 0;
        height: 40%;
        width: 80px;
        box-shadow: 0 0 5px 0 colors.$slate-grey;

        .icon-container {
          position: relative; /* Necessary for positioning the label */
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.1s;

          &:hover {
            color: colors.$platinum;
          }

          i {
            font-size: 2rem;
            transition: color 0.3s;
          }

          .icon-label {
            position: absolute;
            left: 50px;
            background-color: colors.$slate-grey;
            color: colors.$platinum;
            padding: 15px 15px;
            border-radius: 15px;
            font-size: 0.9rem;
            white-space: nowrap;
            visibility: hidden;
            transform: translateX(-10px);
            transition: opacity 0.3s, transform 0.3s;
          }

          &:hover .icon-label {
            opacity: 1; /* Make the label visible */
            visibility: visible;
            transform: translateX(0); /* Reset transform for smooth effect */
            box-shadow: 0 0 5px 0 colors.$slate-grey;
          }
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
