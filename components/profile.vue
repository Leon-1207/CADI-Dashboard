<template>
  <div class="popup-content-no-padding profile">
    <!-- profile image -->
    <div class="profile-img-container">
      <img
        class="profile-img"
        src="-Amz-Signature=921d5aab3799b732b1f8c29e85ebd16359c646b0a8e5b207324122c03d6c234a"
        alt="Profilbild"
      />
    </div>

    <div class="popup-content-padding">
      <basic-input label="Vorname" type="text"></basic-input>
      <basic-input label="Nachname" type="text"></basic-input>
      <basic-input label="Geburtsdatum" type="date"></basic-input>
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
  height: auto;
  max-height: 280px;
  object-fit: cover;
}

.profile {
  overflow: hidden;
}
</style>
