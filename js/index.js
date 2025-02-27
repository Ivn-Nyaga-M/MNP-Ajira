// Preloader Functionality
$(window).on("load", function () {
    $(".preloader").delay(1500).animate(
        { opacity: "0" },
        1500,
        function () {
            $(this).css("display", "none");
            $("#content").fadeIn(); // Show the main content
        }
    );
});

$(document).ready(function () {
    let percentage = 0;
    let interval = setInterval(() => {
        percentage++;
        $("#loading-percentage").text(percentage + "%");

        if (percentage >= 100) {
            clearInterval(interval);
            $(".preloader").delay(500).animate(
                { opacity: "0" },
                1500,
                function () {
                    $(this).css("display", "none");
                    $("#content").fadeIn();
                }
            );
        }
    }, 15); // Adjust speed as needed
});


// Swiper.js Initialization
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

// Mobile Navigation Toggle
const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".main-menu");

navToggler.addEventListener("click", function () {
    navMenu.classList.toggle("open");
});

// Close Menu on Link Click (Optional)
const navLinks = document.querySelectorAll(".main-menu a");
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navMenu.classList.remove("open");
    });
});