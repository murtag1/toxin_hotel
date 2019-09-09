class ExpandableList {
  constructor(listContainer) {
    this._list = listContainer.querySelector('.exp-checkbox-list__list');
    this._icon = listContainer.querySelector('.exp-checkbox-list__icon');
    this.button = listContainer.querySelector('.exp-checkbox-list__button');
    this._listContainer = listContainer;

    this.button.addEventListener('click', this._toggleActiveClass.bind(this));
  }

  _toggleActiveClass() {
    if (this._list.classList.contains('exp-checkbox-list__list_active')) {
      this._list.classList.remove('exp-checkbox-list__list_active');
      this._icon.classList.remove('exp-checkbox-list__icon-wrap_active');
    } else {
      this._list.classList.add('exp-checkbox-list__list_active');
      this._icon.classList.add('exp-checkbox-list__icon-wrap_active');
    }
  }
}

const lists = document.querySelectorAll('.exp-checkbox-list');
lists.forEach((list) => {
  new ExpandableList(list);
});
