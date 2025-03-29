'use strict';

function showFormError(selectorName, errorMessage) {
    document.querySelector(`#error-${selectorName}`).textContent = errorMessage;
}

document.getElementById("regForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name").trim();
    const msg = formData.get("msg").trim();
    const phone = formData.get("phone").trim();
    const email = formData.get("email").trim();

    let hasError = false;

    if (!name || name.length < 3) {
        showFormError("name", "Name required (min. 3 characters)!");
        hasError = true;
    } else {
        showFormError("name", "");
    }

    if (!msg || msg.length < 5) {
        showFormError("msg", "Message must be at least 5 characters!");
        hasError = true;
    } else {
        showFormError("msg", "");
    }

    const phoneRegex = /^\+380\d{9}$/;
    if (!phone) {
        showFormError("phone", "Phone number required!");
        hasError = true;
    } else if (!phoneRegex.test(phone)) {
        showFormError("phone", "Phone must start with +380 and have 9 digits!");
        hasError = true;
    } else {
        showFormError("phone", "");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        showFormError("email", "Email required!");
        hasError = true;
    } else if (!emailRegex.test(email)) {
        showFormError("email", "Invalid email format!");
        hasError = true;
    } else {
        showFormError("email", "");
    }

    if (!hasError) {
        console.log("✅ Form submitted with data:");
        console.log("Name:", name);
        console.log("Message:", msg);
        console.log("Phone:", phone);
        console.log("Email:", email);
    }
});