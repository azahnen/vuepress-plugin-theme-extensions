<script setup lang="ts">
defineProps({
  type: {
    type: String,
    required: false,
    default: 'tip',
  },
  left: {
    type: String,
    required: false,
    default: '',
  },
  right: {
    type: String,
    required: false,
    default: '',
  },
  vertical: {
    type: String,
    required: false,
    default: undefined,
  },
  color: {
    type: String,
    required: false,
    default: undefined,
  },
})
</script>

<template>
  <span
    class="split-badge"
    :class="type"
    :style="{
      verticalAlign: vertical,
      backgroundColor: color,
    }"
  >
    <span class="left">{{ left }}</span>
    <span class="right">{{ right }}</span>
  </span>
</template>

<style lang="scss">
.split-badge {
  display: inline-block;
  font-size: 12px;
  font-family: var(--font-family-code);
  height: 20px;
  line-height: 18px;
  border-radius: 3px;
  padding: 0;
  color: var(--c-bg);
  vertical-align: top;
  white-space: nowrap;
  text-shadow: 1px 1px 2px var(--c-text-lightest);
  transition: color var(--t-color), background-color var(--t-color);

  &.tip, &.stable, &.production {
    background-color: var(--c-badge-tip);
  }

  &.info, &.draft, &.candidate {
    background-color: var(--c-badge-info);
  }

  &.warning, &.custom, &.experimental {
    background-color: var(--c-badge-warning);
  }

  &.danger {
    background-color: var(--c-badge-danger);
  }

  .table-of-contents & {
    vertical-align: middle;
  }

  & + & {
    margin-left: 5px;
  }

  & > .left {
    padding-left: 6px;
    padding-right: 6px;
    padding-top: 2px;
    border-radius: 3px 0 0 3px;
    display: inline-block;
    background-color: var(--c-text-light);
  }

  & > .right {
    padding-left: 6px;
    padding-right: 6px;
    padding-top: 2px;
    display: inline-block;
  }
}
</style>