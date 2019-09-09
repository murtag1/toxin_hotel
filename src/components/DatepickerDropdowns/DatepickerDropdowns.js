import Datepicker from '../Datepicker/Datepicker';

class DatepickerDropdowns {
  constructor(container) {
    this._container = container;

    this._datepickerElem = container.querySelector('.datepicker-dropdowns__datepicker .datepicker');
    this._datepickerParentElem = container.querySelector('.datepicker-dropdowns__datepicker');

    this._firstInput = container.querySelector('.datepicker-dropdowns__first-dropdown .date-dropdown__input');
    if (this._firstInput === null) {
      this._firstInput = container.querySelector('.datepicker-dropdowns__first-dropdown .text-field__input');
    }
    this._secondInput = container.querySelector('.datepicker-dropdowns__second-dropdown .date-dropdown__input');

    this._datepicker = new Datepicker(this._datepickerElem);
    this._datepicker.subscribeToChangeSelect(this._changeDateInputs.bind(this));

    this._datepickerApplyBtn = container.querySelector('.datepicker-dropdowns__datepicker .datepicker--apply-btn');

    this._addEventListeners();
  }

  _toggleDatepickerActive(event) {
    const path = event.path ? event.path : event.composedPath();
    for (let i = 0; i < path.length; i += 1) {
      if (path[i] === this._datepickerElem
        && event.target !== this._datepickerApplyBtn) return;
    }
    if (this._datepickerParentElem.classList.contains('datepicker-dropdowns__datepicker_active')) {
      this._datepickerParentElem.classList.remove('datepicker-dropdowns__datepicker_active');
    } else {
      this._datepickerParentElem.classList.add('datepicker-dropdowns__datepicker_active');
    }
  }

  _changeDateInputs(date) {
    if (this._secondInput) {
      this._firstInput.value = `${date[0].day}.${date[0].month}.${date[0].year}`;
      if (date[1]) this._secondInput.value = `${date[1].day}.${date[1].month}.${date[1].year}`;
    } else {
      this._firstInput.value = `${date[0].day} ${date[0].monthName}`;
      if (date[1]) this._firstInput.value += ` - ${date[1].day} ${date[1].monthName}`;
    }
  }

  _addEventListeners() {
    this._container.addEventListener('click', this._toggleDatepickerActive.bind(this));
  }
}

const datepickerDropdownsCollection = document.querySelectorAll('.datepicker-dropdowns');
datepickerDropdownsCollection.forEach((dropdown) => {
  new DatepickerDropdowns(dropdown);
});

export default DatepickerDropdowns;
