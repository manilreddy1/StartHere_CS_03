function checkPasswordStrength() {
    const password = document.getElementById("password").value;
    const feedback = document.getElementById("feedback");
    let strength = "Weak";
    let color = "red";
    let score = 0;

    // Check length
    if (password.length >= 8) {
        score += 25; // 25% for length
    }
    
    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
        score += 15; // 25% for uppercase letters
    }
    
    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
        score += 10; // 25% for lowercase letters
    }
    
    // Check for numbers
    if (/[0-9]/.test(password)) {
        score += 20; // 25% for numbers
    }

    // Check for special characters
    if (/[^A-Za-z0-9]/.test(password)) {
        score += 30; // 25% for special characters
    }

    // Determine strength based on score
    if (score === 100) {
        strength = "Very Strong";
        color = "green";
    } else if (score >= 50) {
        strength = "Moderate";
        color = "orange";
    } else {
        strength = "Weak";
        color = "red";
    }

    feedback.textContent = `Password Strength: ${strength} (${score}%)`;
    feedback.style.color = color;
}
