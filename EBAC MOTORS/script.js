$(document).ready(function() {
    $('#carousel-images').slick({
        autoplay: true,
    })

    $('.menu-hamburguer').on('click', function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(xx) xxxxx-xxxx'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            },
            mensagem: {
                required: false
            }
        },
        messages: {
            nome: 'Este campo é obrigatório.',
            email: 'Este campo é obrigatório.',
            telefone: 'Este campo é obrigatório.'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert('Por favor, preencha os campos requeridos.')
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');

        const nomeVeiculo = ($(this).parent().find('h3').text());

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})