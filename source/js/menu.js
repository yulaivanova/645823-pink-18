var navMain=document.querySelector(".site-nav"),navToggle=document.querySelector(".site-nav__toggle");navMain.classList.remove("site-nav--nojs"),navToggle.addEventListener("click",function(){navMain.classList.contains("site-nav--closed")?(navMain.classList.remove("site-nav--closed"),navMain.classList.add("site-nav--opened")):(navMain.classList.add("site-nav--closed"),navMain.classList.remove("site-nav--opened"))});