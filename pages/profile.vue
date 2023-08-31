<template>
  <profile-popup ref="popup" />
</template>

<script>
export default {
  mounted() {
    this.$refs.popup.openPopup()
  },
}
</script>
