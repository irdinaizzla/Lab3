let campusSlideIndex = 0;
showCampusSlides();

function showCampusSlides() {
    let slides = document.getElementsByClassName("campus fade");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    campusSlideIndex++; 
    if (campusSlideIndex > slides.length) {
        campusSlideIndex = 1;
    }

    slides[campusSlideIndex - 1].style.display = "block";

    setTimeout(showCampusSlides, 1500);
}

let hobbySlideIndex = 0;
showHobbySlides();

function showHobbySlides() {
    const hobbySlides = document.getElementsByClassName("hob fade");
    for (let i = 0; i < hobbySlides.length; i++) {
        hobbySlides[i].style.display = "none";
    }

    hobbySlideIndex++;
    if (hobbySlideIndex > hobbySlides.length) {
        hobbySlideIndex = 1;
    }

    hobbySlides[hobbySlideIndex - 1].style.display = "block";

    setTimeout(showHobbySlides, 2000); 
}