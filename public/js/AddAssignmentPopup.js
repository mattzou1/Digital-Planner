let popup = document.getElementById('assignment_popup');
let event_popup = document.getElementById('event_popup');

function openPopup() {
  popup.classList.add('open-assignment_popup');
}

function openPopup2() {
  event_popup.classList.add('open-event_popup');
}

function closePopup() {
  popup.classList.remove('open-assignment_popup');
}

function closePopup2() {
  event_popup.classList.remove('open-event_popup');
}