$(document).ready(() => {

    $('.navbar li').on('mouseenter', event() => {
        $(event.currentTarget).addClass('hoverWhite')}).on('mouseleave', event => {
        $(event.currentTarget).removeClass('hoverWhite')
        })
    }

});