document.addEventListener("DOMContentLoaded", function () {
    var slideIndex = 1;
    showSlides(slideIndex);

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("hero__image-container");
        var indicators = document.getElementsByClassName("hero__indicator");

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < indicators.length; i++) {
            indicators[i].className = indicators[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        indicators[slideIndex - 1].className += " active";
    }

    // Cambiar automáticamente cada 5 segundos
    setInterval(function () {
        slideIndex++;
        if (slideIndex > document.getElementsByClassName("hero__image-container").length) {
            slideIndex = 1;
        }
        showSlides(slideIndex);
    }, 5000);

    // Agregar eventos de clic a los puntos indicadores
    var indicators = document.getElementsByClassName("hero__indicator");
    for (var i = 0; i < indicators.length; i++) {
        indicators[i].addEventListener("click", function () {
            var slideNumber = parseInt(this.getAttribute("onclick").match(/\d+/)[0]);
            currentSlide(slideNumber);
        });
    }
});
