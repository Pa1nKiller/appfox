$(document).ready(function () {
    $('.spoiler__title').click(function (event) {
        if ($('.spoiler').hasClass('one')) {
            $('.spoiler__item').not($(this).closest()).removeClass('active');
            $('.spoiler__title').not($(this)).removeClass('active');
            $('.spoiler__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
        if ($(this).hasClass('active')) {
            $(this).parent().toggleClass('active');
        }
    });
});