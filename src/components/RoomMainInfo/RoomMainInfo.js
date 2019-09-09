import './owl-carousel/js/owl.carousel';

function createMainRoomInfo(room) {
  const carousel = room.querySelector('.room-main-info__carousel');
  $(carousel).owlCarousel({
    items: 1,
    nav: true,
    margin: 0,
    navText: ['<i class="room-main-info__icon-left icon-chevron-down"></i>',
      '<i class="room-main-info__icon-right icon-chevron-down"></i>'],
  });
}

const rooms = document.querySelectorAll('.room-main-info');
rooms.forEach((room) => {
  createMainRoomInfo(room);
});
