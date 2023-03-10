$(document).ready(function () {
    $(".caroussel").slick({
        dots: true,
        adaptiveHeight: true,
        dots: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        lazyLoad: "ondemand",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
});
