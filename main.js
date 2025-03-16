'use strict';

const phoneBook = {
    contacts: [
        { name: "Alex", phone: "+380501234567", email: "Alex@example.com" },
        { name: "Alice", phone: "+380931112233", email: "Alice@example.com" }
    ],

   findContact: function (name) {
        let contact = this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        return contact ? contact : `Контакт з іменем "${name}" не знайдено.`;
    },

   addContact: function (name, phone, email) {
        this.contacts.push({ name, phone, email });
        console.log(`Контакт "${name}" успішно додано!`);
    }
};

console.log(phoneBook.findContact("Alice")); // Знайде контакт
phoneBook.addContact("Bob", "+380671234567", "Bob@example.com");
console.log(phoneBook.findContact("Bob")); // Виведе новий контакт
