function checkPassword() {
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (password.length === 0) {
        message.textContent = "Start typing to check password strength...";
        message.style.color = "#333";
        return;
    }

    if (password.length < 8) {
        message.textContent = "Weak: Password must be at least 8 characters long.";
        message.style.color = "red";
        return;
    }

    if (!/[0-9]/.test(password)) {
        message.textContent = "Weak: Password must include at least one number.";
        message.style.color = "red";
        return;
    }

    if (!/[A-Z]/.test(password)) {
        message.textContent = "Weak: Password must include at least one uppercase letter.";
        message.style.color = "red";
        return;
    }

    if (!/[a-z]/.test(password)) {
        message.textContent = "Weak: Password must include at least one lowercase letter.";
        message.style.color = "red";
        return;
    }

    if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) {
        message.textContent = "Medium: Add special characters to make your password stronger.";
        message.style.color = "orange";
        return;
    }

    message.textContent = "Strong: Your password is secure!";
    message.style.color = "green";
}
