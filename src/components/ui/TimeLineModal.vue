<script setup lang="ts">
  import Modal from '@/components/ui/modal/Modal.vue';
  import { computed } from 'vue';

  const props = defineProps<{
    config: Portfolio.ModalConfig;
  }>();

  const emit = defineEmits<{
    (e: 'closeModal'): void;
  }>();

  const experienceDate = computed(() => {
    return `${props.config.startDate} - ${props.config.endDate}`;
  });
</script>

<template>
  <Modal @closeModal="emit('closeModal')" :size="'l'" :disableBackgroundClose="false">
    <template v-slot:header>
      <div class="head">
        <h1>{{ props.config.experienceName }}</h1>
        <h3 v-if="props.config.experiencePosition">{{ props.config.experiencePosition }}</h3>
        <h3>{{ experienceDate }}</h3>
        <h3>{{ props.config.location }}</h3>
      </div>
      <img v-if="props.config.image" :src="props.config.image" alt="company logo" />
    </template>
    <template v-slot:default>
      <div class="experience-content">
        <p>{{ props.config.content }}</p>
      </div>
    </template>
  </Modal>
</template>

<style lang="scss" scoped>
  .head {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 15px;
  }

  img {
    width: 400px;
    border-radius: 10px;
  }

  .experience-content {
    padding: 15px;
    font-size: 1.2rem;
    height: 100%;
  }
</style>
