document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get values
        const username = form.username.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value.trim();

        // Simple validation
        if (!username || !email || !password) {
            feedbackDiv.style.color = "red";
            feedbackDiv.textContent = "All fields are required!";
            return;
        }

        // Email validation regex
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) {
            feedbackDiv.style.color = "red";
            feedbackDiv.textContent = "Please enter a valid email address!";
            return;
        }

        // Success message
        feedbackDiv.style.color = "green";
        feedbackDiv.textContent = "Form submitted successfully!";

        // Clear form fields
        form.reset();
    });
});
