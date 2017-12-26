$(document).ready(function() {

    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    // arrows animation--------------------------------------
    var firstArrow = "div.arrow-1";
    var secondArrow = "div.arrow-2";
    var thirdArrow = "div.arrow-3";
    var fourthArrow = "div.arrow-4";
    var fivthArrow = "div.arrow-5";
    function arrowsAnimation (arg) {
        $(arg).removeClass("filter");
        setTimeout(function(){
            $(arg).addClass("filter");
        }, 1000);

    }
    // var timerId1 = setTimeout(function arrowsAnimation() {
    //     $("div.arrow-1").removeClass("filter");
    //     setTimeout(function(){
    //                 $("div.arrow-1").addClass("filter");
    //             }, 2000);
    //     timerId1 = setTimeout(arrowsAnimation, 10000);
    // }, 1000);
    //

    var timerId = setInterval(function() {
        setTimeout(function() {arrowsAnimation(firstArrow)}, 1000);
        setTimeout(function() {arrowsAnimation(secondArrow)}, 1500);
        setTimeout(function() {arrowsAnimation(thirdArrow)}, 2000);
        setTimeout(function() {arrowsAnimation(fourthArrow)}, 2500);
        setTimeout(function() {arrowsAnimation(fivthArrow)}, 3000);
    }, 3500);

    // arrows animation--------------------------------------

    // open-more
    $( ".more" ).on( "click", function() {
        $(this).parent(".comment > p").addClass("active");
    });

    // var that = null;
    // $('.slide').click(function () {
    //     that=this;
    // })

    // $('article').readmore({
    //     maxHeight: 320,
    //     moreLink: '<a href="#"><</a>',
    //     lessLink: '<a href="#">-</a>',
    //     afterToggle: function () {
    //         $(that).find('.img').toggleClass('hide');
    //     }
    // });


    $('.slider-comments').slick({
        dots: true,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // <a href="#" class="readmore-js-toggle">Детальніше</a>
    // $( ".readmore-js-toggle" ).click(function() {
    //     $('.slide > .img').toggleClass('hide');
    //
    // });

    // year
    var today = new Date();
    var yr = today.getFullYear();
    $("#date").append(yr);



});
