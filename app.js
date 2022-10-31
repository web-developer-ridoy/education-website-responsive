

var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
    el: ".swiper-pagination",
    clickable:true,
    },
    breakpoints: {
        540: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        1024: {
        slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".teacher_slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
    el: ".swiper-pagination",
    clickable:true,
    },
    breakpoints: {
        540: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        1024: {
        slidesPerView: 3,
        },
    },
});


var swiper = new Swiper(".review-sliders", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
    el: ".swiper-pagination",
    clickable:true,
    },
    breakpoints: {
        540: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        1024: {
        slidesPerView: 3,
        },
    },
});


const hamburger = document.querySelector(".hamburger");
const slide = document.getElementById("slide");

hamburger.addEventListener("click", function(){
    slide.classList.toggle("active");
    hamburger.classList.toggle("cross");
})


window.addEventListener("scroll", function(){
    slide.classList.remove("active");
    hamburger.classList.remove("cross");
})

