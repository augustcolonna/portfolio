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
  @use '@/styles/_style-config.scss' as colors;

  .navbar-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100px;
    height: 100vh; // Ensure the navbar takes full height of the viewport
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;

    .side-nav {
      position: fixed;
      width: 100px;
      left: 0;
      top: 0;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .routes-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0;
        animation: fade-in 0.8s forwards;

        a {
          text-decoration: none;
          color: inherit;
          margin: 10px 0;

          &.router-link-active {
            background-color: colors.$dark-purple;
            color: colors.$platinum;
            border: solid 1px colors.$platinum;
            transition: all 0.2s;
          }
        }

        .icon-container {
          position: relative;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          color: colors.$dark-purple;
          background-color: colors.$platinum;
          border-radius: 4px;
          box-shadow: colors.$dark-purple 0 2px 4px, colors.$dark-grey-purple 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;

          &:focus {
            box-shadow: colors.$platinum 0 0 0 1.5px inset, colors.$dark-purple 0 2px 4px,
              colors.$dark-grey-purple 0 7px 13px -3px, colors.$platinum 0 -3px 0 inset;
          }

          &:hover {
            box-shadow: colors.$dark-purple 0 4px 8px, colors.$dark-grey-purple 0 7px 13px -3px,
              colors.$platinum 0 -3px 0 inset;
            transform: translateY(-2px);
          }

          &:active {
            box-shadow: colors.$platinum 0 3px 7px inset;
            transform: translateY(2px);
          }

          i {
            font-size: 1.5rem;
          }

          .icon-label {
            position: absolute;
            left: 65px;
            background-color: colors.$platinum;
            color: colors.$dark-purple;
            padding: 15px 15px;
            border-radius: 4px;
            font-size: 0.9rem;
            font-weight: 700;
            white-space: nowrap;
            visibility: hidden;
            transform: translateX(-10px);
            transition: box-shadow 0.15s, transform 0.15s;
          }

          &:hover .icon-label {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
            box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .navbar-container {
      position: relative;
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      width: 100%;
      height: 100px;
      z-index: 8;

      .side-nav {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        height: auto;
        background-color: transparent;

        .routes-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 30px;
          margin-top: 20px;
          width: 100%;
          opacity: 0;
          animation: fade-in 0.8s forwards;

          a {
            text-decoration: none;
            color: inherit;
            margin: 10px 0;

            &.router-link-active {
              background-color: colors.$dark-purple;
              color: colors.$platinum;
              border: solid 1px colors.$platinum;
              transition: all 0.2s;
            }
          }

          .icon-container {
            position: relative;
            width: 45px;
            height: 45px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
            color: colors.$dark-purple;
            background-color: colors.$platinum;
            border-radius: 4px;
            box-shadow: colors.$dark-purple 0 2px 4px, colors.$dark-grey-purple 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;

            &:focus {
              box-shadow: colors.$platinum 0 0 0 1.5px inset, colors.$dark-purple 0 2px 4px,
                colors.$dark-grey-purple 0 7px 13px -3px, colors.$platinum 0 -3px 0 inset;
            }

            &:hover {
              box-shadow: colors.$dark-purple 0 4px 8px, colors.$dark-grey-purple 0 7px 13px -3px,
                colors.$platinum 0 -3px 0 inset;
              transform: translateY(-2px);
            }

            &:active {
              box-shadow: colors.$platinum 0 3px 7px inset;
              transform: translateY(2px);
            }

            i {
              font-size: 1.5rem;
            }

            .icon-label {
              display: none;
            }
          }
        }
      }
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
