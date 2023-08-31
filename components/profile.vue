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

    <div class="main-profile-content">
      <div
        class="popup-content-padding"
        style="padding-top: 0; padding-bottom: 0"
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
          <a
            class="basic-button small-shadow"
            href="tel:+XXXXXXXX"
            target="_blank"
          >
            <i class="fas fa-phone-volume"></i>
            Anrufen
          </a>
          <a
            class="basic-button small-shadow"
            href="https://wa.me/XXXXXXXXXXX"
            target="_blank"
          >
            <i class="fab fa-whatsapp"></i>
            WhatsApp
          </a>
        </div>
      </div>

      <!-- Navigation buttons -->
      <div class="profile-navigation-buttons small-shadow">
        <button
          v-for="(item, index) in navigationSections"
          :key="index"
          @click="navigationButtonClicked(index)"
          :class="{ selected: displayedSection === index }"
        >
          <i :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </button>

        <div
          style="
            position: absolute;
            pointer-events: none;
            width: 100%;
            height: 1rem;
            bottom: 1rem;
            left: 0;
          "
          ref="profile-content-scroll-target"
        />
      </div>

      <div class="popup-content-padding">
        <!-- Section headline -->
        <div v-if="displayedSection !== null" class="content-section-headline">
          <div>
            <i :class="navigationSections[displayedSection].icon"></i>
            <span>{{ navigationSections[displayedSection].title }}</span>
          </div>
          <button
            v-if="showEditButton && !editMode"
            class="basic-button"
            @click="toggleEditMode"
          >
            Bearbeiten
          </button>
          <button
            v-else-if="showEditButton && editMode"
            class="basic-button"
            @click="toggleEditMode"
          >
            Fertig
          </button>
        </div>

        <!-- Content -->
        <profile-participant
          ref="contentSection"
          v-if="displayedSection === 0"
        />
        <profile-contacts
          ref="contentSection"
          v-else-if="displayedSection === 1"
        />
        <profile-checkin
          ref="contentSection"
          v-else-if="displayedSection === 2"
        />
        <profile-permissions
          ref="contentSection"
          v-else-if="displayedSection === 3"
        />
        <profile-booking
          ref="contentSection"
          v-else-if="displayedSection === 4"
        />
        <profile-transfer
          ref="contentSection"
          v-else-if="displayedSection === 5"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editMode: false,
      navigationSections: [
        {
          icon: 'fas fa-user',
          title: 'Teilnehmer',
          sectionId: 'participant',
          hasEdit: true,
        },
        {
          icon: 'fas fa-address-book',
          title: 'Kontakte',
          sectionId: 'contacts',
          hasEdit: true,
        },
        { icon: 'fas fa-user-check', title: 'Check-in', sectionId: 'check-in' },
        {
          icon: 'fas fa-shield-check',
          title: 'Erlaubnisse',
          sectionId: 'permissions',
        },
        { icon: 'fas fa-bookmark', title: 'Buchung', sectionId: 'booking' },
        { icon: 'fas fa-bus', title: 'Transfer', sectionId: 'transfer' },
      ],
      displayedSection: null,
    }
  },
  mounted() {
    const routeQuerySection = this.$route.query.section
    for (let i = 0; i < this.navigationSections.length; i++) {
      const { sectionId } = this.navigationSections[i]
      if (sectionId === routeQuerySection) {
        this.displayedSection = i
        break
      }
    }

    // scroll listener
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
    toggleEditMode() {
      this.setEditMode(!this.editMode)
    },
    setEditMode(newState) {
      this.editMode = newState
      try {
        if (this.displayedSectionAttributes.hasEdit)
          this.$refs.contentSection.setEdit(this.editMode)
      } catch (error) {
        console.error(error)
      }
    },
    navigationButtonClicked(index) {
      this.setEditMode(false)
      this.displayedSection = this.displayedSection === index ? null : index
      let sectionId = null
      if (this.displayedSection !== null) {
        sectionId = this.navigationSections[this.displayedSection].sectionId

        // scroll to content
        this.$nextTick().then(() => {
          this.$refs['profile-content-scroll-target'].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        })
      }

      // update URL parameters
      const currentParameters = this.$route.query || {}
      const params = { ...currentParameters }
      params.section = sectionId || ''
      this.addParamsToLocation(params)
    },
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
    addParamsToLocation(params) {
      if (history.pushState) {
        const newQuery = Object.keys(params)
          .map((key) => {
            return (
              encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
            )
          })
          .join('&')
        const newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?${newQuery}`
        window.history.pushState({ path: newUrl }, '', newUrl)
      }
    },
  },

  computed: {
    displayedSectionAttributes() {
      if (this.displayedSection === null) return null
      return this.navigationSections[this.displayedSection]
    },
    showEditButton() {
      if (!this.displayedSectionAttributes) return false
      return this.displayedSectionAttributes.hasEdit === true
    },
  },
}
</script>
