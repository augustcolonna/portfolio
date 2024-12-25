<script setup lang="ts">
  const props = defineProps({
    text: String,
    size: String,
  });

  console.log(props.text, props.size, '<-----');
</script>

<template>
  <div class="btn-container">
    <button
      class="btn"
      :class="{ small: props.size === 'sm', medium: props.size === 'md', large: props.size === 'lrg' }"
    >
      {{ props.text }}
    </button>
  </div>
</template>

<style scoped lang="scss">
  @use '@/styles/_colors.scss' as colors;

  .btn {
    display: inline-flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    appearance: none;
    background-color: colors.$platinum;
    box-shadow: colors.$dark-purple 0 2px 4px, colors.$dark-grey-purple 0 7px 13px -3px, colors.$platinum 0 -3px 0 inset;
    color: colors.$dark-purple;
    border-radius: 4px;
    border-width: 0;
    margin: 10px 0;
    transition: box-shadow 0.15s, transform 0.15s;
    list-style: none;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    will-change: box-shadow, transform;
    cursor: pointer;

    &.small {
      height: 48px;
      font-size: 18px;
      line-height: 1;
      padding-left: 16px;
      padding-right: 16px;
    }

    &.medium {
      height: 56px;
      font-size: 20px;
      line-height: 1;
      padding-left: 24px;
      padding-right: 24px;
    }

    &.large {
      height: 80px;
      font-size: 22px;
      line-height: 1;
      padding-left: 32px;
      padding-right: 32px;
    }

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
      box-shadow: colors.$dark-purple 0 4px 8px, colors.$dark-grey-purple 0 7px 13px -3px,
        colors.$platinum 0 -3px 0 inset;
      background-color: colors.$dark-purple;
      border: solid 1px colors.$platinum;
      color: colors.$platinum;
      transform: translateY(2px);
    }
  }
</style>
