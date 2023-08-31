<template>
  <div>
    <div class="container">
      <div class="dashboard">
        <span class="dashboard-headline"> Hallo Benjamin </span>

        <div class="box small-box">
          <span class="title">
            <span>Neue Anmeldungen</span>
            <div class="dashboard-icon">
              <i class="fas fa-user-plus"></i>
            </div>
          </span>
          <span class="key-info"> 3 Anmeldungen </span>
          <div class="box-footer">
            <button
              class="link"
              id="show-new-customers-button"
              style="float: right"
            >
              Details <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div class="box small-box">
          <span class="title">
            <span>Bisher angemeldet und bestätigt</span>
            <div class="dashboard-icon">
              <i class="fas fa-users"></i>
            </div>
          </span>
          <span class="key-info"> 44 Personen </span>
          <div class="box-footer">
            <button
              class="link"
              id="show-all-customers-button"
              style="float: right"
            >
              Details <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div
          id="new-customers-box"
          class="box box-closed toggle-box"
          style="height: 0"
        >
          <span class="title">
            <span>Neue Anmeldungen</span>
            <div class="dashboard-icon">
              <i class="fas fa-user-plus"></i>
            </div>
          </span>

          <div class="group">
            <input id="search" type="text" required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>
              <i class="fas fa-search"></i>
              <span>Suche nach Reisenden</span>
            </label>
          </div>

          <table>
            <thead>
              <tr>
                <th data-sort="asc">Vorname</th>
                <th data-sort="">Nachname</th>
                <th data-sort="">Anmeldedatum</th>
              </tr>
            </thead>
            <tbody>
              <tr @click="openPopup">
                <td>John</td>
                <td>Doe</td>
                <td>2021-06-15</td>
              </tr>
              <tr @click="openPopup">
                <td>Jane</td>
                <td>Smith</td>
                <td>2021-07-02</td>
              </tr>
              <tr @click="openPopup">
                <td>Michael</td>
                <td>Johnson</td>
                <td>2021-08-10</td>
              </tr>
              <tr @click="openPopup">
                <td>Sarah</td>
                <td>Williams</td>
                <td>2021-09-05</td>
              </tr>
              <!-- Add more rows here -->
            </tbody>
          </table>

          <div class="box-footer">
            <button
              id="hide-new-customers-button"
              class="link"
              style="float: right"
            >
              Schließen
            </button>
          </div>
        </div>

        <div
          id="all-customers-box"
          class="box box-closed toggle-box"
          style="height: 0"
        >
          <span class="title">
            <span>Bisher angemeldet und bestätigt</span>
            <div class="dashboard-icon">
              <i class="fas fa-users"></i>
            </div>
          </span>
          <p>Max Mustermann</p>
          <p>Tim Mustermann</p>
          <p>Tim Tester</p>
          <div class="box-footer">
            <button
              id="hide-all-customers-button"
              class="link"
              style="float: right"
            >
              Schließen
            </button>
          </div>
        </div>

        <div class="box small-box">
          <span class="title">
            <span>Anmeldung teilen</span>
            <div class="dashboard-icon">
              <i class="fas fa-share-alt"></i>
            </div>
          </span>
          <div class="option-list">
            <button class="option-with-icon">
              <i class="fas fa-arrow-right"></i>
              <span> Zur Anmeldung </span>
            </button>
            <button class="option-with-icon">
              <i class="fas fa-copy"></i>
              <span class="link"> Link kopieren </span>
            </button>
            <button class="option-with-icon">
              <i class="fab fa-whatsapp"></i>
              <span class="link"> WhatsApp </span>
            </button>
            <button class="option-with-icon">
              <i class="fas fa-at"></i>
              <span class="link"> E-Mail </span>
            </button>
            <button class="option-with-icon">
              <i class="fas fa-qrcode"></i>
              <span class="link"> Download QR-Code </span>
            </button>
          </div>
        </div>

        <div class="box small-box">
          <span class="title">
            <span>Ausschreibung ansehen</span>
            <div class="dashboard-icon">
              <i class="fas fa-file-alt"></i>
            </div>
          </span>
          <a href="">Rom Wallfahrt 2024</a>
        </div>

        <div class="box">
          <p>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea <a href="">takimata sanctus</a> est Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam
            <a href="">nonumy eirmod tempor invidunt</a> ut labore et dolore
            magna aliquyam erat, sed diam voluptua.
          </p>
        </div>
      </div>
    </div>

    <!-- Popup -->
    <profile-popup ref="popup" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  mounted() {
    this.toggleDashboardBoxesJS()
    this.tableJS()
  },

  methods: {
    openPopup() {
      this.$refs.popup.openPopup()
    },
    tableJS() {
      // JavaScript for sorting the table
      const table = window.document.querySelector('table')
      const headers = table.querySelectorAll('th')
      const icons = ['&uarr;', '&darr;', '↑', '↓']
      headers.forEach(function (header) {
        header.addEventListener('click', function () {
          const sortOrder = this.dataset.sort === 'asc' ? 'desc' : 'asc'
          const columnIndex = this.cellIndex

          sortTable(columnIndex, sortOrder)
          this.dataset.sort = sortOrder

          // Reset icons for all headers
          headers.forEach(function (header) {
            let textWithoutIcons = header.textContent
            icons.forEach(
              (iconStr) =>
                (textWithoutIcons = textWithoutIcons.replace(iconStr, ''))
            )
            header.innerHTML = textWithoutIcons.trim()
          })

          // Set icon for the clicked header
          const icon = sortOrder === 'asc' ? icons[0] : icons[1]
          this.innerHTML = `${this.textContent} ${icon}`
        })
      })

      function sortTable(columnIndex, sortOrder) {
        const tbody = table.querySelector('tbody')
        const rows = Array.from(tbody.querySelectorAll('tr'))

        rows.sort(function (a, b) {
          const aValue = a.cells[columnIndex].textContent.trim()
          const bValue = b.cells[columnIndex].textContent.trim()

          if (sortOrder === 'asc') {
            return aValue.localeCompare(bValue)
          } else {
            return bValue.localeCompare(aValue)
          }
        })

        while (tbody.firstChild) {
          tbody.removeChild(tbody.firstChild)
        }

        rows.forEach(function (row) {
          tbody.appendChild(row)
        })
      }

      // JavaScript for searching the table
      const searchInput = window.document.getElementById('search')
      searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase()
        const rows = table.querySelectorAll('tbody tr')

        rows.forEach(function (row) {
          const cells = row.querySelectorAll('td')
          let found = false

          cells.forEach(function (cell) {
            const cellValue = cell.textContent.toLowerCase()

            if (cellValue.includes(searchTerm)) {
              found = true
            }
          })

          if (found) {
            row.style.display = ''
          } else {
            row.style.display = 'none'
          }
        })
      })
    },
    toggleDashboardBoxesJS() {
      const ANIMATION_DURATION = 300
      const showNewCustomersButton = window.document.getElementById(
        'show-new-customers-button'
      )
      const hideNewCustomersButton = window.document.getElementById(
        'hide-new-customers-button'
      )
      const newCustomersBox =
        window.document.getElementById('new-customers-box')
      const showAllCustomersButton = window.document.getElementById(
        'show-all-customers-button'
      )
      const hideAllCustomersButton = window.document.getElementById(
        'hide-all-customers-button'
      )
      const allCustomersBox =
        window.document.getElementById('all-customers-box')

      function setVisibility(box, visibility) {
        if (box.classList.contains('box-closed') === visibility) {
          box.classList.toggle('box-closed')
          box.style.height = visibility ? `${box.scrollHeight + 16 * 2}px` : 0
        }
      }

      function scrollToBoxAfterDelay(box) {
        const delay = Math.round(ANIMATION_DURATION / 2)
        setTimeout(() => box.scrollIntoView({ behavior: 'smooth' }), delay)
      }

      showNewCustomersButton.addEventListener('click', () => {
        const delay = allCustomersBox.classList.contains('box-closed')
          ? 0
          : ANIMATION_DURATION
        setTimeout(() => {
          setVisibility(newCustomersBox, true)
          scrollToBoxAfterDelay(newCustomersBox)
        }, delay)
        setVisibility(allCustomersBox, false)
      })
      hideNewCustomersButton.addEventListener('click', () => {
        setVisibility(newCustomersBox, false)
      })
      showAllCustomersButton.addEventListener('click', () => {
        const delay = newCustomersBox.classList.contains('box-closed')
          ? 0
          : ANIMATION_DURATION
        setTimeout(() => {
          setVisibility(allCustomersBox, true)
          scrollToBoxAfterDelay(allCustomersBox)
        }, delay)
        setVisibility(newCustomersBox, false)
      })
      hideAllCustomersButton.addEventListener('click', () => {
        setVisibility(allCustomersBox, false)
      })
    },
  },
}
</script>
