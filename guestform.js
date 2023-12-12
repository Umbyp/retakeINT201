// import { createGuestList } from './data/guestdata.js'
const createGuestList = require('./data/guestdata.js')

const guestList = createGuestList()
function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList

  // 1. register event for searching and adding
  function registerEventHandling() {
    const searchInput = document.getElementById('search-input')
    searchInput.addEventListener('keyup', () => {
      searchGuest(searchInput.value)
    })
    document.getElementById('add-guest-btn').addEventListener('click', () => {
      addGuest()
    })
  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    const div = document.createElement('div')
    const spanGuest = document.createElement('span')
    spanGuest.textContent = `${guestItem.firstname} ${guestItem.lastname}`
    const spanRemove = document.createElement('span')
    spanRemove.setAttribute('class', 'remove-icon')
    spanRemove.setAttribute('id', `${guestItem.firstname}-${guestItem.lastname}`)
    spanRemove.setAttribute('style', 'cursor:pointer;color:red')
    spanRemove.textContent = '[X]'
    spanRemove.addEventListener('click', () => {
      removeGuest(guestItem)
    })
    div.appendChild(spanGuest)
    div.appendChild(spanRemove)
    document.getElementById('display-area').appendChild(div)
  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    document.getElementById('display-area').textContent = ''
    guestResult.forEach(guest => {
      displayGuest(guest)
    })
  }

  // 4. Function to search and display matching guests
  function searchGuest(event) {
    displayGuests(guests.searchGuests(event))
  }

  // 5. Function to add a new guest
  function addGuest() {
    const firstNameInput = document.getElementById('firstname-input')
    const lastNameInput = document.getElementById('lastname-input')
    const newGuestList = guests.addNewGuest(firstNameInput.value, lastNameInput.value)
    displayGuest(newGuestList[newGuestList.length - 1])
    firstNameInput.value = ''
    lastNameInput.value = ''
  }

  // 6. Function to remove a guest
  function removeGuest(event) {
    guests.removeGuest(event)
    displayGuests(guests.getAllGuests())
  }

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest
  }
}
module.exports = guestForm
// export { guestForm }
// const { registerEventHandling, displayGuests } = guestForm()
// registerEventHandling()
// displayGuests(guestList.getAllGuests())