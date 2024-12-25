<script setup lang="ts">
  const attributes: string[] = [
    'Software Engineer',
    'Outdoor Enthusiast ',
    'Espresso Consumer',
    'Problem Solver',
    'Lifelong Learner',
  ];
</script>

<template>
  <div class="about-container">About Me View</div>
</template>

<style lang="scss" scoped>
  @use '@/styles/_colors.scss' as colors;
  .about-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: colors.$platinum;
  }
</style>
