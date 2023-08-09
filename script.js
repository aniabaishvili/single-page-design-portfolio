document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = slider.querySelectorAll('div');
    const prevBtn = document.querySelector('.left');
    const nextBtn = document.querySelector('.right');
    let currentIndex = 0;
  
    nextBtn.addEventListener('click', () => {
           
        if (currentIndex < slides.length - 1) {
        currentIndex++; 
        updateSlider();
        slider.style.transition = 'transform 0.4s ease-in-out';
      }
    });
  
    prevBtn.addEventListener('click', () => {
        
        if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
        slider.style.transition = 'transform 0.4s ease-in-out';
      }
    });
  
    function updateSlider() {
      const offset = -currentIndex * slides[0].clientWidth;
      slider.style.transform = `translateX(${offset}px)`;
    }
  });
  
