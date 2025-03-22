'use strict';

function showRandomImage() {
    let randomNumber = Math.floor(Math.random() * 9) + 1;
    let imagePath = `img/${randomNumber}.jpg`;
    document.getElementById("randomImage").src = imagePath;
}

showRandomImage();