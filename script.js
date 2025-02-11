let carousel = document.querySelector(".carousel");
let allRadios = carousel.querySelectorAll(".carousel-radio");

let prevBtn = carousel.querySelector(".prev");
let nextBtn = carousel.querySelector(".next");

let allRadiosArray = [...allRadios];

const makeActive = index => allRadiosArray[index].checked = true;

function makeNextRadioActive() {
    let activeRadioIndex = allRadiosArray.findIndex(radio => radio.checked);
    let makeActiveIndex = activeRadioIndex + 1;
    if (makeActiveIndex >= allRadiosArray.length) {
        makeActiveIndex -= allRadiosArray.length;
    }
    makeActive(makeActiveIndex);
}

function makePrevRadioActive() {
    let activeRadioIndex = allRadiosArray.findIndex(radio => radio.checked);
    let makeActiveIndex = activeRadioIndex - 1;
    if (makeActiveIndex < 0) {
        makeActiveIndex += allRadiosArray.length;
    }
    makeActive(makeActiveIndex);
}

prevBtn.addEventListener("click", makePrevRadioActive);
nextBtn.addEventListener("click", makeNextRadioActive);
