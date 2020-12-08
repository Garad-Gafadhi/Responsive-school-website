let idx= 1;

function sliderTimer() {
    document.getElementById("slider").classList.remove(`slider-image-${idx}`);
    idx++;
    if(idx == 5) idx = 1;
    document.getElementById("slider").classList.add(`slider-image-${idx}`);
}

let slider= setInterval(sliderTimer, 5000);