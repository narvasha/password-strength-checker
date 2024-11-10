// Password strength function
function strength(password) {
    let score = 0;
    // Check for length
    if (password.length >= 8) score++;
    // Check for uppercase letter
    if (/[A-Z]/.test(password)) score++;
    // Check for number
    if (/[0-9]/.test(password)) score++;
    // Check for special characters
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
}

let container = document.querySelector(".container");
let strengthBar = document.getElementById("strengthBar");
let strengthLabel = document.getElementById("strengthLabel");

document.addEventListener("keyup", function(e) {
    let password = document.querySelector("#YourPassword").value;
    let score = strength(password);

    // Update the password strength bar and label
    if (score <= 1) {
        container.classList.add("weak");
        container.classList.remove("moderate", "strong");
        strengthBar.className = "strength-bar weak";
        strengthLabel.textContent = "Password Strength: Weak";
    } else if (score === 2) {
        container.classList.remove("weak", "strong");
        container.classList.add("moderate");
        strengthBar.className = "strength-bar moderate";
        strengthLabel.textContent = "Password Strength: Moderate";
    } else if (score >= 3) {
        container.classList.remove("weak", "moderate");
        container.classList.add("strong");
        strengthBar.className = "strength-bar strong";
        strengthLabel.textContent = "Password Strength: Strong";
    }
});

// Toggle show/hide password functionality
let passwordInput = document.querySelector("#YourPassword");
let showButton = document.querySelector(".show");

showButton.onclick = function() {
    if (passwordInput.type === "password") {
        passwordInput.setAttribute("type", "text");
        //showButton.classList.add("hide");
    } else {
        passwordInput.setAttribute("type", "password");
        showButton.classList.remove("hide");
    }
};
