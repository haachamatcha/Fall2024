<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean
}>()
</script>

<template>
  <div>
    <div class="flyout" :class="{ isOpen }">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.flyout {
  position: fixed;
  top: 56px;
  right: 0;
  bottom: 0;
  width: 20rem;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.7);
  z-index: 1000;
  transform: translateX(85%);
}
.flyout:hover,
.flyout.is-open {
  transform: translateX(0);
  transition: transform 0.3s;
}
</style>
