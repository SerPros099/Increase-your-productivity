var dots = document.getElementsByClassName('section-main__dots-item');
for(var i = 0; i < dots.length; i++){
    dots[i].addEventListener('click', function(){
      // remove active class for all elements
      for(var i = 0; i < dots.length; i++) {
        dots[i].classList.remove('section-main__dots-item-active');
      }
      // add active to clicked element
      this.classList.add('section-main__dots-item-active');
    });
  }
var dots2 = document.getElementsByClassName('slider-dots__item');
for(var i = 0; i < dots2.length; i++){
    dots2[i].addEventListener('click', function(){
      // remove active class for all elements
      for(var i = 0; i < dots2.length; i++) {
        dots2[i].classList.remove('slider-dots__item-active');
      }
      // add active to clicked element
      this.classList.add('slider-dots__item-active');
    });
  }
  var dots2 = document.getElementsByClassName('slider-dots__item');
for(var i = 0; i < dots2.length; i++){
    dots2[i].addEventListener('click', function(){
      // remove active class for all elements
      for(var i = 0; i < dots2.length; i++) {
        dots2[i].classList.remove('slider-dots__item-active');
      }
      // add active to clicked element
      this.classList.add('slider-dots__item-active');
    });
  }
var dots3 = document.getElementsByClassName('section-quotes__slider-dots-item');
for(var i = 0; i < dots3.length; i++){
    dots3[i].addEventListener('click', function(){
      // remove active class for all elements
      for(var i = 0; i < dots3.length; i++) {
        dots3[i].classList.remove('section-quotes__slider-dots-item-active');
      }
      // add active to clicked element
      this.classList.add('section-quotes__slider-dots-item-active');
    });
  }