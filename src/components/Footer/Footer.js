function createFooter(footer) {
  const colHeaders = footer.querySelectorAll('.footer__col-header');

  function toggleActive() {
    if (this.nextElementSibling.classList.contains('active')) {
      this.nextElementSibling.classList.remove('active');
    } else {
      this.nextElementSibling.classList.add('active');
    }
  }

  colHeaders.forEach((colHeader) => {
    colHeader.addEventListener('click', toggleActive);
  });
}

const footers = document.querySelectorAll('.footer');
footers.forEach((footer) => {
  createFooter(footer);
});
