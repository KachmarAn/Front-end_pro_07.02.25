'use strict';

let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1000}],
        internal: [{name: 'Jack', salary: 1300}]
    }
};

function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((sum, employee) => sum + employee.salary, 0);
    } else {
        return Object.values(department).reduce((sum, subdep) => sum + sumSalaries(subdep), 0);
    }
}

console.log(sumSalaries(company));
