$(document).ready(function() {
    // Se obtiene la posicion del scroll por medio de el id del contenedor
    $(window).on('scroll', function() {
        let posicion = $('#pr').offset();
        if($(window).scrollTop()>= posicion.top)
        {
            $('header').removeClass('transparente');
        } else{
            $('header').addClass('transparente');
        }
    })
})