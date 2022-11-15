
// Доделать автоматическое переключение слайдов с интвервалом в 2 секунды


let btnPrev = document.getElementById('btn-prev');
    btnNext = document.getElementById('btn-next');
    slides = document.querySelectorAll('.slide');
    dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = (n) => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}


const activeDot = (n) => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(index);
    activeDot(index);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}



dots.forEach((element, indexDot) => {
    element.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);

    })
});



btnNext.addEventListener('click', nextSlide); 
btnPrev.addEventListener('click', prevSlide); 






