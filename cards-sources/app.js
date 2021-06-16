
function slidesPlugin(activeSlide = 0) { // Если сюда не передается параметр, то он по умолчанию будет запускать 0-й элемент массива
    const slides = document.querySelectorAll('.slide');

    slides[activeSlide].classList.add('active');

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()

            slide.classList.add('active')
        })
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        })
    }    
}

slidesPlugin();