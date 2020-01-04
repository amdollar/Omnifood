    /* --- STICKY */



    $(document).ready(function () {
        $('.js-section-features').waypoint(function (direction) {
            if (direction == "down") {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        }, {
            offset: '100px;'
        });



        /* SCROLL TO BUTTONS */
        $('.js-scroll-to-plans').click(function () {
            $('html,body').animate({
                scrollTop: $('.js-section-plans').offset().top
            }, 1000);

        });

        $('.js-scroll-to-features').click(function () {
            $('html,body').animate({
                scrollTop: $('.js-section-features').offset().top
            }, 1000);

        });

        /*  SMOOTH- SCROLLING */
        $('a[href*="#"]')
            .not('[href="#0"]')
            .click(function (event) {
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function () {
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            }, {
                offset: '10%'
            });


        $('.js-wp-1').waypoint(function (direction) {
            $('.js-wp-1').addClass('animated fadeIn');
        }, {
            offset: '50%'
        });

        $('.js-wp-2').waypoint(function (direction) {
            $('.js-wp-2').addClass('animated fadeInUp');
        }, {
            offset: '50%'
        });

        $('.js-wp-3').waypoint(function (direction) {
            $('.js-wp-3').addClass('animated fadeIn');
        }, {
            offset: '50%'
        });

        $('.js-wp-4').waypoint(function (direction) {
            $('.js-wp-4').addClass('animated pulse');
        }, {
            offset: '50%'
        });


        var map = new GMaps({
            div: '.map',
            lat: 17.4219756,
            lng: 78.1
        });

        map.addMarker({
            lat: 17.4219756,
            lng: 78.1,
            title: 'Kapil',
            infoWindow: {
                content: '<p>Out hyd office.</p>'
            }
        });

    });
