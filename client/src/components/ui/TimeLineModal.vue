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
  <div class="container">
    <Modal @closeModal="emit('closeModal')" :size="'l'" :disableBackgroundClose="false">
      <template v-slot:header>
        <div class="head">
          <h1>{{ props.config.experienceName }}</h1>
          <h3 v-if="props.config.experiencePosition">{{ props.config.experiencePosition }}</h3>
          <h3>{{ experienceDate }}</h3>
          <h3>{{ props.config.location }}</h3>
        </div>
      </template>
      <template v-slot:default>
        <div class="experience-content">
          <ul>
            <li v-for="content in props.config.content" :key="content">{{ content }}</li>
          </ul>
        </div>
      </template>
    </Modal>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/_style-config.scss' as colors;
  .container {
    height: 100%;
    width: 100%;
    .head {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-left: 15px;
    }

    .experience-content {
      padding: 15px;
      font-size: 1.2rem;
      height: 100%;

      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        width: 100%;

        li {
          border-radius: 15px;
          border: solid 4px colors.$dark-purple;
          color: colors.$dark-purple;
          padding: 10px;
          margin: 3px;
          ::marker {
            font-weight: 600;
            color: colors.$dark-purple;
            font-size: 1.8rem;
          }
        }
      }
    }
  }
</style>
