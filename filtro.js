$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }

    });
    
    let musica = $('#enlace-musica').offset().top,
        nosotros = $('#enlace-nosotros').offset().top,
        galeria = $('#enlace-galeria').offset().top,
        contacto = $('#enlace-contacto').offset().top;
       


    
    window.addEventListener('resize', function(){
        let musica = $('#enlace-musica').offset().top,
        nosotros = $('#enlace-nosotros').offset().top,
        galeria = $('#enlace-galeria').offset().top,
        contacto = $('#enlace-contacto').offset().top;
            
    });


    $('#enlace-inicio').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);

    });
    $('#enlace-musica').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 1615
        }, 600);

    });
    $('#enlace-nosotros').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 916
        }, 600);

    });
    $('#enlace-galeria').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 2120
        }, 600);

    });
    $('#enlace-contacto').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 24925
        }, 600);

    });

});
