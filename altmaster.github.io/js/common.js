(function () {
    var sliderTop = new Swiper('.slidertop-container', {
            effect: 'coverflow',
            initialSlide: 1,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            activeIndex: 0,
            coverflow: {
                rotate: 0,
                stretch: 0,
                depth: 250,
                modifier: 1
            }
        }),
        mobileHead = document.querySelector('.main-head'),
        mobileHeadToggleButton = document.querySelector('.menu-toogle'),
        body = document.querySelector('body'),
        dropDown = document.querySelectorAll('.js-dropdown'),
        dropItem = document.querySelectorAll('.drop-item'),
        minusButton = document.querySelector('.minus-but'),
        plusButton = document.querySelector('.plus-but'),
        counter = document.querySelector('.count'),
        totalPrice = document.querySelector('.tottal-price');

    var $videoPopup = $('.popup-youtube, .popup-vimeo, .popup-gmaps'),
        $bigSliderProductCart = $('.sliderbottom-containe-slick'),
        $sliderChoiseBuyer = $('.sliderbottom-container-choise'),
        $smallThumbleSlider = $('.product-object'),
        $thumbleGalerey = $('.product-object-glerey');

    $videoPopup.magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $sliderChoiseBuyer.owlCarousel({
        margin: 20,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 2000,
        navText: ['',''],
        responsive: {
            0: {
                items: 1
            },
            540: {
                items: 1
            },
            640: {
                items: 2,
                nav: false
            },
            820: {
                items: 3,
                nav: true,
                margin: 20
            }
        }
    });

    $bigSliderProductCart.owlCarousel({
        margin: 10,
        responsiveClass: true,
        navText: ['',''],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1,
                nav: false
            },
            820: {
                items: 2,
                nav: true,
                margin: 20
            }
        }
    });

    $('.popup-with-contact').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

    $('.buy').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

    $smallThumbleSlider.owlCarousel( {
        loop: true,
        margin: 10,
        items: 4,
        nav: true,
        responsiveClass: true,
        autoplayTimeout: 2000,
        autoplay:true,
        navText: ['',''],
        responsive: {
            0: {
                items: 3
            },
            768: {
                items: 3,
                nav: false
            },
            820: {
                items: 3,
                nav: true,
                margin: 20
            }
        }
    });

    $thumbleGalerey.magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small></small>';
            }
        }
    });

    mobileHeadToggleButton.addEventListener('click', function () {
        mobileHead.classList.toggle('show-menu');
        body.classList.toggle('_noscroll');
    });

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
            mobileHead.classList.add('painted');
        }
        if (window.pageYOffset < 100 && mobileHead.classList.contains('painted')) {
            mobileHead.classList.remove('painted');
        }
    });

    dropDown.forEach(function (item) {
        item.addEventListener('click', function (event) {
            if (window.screen.width > 768) {
                event.preventDefault();
                dropItem.forEach(function (item) {
                    item.classList.remove('show');
                });
                this.querySelector('.drop-item').classList.add('show');
                this.querySelector('.drop-item').addEventListener('mouseleave', function () {
                    this.classList.remove('show');
                });
            }
        });
    });

    $('.js-name-equal').equalHeight();

    dropItem.forEach(function (item) {
        item.addEventListener('click', function (event) {
            console.log(this);
        });
    });

    dropDown.forEach(function (item) {
        item.addEventListener('click', function (event) {
            if (window.screen.width > 768) {
                event.preventDefault();
                dropItem.forEach(function (item) {
                    item.classList.remove('show');
                });
                this.querySelector('.drop-item').classList.add('show');
                this.querySelector('.drop-item').addEventListener('mouseleave', function () {
                    this.classList.remove('show');
                });
            }
        });
    });

    var firstPrice = parseInt(totalPrice.innerHTML);

    plusButton.addEventListener('click',function (e) {
        e.preventDefault();
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
        totalPrice.innerHTML = firstPrice * parseInt(counter.innerHTML);
    });

    minusButton.addEventListener('click',function (e) {
        e.preventDefault();
        if(parseInt(counter.innerHTML) > 0){
            counter.innerHTML = parseInt(counter.innerHTML) - 1;
            totalPrice.innerHTML = firstPrice * parseInt(counter.innerHTML);
        }
    });

})();
