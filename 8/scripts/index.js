var l=document.querySelector(".compare-slider__toggle"),e=document.querySelector(".compare-slider"),a=document.querySelector(".main-nav__toggle"),o=document.querySelector(".main-nav__list");if(l){let t=!1;l.addEventListener("click",()=>{t?(e.classList.toggle("compare-slider--after"),e.classList.toggle("compare-slider--before")):(t=!0,e.classList.add("compare-slider--after"))})}a.addEventListener("click",()=>{o.classList.toggle("main-nav__list--opened"),a.classList.toggle("main-nav__toggle--opened")});
