import $ from 'jquery'
import mixitup from 'mixitup'
import 'magnific-popup'
import 'jquery.nicescroll'


const setBgElements = document.querySelectorAll('.set-bg');
setBgElements.forEach(element => {
    const bg = element.getAttribute('data-setbg');
    element.style.backgroundImage = `url(${bg})`;
});

$('.filter__controls li').on('click', function () {
    $('.filter__controls li').removeClass('active');
    $(this).addClass('active');
});
if ($('.property__gallery').length > 0) {
    var containerEl = document.querySelector('.property__gallery');
    var mixer = mixitup(containerEl);
}
//Canvas Menu
$(".canvas__open").on('click', function () {
    $(".offcanvas-menu-wrapper").addClass("active");
    $(".offcanvas-menu-overlay").addClass("active");
});

$(".offcanvas-menu-overlay, .offcanvas__close").on('click', function () {
    $(".offcanvas-menu-wrapper").removeClass("active");
    $(".offcanvas-menu-overlay").removeClass("active");
});
$('.image-popup').magnificPopup({
    type: 'image'
});


$(".nice-scroll").niceScroll({
    cursorborder: "",
    cursorcolor: "#dddddd",
    boxzoom: false,
    cursorwidth: 5,
    background: 'rgba(0, 0, 0, 0.2)',
    cursorborderradius: 50,
    horizrailenabled: false
});