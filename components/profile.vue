<template>
  <div class="popup-body">
    <!-- profile image -->
    <div class="profile-img-container">
      <img class="profile-img" src="~/static/profileImg.png" alt="Profilbild" />
    </div>

    <div class="popup-content-padding">
      <basic-input label="Vorname" type="text"></basic-input>
      <basic-input label="Nachname" type="text"></basic-input>
      <basic-input label="Geburtsdatum" type="date"></basic-input>
    </div>
  </div>
</template>

<script>
export default {};
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
</style>
