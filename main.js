'use strict';

let user = {
    name: 'John',
    age: 30,
    location: 'Ukraine, Kyiv',
    email: 'john@gmail.com',

info: function () {
    console.log (`Name: ${user.name}`);
    console.log (`Age: ${user.age}`);
    console.log (`Location: ${user.location}`);
    console.log (`Email: ${user.email}`);
     }
}

user.info ();
