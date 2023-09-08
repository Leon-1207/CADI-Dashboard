<template>
  <div v-if="visible" class="popup">
    <div class="popup-grid-container">
      <div
        class="button"
        v-for="(item, index) in 4"
        :key="index"
        @click="closePopup"
      ></div>
      <i id="popup-info">Klicke neben das Popup, um es zu schließen</i>
      <div class="content">
        <slot></slot>
      </div>
      <div
        class="button"
        v-for="(item, index) in 4"
        :key="index + 4"
        @click="closePopup"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['on-close', 'on-open'],

  data() {
    return { visible: false }
  },

  methods: {
    openPopup() {
      this.$emit('on-open')
      this.visible = true
    },
    closePopup() {
      this.$emit('on-close')
      this.visible = false
    },
  },
}
</script>

<style>
.popup {
  --popup-background: #f8f8f8;
  --popup-border-radius: 1rem;
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.popup-grid-container {
  display: grid;
  grid-template-columns:
    minmax(var(--popup-margin), 1fr) minmax(10fr, var(--popup-target-width))
    minmax(var(--popup-margin), 1fr);
  grid-template-rows: minmax(10vmin, 1fr) auto minmax(10vmin, 1fr);
  width: 100vw;
  min-height: 100vh;
}

.popup .button,
.popup .content {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
}

.popup .content {
  width: 100%;
  flex-direction: column;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

/* Define grid areas */
.popup-grid-container > * {
  grid-area: auto;
}

.popup .button:nth-child(1) {
  grid-area: 1 / 1 / 2 / 2;
}

.popup .button:nth-child(2) {
  grid-area: 1 / 2 / 2 / 3;
}

.popup .button:nth-child(3) {
  grid-area: 1 / 3 / 2 / 4;
}

.popup .button:nth-child(4) {
  grid-area: 2 / 1 / 3 / 2;
}

.popup .content {
  grid-area: 2 / 2 / 3 / 3;
}

.popup .button:nth-child(5) {
  grid-area: 2 / 3 / 3 / 4;
}

.popup .button:nth-child(6) {
  grid-area: 3 / 1 / 4 / 2;
}

.popup .button:nth-child(7) {
  grid-area: 3 / 2 / 4 / 3;
}

.popup .button:nth-child(8) {
  grid-area: 3 / 3 / 4 / 4;
}

.popup .popup-body {
  background: var(--popup-background);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: var(--popup-border-radius);
  max-width: var(--popup-target-width);
  width: 100%;
}

#popup-info {
  position: absolute;
  left: 0;
  width: 100%;
  top: 0.5rem;
  text-align: center;
  color: var(--primary-color-light);
  font-size: 0.8rem;
}
</style>
