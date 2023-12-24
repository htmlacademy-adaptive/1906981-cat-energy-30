/* в этот файл добавляет скрипты*/

const compareSliderToggle = document.querySelector(".compare-slider__toggle");
const compareSlider = document.querySelector(".compare-slider");

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
