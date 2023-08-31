<template>
  <div>
    <div class="profile-rows" :class="{ 'extend-to-2-columns-420px': !edit }">
      <div v-if="edit" class="profile-rows">
        <basic-input type="text" label="Vorname"></basic-input>
        <basic-input type="text" label="Nachname"></basic-input>
      </div>
      <div v-else class="label-with-value">
        <span>Name:</span>
        <span>Lisa Tester</span>
      </div>

      <basic-input v-if="edit" type="date" label="Geburtsdatum"></basic-input>
      <div v-else class="label-with-value">
        <span>Geburtsdatum:</span>
        <span>01.01.2000</span>
      </div>

      <basic-input
        v-if="edit"
        type="tel"
        label="Mobil"
        name="phone"
        pattern="[+]{1}[0-9]{11,14}"
      />
      <div v-else class="label-with-value">
        <span>Mobil:</span>
        <a href="tel:+48511389219">+48511389219</a>
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
