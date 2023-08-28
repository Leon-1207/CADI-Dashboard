<template>
  <div class="expansion-panel">
    <button @click="isExpanded = !isExpanded">
      <div class="dashboard-icon">
        <i :class="icon"></i>
      </div>
      <span>{{ title }}</span>
      <i v-if="isExpanded" class="fas fa-chevron-down"></i>
      <i v-else class="fas fa-chevron-right"></i>
    </button>
    <div v-if="isExpanded">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['icon', 'title'],
  data() {
    return {
      isExpanded: false,
    }
  },
}
</script>

<style>
.expansion-panel > button {
  border: none;
  cursor: pointer;
  background: transparent;
  width: 100%;
  font-size: 1.4rem;
  padding: 1rem 0;
  color: var(--primary-color);
  display: grid;
  grid-template-columns: auto auto 1fr; /* First two cells with auto width, third cell takes remaining space */
  grid-gap: 10px; /* Gap between grid cells */
  align-items: center;
}

.expansion-panel > button > i:last-child {
    margin-left: auto;
    font-weight: 500;
    font-size: 1rem;
    color: var(--primary-color-light);;
}

.expansion-panel {
  width: 100%;
}
</style>
