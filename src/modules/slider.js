import { getZero } from './timer'

function slider() {
    const elsSliderContent = document.querySelectorAll('.slider__content'),
    elSLiderCurrent = document.querySelector('.slider__current'),
    elSLiderTotal = document.querySelector('.slider__total'),
    elSliderPrevBtn = document.querySelector('.js-slider-prev'),
    elSliderNextBtn = document.querySelector('.js-slider-next'),
    elSliderWrapper = document.querySelector('.slider__content-wrapper'),
    elSliderField = document.querySelector('.slider__content-inner'),
    elSliderWrapperWidth = window.getComputedStyle(elSliderWrapper).width,
    elIndicators = document.createElement('ul');
    elIndicators.classList.add('slider__indicators')
    elSliderWrapper.append(elIndicators)
    
    elSliderField.style.width = 100 * elsSliderContent.length + '%'
    elsSliderContent.forEach(elSliderContent => {
        elSliderContent.style.width = elSliderWrapperWidth
    })
    
    elIndicators.innerHTML = renderIndicators()
    const elsDotsBtn = elIndicators.querySelectorAll('.slider__indicators-btn')
    
    let slideIndex = 0;
    
    showSlide(slideIndex)
    
    if (elSliderNextBtn) {
        elSliderNextBtn.addEventListener('click', () => {
            controlSlider(1)
        })
    }
    
    if (elSliderPrevBtn) {
        elSliderPrevBtn.addEventListener('click', () => {
            controlSlider(-1)
        })
    }
    
    elsDotsBtn.forEach((elDotsBtn) => {
        elDotsBtn.addEventListener('click', (evt) => {
            slideIndex = +evt.target.getAttribute('data-slide-to')
            showSlide(slideIndex)
        })
    })
    
    function renderIndicators() {
        let text = ``;
        for(let i =0; i < elsSliderContent.length; i++) {
            text += `<li class="slider__indicators-item"><button class="slider__indicators-btn" data-slide-to="${i}"></button></li>`
        }
        return text
    }
    
    function showSlide(idx) {
        elSliderField.style.transform = `translateX(-${+elSliderWrapperWidth.replace(/(r?em|px|\%)$/g, '') * idx}px)`
        changeInfo()
        changeIndicator()
    }
    
    function controlSlider(number) {
        slideIndex += number
        if(slideIndex > elsSliderContent.length - 1) {
            slideIndex = 0;
        }
        if(slideIndex < 0) {
            slideIndex = elsSliderContent.length - 1;
        }
        showSlide(slideIndex)
    }
    
    function changeInfo() {
        elSLiderTotal.textContent = getZero(elsSliderContent.length)
        elSLiderCurrent.textContent = getZero(slideIndex + 1)
    }
    
    function changeIndicator() {
        elsDotsBtn.forEach((elDotsBtn) => {
            elDotsBtn.style.opacity = '0.5'
            elsDotsBtn[slideIndex].style.opacity = '1';
        })
    }
}

export default slider;