"use strict";
//template_8qjidqj
//service_5x17dw9
//gp6EdY0W2var1TvKE

// This function is called when the contact form is submitted (see onsubmit="contact(event)" in index.html).
function contact(event) {
  // Prevent the default form submission behavior, which would reload the page.
  event.preventDefault();

  // Select the loading spinner and success message overlay elements from the DOM.
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  // Make the loading spinner visible by adding the 'modal__overlay--visible' class.
  loading.classList.add("modal__overlay--visible");

  // Use the EmailJS library to send the form data without needing a backend server.
  emailjs
    .sendForm(
      "service_5x17dw9", // Your EmailJS Service ID
      "template_8qjidqj", // Your EmailJS Template ID
      event.target, // 'event.target' is the form element itself
      "gp6EdY0W2var1TvKE", // Your EmailJS Public Key
    )
    .then(() => {
      // This .then() block executes if the email is sent successfully.
      // Hide the loading spinner.
      loading.classList.remove("modal__overlay--visible");
      // Show the "success" message overlay.
      success.classList.add("modal__overlay--visible");
    })
    .catch(() => {
      // This .catch() block executes if there was an error sending the email.
      // Hide the loading spinner.
      loading.classList.remove("modal__overlay--visible");
      // Show an alert to the user informing them of the failure.
      alert(
        "The email service is temporarily unavailable. Please try me at prwscodingwsc@goodle.com",
      );
    });
}

let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}
