$(document).ready(function(){
$('.rabot-slider').slick({
    arrows:false,
    slidesToShow:2,
});
});





$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        if ($('#upbutton').is(':hidden')) {
            $('#upbutton').css({opacity : 1}).fadeIn('slow');
        }
    } else { $('#upbutton').stop(true, false).fadeOut('fast'); }
});
$('#upbutton').click(function() {
    $('html, body').stop().animate({scrollTop : 0}, 300);
});