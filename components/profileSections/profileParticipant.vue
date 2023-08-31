<template>
  <div>
    <div class="profile-rows extend-to-2-columns-420px">
      <div class="label-with-value">
        <label for="first-name">Name:</label>
        <div v-if="edit" class="content-side-by-side">
          <input
            type="text"
            name="first-name"
            class="dashboard-input"
            id="first-name"
            placeholder="Vorname"
          />
          <input
            type="text"
            name="last-name"
            class="dashboard-input"
            id="last-name"
            placeholder="Nachname"
          />
        </div>
        <span v-else>Lisa Tester</span>
      </div>

      <div class="label-with-value">
        <label for="date-of-birth">Geburtsdatum:</label>
        <input
          v-if="edit"
          type="date"
          name="date-of-birth"
          class="dashboard-input"
          id="date-of-birth"
        />
        <span v-else>01.01.2000</span>
      </div>

      <div class="label-with-value">
        <label for="phone">Mobil:</label>
        <input
          v-if="edit"
          type="tel"
          name="phone"
          class="dashboard-input"
          id="phone"
          pattern="[+]{1}[0-9]{11,14}"
        />
        <a v-else href="tel:+48511389219">+48511389219</a>
      </div>

      <div class="label-with-value">
        <span>vCard:</span>
        <a
          href="https://my.camps.digital/teamer/teilnehmer/vcard.vcf?id=32170"
          class="right tooltip is-tooltip-right has-tooltip-right-touch"
          target="_blank"
          ><i class="fas fa-address-book" style="margin-right: 0.25rem"></i
          >Vcard Datei laden</a
        >
      </div>
    </div>
    <div class="profile-rows" style="margin-top: 1.5rem">
      <label class="checkbox_item citem_2">
        <label class="checkbox_wrap">
          <input type="checkbox" name="checkbox" class="checkbox_inp" />
          <span class="checkbox_mark"></span>
        </label>
        <span class="checkbox-label">Aktuell krank</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { edit: false }
  },
  methods: {
    setEdit(newState) {
      this.edit = newState
    },
  },
}
</script>
