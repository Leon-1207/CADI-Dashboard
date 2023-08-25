<template>
  <div class="popup-content-no-padding">
    <div class="popup-overlay" style="display: block; cursor: not-allowed"></div>
    <div class="popup-inner-content profile">
      <!-- profile image -->
      <div class="profile-img-container">
        <img
          class="profile-img"
          src="~/static/profileImg.png"
          alt="Profilbild"
        />
      </div>

      <div class="popup-content-padding">
        <basic-input label="Vorname" type="text"></basic-input>
        <basic-input label="Nachname" type="text"></basic-input>
        <basic-input label="Geburtsdatum" type="date"></basic-input>

        <div style="height: 1500px; width 100%;"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.profile-img-container {
  width: 100%;
  overflow: hidden;
  border-radius: 0 0 20px 20px; /* Rounded bottom corners */
}

.profile-img {
  width: 100%;
  clip-path: ellipse(85% 100% at 50% 0%);
  height: auto;
  max-height: 280px;
  object-fit: cover;
}

.profile {
  overflow: hidden;
}
</style>
