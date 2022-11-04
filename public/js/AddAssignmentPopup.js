let popup = document.getElementById('assignment_popup');
let event_popup = document.getElementById('event_popup');

function openPopup() {
  popup.classList.add('open-assignment_popup');
}

function closePopup() {
  popup.classList.remove('open-assignment_popup');
}

function openPopup2() {
  event_popup.classList.add('open-event_popup');
}

function closePopup2() {
  event_popup.classList.remove('open-event_popup');
}

function clearFields() {
  document.getElementById("Aname").value = "";
  document.getElementById("reading").checked = false;
  document.getElementById("Description").value = "";
  document.getElementById("Shortcut").checked = false;
}

function clearFields2() {
  document.getElementById("Ename").value = "";
  document.getElementById("EventDescription").value = "";
  document.getElementById("Stime").value = "";
  document.getElementById("Etime").value = "";
  document.getElementById("Recurring").checked = false;
}