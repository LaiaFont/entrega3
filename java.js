window.onload = function () {
    var slideIndex = 1;
    showSlides(slideIndex);

    document.getElementsByClassName("galeria_prev")[0].onclick = function(){plusSlides(-1)};
    document.getElementsByClassName("galeria_next")[0].onclick = function(){plusSlides(1)};
    let dots = document.querySelectorAll("galeria_dot");
    for (let i=0; i<dots.length; i++) {
        document.getElementsByClassName("galeria_dot").onclick = currentSlide(i);
    }
    
    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("galeria_slide");
        var dots = document.getElementsByClassName("galeria_dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }
}