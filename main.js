'use strict';

const container = document.getElementById('button-container');

container.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const buttonName = event.target.getAttribute('data-name');
        alert(`Ви натиснули: ${buttonName}`);
        console.log(`Ви натиснули: ${buttonName}`)
    }
});
