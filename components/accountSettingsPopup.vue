<template>
  <popup ref="popup">
    <div class="popup-body popup-content-padding">
      <div class="profile-rows">
        <!-- profile data -->
        <div class="settings-popup-section-headline-row">
          <span class="profile-content-headline">Profildaten</span>
          <button
            class="basic-button edit-section-button"
            @click="toggleEditMode('profileData')"
          >
            {{ editMode.profileData ? 'Fertig' : 'Bearbeiten' }}
          </button>
        </div>
        <div class="profile-rows extend-to-2-columns-420px">
          <!-- vendor title -->
          <div class="label-with-value">
            <label for="vendor-title">Vendor Titel</label>
            <input
              v-if="editMode.profileData"
              class="dashboard-input"
              placeholder="Titel des Vendors"
              id="vendor-title"
            />
            <span v-else>Test Vendor</span>
          </div>
          <!-- vendor code -->
          <div class="label-with-value">
            <label>Vendor Code</label>
            <span>XYZ-123</span>
          </div>
          <!-- first name -->
          <div class="label-with-value">
            <label for="first-name">Vorname</label>
            <input
              v-if="editMode.profileData"
              class="dashboard-input"
              id="first-name"
              placeholder="Vorname"
              type="text"
            />
            <span v-else>Max</span>
          </div>
          <!-- last name -->
          <div class="label-with-value">
            <label for="last-name">Nachname</label>
            <input
              v-if="editMode.profileData"
              class="dashboard-input"
              id="last-name"
              placeholder="Nachname"
              type="text"
            />
            <span v-else>Mustermann</span>
          </div>
          <!-- form of address -->
          <div class="label-with-value">
            <label for="form-of-address">Anrede</label>
            <select v-if="editMode.profileData" class="dashboard-input">
              <option value="female">Frau</option>
              <option value="male">Herr</option>
            </select>
            <span v-else>Herr</span>
          </div>
          <!-- email -->
          <div class="label-with-value">
            <label for="email">E-Mail</label>
            <input
              v-if="editMode.profileData"
              class="dashboard-input"
              id="email"
              placeholder="example@domain.com"
              type="email"
            />
            <span v-else>max.mustermann@example.com</span>
          </div>
        </div>

        <!-- gap between profile data and settings -->
        <div class="h-line"></div>

        <!-- settings -->
        <div class="settings-popup-section-headline-row">
          <span class="profile-content-headline">Einstellungen</span>
          <button
            class="basic-button edit-section-button"
            @click="toggleEditMode('settings')"
          >
            {{ editMode.settings ? 'Fertig' : 'Bearbeiten' }}
          </button>
        </div>
      </div>
    </div>
  </popup>
</template>

<script>
export default {
  data() {
    return {
      editMode: {
        profileData: false,
        settings: false,
      },
    }
  },

  methods: {
    openPopup() {
      this.$refs.popup.openPopup()
    },
    toggleEditMode(section) {
      Object.entries(this.editMode).forEach(([key, value]) => {
        this.editMode[key] = key === section ? !value : false // change the value for the clicked section and disable edit mode for all other sections
      })
    },
  },
}
</script>

<style>
.settings-popup-section-headline-row {
  grid-template-columns: 1fr auto;
  display: grid;
  align-items: stretch;
  width: 100%;
}
.settings-popup-section-headline-row > .edit-section-button {
  padding: 0 1rem;
  font-size: 0.75rem;
}
</style>
