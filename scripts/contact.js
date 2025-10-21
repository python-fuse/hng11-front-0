const errorParagraphs = document.querySelectorAll(".error-message");

const inputs = document.querySelectorAll("input");

// Implement form validation
function validateForm() {
  let isValid = true;

  errorParagraphs.forEach((para) => {
    para.textContent = "";
  });

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      const errorPara = document.querySelector(
        `[data-testid="test-contact-error-${input.name}"]`
      );
      errorPara.textContent = `${
        input.name.charAt(0).toUpperCase() + input.name.slice(1)
      } required`;
      isValid = false;
    } else if (input.name === "email") {
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(input.value.trim())) {
        const errorPara = document.querySelector(
          `[data-testid="test-contact-error-email"]`
        );
        errorPara.textContent = "Valid email required";
        isValid = false;
      }
    }
  });

  return isValid;
}

const contactForm = document.getElementById("contact-form");

const successMessage = document.getElementById("success-message-container");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validateForm()) {
    successMessage.classList.add("show");
    contactForm.reset();
  }
});
