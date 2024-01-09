const compareSliderToggle = document.querySelector(".compare-slider__toggle");
const compareSlider = document.querySelector(".compare-slider");

const mainNavToggle = document.querySelector(".main-nav__toggle");
const mainNavList = document.querySelector(".main-nav__list");


/* SLIDER */
if (compareSliderToggle) {
  let flag = false;
  compareSliderToggle.addEventListener('click', ()=> {
    if (flag) {
      compareSlider.classList.toggle("compare-slider--after");
      compareSlider.classList.toggle("compare-slider--before");
    } else {
      flag = true;

      compareSlider.classList.add("compare-slider--after");
    }
  })
}


/* HEADER-MENU */
mainNavToggle.addEventListener('click', ()=> {
  mainNavList.classList.toggle("main-nav__list--opened");
  mainNavToggle.classList.toggle("main-nav__toggle--opened");
})
