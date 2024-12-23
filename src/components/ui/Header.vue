<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  const header = computed(() => {
    return useRoute().meta.headline || '';
  });
</script>

<template>
  <div class="header-container">
    <div class="header">
      <h2>{{ header }}</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/_colors.scss' as colors;
  .header-container {
    position: relative;

    .header {
      position: fixed;
      top: 0;
      left: 50px;
      height: 40px;
      background-color: colors.$dark-grey-purple;
      color: colors.$platinum;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1rem;
      width: 100%;

      h2 {
        padding: 0;
        margin: 0;
      }
    }
  }
</style>
