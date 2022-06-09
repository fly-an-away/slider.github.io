let swiperCont = document.querySelector('.swiper');
let swiperWrapper = document.querySelector('.swiper-wrapper');
let swiperSlide = document.querySelector('.swiper-slide');
let swiperPag = document.querySelector('.swiper-pagination');

const swiper = new Swiper('.swiper-container', {
    sliderPerView: 1,
    spaceBetween: 10,
    loop: false,
    width: 240,
    slideClass: 'card',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    if (window.innerWidth >= 768) {
    swiper.destroy();
    swiperCont.classList.remove('swiper');
    swiperWrapper.classList.remove('swiper-wrapper');
    swiperPag.classList.add('hidden');
    let elements = document.querySelectorAll('.swiper-slide');
    for (let i=0; i < elements.length; i++) {
        let element = elements[i];
        element.classList.remove('swiper-slide');
    };
};

showAll.onclick = function() {
    
    let wrapper  = document.querySelector('.wrapper');
    let cards = document.querySelector('.cards');

    if (showAll.classList.contains('show')) {
        if (window.innerWidth >= 768 && 1015 >= window.innerWidth) {
            cards.classList.add('section-middle');
        wrapper.classList.add('wrapper-middle');
        showAll.classList.remove('show');
        showAll.classList.add('hide');
        } else {
            cards.classList.add('section-desk');
        wrapper.classList.add('wrapper-desk');
        showAll.classList.remove('show');
        showAll.classList.add('hide');
        };
    } else {
        if (window.innerWidth >= 768 && 1015 >= window.innerWidth) {
            cards.classList.remove('section-middle');
            wrapper.classList.remove('wrapper-middle');
            showAll.classList.remove('hide');
            showAll.classList.add('show');
        } else {
            cards.classList.remove('section-desk');
            wrapper.classList.remove('wrapper-desk');
            showAll.classList.remove('hide');
            showAll.classList.add('show');
        };
    };  
};

window.addEventListener("resize", function(){
    window.location.reload();
});
