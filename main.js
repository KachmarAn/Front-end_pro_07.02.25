'use strict';

function pythagorasTable(size) {
    let table = document.getElementById("multiplication");
    for (let i = 0; i <= size; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j <= size; j++) {
            let cell;
            if (i === 0 && j === 0) {
                cell = document.createElement("th");
                cell.textContent = "×";
            } else if (i === 0) {
                cell = document.createElement("th");
                cell.textContent = j;
            } else if (j === 0) {
                cell = document.createElement("th");
                cell.textContent = i;
            } else {
                cell = document.createElement("td");
                cell.textContent = i * j;
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

pythagorasTable(10);