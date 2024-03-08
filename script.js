// JavaScript code

// Function to display a confirmation message when the contact form is submitted
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the form input values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Display a confirmation message
  alert('Thank you for your message, ' + name + '! We will get back to you soon.');
});

// Function to toggle mobile menu
document.getElementById('mobile-menu-toggle').addEventListener('click', function () {
  var navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
});
