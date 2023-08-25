<template>
  <popup ref="popup">
    <profile></profile>
  </popup>
</template>

<script>
export default {
  mounted() {
    this.$refs.popup.openPopup();
  },
};
</script>
