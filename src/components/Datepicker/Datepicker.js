import './air-datepicker/js/air-datepicker';

class Datepicker {
  constructor(container, options = {}) {
    this._container = container;
    this._setSettings(options);
    this._addApplyBtn();
    this._MONTH = {
      '00': 'янв',
      '01': 'фев',
      '02': 'март',
      '03': 'апр',
      '04': 'май',
      '05': 'июнь',
      '06': 'июль',
      '07': 'авг',
      '08': 'сен',
      '09': 'окт',
      '10': 'ноя',
      '11': 'дек',
    };
  }

  subscribeToChangeSelect(subscriber) {
    if (typeof subscriber !== 'function') return;
    this._changeSelectSubscriber = subscriber;
  }

  _fixDate(date) {
    if (date < 10) return `0${date}`;
    return date;
  }

  _createCustomDate(date) {
    const day = this._fixDate(date.getDate());
    const month = this._fixDate(date.getMonth());
    const year = this._fixDate(date.getFullYear());
    const monthName = this._MONTH[month];
    return {
      day,
      month,
      year,
      monthName,
    };
  }

  _broadcastChangeSelect(formattedDate, date) {
    if (!date) return;
    if (typeof this._changeSelectSubscriber !== 'function') return;
    const customDate = [this._createCustomDate(date[0])];
    if (date[1]) customDate.push(this._createCustomDate(date[1]));
    this._changeSelectSubscriber(customDate);
  }

  _setSettings(options) {
    const settings = $.extend({
      language: 'ru',
      inline: true,
      clearButton: true,
      multipleDates: 2,
      range: true,
      navTitles: {
        days: 'MM yyyy',
      },
      prevHtml: '<i class="icon-arrow-left"></i>',
      nextHtml: '<i class="icon-arrow-right"></i>',
      onSelect: this._broadcastChangeSelect.bind(this),
    }, options);
    $(this._container).datepicker(settings);
  }

  _addApplyBtn() {
    this._buttonsContainer = this._container.querySelector('.datepicker--buttons');
    const applyBtn = document.createElement('div');
    applyBtn.className = 'datepicker--apply-btn';
    applyBtn.innerHTML = 'применить';
    this._buttonsContainer.append(applyBtn);
    this._applyBtn = applyBtn;
  }
}

export default Datepicker;
