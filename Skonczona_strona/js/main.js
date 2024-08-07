document.addEventListener('DOMContentLoaded', function () {

    // dodaje cień do nawigacji
    const nav = document.querySelector('.navbar')

    function addShadow() {
        if (window.scrollY >= 200) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }
    window.addEventListener('scroll', addShadow)


    // skrypt naprawiający nawigację (zamyka się po kliknięciu w cokolwiek na mobilce)
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });


    // slickJS
    $('.team-carousel').slick({
        autoplay: true,
        autoplaySpeed: 3500,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4
                }
            }
        ]
    });

});