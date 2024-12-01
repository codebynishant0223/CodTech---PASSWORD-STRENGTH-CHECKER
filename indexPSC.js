function checkPassword() {
    const password = document.getElementById("passwordInput").value;
  
    fetch("/check_password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    })
      .then((response) => response.json())
      .then((data) => {
        const strengthElement = document.getElementById("strength");
        const feedbackList = document.getElementById("feedback-list");
  
        // Display strength
        strengthElement.textContent = `Strength: ${data.strength}`;
        strengthElement.style.color =
          data.strength === "Strong Password"
            ? "green"
            : data.strength === "Medium Password"
            ? "orange"
            : "red";
  
        // Display feedback
        feedbackList.innerHTML = "";
        data.feedback.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          feedbackList.appendChild(li);
        });
      });
  }
  