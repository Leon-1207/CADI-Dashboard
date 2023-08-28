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
      <img
        class="profile-img"
        style="margin-right: 1rem"
        src="~/static/profileImg.png"
        alt="Profilbild"
      />
      <profile-head-content />
      <div>
        <a class="basic-button" href="tel:+XXXXXXXX" target="_blank">
          <i class="fas fa-phone-volume"></i>
        </a>
        <a
          class="basic-button"
          href="https://wa.me/XXXXXXXXXXX"
          target="_blank"
        >
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>

    <div
      class="main-profile-content popup-content-padding"
      style="padding-top: 0"
    >
      <div class="traveler-stats-container">
        <span class="traveler-name">Lisa Tester</span>
        <div class="traveler-stats">
          <div>
            <span class="value">N-123</span>
            <span class="label">
              <i class="fas fa-bed"></i>
              Zimmer
            </span>
          </div>
          <div class="v-line"></div>
          <div>
            <span class="value">17</span>
            <span class="label">Alter</span>
          </div>
          <div class="v-line"></div>
          <div>
            <a class="value" href="tel:+4917642404082">Max</a>
            <div class="label"><i class="fas fa-users-crown"></i> Teamer</div>
          </div>
        </div>
      </div>

      <!-- Contact buttons -->
      <div class="static-contact-buttons">
        <a class="basic-button" href="tel:+XXXXXXXX" target="_blank">
          <i class="fas fa-phone-volume"></i>
          Anrufen
        </a>
        <a
          class="basic-button"
          href="https://wa.me/XXXXXXXXXXX"
          target="_blank"
        >
          <i class="fab fa-whatsapp"></i>
          WhatsApp
        </a>
      </div>

      <!-- Navigation buttons -->
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

      <div style="background: red; width: 100%; height: 600px"></div>
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
