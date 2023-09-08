<template>
  <popup ref="popup">
    <div class="popup-body popup-content-padding">
      <div class="profile-rows">
        <!-- profile data -->
        <span class="profile-content-headline">Profildaten</span>

        <!-- gap between profile data and settings -->
        <div class="h-line"></div>

        <!-- settings -->
        <span class="profile-content-headline">Einstellungen</span>
      </div>
    </div>
  </popup>
</template>

<script>
export default {
  methods: {
    openPopup() {
      this.$refs.popup.openPopup()
    },
  },
}
</script>
