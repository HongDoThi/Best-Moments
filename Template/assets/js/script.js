var moments = {
    init: function() {
        this.menu();
        this.slide();

        this.autoslide();
        this.load();
        this.animation();
        this.menuRes();
    },
    load: function() {
        var load = document.querySelector('.load');

        function loading() {
            load.classList.add('loading');
        }
        setInterval(loading, 1000);
    },
    menu: function() {
        window.addEventListener('scroll', function() {
            var menu = document.querySelector('.header__nav');
            if (window.scrollY > 50) {
                menu.classList.add('fixed');

            } else {
                menu.classList.remove('fixed');
            }
        });
    },
    slide: function() {

        function auto() {
            const slides = document.querySelector('.slide__list');
            const dots = document.querySelectorAll('.dot');
            const slide__items = document.querySelectorAll('.slide__item');
            const next = document.getElementById('next');
            const prev = document.getElementById('prev');
            var index = 1;
            var size = slide__items[0].clientWidth;

            slides.style.transform = 'translateX(' + index * (-size) + 'px)';
            dots.forEach((item) => {
                item.addEventListener('click', () => {
                    if (item.id === 'next') {
                        index++;
                    }
                    if (item.id === 'prev') {
                        index--;
                    }
                    console.log(index);
                    slides.style.transition = 'transform 0.5s ease-in-out';
                    slides.style.transform = 'translateX(' + index * (-size) + 'px)';
                    item.classList.remove('active');
                    item[index].classList.add('active');
                })
            })

            slides.addEventListener('transitionend', () => {
                if (slide__items[index].id === 'lastslide') {
                    slides.style.transition = 'none';
                    index = slide__items.length - 2;
                    slides.style.transform = 'translateX(' + index * (-size) + 'px)';
                } else if (slide__items[index].id === 'firstslide') {
                    slides.style.transition = 'none';
                    index = slides__items.length - index;
                    slides.style.transform = 'translateX(' + index * (-size) + 'px)';
                }
            });

        }

        auto();








    },




    autoslide: function() {
        var slides = document.querySelector('.slides__auto');
        var slide__item = document.querySelectorAll('.slide__auto__item');

        const width = slide__item[0].clientWidth;

        var index = 0;

        function scrollLeft() {
            if (index == 0) {
                index = slide__item.length - 1;
            } else {
                index--;
            }
            slide__item[0].style.marginLeft = (-index * width) + 'px';
        }

        function scrollRight() {
            if (index == slide__item.length - 1) {
                index = 0;
            } else {
                index++;
            }

            slide__item[0].style.marginLeft = (-index * width) + 'px';
        }
        setInterval(scrollRight, 5000);

    },
    animation: function() {
        var heart = document.querySelector('.couple__heart__plus');
        var button1 = document.querySelector('a.button__wedding');
        var heartCountdown = document.querySelectorAll('ul.countdown li');
        var text = document.querySelector('.love__story h2.couple__section__title');
        var spanHeart = document.querySelector('.love__story span.heart');
        var figure__1 = document.querySelectorAll('.love__story__item figure:nth-child(1)');
        var figure__2 = document.querySelectorAll('.love__story__item figure:nth-child(2)');
        var gallery__top = document.querySelectorAll('.gallery__item .gallery__item__top');
        var gallery__bottom = document.querySelectorAll('.gallery__item .gallery__item__bottom');
        var blog__item = document.querySelectorAll('.blog__list .blog__item');
        var contact = document.querySelectorAll('.contact__info__detail');
        var status = 'open';

        window.addEventListener('scroll', function() {
            console.log(window.scrollY);
            if (this.window.scrollY > 900) {
                if (status == 'open') {
                    heart.classList.add('upDown');
                    button1.classList.add('upDown');
                    status = 'close';
                }
            }
            if (window.scrollY > 1700) {
                heartCountdown.forEach(function(item) {
                    item.classList.add('upDown');
                    status = 'close';
                });
            }

            if (window.scrollY > 2000) {
                text.classList.add('upDown');
                spanHeart.classList.add('upDown');
                status = 'close';
            }


            if (window.scrollY > 2590) {
                figure__1.forEach(function(item) {
                    item.classList.add('blockUpDown1');
                    status = 'close';
                });
            }
            if (window.scrollY > 3076) {
                figure__2.forEach(function(item) {
                    item.classList.add('blockUpDown2');
                    status = 'close';
                });
            }
            if (window.scrollY > 8900) {
                gallery__top.forEach(function(item) {
                    if (window.scrollY > 8900) {
                        item.classList.add('gallery1');
                    }
                })
            }
            if (window.scrollY > 9020) {
                gallery__bottom[1].classList.add('gallery1');
            }
            if (window.scrollY > 9090) {
                gallery__bottom[0].classList.add('gallery1');
                gallery__bottom[2].classList.add('gallery1');
            }

            blog__item.forEach(function(item) {
                if (window.scrollY > 10117) {
                    item.classList.add('gallery1');
                }
            });
            contact.forEach(function(item) {
                if (window.scrollY > 11252) {
                    item.classList.add('upDown__small');
                }
            });
        });

    },

    menuRes: function() {
        var iconBar = document.querySelector('.iconBar i');
        var nav = document.querySelector('.header__nav ul');
        var logo = document.querySelector('.header__logo');
        iconBar.addEventListener('click', function() {
            nav.classList.toggle('hien');
            logo.classList.toggle('hien');
        });

    }
}
moments.init();