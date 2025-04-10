// Initialize EmailJS with your CHITTIREDDI SAI
emailjs.init("CHITTIREDDI SAI"); // Replace with your EmailJS CHITTIREDDI SAI

// Handle form submission
document.getElementById("resume-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the user's email
  const userEmail = document.getElementById("user-email").value;

  // Send the email using EmailJS
  emailjs.send("CHITTIREDDI SAI", "template_cqf81oj", {
    to_email: userEmail,
  })
    .then(function () {
      // Display success message
      document.getElementById("response-message").textContent = "Resume sent successfully! Check your email.";
    })
    .catch(function (error) {
      // Display error message
      document.getElementById("response-message").textContent = "Failed to send resume. Please try again.";
    });
});