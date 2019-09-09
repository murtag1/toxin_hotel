import Inputmask from 'inputmask';

const dateInputs = document.querySelectorAll('.text-field_date-mask .text-field__input');
dateInputs.forEach((input) => {
  Inputmask('datetime', { inputFormat: 'dd.mm.yyyy', placeholder: 'ДД.ММ.ГГГГ' }).mask(input);
});
