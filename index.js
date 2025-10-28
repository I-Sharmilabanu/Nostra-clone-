const sidenav = document.getElementById("sidenav");
const menuicon = document.getElementById("menuicon");
const closenav = document.getElementById("close-nav");


menuicon.addEventListener("click", function () {
  sidenav.style.left = "0";
});


closenav.addEventListener("click", function () {
  sidenav.style.left = "-50%";
});


let currentSlide = 0;
const slides = document.querySelectorAll("#slider li");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.add("hidden");
    if (i === index) {
      slide.classList.remove("hidden");
    }
  });
}

function next() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prev() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}


setInterval(() => {
  next();
}, 4000);


showSlide(currentSlide);



  const banner = document.getElementById('signup-banner');
    const closeBtn = document.getElementById('close-banner');

    closeBtn.addEventListener('click', () => {
        banner.style.display = 'none';
    });

    
  const hearts = document.querySelectorAll('svg[id^="heart"]');
  hearts.forEach(heart => {
    heart.addEventListener('click', () => {
      if (heart.getAttribute('fill') === 'red') {
        heart.setAttribute('fill', 'none');
      } else {
        heart.setAttribute('fill', 'red');
      }
    });
  });




  
  


  


  

