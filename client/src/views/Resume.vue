<script setup lang="ts">
  import TimeLine from '@/components/ui/TimeLine.vue';
</script>

<template>
  <div class="resume-container">
    <TimeLine />
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/_style-config.scss' as colors;
  .resume-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    color: colors.$platinum;
  }
</style>
