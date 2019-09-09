class Dropdown {
  constructor(container) {
    this._list = container.querySelector('.dropdown__list');
    this._button = container.querySelector('.dropdown__button');
    this._buttonText = container.querySelector('.dropdown__button-text');
    this._items = container.querySelectorAll('.dropdown__item');
    this._cleanBtn = container.querySelector('.dropdown__clean-btn');
    this._applyBtn = container.querySelector('.dropdown__apply-btn .button__content');
    this._container = container;
    this._type = container.dataset.dropdownType;
    this._buttonInitContent = this._buttonText.textContent;
    this._addEventListeners();
  }

  _setDropdownContent() {
    this._buttonText.innerHTML = this._buttonInitContent;
  }

  _toggleListActive() {
    if (this._list.classList.contains('dropdown__list_active')) {
      this._button.classList.remove('dropdown__button_active');
      this._list.classList.remove('dropdown__list_active');
    } else {
      this._button.classList.add('dropdown__button_active');
      this._list.classList.add('dropdown__list_active');
    }
  }

  _changeButtonContent() {
    let itemName;

    this._buttonText.innerHTML = '';

    if (this._type === 'picking') {
      let numThingsInItem;
      let currentItem;

      for (let i = 0; i < this._items.length; i += 1) {
        currentItem = this._items[i];
        numThingsInItem = currentItem.dataset.num;

        if (numThingsInItem > 0) {
          itemName = currentItem.querySelector('.dropdown__name-item').textContent;
          this._buttonText.innerHTML += `${numThingsInItem} ${itemName}, `;
        }
      }
      if (this._buttonText.innerHTML === '') this._buttonText.innerHTML = 'комплектация';
    }
    if (this._type === 'guests') {
      let totalGuestsNum = 0;
      let numThingsInItem;
      let currentItem;

      for (let i = 0; i < this._items.length; i += 1) {
        currentItem = this._items[i];
        numThingsInItem = +currentItem.dataset.num;
        totalGuestsNum += numThingsInItem;
        itemName = currentItem.querySelector('.dropdown__name-item').textContent;

        if (itemName === 'младенцы' && numThingsInItem !== 0) {
          this._buttonText.innerHTML += `${currentItem.dataset.num} младенец`;
        }
      }
      if (totalGuestsNum > 0) this._buttonText.innerHTML = `${totalGuestsNum} гостя, ${this._buttonText.innerHTML}`;
      if (this._buttonText.innerHTML === '') this._buttonText.innerHTML = 'Сколько гостей';
    }
  }

  _changeNum(event) {
    const selectedButton = event.target;
    const numContainer = selectedButton.parentNode.querySelector('.dropdown__item-num');
    const itemWithSelectedButton = selectedButton.parentNode.parentNode;
    const numThingsInItem = +itemWithSelectedButton.dataset.num;
    const isClickOnMinusBtn = selectedButton.classList.contains('dropdown__minus-btn') && numThingsInItem > 0;
    if (isClickOnMinusBtn) {
      itemWithSelectedButton.dataset.num = numThingsInItem - 1;
      numContainer.textContent = itemWithSelectedButton.dataset.num;
      this._changeButtonContent();
    }
    const isClickOnPlusBtn = selectedButton.classList.contains('dropdown__plus-btn');
    if (isClickOnPlusBtn) {
      itemWithSelectedButton.dataset.num = numThingsInItem + 1;
      numContainer.textContent = itemWithSelectedButton.dataset.num;
      this._changeButtonContent();
    }
  }

  _cleanItems() {
    for (let i = 0; i < this._items.length; i += 1) {
      const numContainer = this._items[i].querySelector('.dropdown__item-num');
      numContainer.textContent = 0;
      this._items[i].dataset.num = 0;
    }
    this._setDropdownContent();
  }

  _addEventListeners() {
    this._button.addEventListener('click', this._toggleListActive.bind(this));
    this._applyBtn.addEventListener('click', this._toggleListActive.bind(this));
    this._cleanBtn.addEventListener('click', this._cleanItems.bind(this));
    this._list.addEventListener('click', this._changeNum.bind(this));
  }
}

const dropdownsCollection = document.querySelectorAll('.dropdown');
dropdownsCollection.forEach((dropdown) => {
  new Dropdown(dropdown);
});

export default Dropdown;
