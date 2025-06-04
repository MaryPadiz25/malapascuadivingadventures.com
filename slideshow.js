
function showSlides(containerClass) {
    let index = 0;
    const slides = document.querySelectorAll(`.mySlides.${containerClass}`);
    slides.forEach(slide => slide.style.display = "block"); // Ensure initial visibility

    setInterval(() => {
        slides.forEach(slide => slide.style.display = "none");
        index++;
        if (index >= slides.length) { index = 0; }
        slides[index].style.display = "block";
    }, 2000);
}
showSlides('container1');
showSlides('container2');
showSlides('container3');
showSlides('container4');
showSlides('container5');
showSlides('container6');
showSlides('container7');
showSlides('container8');
showSlides('container9');
// Repeat for each container
