<script setup lang="ts"></script>

<template>
  <div class="home-container">Home View</div>
</template>

<style lang="scss" scoped>
  @use '@/styles/_colors.scss' as colors;
  .home-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: colors.$platinum;
  }
</style>
