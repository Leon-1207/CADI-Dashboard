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
      <span class="name">Max Mustermann</span>
    </div>

    <div class="main-profile-content popup-content-padding">
      <expansion-panel icon="fas fa-user" title="Teilnehmer">
        <basic-input label="Vorname" type="text"></basic-input>
        <basic-input label="Nachname" type="text"></basic-input>
        <basic-input label="Geburtsdatum" type="date"></basic-input>
      </expansion-panel>

      <div>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
        est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
        est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet. est Lorem ipsum dolor
        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
        ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
        est Lorem ipsum dolor sit amet.
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

.main-profile-content .dashboard-icon {
  background: var(--primary-color-very-light);
}

.main-profile-content .dashboard-icon > i {
  color: var(--primary-color);
}
</style>
