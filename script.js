const sliderContainer = document.querySelector('.slider-container');
const slideright = document.querySelector('.right-slide');
const sliderleft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideright.querySelectorAll('div').length;
const slideContainer = document.querySelector('.slider-container')
let activeSLide = 0;

sliderleft.style.top = `-${((slidesLength - 1) * 100)}vh`;

upButton.addEventListener('click',()=>changeSlide('up'))
downButton.addEventListener('click',()=>changeSlide('down'))

const changeSlide = (direction)=>{
    const sliderHeight = slideContainer.clientHeight;
    if(direction==='up'){
        activeSLide++;
        if (activeSLide > slidesLength - 1) {
            activeSLide = 0;
        }
        sliderleft.style.transform = `translateY(${(activeSLide * sliderHeight)}px)`;
        slideright.style.transform = `translateY(-${(activeSLide * sliderHeight)}px)`;
    }
    else if (direction==='down') {
        activeSLide--;
        if (activeSLide<0) {
            activeSLide = slidesLength -1
        }
        sliderleft.style.transform = `translateY(${(activeSLide * sliderHeight)}px)`;
        slideright.style.transform = `translateY(-${(activeSLide * sliderHeight)}px)`;

    }
}