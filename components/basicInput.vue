<template>
  <div class="group">
    <input v-bind="$attrs" :type="type" required />
    <span class="highlight"></span>
    <span class="bar"></span>
    <label>{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    type: {
      type: String,
    },
  },
}
</script>