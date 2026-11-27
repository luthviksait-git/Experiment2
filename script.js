
const form = document.getElementById("appointmentForm");
const message = document.getElementById("formMessage");
const dateInput = document.getElementById("date");

// Prevent selecting past dates
const today = new Date();
const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

dateInput.min = localDate;

// Form validation and submission
form.addEventListener("submit", function(event) {

    event.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    message.textContent =
        "Appointment booked successfully! Thank you.";

    message.style.color = "green";

    form.reset();

    dateInput.min = localDate;
});
