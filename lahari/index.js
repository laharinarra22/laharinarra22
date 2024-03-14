
let moreContent = document.getElementById('moreContent');
let button = document.getElementById('readMoreBtn');

button.addEventListener('click', function () {
    if (moreContent.style.display === 'none') {
        // Show the additional content
        moreContent.style.display = 'inline';
        button.textContent = 'Read Less';
    } else {
        // Hide the additional content
        moreContent.style.display = 'none';
        button.textContent = 'Read More';
    }
});

//  for myskill 

let slideIndex = 0;

function showSlide(index) {
    const slides = document.getElementsByClassName('carousel-inner')[0].children;
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

function prevSlide() {
    showSlide(--slideIndex);
}

function nextSlide() {
    showSlide(++slideIndex);
}

showSlide(slideIndex);

