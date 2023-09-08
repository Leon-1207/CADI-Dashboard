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
          <!-- agency -->
          <div class="label-with-value">
            <label>Agentur</label>
            <span>Demo-Agentur</span>
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
        <div class="profile-rows extend-to-2-columns-420px">
          <!-- event title -->
          <div class="label-with-value">
            <label>Titel der Veranstaltung</label>
            <span>Demo Test Event 2023</span>
          </div>
          <!-- current event ID -->
          <div class="label-with-value">
            <label>Aktuelle Termin-ID</label>
            <span>XY-123-01</span>
          </div>
        </div>
        <!-- Booking copy emails -->
        <div class="label-with-value">
          <label>Buchungskopie</label>
          <div v-if="editMode.settings" class="booking-copy-list">
            <div v-for="(item, index) in bookingCopyEmails" :key="index">
              <input
                class="dashboard-input"
                placeholder="example@domain.com"
                type="email"
                v-model="bookingCopyEmails[index]"
              />
              <button
                class="basic-button"
                @click="removeBookingCopyEmail(index)"
              >
                Entfernen
              </button>
            </div>
            <button class="basic-button" @click="bookingCopyEmails.push('')">
              Empfänger hinzufügen
            </button>
          </div>
          <span v-else>
            {{ bookingCopyEmails.join(', ') }}
          </span>
        </div>

        <!-- toggles -->
        <!-- TODO -->
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
      bookingCopyEmails: ['tim.tester@wwd.de', 'max.mustermann@wwd.de'],
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
    removeBookingCopyEmail(index) {
      this.bookingCopyEmails.splice(index, 1) // 2nd parameter means remove one item only
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

.booking-copy-list {
  display: grid;
  row-gap: 0.75rem;
}

.booking-copy-list button.basic-button {
  font-size: 0.75rem;
  padding-top: 0;
  padding-bottom: 0;
  margin-right: auto;
}

.booking-copy-list > * {
  height: 1.35rem;
  display: flex;
  align-items: center;
}

.booking-copy-list > div {
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 1rem;
  align-items: baseline;
}

.booking-copy-list > div > button {
  height: 100%;
}
</style>
