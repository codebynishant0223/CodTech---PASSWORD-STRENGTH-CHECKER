import re

def check_password_strength(password):
    """Assess the strength of a password and provide feedback."""
    feedback = []
    strength_score = 0

    # Length check
    if len(password) >= 8:
        strength_score += 1
    else:
        feedback.append("Password should be at least 8 characters long.")

    # Uppercase letter check
    if re.search(r'[A-Z]', password):
        strength_score += 1
    else:
        feedback.append("Include at least one uppercase letter.")

    # Lowercase letter check
    if re.search(r'[a-z]', password):
        strength_score += 1
    else:
        feedback.append("Include at least one lowercase letter.")

    # Digit check
    if re.search(r'\d', password):
        strength_score += 1
    else:
        feedback.append("Include at least one number.")

    # Special character check
    if re.search(r'[@$!%*?&#]', password):
        strength_score += 1
    else:
        feedback.append("Include at least one special character (e.g., @, $, %, etc.).")

    # Uniqueness check (at least 80% unique characters)
    unique_chars = len(set(password))
    if unique_chars >= len(password) * 0.8:
        strength_score += 1
    else:
        feedback.append("Use a variety of characters to make your password unique.")

    # Provide feedback
    if strength_score <= 2:
        return "Weak Password", feedback
    elif strength_score <= 4:
        return "Medium Password", feedback
    else:
        return "Strong Password", feedback

# Example usage
if __name__ == "__main__":
    print("Password Strength Checker")
    print("=========================\n")

    user_password = input("Enter your password: ")
    strength, suggestions = check_password_strength(user_password)

    print(f"\nPassword Strength: {strength}")
    if suggestions:
        print("Suggestions to improve your password:")
        for suggestion in suggestions:
            print(f" - {suggestion}")
