<script setup lang="ts">
  import { computed, onMounted, ref, watch } from 'vue';
  import Button from '../Button.vue';

  const modalContent = ref<HTMLInputElement | null>(null);

  const props = defineProps<{
    size: string;
    disableBackgroundClose: boolean;
  }>();

  const emit = defineEmits<{
    (e: 'closeModal'): void;
  }>();

  onMounted(() => {
    modalContent.value && modalContent.value.focus();
  });

  const closeModalOutside = (e: MouseEvent) => {
    const clickedElement = <HTMLElement>e.target;
    if (!props.disableBackgroundClose && clickedElement.className.includes('modal-container')) {
      emit('closeModal');
    } else if (clickedElement.className.includes('modal-container')) {
      modalContent.value && modalContent.value.focus();
    }
  };

  const modalStyle = computed((): string => `modal-content ${props.size || 'm'}`);

  watch(
    () => props.size,
    (newValue) => {
      if (newValue) {
        document.body.classList.add('modal-open');
      } else {
        document.body.classList.remove('modal-open');
      }
    },
    { immediate: true }
  );
</script>

<template>
  <Transition name="modal" mode="out-in" appear>
    <div @keydown.esc="emit('closeModal')" @click="closeModalOutside" class="modal-container">
      <div ref="modalContent" tabindex="0" :class="modalStyle">
        <header class="modal-header">
          <slot name="header"></slot>
        </header>
        <main class="modal-body">
          <slot name="default"></slot>
        </main>
        <footer>
          <div class="button-bar">
            <Button :size="'md'" :text="'Close'" @click="emit('closeModal')" />
          </div>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
  @use '@/styles/_colors.scss' as colors;
  .modal-container {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    z-index: 10;
    overflow: auto;
    backdrop-filter: blur(5px);
    animation: fade-in 0.5s ease-in;

    .modal-content {
      background-color: colors.$dark-purple;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 30%;
      border: solid 5px colors.$platinum;
      border-radius: 30px;
      color: colors.$platinum;

      .modal-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 15px;
        border-bottom: solid 5px colors.$platinum;
        width: 100%;
      }

      .modal-body {
        max-height: 65vh;
        overflow-y: auto;
        overflow: auto;
      }

      footer {
        padding: 15px;
      }

      footer .button-bar {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }

      .modal-enter-active,
      .modal-leave-active {
        opacity: 0;
      }

      .modal-enter-to,
      .modal-leave {
        opacity: 1;
      }
    }

    //calculate center for modal ==> 50% - width/2 + widthOfSideBar/2

    .xl,
    .l,
    .m,
    .s,
    .xs {
      width: 900px;
      height: 500px;
    }
  }

  .modal-open {
    filter: blur(5px);
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
