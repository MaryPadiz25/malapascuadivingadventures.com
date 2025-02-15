function showSlides(containerClass) {
    let index = 0;
    const slides = document.querySelectorAll(`.mySlides.${containerClass}`);
    setInterval(() => {
        slides.forEach((slide) => (slide.style.display = "none"));
        index++;
        if (index > slides.length) {index = 1}
        slides[index - 1].style.display = "block";
    }, 2000); 
}

showSlides('container1');
showSlides('container2');
showSlides('container3');
showSlides('container4');
showSlides('container5');
showSlides('container6');
showSlides('container7');


// Repeat for each container
