document.addEventListener("DOMContentLoaded", () => {
    generateCaptcha(); // Generate captcha on page load

    const form = document.getElementById("form");
    const fields = [
        "name",
        "email",
        "phone",
        "dob",
        "gender",
        "address",
        "country",
        "city",
        "zipcode",
        "state",
        "company",
        "position",
        "experience",
        "skills",
        "password",
        "confirm_password",
        "captchaInput",
    ];

    // Attach validation to each field
    fields.forEach((field) => {
        const input = document.getElementById(field);
        input.addEventListener("blur", () => validateField(field));
    });

    form.addEventListener("submit", (e) => {
        let valid = true;

        // Validate all fields before submitting
        fields.forEach((field) => {
            if (!validateField(field)) {
                valid = false;
            }
        });

        if (!valid) {
            e.preventDefault(); // Prevent form submission if validation fails
        }
    });
});

function validateField(field) {
    const input = document.getElementById(field);
    const value = input.value.trim();
    let valid = true;

    // Validation rules
    switch (field) {
        case "name":
            if (value === "") {
                showError(input, "Name is required.");
                valid = false;
            } else {
                clearError(input);
            }
            break;

        case "email":
            if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                showError(input, "Please enter a valid email address.");
                valid = false;
            } else {
                clearError(input);
            }
            break;

        case "phone":
            if (!value.match(/^\d{10}$/)) {
                showError(input, "Please enter a valid 10-digit phone number.");
                valid = false;
            } else {
                clearError(input);
            }
            break;

        case "zipcode":
            if (!value.match(/^\d{5}$/)) {
                showError(input, "Please enter a valid 5-digit zip code.");
                valid = false;
            } else {
                clearError(input);
            }
            break;

        case "password":
            if (value.length < 8) {
                showError(input, "Password must be at least 8 characters long.");
                valid = false;
            } else {
                clearError(input);
            }
            break;

        case "confirm_password":
            const password = document.getElementById("password").value;
            if (value !== password) {
                showError(input, "Passwords do not match.");
                valid = false;
            } else {
                clearError(input);
            }
            break;

        case "captchaInput":
            if (value !== currentCaptcha) {
                showError(input, "Captcha is incorrect.");
                generateCaptcha(); // Regenerate captcha on failure
                valid = false;
            } else {
                clearError(input);
            }
            break;

        default:
            if (value === "") {
                showError(input, "This field is required.");
                valid = false;
            } else {
                clearError(input);
            }
            break;
    }

    return valid;
}

function showError(input, message) {
    const errorContainer = input.nextElementSibling;
    if (errorContainer && errorContainer.classList.contains("text-danger")) {
        errorContainer.textContent = message;
    } else {
        const errorMessage = document.createElement("small");
        errorMessage.className = "text-danger";
        errorMessage.textContent = message;
        input.parentElement.appendChild(errorMessage);
    }
    input.classList.add("is-invalid");
}

function clearError(input) {
    const errorContainer = input.nextElementSibling;
    if (errorContainer && errorContainer.classList.contains("text-danger")) {
        errorContainer.remove();
    }
    input.classList.remove("is-invalid");
}

let currentCaptcha = "";

function generateCaptcha() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    currentCaptcha = captcha;
    document.getElementById("generatedCaptcha").innerText = currentCaptcha;
}
