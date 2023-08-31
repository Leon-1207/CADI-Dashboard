<template>
  <div>
    <popup
      ref="popup"
      @on-close="isPopupOpen = false"
      @on-open="isPopupOpen = true"
    >
      <profile></profile>
    </popup>

    <div v-if="isPopupOpen" class="floating-popup-button-container right">
      <button class="glass">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 256 512"
          >
            <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
            />
          </svg>
        </div>
      </button>
    </div>

    <div v-if="isPopupOpen" class="floating-popup-button-container left">
      <button class="glass">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 256 512"
          >
            <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"
            />
          </svg>
        </div>
      </button>
    </div> 
  </div>
</template>

<script>
export default {
  data() {
    return { isPopupOpen: false }
  },
  methods: {
    openPopup() {
      this.$refs.popup.openPopup()
    },
  },
}
</script>

<style>
.floating-popup-button-container {
  top: 50%;
  transform: translateY(-50%);
  position: fixed;
  z-index: 1;
  min-width: var(--popup-margin);
  width: calc(
    calc(100vw - var(--popup-target-width)) / 2
  );
  display: flex;
  justify-content: center;
  pointer-events: none;
}

.floating-popup-button-container.left {
  left: 0;
}

.floating-popup-button-container.right {
  right: 0;
}

.floating-popup-button-container > button {
  padding: 0;
  font-size: 1.2rem;
  border-radius: 100%;
  width: 60%;
  max-width: 85px;
  min-width: 30px;
  height: auto;
  outline: none;
  color: white;
  cursor: pointer;
  pointer-events: all;
  position: relative;
}

.floating-popup-button-container > button > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.floating-popup-button-container > button:hover {
  background: #ffffff57;
}

.floating-popup-button-container > button:before {
  display: block;
  content: '';
  padding-top: 100%;
  width: 100%;
  border-radius: 100%;
}

.floating-popup-button-container > button svg {
  height: 55%;
  fill: white;
}
</style>
