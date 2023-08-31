<template>
  <div class="profile-rows small-gap">
    <!-- 1. Contact -->
    <div class="profile-rows small-gap extend-to-2-columns-420px">
      <div class="label-with-value">
        <label for="contact-1-name">Erziehungsberechtigter:</label>
        <input
          v-if="edit"
          type="text"
          name="contact-1-name"
          class="dashboard-input"
          id="contact-1-name"
        />
        <span v-else>Max Mustermann</span>
      </div>
    </div>
    <div class="profile-rows small-gap extend-to-2-columns-420px">
      <div class="label-with-value">
        <label for="contact-1-phone">Mobil:</label>
        <input
          v-if="edit"
          type="tel"
          name="phone"
          class="dashboard-input"
          id="contact-1-phone"
          pattern="[+]{1}[0-9]{11,14}"
        />
        <div v-else class="content-side-by-side">
          <a class="link" href="tel:+4368181246640">+4368181246640</a>
          <a
            class="basic-button square-button small"
            href="https://wa.me/XXXXXXXXXXX"
            target="_blank"
          >
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
      <div class="label-with-value">
        <label for="contact-1-home-phone">Festnetz:</label>
        <input
          v-if="edit"
          type="tel"
          name="contact-1-home-phone"
          class="dashboard-input"
          id="contact-1-home-phone"
          pattern="[+]{1}[0-9]{11,14}"
        />
        <a v-else href="tel:+43 676 4671756">+43 676 4671756</a>
      </div>
    </div>

    <!-- space between contacts -->
    <div class="h-line"></div>

    <!-- 2. Contact -->
    <div class="profile-rows small-gap extend-to-2-columns-420px">
      <div class="label-with-value">
        <label for="contact-2-name">Zusatzkontakt:</label>
        <input
          v-if="edit"
          type="text"
          name="contact-2-name"
          class="dashboard-input"
          id="contact-2-name"
        />
        <span v-else>Tim Tester</span>
      </div>
    </div>
    <div class="profile-rows small-gap extend-to-2-columns-420px">
      <div class="label-with-value">
        <label for="contact-2-phone">Mobil:</label>
        <input
          v-if="edit"
          type="tel"
          name="contact-2-home-phone"
          class="dashboard-input"
          id="contact-2-home-phone"
          pattern="[+]{1}[0-9]{11,14}"
        />
        <div v-else class="content-side-by-side">
          <a class="link" href="tel:+123456">+123456</a>
          <a
            class="basic-button square-button small"
            href="https://wa.me/XXXXXXXXXXX"
            target="_blank"
          >
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
      <div class="label-with-value">
        <label for="contact-2-type">Beziehungsebene:</label>
        <input
          v-if="edit"
          type="text"
          name="contact-2-type"
          class="dashboard-input"
          id="contact-2-type"
        />
        <span v-else>Onkel</span>
      </div>
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
