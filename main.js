'use strict';

let isColored = false;

document.getElementById("toggleColorBtn").addEventListener("click", function() {
    let textElement = document.getElementById("text");

    if (isColored) {
        textElement.style.color = "#040404";
    } else {
        textElement.style.color = "#383cdd";
    }

    isColored = !isColored;
});