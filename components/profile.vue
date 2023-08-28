<template>
  <div class="popup-body">
    <!-- profile image -->
    <div class="static-profile-header">
      <img
        class="profile-img large-profile-img"
        src="~/static/profileImg.png"
        alt="Profilbild"
      />
      <div class="curve-section"></div>
    </div>
    <div class="sticky-profile-header">
      <img class="profile-img" src="~/static/profileImg.png" alt="Profilbild" />
      <profile-head-content style="margin-left: 1rem" />
    </div>

    <div class="main-profile-content popup-content-padding">
      <!--   <expansion-panel icon="fas fa-user" title="Teilnehmer">
        <basic-input label="Vorname" type="text"></basic-input>
        <basic-input label="Nachname" type="text"></basic-input>
        <basic-input label="Geburtsdatum" type="date"></basic-input>
      </expansion-panel>-->
      <profile-head-content />

      <div class="profile-navigation-buttons">
        <button>
          <i class="fas fa-user"></i>
          <span>Teilnehmer</span>
        </button>
        <button>
          <i class="fas fa-address-book"></i>
          <span>Kontakte</span>
        </button>
        <button>
          <i class="fas fa-user-check"></i>
          <span>Check-in</span>
        </button>
        <button>
          <i class="fas fa-shield-check"></i>
          <span>Erlaubnisse</span>
        </button>
        <button>
          <i class="fas fa-bookmark"></i>
          <span>Buchung</span>
        </button>
        <button>
          <i class="fas fa-bus"></i>
          <span>Transfer</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const addListener = () => {
      const isParentReady = !!this.$parent.$el.tagName
      if (isParentReady)
        this.$parent.$el.addEventListener('scroll', this.handleScroll)
      else setTimeout(addListener, 100)
    }
    addListener()
  },
  beforeDestroy() {
    this.$parent.$el.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      const scrollY = this.$parent.$el.scrollTop
      const staticHeaderHeight = document.querySelector(
        '.static-profile-header'
      ).offsetHeight
      const stickyHeaderHeight = document.querySelector(
        '.sticky-profile-header'
      ).offsetHeight

      // Calculate the opacity for the sticky div
      const transitionProgress = Math.max(
        0,
        Math.min(
          (scrollY - staticHeaderHeight + stickyHeaderHeight) /
            staticHeaderHeight,
          1
        )
      )

      // Apply the new opacity to the sticky div
      document.querySelector('.sticky-profile-header').style.opacity =
        transitionProgress
    },
  },
}
</script>

<style>
.static-profile-header {
  margin-bottom: -100px;
  max-height: 40vh;
  overflow: hidden;
  position: relative;
}

.static-profile-header .curve-section {
  width: 200%;
  height: 100%;
  border-radius: 50%;
  background: var(--popup-background);
  top: 90%;
  left: -50%;
  right: 0;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  position: absolute;
}

.sticky-profile-header {
  position: sticky;
  top: 0;
  display: flex;
  z-index: 1;
  width: 100%;
  height: auto;
  opacity: 0;
  background: white;
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
}

.sticky-profile-header .name {
  font-size: 1.2rem;
  margin-left: 1rem;
  color: var(--primary-color);
}

div.sticky-profile-header {
  padding-top: 0.75rem;
  padding-bottom: 1rem;
}

.sticky-profile-header .profile-img {
  width: 48px;
  height: 48px;
  border-radius: 0.5rem;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
}

.profile-img {
  border-top-left-radius: var(--popup-border-radius);
  border-top-right-radius: var(--popup-border-radius);
  object-fit: cover;
}

.large-profile-img {
  width: 100%;
  height: auto;
  max-height: 360px;
}

.popup-content-padding,
.sticky-profile-header {
  padding: 24px;
}

/* Media query for screens with a minimum width of 1024px (adjust as needed) */
@media screen and (min-width: 680px) {
  .popup-content-padding,
  .sticky-profile-header {
    padding-left: 40px; /* Increase left padding */
    padding-right: 40px; /* Increase right padding */
  }
}

.main-profile-content {
  border-bottom-left-radius: var(--popup-border-radius);
  border-bottom-right-radius: var(--popup-border-radius);
}

.profile-navigation-buttons {
  display: grid;
  position: relative;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  width: 100%;
}

@media (max-width: 480px) {
  .profile-navigation-buttons {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
}

.profile-navigation-buttons > button {
  background: white;
  color: var(--accent-color);
  outline: none;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border: none;
  cursor: pointer;
}
</style>
