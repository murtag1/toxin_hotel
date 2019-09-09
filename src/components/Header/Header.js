class Header {
  constructor(container) {
    this._hamburger = container.querySelector('.header__hamburger');
    this._menu = container.querySelector('.header__nav');
    this._navItems = container.querySelectorAll('.header__nav-item');

    this._registration = container.querySelector('.header__registration');
    this._signIn = container.querySelector('.header__sign-in');
    this._searchRoom = container.querySelector('.header__search-rooms');

    this._signInBtn = container.querySelector('.header__sigh-in-btn');
    this._registrationBtn = container.querySelector('.header__registration-btn');
    this._searchRoomBtn = container.querySelector('.header__search-room-btn');

    this._regSignInBtn = document.querySelector('.registration__sign-in-btn');
    this._signinRegistrationBtn = document.querySelector('.sign-in__registration-btn');

    this._addEventListeners();
  }

  _addActiveClass(elem) {
    elem.classList.add('active');
  }

  _removeActiveClass(elem) {
    elem.classList.remove('active');
  }

  _showRegistration() {
    this._addActiveClass(this._registration);
    this._removeActiveClass(this._signIn);
    this._removeActiveClass(this._searchRoom);
  }

  _showSignIn() {
    this._addActiveClass(this._signIn);
    this._removeActiveClass(this._registration);
    this._removeActiveClass(this._searchRoom);
  }

  _showSearchRoom() {
    this._addActiveClass(this._searchRoom);
    this._removeActiveClass(this._registration);
    this._removeActiveClass(this._signIn);
  }

  _toggleNavItemActive(event) {
    const navItem = event.currentTarget;
    if (navItem.classList.contains('active')) {
      navItem.classList.remove('active');
    } else {
      navItem.classList.add('active');
    }
  }

  _toggleHamburgerActive() {
    if (this._hamburger.classList.contains('is-active')) {
      this._hamburger.classList.remove('is-active');
      this._menu.classList.remove('active');
    } else {
      this._hamburger.classList.add('is-active');
      this._menu.classList.add('active');
    }
  }

  _addEventListeners() {
    this._hamburger.addEventListener('click', this._toggleHamburgerActive.bind(this));
    this._navItems.forEach((item) => {
      item.addEventListener('click', this._toggleNavItemActive.bind(this));
    });

    this._registrationBtn.addEventListener('click', this._showRegistration.bind(this));

    this._signInBtn.addEventListener('click', this._showSignIn.bind(this));

    this._searchRoomBtn.addEventListener('click', this._showSearchRoom.bind(this));

    this._regSignInBtn.addEventListener('click', this._showSignIn.bind(this));

    this._signinRegistrationBtn.addEventListener('click', this._showRegistration.bind(this));
  }
}

const headers = document.querySelectorAll('.header');
headers.forEach((header) => {
  new Header(header);
});
