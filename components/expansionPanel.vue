<template>
  <div class="expansion-panel">
    <button @click="isExpanded = !isExpanded">
      <i v-if="isExpanded" class="fas fa-chevron-up"></i>
      <i v-else class="fas fa-chevron-down"></i>
    </button>
    <div v-if="isExpanded">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["fa-icon", "title"],
  data() {
    return {
      isExpanded: false,
    };
  },
};
</script>

<style>
.expansion-panel > button {
  border: none;
  cursor: pointer;
  background: transparent;
  width: 100%;
  font-size: 1.5rem;
}
</style>
