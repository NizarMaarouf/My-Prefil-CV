let imageSelectors = document.querySelectorAll(".imageSelector");
let slides = document.getElementsByClassName("slider-img");

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(e) {
  showSlides((slideIndex += e));
}

function currentSlide(e) {
  console.log(imageSelectors);

  showSlides((slideIndex = e));
}

function showSlides(e) {
  if (e > slides.length) {
    slideIndex = 1;
  }
  if (e < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  imageSelectors[slideIndex - 1].checked = true;
  slides[slideIndex - 1].style.display = "block";
}
