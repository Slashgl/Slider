const upBTN = document.querySelector('.up-button');
const downBTN = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container');
const slidesCount = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0
const ClientHeight = container.clientHeight

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBTN.addEventListener('click', () => {
    changeSlider('up');
});

downBTN.addEventListener('click', () => {
    changeSlider('down');
});

function changeSlider(direction) {
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    }else if (direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    mainSlide.style.transform = `translateY(-${activeSlideIndex * ClientHeight}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * ClientHeight}px)`
}