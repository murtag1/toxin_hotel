class Slider {
  constructor(container, options = {}) {
    this._sliderBody = container.querySelector('.slider__body');
    this._range = container.querySelector('.slider__range');
    this._setSliderSettings(options);
  }

  _changeRangeContent(event, ui) {
    if (event.type === 'slide') {
      let rangeContent = `${ui.values[0]}₽ - ${ui.values[1]}₽`;
      rangeContent = rangeContent.replace(/(\d)(\d{3}₽)/ig, '$1 $2');
      this._range.innerHTML = rangeContent;
    }
    if (event.type === 'slidecreate') {
      const values = $(this._sliderBody).slider('values');
      let rangeContent = `${values[0]}₽ - ${values[1]}₽`;
      rangeContent = rangeContent.replace(/(\d)(\d{3}₽)/ig, '$1 $2');
      this._range.innerHTML = rangeContent;
    }
  }

  _setSliderSettings(options) {
    const settings = $.extend({
      min: 0,
      max: 20000,
      step: 500,
      range: true,
      values: [5000, 10000],
      slide: this._changeRangeContent.bind(this),
      create: this._changeRangeContent.bind(this),
    }, options);
    $(this._sliderBody).slider(settings);
  }
}

const slidersCollection = document.querySelectorAll('.slider');
slidersCollection.forEach((slider) => {
  new Slider(slider);
});

export default Slider;
