$(document).ready(function() {
    $('#carousel-images').slick({
        autoplay: true,
    })

    $('.menu-hamburguer').on('click', function() {
        $('nav').slideToggle();
    })
})