import Inputmask from 'inputmask';

function addMask(datedropdown) {
  const input = datedropdown.querySelector('input');
  Inputmask('datetime', { inputFormat: 'dd.mm.yyyy', placeholder: 'ДД.ММ.ГГГГ' }).mask(input);
}

const dateDropdowns = document.querySelectorAll('.date-dropdown');
dateDropdowns.forEach((dropdown) => {
  addMask(dropdown);
});
